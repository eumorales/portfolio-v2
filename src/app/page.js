import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Navbar from "./components/navbar";

export default function Home() {

    return(

      <main className="flex min-h-screen flex-col bg-white">
              <Navbar/>

              <div className="container mx-auto px-12 py-4">

                <About/>
                <Projects/>
                <Contact/>

              </div>

              <Footer/>

        </main>
      

    );
}
