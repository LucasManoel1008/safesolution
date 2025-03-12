import { Outlet, Navigate } from 'react-router-dom';

const BloquarUsuarioLogado = () => {
    let logged = sessionStorage.getItem('empresa')

    return logged ? <Navigate to="/UserPage" /> : <Outlet />;
}
export default BloquarUsuarioLogado;