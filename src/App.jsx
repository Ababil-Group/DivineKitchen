import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import CafeBatch from "./pages/restorents/CafeBatch";
import LockoutBatch from "./pages/restorents/LockoutBatch";
import WedingBeatch from "./pages/wedding/WedingBeatch";
import WeddingCafe from "./pages/wedding/WeddingCafe";
import EventPage from "./pages/event/EventPage";
import logo from "/logo3.png";
import "./App.css";
import Wedding from "./pages/event/wedding/Wedding";
import Corporate from "./pages/event/corporate/Corporate";
import ArtFation from "./pages/event/artfation/ArtFation";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3,
});

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);

      if (scrollPosition > 100) {
        setShowProgress(true);
      } else {
        setShowProgress(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 bg-amber-50 rounded-full ${
        showProgress ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative">
        <svg className="w-16 h-16 transform -rotate-90">
          <circle
            className="text-gray-200"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="32"
            cy="32"
          />
          <circle
            className="text-amber-500"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="32"
            cy="32"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logo}
            alt="Progress"
            className="w-8 h-8 object-contain"
            style={{ transform: `rotate(${scrollProgress * 3.6}deg)` }}
          />
        </div>
      </div>
    </div>
  );
};

const RouteLoader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let timer1, timer2;

    if (location.key === "default") {
      NProgress.start();
      timer1 = setTimeout(() => setShowLoader(true), 300);
      timer2 = setTimeout(() => {
        NProgress.done();
        setShowLoader(false);
      }, 500);
    } else {
      NProgress.start();
      setShowLoader(true);
      timer2 = setTimeout(() => {
        NProgress.done();
        setShowLoader(false);
      }, 500);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      NProgress.done();
      setShowLoader(false);
    };
  }, [location.key]);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90">
      <div className="animate-pulse animate-bounce">
        <img src={logo} alt="Loading..." className="w-32 h-32 object-contain" />
        <div className="mt-4 flex justify-center space-x-2">
          <div
            className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <ScrollProgress />
      <RouteLoader />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="cafe-beach" element={<CafeBatch />} />
          <Route path="lookout-beach" element={<LockoutBatch />} />
          <Route path="wedding-lookout-beach" element={<WedingBeatch />} />
          <Route path="wedding-cafe-beach" element={<WeddingCafe />} />
          <Route path="events/memories" element={<EventPage />} />
          <Route path="events/weddings" element={<Wedding />} />
          <Route path="events/corporate" element={<Corporate />} />
          <Route path="events/art-fashion" element={<ArtFation />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
