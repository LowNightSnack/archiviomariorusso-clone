export const Hero = ({ paymentFunction }) => (
  <div className="relative h-[963px]">
    <div className="absolute z-10 w-full h-full flex flex-col">
      <div className="flex-1 flex justify-between">
        <button className="w-8 h-8 p-3 ml-6 self-center flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.985 9.992">
            <g fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1">
              <path data-name="Line 2" d="M4.281.704L.704 4.996" />
              <path data-name="Line 3" d="M4.281 9.288L.704 4.996" />
            </g>
          </svg>
        </button>
        <button onClick={paymentFunction} className="self-center ">
          Archivio Mario Russo
        </button>
        <button className="w-8 h-8 p-3 mr-6 self-center flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.985 9.992">
            <g fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1">
              <path data-name="Line 2" d="M.704 9.288l3.577-4.292" />
              <path data-name="Line 3" d="M.704.704l3.577 4.292" />
            </g>
          </svg>
        </button>
      </div>
      <button className="w-10 h-10 p-3 mb-6 self-center flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14.817"
          height="7.817"
          viewBox="0 0 14.817 7.817"
        >
          <g id="Arrow" transform="translate(-814.592 -553.706)">
            <line
              id="Line_2"
              data-name="Line 2"
              x2="6"
              y2="5"
              transform="translate(816 555.114)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_3"
              data-name="Line 3"
              x1="6"
              y2="5"
              transform="translate(822 555.114)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </button>
    </div>
    <div className="isolate absolute top-1/2 left-1/2 w-[60vw] opacity-50 rotate-[-23deg] -translate-x-1/2 -translate-y-1/2">
      <div className="grid grid-cols-[1fr,2fr] items-end gap-5 mb-5">
        <img src="/hero/1.jpg" />
        <img src="/hero/2.jpg" />
      </div>
      <div className="grid grid-cols-[2fr,1fr] items-start gap-5">
        <img src="/hero/3.jpg" />
        <img src="/hero/4.jpg" />
      </div>
    </div>
  </div>
);
