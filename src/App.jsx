import AiDayPlanning from "./Components/AiDayPlanning";
import Banner from "./Components/Banner";
import Featured from "./Components/Featured";
import Header from "./Components/Header";
import HowItWorks from "./Components/HowItWorks";
import Stats from './Components/Stats';
import Studing from "./Components/Studing";
import Review from "./Components/Review";
import Pricing from "./Components/Pricing";
import FAQ from "./Components/FAQ";
import NextStudySession from "./Components/NextStudySession";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Stats />
      <Studing />
      <Featured />
      <HowItWorks />
      <AiDayPlanning/>
      <Review />
      <Pricing />
   
      <FAQ />
         <NextStudySession />
      <Footer />
         
    </>
  );
}

export default App;
