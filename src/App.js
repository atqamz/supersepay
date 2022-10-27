import { useState } from "react";
import Navbar from "./sections/Navbar";
import FirstLoad from "./sections/FirstLoad";
import Services from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  return (
    <>
      <Navbar
        isMobileNavbarOpen={isMobileNavbarOpen}
        setIsMobileNavbarOpen={setIsMobileNavbarOpen}
      />
      {isMobileNavbarOpen ? (
        ""
      ) : (
        <div className='flex flex-col items-center'>
          <FirstLoad />
          <Services />
          <About />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
