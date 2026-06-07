import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Home } from "@/sections/Home";
import { About } from "@/sections/About";
import {Projects} from "@/sections/Projects";
import {Certificates} from "@/sections/Certificates";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Certificates />
      </main>
      <Footer />
    </div>
  )
}

export default App;
