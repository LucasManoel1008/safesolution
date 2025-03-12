import { Outlet, Navigate } from 'react-router-dom';

const BloquarUsuarioDeslogado = (isLogged) => {
    const logged = isLogged;
    return logged ? <Outlet /> : <Navigate to="/login" />;

}
export default BloquarUsuarioDeslogado;