import { GlobalStyle } from "./globalStyles";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import StoryPage from "./pages/Stories";
import SarahStory from "./pages/SarahStory";
import ResultPage from "./pages/Result";
import DiscussPage from "./pages/Form";
import Test from "./pages/Test";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/stories" element={<StoryPage />} />
          <Route path="/sarahstory" element={<SarahStory />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/discussion" element={<DiscussPage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
