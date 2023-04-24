import { CustomCursor } from "./components/CustomCursor";
import { Experience } from "./components/experience";
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

export const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
      <CustomCursor />
    </div>
  );
};
