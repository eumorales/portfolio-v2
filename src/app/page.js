"use client";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <About />
        <Stats />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
