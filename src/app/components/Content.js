import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import Projects from "./Projects";

const Content = () => {
  return (
    <div id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <main>
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

export default Content;
