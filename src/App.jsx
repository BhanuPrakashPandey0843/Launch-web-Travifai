
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";  

const App = () => {
  return (
    <Router>
      <div className="w-full overflow-x-hidden">
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      
      </div>

    </Router>
  );
};

export default App;
