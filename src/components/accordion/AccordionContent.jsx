import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

function AccordionContent({ children }) {
  const { openItemId } = useAccordionContext();
  const id = useAccordionItemContext();

  const isOpen = openItemId === id;

  return (
    <div className={`accordion-item-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
  )
}

export default AccordionContent;