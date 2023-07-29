export const Cosmocorpi = () => (
  <div className="relative">
    <div className="absolute z-10 w-full h-full">
      <div className="w-[800px] h-full mx-auto flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <h1 className="text-7xl italic">Cosmocorpi</h1>
          <span>1965 - 72</span>
        </div>
        <button className="uppercase text-center">Esplora</button>
        <div className="grid grid-cols-2">
          <p className="py-16 px-7 col-start-2 text-[#a1a1a1]">
            Metafora dell’energia vitale che si espande, queste opere
            processuali richiamano l’embrione, la sacca placentare e il ciclo
            crescita-morte-rigenerazione.
          </p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-4 opacity-40 max-w-[1600px] mx-auto">
      <img src="/cosmocorpi/1.jpg" />
      <img className="mt-24" src="/cosmocorpi/2.jpg" />
      <img src="/cosmocorpi/3.jpg" />
      <img className="mt-24" src="/cosmocorpi/4.jpg" />
    </div>
  </div>
);
