import AiDayPlanning from "../Components/AiDayPlanning";
import Banner from "../Components/Banner";
import Featured from "../Components/Featured";
import HowItWorks from "../Components/HowItWorks";
import Stats from '../Components/Stats';
import Studing from "../Components/Studing";
import Review from "../Components/Review";
import Pricing from "../Components/Pricing";
import FAQ from "../Components/FAQ";
import NextStudySession from "../Components/NextStudySession";

function Homepage() {
  return (
    <>
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
    </>
  );
}

export default Homepage;
