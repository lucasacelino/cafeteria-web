import React from 'react'
import { Table } from 'react-bootstrap';

const ClienteCadastroTable = ({clientes = []}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Nascimento</th>
          <th>CEP</th>
        </tr>
        </thead>
        <tbody>
          {clientes.map((produto, i) => {
            return (
              <tr key={i}>
                <td>{produto.nome}</td>
                <td>{produto.email}</td>
                <td>{produto.nascimento}</td>
                <td>{produto.cep}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
};

export default ClienteCadastroTable;