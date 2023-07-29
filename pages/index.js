import { useEffect, useState } from "react";
import { Biography } from "../components/Biography";
import { Carousel } from "../components/Carousel";
import { Contatti } from "../components/Contatti";
import { Cosmocorpi } from "../components/Cosmocorpi";
import { Crittica } from "../components/Crittica";
import { Hero } from "../components/Hero";
import { Introduction } from "../components/Introduction";
import { Navbar } from "../components/Navbar";
import { LoadingScreen } from "../components/LoadingScreen";

const loadScript = (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export default function Home() {
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const recursiveTimeout = (timeout) => {
    setTimeout(() => {
      setProgress((p) => (p + 1 > 100 ? 100 : p + 1));
      if (progress < 100) recursiveTimeout(timeout);
    }, timeout);
  };

  useEffect(() => {
    (async () => {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load");
        return;
      }
    })();

    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setLoadingScreen(false);
      }, 500);
    }, 12000);

    recursiveTimeout(90);
  }, []);

  const pay = async () => {
    const data = await fetch("/api/pay", { method: "POST" }).then((res) =>
      res.json()
    );
    const paymentObject = window.Razorpay(data);
    paymentObject.open();
  };

  return (
    <>
      <div className="bg-black text-white">
        <Navbar />
        <Hero paymentFunction={pay} />
        <div className="h-56" />
        <Introduction />
        <div className="h-56" />
        <Carousel />
        <div className="uppercase text-center">Esplora l&apos;archivio</div>
        <Biography />
        <Cosmocorpi />
        <div className="h-56" />
        <Crittica />
        <div className="uppercase text-center">Leggi la critica</div>
        <Contatti />
      </div>
      {loadingScreen ? (
        <LoadingScreen progress={progress} loading={loading} />
      ) : (
        <></>
      )}
    </>
  );
}
