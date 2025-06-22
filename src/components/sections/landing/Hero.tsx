export default function Hero() {
  return (
    <div
      className={"relative w-full h-screen flex items-center justify-center"}
    >
      <>
        {/* Mobile Image */}
        <img
          src="/image-mobile.jpg"
          alt="InfraStaking Dashboard (Mobile)"
          className="block md:hidden w-full h-full"
        />

        {/* Desktop Image */}
      </>
      <img
        src="/dashboard.png"
        alt="InfraStaking Dashboard"
        className="hidden md:block w-full h-full"
      />
      {/* <video
        src="/background-intro.mp4"
        className={"w-full h-full object-cover absolute -left-1"}
        autoPlay
        muted
        loop
        playsInline
      /> */}
      {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-md" /> */}
      {/* <div className="flex flex-col relative z-10 md:px-20 px-4 text-center gap-2 pb-20">
        <p className="max-w-[318px] leading-[120%] text-center --font-intel font-[100] text-2xl ">
          An on-ledger compliance layer for DePIN InfraStaking on Stellar{" "}
        </p>
        <h1 className="md:text-[40px] text-[48px] md:max-w-[580px] max-w-[350px] --font-jetbrains-mono">
          Infra Staking
        </h1>

        <div className="flex items-center gap-2">
          <a
            href="/download"
            className="py-[10px] px-[20px] rounded-[10px] bg-white hover:bg-white/80 text-black text-sm font-[400] cursor-pointer"
          >
            Sign in
          </a>
          <a
            href="https://www.linkedin.com/company/depins/"
            className="py-[10px] px-[12px] rounded-[10px] bg-white/40 hover:bg-white/80 text-white hover:text-black text-sm font-[400] cursor-pointer"
          >
            Join our LinkedIn community
          </a>
        </div>
      </div> */}
    </div>
  );
}
