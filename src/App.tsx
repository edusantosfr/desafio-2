import { Login } from "./pages/Login"
import { Routes, BrowserRouter, Route } from "react-router-dom"
import { Profile } from "./pages/Profile"
import { UserProvider } from "./context/UserContext"

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App