import React from "react";
import Styles from '../../assets/css/UserOrder.module.css';

const Card = ({ title, description, status }) => {
  return (
    <div className={Styles.card}>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <p className="card-status">Data: {status}</p>
      <button className={Styles.detailsButton}>Detalhes</button>    
    </div>
  );
};

const UserOrder = () => {
  const orders = [
    { id: 1, title: "Consultoria Empresarial", description: "Descriçao 1 ", status: "12/04/2024" },
    { id: 2, title: "Transposte de Cargas", description: "Descriçao 2", status: "15/07/2024" },
    { id: 3, title: "Gestão de Redes Socias", description: "Descriçao 3",  status: "20/06/2024" },
    // Add mais pedidos conforme necessário
  ];

  return (
    <div className={Styles.header}>
      <h2 className={Styles.title}>Compras</h2>
      <p className={Styles.text}>Gerencie as compras de sua conta</p>
      <div className={Styles.container}>
        {orders.map((order) => (
          <Card key={order.id} title={order.title} description={order.description} status={order.status} />
        ))}
      </div>
    </div>
  );
}


export default UserOrder;
