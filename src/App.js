import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Youtube from "./components/Youtube";
import Conversation from "./components/Conversation";
import Virtual from "./components/Virtual";
import Swap from "./components/Swap";
import Faq from "./components/FAQ'S/Faq";
import Team from "./components/Team/Team";


function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Youtube/>
        <Conversation/>
        <Virtual/>
        <Swap/>
        
        <Faq/>
        <Team/>
    </div>
  );
}

export default App;
