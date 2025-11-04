"use client";

import ManualModal from "../../Shared/Modal/Moda";
import { useVideoModal } from "../../Shared/Modal/useVideoModal";
import SharedgridComponent from "../../Shared/SharedGridComponent/SharedgridComponent";

const BlogSingleMap = ({
  map,
  img,
  video,
  looking_for_something,
  looking_for_something_long,
  looking_for_something_link_text,
}) => {
  const { isModalOpen, handleCloseModal, currentVideoUrl, containerRef } =
    useVideoModal();
  return (
    <>
      <div ref={containerRef} className="grid grid-cols-12 gap-4 mt-10">
        <SharedgridComponent
          src={`/fakedata/blogs/blog/video/small0.png`}
          alt1={`picture8`}
          alt2={"after"}
          h2text={looking_for_something}
          ptext={looking_for_something_long}
          link={``}
          btnText={looking_for_something_link_text}
          myClassDiv="h-[350px] relative 2xl:h-[300px] xl:h-[250px]"
          myClassSrc1="absolute bottom-0 left-0 right-0 w-full h-[200px]"
          src2={img}
          alt3={"small"}
          imgClass="h-[350px] object-cover 2xl:h-[300px] xl:h-[250px]"
          video1={video}
          src3={""}
          iframe={map}
          alt4={``}
          imgClass2={``}
          video2={``}
          iframeClass="w-full h-full lg:h-[400px] rounded-xl"
        />
        <ManualModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          videoUrl={currentVideoUrl}
        />
      </div>
    </>
  );
};

export default BlogSingleMap;
