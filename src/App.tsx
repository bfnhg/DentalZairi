import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Emergency } from './components/sections/Emergency';
import { Contact } from './components/sections/Contact';
import { IntroVideo } from './components/video/IntroVideo';
import { useState } from 'react';

function App() {
  const [introEnded, setIntroEnded] = useState(false);

  return (
    <LanguageProvider>
     
      
      <div className="bg-[#0F0F0F] overflow-x-hidden">
         {introEnded && <Navbar />}
         <IntroVideo onIntroEnd={() => setIntroEnded(true)} />
       
        <Hero />
        <About />
        <Services />
       <Testimonials />
        <FAQ />
         <Emergency />
        <Contact />
       {/* <Footer /> */}
      </div>
    </LanguageProvider>
  );
}

export default App;
