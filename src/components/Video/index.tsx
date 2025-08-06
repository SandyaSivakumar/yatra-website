"use client";

import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  // Removed useState hook as the modal is no longer used
  // const [isOpen, setOpen] = useState(false);

  const youtubeVideoId = "hBkmeSh9IN4"; // Your YouTube video ID

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-[#000000]">
        <div className="container">
          <SectionTitle
            title="A Glimpse of Yatra"
            paragraph=""
            center
            mb="80px"
          />
        </div>
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
                {/* Replaced Image and button with an embedded YouTube iframe */}
                <div className="relative aspect-video items-center justify-center"> {/* aspect-video for standard 16:9 YouTube ratio */}
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-md" // Ensure iframe fills the container and has rounded corners
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/red-shape.svg)] bg-cover bg-center bg-no-repeat">
            {/* Background shape remains */}
          </div>
        </div>
      </section>

      {/* Removed VideoModal component as it's no longer needed */}
      {/* <VideoModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        channel="youtube"
        videoId="L61p2uyiMSo"
      /> */}
    </>
  );
}