import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile";
import UserContainer from "./containers/UserContainer";
import useWindowSize from "./hooks/UseWindowSize";
import UserAuth from "./HOC/UserAuth";
// import { Route, Routes } from "react-router-dom"; 

function App() {
  const { size } = useWindowSize();
  const CheckDashboard = UserAuth(Dashboard)
  const CheckUserProfile = UserAuth(UserProfile)

  return (
    <>
      <h1>
        Container Presentational Design Patterns . Width : {size.width} X Height :
        {size.height}
      </h1>
      <UserContainer />
      <hr />
      <Routes>
        <Route path="/dashboard" element={<CheckDashboard />} />
        <Route path="/userProfile" element={<CheckUserProfile />} />
        <Route path="/" element={<div>HOC Component</div>} />
      </Routes>
    </>
  );
}

export default App;
