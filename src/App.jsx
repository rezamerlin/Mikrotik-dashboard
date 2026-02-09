import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { UserProvider } from "./Contexts/UserContext";
import Dashboard from "./pages/Dashboard";
import Home from "./components/Home";
import User from "./components/User";
import UserProfile from "./components/UserProfile";
import Setting from "./components/Setting";
import Monitor from "./components/Monitor";
import AddUser from "./components/AddUser";
import { TrafficProvider } from "./Contexts/TrafficContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />}>
            <TrafficProvider>
              <Route index element={<Navigate replace element={<Home />} />} />
              <Route path="home" element={<Home />} />
              <Route path="users" element={<User />} />
              <Route path="users/:id" element={<Monitor />} />
              <Route path="users/:adduser" element={<AddUser />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="setting" element={<Setting />} />
            </TrafficProvider>
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
