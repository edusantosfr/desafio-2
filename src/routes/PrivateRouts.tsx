import { Navigate, Outlet } from "react-router-dom";

interface Props {
    isAuthenticated: boolean
}

export function PrivateRoutes ( { isAuthenticated,  }: Props) {
    return isAuthenticated ? <Outlet /> : <Navigate to = "/Login"/>
}