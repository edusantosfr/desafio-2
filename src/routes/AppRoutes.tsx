import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PrivateRoutes } from './PrivateRouts'
import { Login } from "../pages/Login"
import { Profile } from "../pages/Profile"
import { UserProvider } from "../context/UserContext"

export function AppRoutes() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route element={<PrivateRoutes isAuthenticated={true} />} >
                        <Route path="/Profile" element={<Profile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
}