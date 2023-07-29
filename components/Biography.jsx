export const Biography = () => (
  <div className="grid grid-cols-[1fr,1.5fr] gap-16 justify-center py-56 px-16 max-w-[1200px] mx-auto">
    <div>
      <p className="italic text-5xl mb-16">
        Mi sono
        <br />
        consumato.
        <br />
        Ho dato il mio
        <br />
        flusso vitale alle
        <br />
        mie opere,
        <br />
        all’arte.
      </p>
      <div className="pl-16">
        <p className="text-[#a1a1a1] mb-16">
          Più di cinquant’anni di ricerca di un artista che si è mosso sulla
          linea dell’avanguardia, dal dopoguerra agli anni Duemila, tra
          linguaggi figurativi e astratti e attraverso la sperimentazione di
          tecniche e materiali artistici tra i più svariati: dai pigmenti
          pittorici tradizionali alle materie plastiche, dall’acciaio al vetro.
        </p>
        <button className="uppercase">Leggi la biografia</button>
      </div>
    </div>
    <img src="/biography/index.jpg" />
  </div>
);
