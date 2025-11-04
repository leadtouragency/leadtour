import { Provider } from "@/components/ui/provider";
import { Accordion, Span } from "@chakra-ui/react";

const SingleAccordion = ({ data }) => {
  return (
    <Provider>
      <Accordion.Root collapsible>
        {data?.map((item, index) => (
          <Accordion.Item key={index} value={item?.sual}>
            <Accordion.ItemTrigger>
              <Span className="mt-2 text-[--colorBlue]" flex="1">
                {item?.sual}
              </Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody className="text-[--colorBlue]">
                {item?.cavab}
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Provider>
  );
};

export default SingleAccordion;
