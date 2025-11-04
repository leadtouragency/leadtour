// app/(components)/Modal/ManualModal.js  (Or adjust path as needed)
"use client"; // This component needs client-side interaction for closing

import { useEffect } from "react";
import { CgClose } from "react-icons/cg";

// Helper function to convert YouTube watch URL to embed URL
const getEmbedUrl = (url) => {
  if (!url) return "";
  try {
    const urlObj = new URL(url);
    if (
      urlObj.hostname.includes("youtube.com") &&
      urlObj.searchParams.has("v")
    ) {
      const videoId = urlObj.searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}?autoplay=0`; // Added autoplay false
    }
    // Add more checks for other video platforms or formats if needed
    return url; // Return original url if not a standard YouTube watch link
  } catch (error) {
    console.error("Error parsing video URL:", error);
    return ""; // Return empty on error
  }
};

const ManualModal = ({ isOpen, onClose, videoUrl }) => {
  // Effect to handle Escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent background scrolling when modal is open
      document.documentElement.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleEscape);
      // Restore background scrolling
      document.documentElement.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleEscape);
      // Ensure scrolling is restored if component unmounts while open
      document.documentElement.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Effect for mounting/unmounting transition (optional, using CSS transitions is simpler here)

  const embedUrl = getEmbedUrl(videoUrl);

  // Render nothing if not open
  if (!isOpen) return null;

  return (
    // Backdrop / Overlay
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-out ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-black bg-opacity-70`}
      onClick={onClose} // Close modal when clicking backdrop
    >
      {/* Modal Content */}
      <div
        className={`bg-transparent rounded-lg shadow-xl transform transition-all duration-300 ease-out w-full max-w-4xl mx-4 ${
          // Make width responsive
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl z-10" // Style the close button
          aria-label="Close modal"
        >
          <CgClose />
        </button>

        {/* Video Iframe Container (aspect ratio trick) */}
        <div className="aspect-w-16 aspect-h-9">
          {embedUrl ? (
            <iframe
              className="w-full h-full"
              src={embedUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
              Error loading video or invalid URL.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManualModal;
