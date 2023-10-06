import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TopBar from "./Components/TopBar";
import Homepage from "../src/Pages/Homepage";
import Contact from "./Components/Contact";
import StandardPage from "./Pages/StandardPage";
import StandardPage1 from "./Pages/StandardPage1";
import StandardPage2 from "./Pages/StandardPage2";
import StandardPage3 from "./Pages/StandardPage3";
import StandardPage4 from "./Pages/StandardPage4";
import StandardPage5 from "./Pages/StandardPage5";
import GuidePage from "./Pages/GuidePage";
import GuidePage1 from "./Pages/GuidePage1";
import GuidePage2 from "./Pages/GuidePage2";
import GuidePage3 from "./Pages/GuidePage3";
import GuidePage5 from "./Pages/GuidePage4";
import GuidePage4 from "./Pages/GuidePage5";

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/freelancing-in-kenya" element={<StandardPage />} />
          <Route path="/dropshipping" element={<StandardPage1 />} />
          <Route path="/start-a-blog" element={<StandardPage2 />} />
          <Route
            path="/freelance-writing-in-kenya"
            element={<StandardPage3 />}
          />
          <Route path="/iq-option-review" element={<StandardPage4 />} />
          <Route path="/start-a-baby-shop" element={<StandardPage5 />} />
          <Route path="/start-a-small-business" element={<GuidePage />} />
          <Route path="/affiliate-marketing" element={<GuidePage1 />} />
          <Route path="/transcription-jobs" element={<GuidePage2 />} />
          <Route path="/forex-trading" element={<GuidePage3 />} />
          <Route path="/crypto-in-kenya" element={<GuidePage4 />} />
          <Route path="/passive-income" element={<GuidePage5 />} />
        </Routes>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
