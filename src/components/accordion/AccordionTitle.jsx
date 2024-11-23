import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

function AccordionTitle({ children }) {
  const { toggleItem } = useAccordionContext();
  const id = useAccordionItemContext();

  return (
    <h3 onClick={() => toggleItem(id)} className="accordion-item-title">
        {children}
      </h3>
  )
}

export default AccordionTitle;