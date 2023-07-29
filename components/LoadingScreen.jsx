export const LoadingScreen = ({ progress, loading }) => (
  <div
    className={`fixed isolate top-0 left-0 w-full h-full bg-[#141414] text-white z-50 transition-opacity duration-500 ${
      loading ? "opacity-100" : "opacity-0"
    }`}
  >
    <div className="slideOut delay10000 flex flex-col justify-center items-center h-full w-full">
      <img className="scaleIn delay4000 absolute" src="/loader.jpg" />
      <div className="z-10 flex flex-col gap-20 items-center">
        <div className="flex flex-col gap-2 italic text-5xl">
          <p className="fadeIn delay2000">
            Ho cercato di scavare fino all’impossibile,
          </p>
          <div className="flex gap-1 justify-center">
            <p className="fadeIn delay4000">di andare all’origine,</p>
            <p className="fadeIn delay6000">ai primordi.</p>
          </div>
        </div>
        <img className="fadeIn delay7000 h-8" src="/logo.svg" />
      </div>
      <p className="absolute bottom-0 mb-5">{progress}%</p>
    </div>
  </div>
);
