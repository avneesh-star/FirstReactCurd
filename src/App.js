import logo from "./logo.svg";
import "./App.css";
import second from "./components/CandidateForm";
import CandidateForm from "./components/CandidateForm";
import CandidateList from "./components/CandidateList";
import { BrowserRouter, Routes, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<CandidateForm />}></Route>
            <Route exact path="/update/:Id" element={<CandidateForm />}></Route>
            <Route exact path="/list" element={<CandidateList />}></Route>
            {/* <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
