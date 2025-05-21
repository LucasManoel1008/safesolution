import React from "react";
import Style from "../../assets/css/userOrder.css";

const Card = ({ title, description, status }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-status">{status}</p>
    </div>
  );
};

const UserOrder = () => {
  const orders = [
    { id: 1, title: "Consultoria Empresarial", description: "Description for Order 1", status: "Em andamento" },
    { id: 2, title: "Transposte de Cargas", description: "Description for Order 2", status: "Em andamento" },
    { id: 3, title: "Gestão de Redes Socias", description: "Description for Order 3",  status: "Concluido" },
    // Add mais pedidos conforme necessário
  ];

  return (
    <div className="user-orders">
      <h1 className="text-center">Compras</h1>
      <div className="orders-list">
        {orders.map((order) => (
          <Card key={order.id} title={order.title} description={order.description} status={order.status} />
        ))}
      </div>
    </div>
  );
}


export default UserOrder;
