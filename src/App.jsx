import AiDayPlanning from "./Components/AiDayPlanning";
import Banner from "./Components/Banner";
import Featured from "./Components/Featured";
import Header from "./Components/Header";
import HowItWorks from "./Components/HowItWorks";
import Stats from './Components/Stats';
import Studing from "./Components/Studing";
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
    </>
  );
}

export default App;