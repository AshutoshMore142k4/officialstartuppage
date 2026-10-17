// Single source of truth: the header dropdown imports this too.
// `image` is optional; cards without one render a placeholder tile.
export const products = [
  {
    name: 'CodeReportCard',
    description: 'An npm package that grades your codebase and gives you a shareable report card.',
    href: 'https://www.npmjs.com/package/codereportcard',
    image: '/products/codereportcard.webp',
    stat: '324+ downloads',
  },
  {
    name: 'Pebble mk1 (100k Params)',
    description: 'Train a tiny Qwen-style language model from scratch on your own CPU, right in the browser, then chat with it.',
    href: 'https://how-llms-work.scalable-api-free.workers.dev/chatbot',
    image: '/products/how-llms-work.webp',
    stat: 'AI Research Lab',
  },
  {
    name: 'GrindSDE',
    description: 'NeetCode 150 and Striver SDE Sheet: 341 problems with C++ solutions, templates and comparisons.',
    href: 'https://grindsde.app/',
    image: '/products/grindsde.webp',
    stat: '341 problems',
  },
] as { name: string; description: string; href: string; image?: string; stat?: string }[];
