import React from 'react'
import { Table } from 'react-bootstrap';

const ClienteCadastroTable = ({clientes = []}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Nascimento</th>
          <th>CEP</th>
        </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, i) => {
            return (
              <tr key={i}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.nascimento}</td>
                <td>{cliente.cep}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
};

export default ClienteCadastroTable;