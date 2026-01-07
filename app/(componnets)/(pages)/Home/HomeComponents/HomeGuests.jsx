"use client";
import ManualModal from "@/app/(componnets)/Shared/Modal/Moda";
import GuestsItem from "./HomeGuets/GuestsItem";
import SharedGuests from "./HomeGuets/SharedGuests";
import { useVideoModal } from "@/app/(componnets)/Shared/Modal/useVideoModal";

const HomeGuests = ({ recommed, what_our_guests_says }) => {
  const { isModalOpen, handleCloseModal, currentVideoUrl, containerRef } =
    useVideoModal();

  return (
    <section
      className="mt-8 mb-20 lg:mb-10 2xl:mt-6 lg:mt-12"
      ref={containerRef}
    >
      <h3 className="text-[--colorOrange] text-center text-5xl 2xl:text-4xl lg:text-3xl mb-12">
        {what_our_guests_says}
      </h3>
      <SharedGuests>
        {recommed &&
          recommed?.map((cur, i) => (
            <GuestsItem key={cur?.id || i} item={cur} />
          ))}
      </SharedGuests>

      <ManualModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoUrl={currentVideoUrl}
      />
    </section>
  );
};

export default HomeGuests;
