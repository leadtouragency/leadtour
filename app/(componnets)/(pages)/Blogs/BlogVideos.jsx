"use client";

import ManualModal from "../../Shared/Modal/Moda";
import { useVideoModal } from "../../Shared/Modal/useVideoModal";

import SharedgridComponent from "../../Shared/SharedGridComponent/SharedgridComponent";
const BlogVideos = ({
  src,
  alt1,
  alt2,
  h2text,
  ptext,
  link,
  btnText,
  myClassDiv,
  myClassSrc1,
  src2,
  alt3,
  imgClass,
  video1,
  src3,
  alt4,
  imgClass2,
  video2,
}) => {
  const { isModalOpen, handleCloseModal, currentVideoUrl, containerRef } =
    useVideoModal();
  return (
    <>
      <div
        ref={containerRef}
        className="grid grid-cols-12 gap-6  w-full mt-16 mb-16"
      >
        <SharedgridComponent
          src={src}
          alt1={alt1}
          alt2={alt2}
          h2text={h2text}
          ptext={ptext}
          link={`${link}`}
          btnText={btnText}
          myClassDiv={myClassDiv}
          myClassSrc1={myClassSrc1}
          src2={src2}
          alt3={alt3}
          imgClass={imgClass}
          video1={video1}
          src3={src3}
          alt4={alt4}
          imgClass2={imgClass2}
          video2={video2}
        />
      </div>
      <ManualModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoUrl={currentVideoUrl}
      />
    </>
  );
};

export default BlogVideos;
