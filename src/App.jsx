import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PhoneModel from "./components/PhoneModel";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import AISection from "./components/AISection";
import Specs from "./components/Specs";
import Footer from "./components/Footer";
import FloatingCards from "./components/floatingCards";
import "./App.css";

function App() {
  return (
    <>
    <div className="gradient-bg"></div>
    <Navbar />
    <div className="hero">
      <Hero />
      <div className="hero-right">
        <FloatingCards />
        <Canvas camera={{ position: [0, 0, 20] }}>
          <ambientLight intensity={5} />
          <directionalLight intensity={5} position={[5, 5, 5]} />

          <Suspense fallback={null}>
            <PhoneModel />
          </Suspense>

          <OrbitControls
          enableZoom={false}
          autoRotate={false}
          />

        </Canvas>
      </div>
    </div>

    <Features />
    <AISection />
    <Specs />
    <Footer />

    </>
  );
}

export default App;