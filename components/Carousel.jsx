export const Carousel = () => (
  <>
    <div className="grid grid-flow-col justify-around h-[450px] ">
      <img className="flex-1 h-[inherit]" src="/carousel/1.jpg" />
      <img className="flex-1 h-[inherit]" src="/carousel/2.png" />
      <img className="flex-1 h-[inherit]" src="/carousel/3.png" />
      <img className="flex-1 h-[inherit]" src="/carousel/4.png" />
    </div>
    <div className="w-full flex justify-center items-center my-10">
      <button className="w-8 h-8 p-3 ml-6 self-center flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.985 9.992">
          <g fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1">
            <path data-name="Line 2" d="M4.281.704L.704 4.996" />
            <path data-name="Line 3" d="M4.281 9.288L.704 4.996" />
          </g>
        </svg>
      </button>
      <span>•</span>
      <button className="w-8 h-8 p-3 mr-6 self-center flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.985 9.992">
          <g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1">
            <path data-name="Line 2" d="M.704 9.288l3.577-4.292" />
            <path data-name="Line 3" d="M.704.704l3.577 4.292" />
          </g>
        </svg>
      </button>
    </div>
  </>
);
