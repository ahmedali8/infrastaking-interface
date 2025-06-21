export default function VideoSection() {
  return (
    <div className="relative ">
      <div className="container mx-auto">
        <div className="flex flex-col z-10 gap-10 relative py-32 items-center justify-center">
          <h2 className="md:text-5xl text-center">
            The DePIN staking system <br /> designed for your growth
          </h2>
          <a
            href=""
            className="bg-blue-700 text-sm hover:bg-blue-800 px-6 py-2.5 rounded-md"
          >
            Join our WaitList
          </a>
        </div>
      </div>
      <video
        className="mix-blend-exclusion"
        autoPlay
        loop
        muted
        playsInline
        src="/video-section.mp4"
      />
    </div>
  );
}
