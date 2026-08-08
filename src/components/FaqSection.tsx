import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqs } from '@/data/faqs';

export function FaqSection() {
  return (
    <section id="faq" className="border-b border-border py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">FAQ</p>
          <h2 className="text-3xl text-foreground md:text-5xl">Frequently asked questions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything else, we'll cover on the call.
          </p>
        </div>

        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
