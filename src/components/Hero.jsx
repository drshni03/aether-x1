export default function Hero() {
  return (
    <div className="hero-left">
      <h1>AETHER X1</h1>

      <h2>Beyond Imagination.</h2>

      <p><h3>
        Experience intelligent performance, stunning visuals,
        and next-generation innovation in one device.
      </h3></p>

      <button
      onClick={() => document
        .getElementById("features")
        .scrollIntoView({ behavior: "smooth" })
        }
        >
            Explore Features
            </button>
            </div>
            );
        }