import "./index.css";

import { useEffect } from "react";
// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

import {
  Footer,
  Header,
  FormInput,
  Categories,
  Main_Grid,
  Contact,
  NavBar,
} from "./components";

const App = () => {
  // aos init
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div className="overflow-hidden mx-auto">
      <div>
        <div>
          <NavBar />
        </div>
      </div>
      <div>
        <div>
          <Header />
        </div>
      </div>
      <div>
        <div>
          <Main_Grid />
        </div>
      </div>
      <div>
        <div>
          <Contact />
        </div>
      </div>
      <div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
