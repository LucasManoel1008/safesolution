import { Outlet, Navigate } from 'react-router-dom';

const BloquearNaoAdm = () => {
    let logged = sessionStorage.getItem('empresa')
    logged = logged ? JSON.parse(logged) : null;

    return logged && logged.usuario.nivel_acesso == 1 ? <Navigate to="/" /> : <Outlet />;
}
export default BloquearNaoAdm;