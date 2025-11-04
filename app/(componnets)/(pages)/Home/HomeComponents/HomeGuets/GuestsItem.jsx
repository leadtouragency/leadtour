import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const GuestsItem = ({ item }) => {
  return (
    <div className="w-full overflow-hidden rounded-3xl relative group">
      <Image
        src={`${process.env.NEXT_PUBLIC_PICTURE}/${item?.image}`}
        alt="Guest testimonial"
        className="w-full h-[650px] 2xl:h-[450px] rounded-3xl "
        width={1000}
        height={650}
      />

      <img
        src="/fakedata/guests/background.png"
        alt="background"
        className="absolute top-0 left-0 right-0 w-full h-full rounded-3xl"
      />
      <span
        className="play-button absolute cursor-pointer top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-5xl text-[--colorWhite] transition-transform duration-300 group-hover:scale-125"
        data-videolink={item?.video_link}
      >
        <FaPlay />
      </span>
    </div>
  );
};

export default GuestsItem;
