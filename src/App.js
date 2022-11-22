import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import QuizPage from "./pages/QuizPage";
import Result from "./pages/Result";
import SignUp from "./pages/SignUp";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </div>
  );
}

export default App;
