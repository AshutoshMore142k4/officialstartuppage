import { useEffect, useState } from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { ORG_ID, breadcrumbs, webPage } from '@/lib/seo';
import { cn } from '@/lib/utils';

// Content is sourced from each product's own README / site — keep it in sync when they change.
const nav = [
  { id: 'overview', label: 'Overview' },
  {
    id: 'codereportcard',
    label: 'CodeReportCard',
    children: [
      { id: 'crc-quick-start', label: 'Quick start' },
      { id: 'crc-usage', label: 'Usage' },
      { id: 'crc-scoring', label: 'Scoring' },
      { id: 'crc-configuration', label: 'Configuration' },
      { id: 'crc-ci', label: 'CI and pre-commit' },
    ],
  },
  { id: 'pebble-mk1', label: 'Pebble mk1' },
  { id: 'grindsde', label: 'GrindSDE' },
  { id: 'support', label: 'Support' },
];

const allIds = nav.flatMap((n) => [n.id, ...(n.children?.map((c) => c.id) ?? [])]);

const flags = [
  ['codereportcard <path>', 'Scan a project (use . for the current directory)'],
  ['--json', 'JSON output (for CI/CD)'],
  ['--verbose', 'Per-file issue breakdown'],
  ['--share', 'Export a shareable PNG report card'],
  ['--share --output report.png', 'Custom PNG output path'],
  ['--no-roast', 'Disable the summary roast'],
  ['--fail-under <n>', 'CI mode — exit with code 1 if the score is below the threshold'],
  ['--diff <branch>', 'Only scan files changed vs a branch'],
  ['--staged', 'Only scan staged files (pre-commit hook)'],
  ['init', 'Generate a config file'],
];

const CONFIG = `// vibecheck.config.js
export default {
  // Additional glob patterns to exclude
  exclude: ['**/generated/**', '**/migrations/**'],

  // Per-rule overrides
  rules: {
    'file-too-long': { limit: 400, severity: 'warning' },
    'high-complexity': { limit: 15, severity: 'error' },
  },

  // Per-category minimum score thresholds (CI fails if below)
  thresholds: { secretLeakage: 100, clarity: 80 },

  // Overall score threshold — exit code 1 if below
  failUnder: 70,

  // Category weight overrides (auto-normalized to sum to 1.0)
  weights: { clarity: 0.25, duplication: 0.15, deadCode: 0.2, secretLeakage: 0.25, aiSlop: 0.15 },
};`;

const WORKFLOW = `# .github/workflows/code-quality.yml
name: Code quality
on: [push, pull_request]
jobs:
  report-card:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npx codereportcard . --fail-under 75 --json`;

function useActiveSection() {
  const [active, setActive] = useState(allIds[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      // A heading counts as current once it's in the upper third, below the header pill.
      { rootMargin: '-80px 0px -66% 0px' },
    );
    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

function SidebarLink({ id, label, active, nested }: { id: string; label: string; active: boolean; nested?: boolean }) {
  return (
    <a
      href={`#${id}`}
      aria-current={active ? 'location' : undefined}
      className={cn(
        'block rounded-md py-1.5 text-sm transition-colors',
        nested ? 'pl-6 pr-3' : 'px-3',
        active ? 'bg-muted font-medium text-foreground' : 'text-muted-foreground hover:text-foreground',
      )}
    >
      {label}
    </a>
  );
}

export default function Docs() {
  const active = useActiveSection();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Docs: CodeReportCard CLI, Pebble mk1 & GrindSDE"
        description="Documentation for 11Startups products: install and configure the CodeReportCard CLI, set up CI and pre-commit checks, and use Pebble mk1 and GrindSDE."
        canonical="/docs"
        ogType="article"
        jsonLd={[
          webPage('TechArticle', '/docs', 'Product docs', 'Setup and usage guides for CodeReportCard, Pebble mk1 and GrindSDE.', {
            headline: 'Product docs',
            dateModified: __BUILD_DATE__,
            author: { '@id': ORG_ID },
          }),
          breadcrumbs('/docs', 'Docs'),
        ]}
      />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20">
        <p className="mb-3 text-eyebrow uppercase text-muted-foreground">Documentation</p>
        <h1 className="mb-4 text-title text-foreground">Product docs</h1>
        <p className="mb-10 max-w-2xl text-lg text-muted-foreground md:mb-14">
          Setup and usage guides for the products built and maintained by 11Startups.
        </p>

        {/* Mobile: section chips. Desktop gets the sticky sidebar instead. */}
        <nav aria-label="Documentation sections" className="-mx-4 mb-10 overflow-x-auto px-4 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
          <ul className="flex gap-2">
            {nav.map((n) => (
              <li key={n.id} className="shrink-0">
                <a
                  href={`#${n.id}`}
                  className="inline-flex min-h-10 items-center rounded-full border border-border px-4 text-sm text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:grid lg:grid-cols-[13rem_1fr] lg:gap-14">
          <aside className="hidden lg:block">
            <nav aria-label="Documentation sections" className="sticky top-24">
              <ul className="space-y-0.5">
                {nav.map((n) => (
                  <li key={n.id}>
                    <SidebarLink id={n.id} label={n.label} active={active === n.id} />
                    {n.children && (
                      <ul className="mt-0.5 space-y-0.5">
                        {n.children.map((c) => (
                          <li key={c.id}>
                            <SidebarLink id={c.id} label={c.label} active={active === c.id} nested />
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="prose prose-neutral min-w-0 max-w-3xl dark:prose-invert prose-headings:scroll-mt-24 prose-headings:font-normal prose-h2:text-heading prose-h3:font-medium prose-a:text-foreground prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-xl">
            <h2 id="overview">Overview</h2>
            <p>
              These guides cover installing and using our products. Each one also has its own site, linked in its
              section.
            </p>
            <ul>
              <li>
                <a href="#codereportcard">CodeReportCard</a>: a command-line report card for code quality.
              </li>
              <li>
                <a href="#pebble-mk1">Pebble mk1</a>: an interactive lab that trains a small (100k-parameter) language model on your own machine, in the browser. It walks through how language
                models are built.
              </li>
              <li>
                <a href="#grindsde">GrindSDE</a>: interview-prep problem sets with C++ solutions.
              </li>
            </ul>

            <h2 id="codereportcard">CodeReportCard</h2>
            <p>
              A zero-config code quality report card for React, JavaScript and TypeScript projects. It scores your
              codebase across five categories and prints an overall grade, with an optional summary roast. Requires
              Node.js 18 or later; MIT licensed.{' '}
              <a href="https://www.npmjs.com/package/codereportcard" target="_blank" rel="noopener noreferrer">
                npm
              </a>{' '}
              ·{' '}
              <a href="https://github.com/AshutoshMore142k4/codereportcard" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>

            <h3 id="crc-quick-start">Quick start</h3>
            <pre>
              <code>{`# Run without installing\nnpx codereportcard .\n\n# Or install globally\nnpm install -g codereportcard\ncodereportcard ./my-project`}</code>
            </pre>

            <h3 id="crc-usage">Usage</h3>
            <table>
              <thead>
                <tr>
                  <th>Command / flag</th>
                  <th>What it does</th>
                </tr>
              </thead>
              <tbody>
                {flags.map(([flag, desc]) => (
                  <tr key={flag}>
                    <td className="whitespace-nowrap">
                      <code>{flag}</code>
                    </td>
                    <td>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              An auto-fix mode (<code>--fix</code>) is listed in the README as coming soon.
            </p>

            <h3 id="crc-scoring">Scoring</h3>
            <p>
              Your codebase is scored across five categories: <strong>Clarity</strong>, <strong>Duplication</strong>,{' '}
              <strong>Dead Code</strong>, <strong>Secrets</strong> and <strong>AI Slop</strong>. Each is weighted equally
              at 20% by default; change the balance with <code>weights</code> in your config.
            </p>

            <h3 id="crc-configuration">Configuration</h3>
            <p>
              Run <code>codereportcard init</code> to generate a config file. Configuration is read from{' '}
              <code>vibecheck.config.js</code> or <code>vibecheck.config.mjs</code>, <code>.vibecheckrc.json</code>, or a{' '}
              <code>"vibecheck"</code> key in <code>package.json</code>.
            </p>
            <pre>
              <code>{CONFIG}</code>
            </pre>

            <h3 id="crc-ci">CI and pre-commit</h3>
            <p>
              Fail a build when quality drops below a threshold with <code>--fail-under</code>. Combine it with{' '}
              <code>--json</code> for machine-readable output:
            </p>
            <pre>
              <code>{WORKFLOW}</code>
            </pre>
            <p>
              As a pre-commit hook (for example with husky), scan only the staged files:
            </p>
            <pre>
              <code>npx codereportcard . --staged --fail-under 70</code>
            </pre>

            <h2 id="pebble-mk1">Pebble mk1</h2>
            <p>
              An interactive lab that builds and trains a language model step by step, entirely on your own machine and
              in your browser. It runs on the CPU, so there's nothing to install and no GPU required. The app itself is
              titled &ldquo;How LLMs Work&rdquo;.{' '}
              <a href="https://how-llms-work.scalable-api-free.workers.dev/chatbot" target="_blank" rel="noopener noreferrer">
                Open Pebble mk1
              </a>
            </p>
            <ol>
              <li>
                <strong>Before neural nets</strong>: a simple pattern-matching chat, with no AI.
              </li>
              <li>
                <strong>Inside a transformer</strong>: tokenizer, encoding and decoding, training embeddings, a XOR
                neural net (the feed-forward layer), softmax, and finally training a full transformer.
              </li>
              <li>
                <strong>Putting it to work</strong>: a tiny Qwen-style chat model, built and trained from scratch.
              </li>
            </ol>
            <p>
              In the chatbot, your first message trains the model, which takes about a minute. Sampling settings
              (temperature, top-p), training epochs and thread count are adjustable below the chat box. A CPU / GPU
              guide explains what your machine can run.
            </p>

            <h2 id="grindsde">GrindSDE</h2>
            <p>
              The NeetCode 150 and Striver's SDE Sheet in one place: 341 problems with C++ solutions, organized by
              pattern and difficulty.{' '}
              <a href="https://grindsde.app/" target="_blank" rel="noopener noreferrer">
                Open GrindSDE
              </a>
            </p>
            <ul>
              <li>
                <strong>NeetCode / Striver</strong>: browse each sheet by pattern and difficulty.
              </li>
              <li>
                <strong>Templates</strong>: battle-tested templates for common patterns.
              </li>
              <li>
                <strong>Mapper</strong>: map a LeetCode problem to its pattern.
              </li>
              <li>
                <strong>Compare</strong>: side-by-side algorithm comparisons.
              </li>
              <li>
                <strong>System Design</strong> and a <strong>Cheatsheet</strong> for quick review.
              </li>
            </ul>

            <h2 id="support">Support</h2>
            <p>
              Questions or issues? Email <a href="mailto:founder.ashutoshm@11startups.tech">founder.ashutoshm@11startups.tech</a> or{' '}
              <a href="https://cal.com/ash-28uynq/30min" target="_blank" rel="noopener noreferrer">
                book a call
              </a>
              . For CodeReportCard bugs, open an issue on{' '}
              <a href="https://github.com/AshutoshMore142k4/codereportcard" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              .
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
