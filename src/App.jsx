import Accordion from "./components/accordion/Accordion";
import AccordionItem from "./components/accordion/AccordionItem";

function App() {
  return (
    <>
      <main>
        <h1>Why work with us?</h1>
        <Accordion className="accordion">
          <Accordion.Item id="exp" className="accordion-item">
            <Accordion.Title>
              We got 20 years of experience
            </Accordion.Title>
            <Accordion.Content>
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  We are in the business of olanning highly individualized
                  vacation trips for more than 20 years.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="local-guides" className="accordion-item">
            <Accordion.Title>
              We're working with local guides
            </Accordion.Title>
            <Accordion.Content>
              <article>
                <p>We are not doing this along from our offices.</p>
                <p>
                  Instead, we are working with local guides to ensure a safe and
                  pleasant vacation.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </main>
    </>
  );
}

export default App;
