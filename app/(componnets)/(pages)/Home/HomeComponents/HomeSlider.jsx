import SharedSlider from "./FirstSlider/SharedSlider";
import SliderContent from "./FirstSlider/SliderContent";

const HomeSlider = ({ data_slayder, tr, code }) => {
  return (
    <section className="relative rounded-3xl overflow-hidden">
      <SharedSlider>
        {data_slayder &&
          data_slayder?.map((item) => (
            <SliderContent
              tr={tr}
              key={item?.id || i}
              item={item}
              code={code}
            />
          ))}
      </SharedSlider>
    </section>
  );
};

export default HomeSlider;
