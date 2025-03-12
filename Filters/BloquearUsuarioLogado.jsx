import { Outlet, Navigate } from 'react-router-dom';

const BloquarUsuarioLogado = (isLogged) => {
    const logged = isLogged;
    return logged == true ? <Navigate to="/" /> : <Outlet />;
}
export default BloquarUsuarioLogado;