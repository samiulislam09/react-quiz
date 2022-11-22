import { Route, Routes } from "react-router-dom";
import Analysis from "./components/Analysis";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import SignUp from "./pages/SignUp";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Analysis />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
