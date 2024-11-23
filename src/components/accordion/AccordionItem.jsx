import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

function AccordionItem({ id, className, children }) {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}

export default AccordionItem;

export function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error(
      "components using useAccordionContext hook must be wrapped by <Accordion.Item> component"
    );    
  }

  return context;
}
