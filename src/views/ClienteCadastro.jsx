import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import * as Yup from 'yup'
import ClienteCadastroTable from '../components/ClienteCadastroTable';

const ClienteCadastro = () => {

  const schema = Yup.object().shape({
    nome: Yup.string().trim().min(15).max(60).required(),
    email: Yup.string().email().required(),
    dataNascimento: Yup.date().required(),
    cep: Yup.string().min(8).required()
  })

  let [clientes, setClientes] = useState([]);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  let formDataClientes = {
    nome: " ",
    email: " ",
    nascimento: " ",
    cep: " "
  }
  
  useEffect(() => {
    fetch('http://localhost:3000/clientes', { method: 'GET' })
      .then((res) => {
        res.json().then((data) => {
          setClientes([...data]);
        });
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    console.log('Produto adicionado!');
  }, [clientes]);

  const handleSubmit = (values) => {
    let dadosNovoCliente = { ...values };

    fetch('http://localhost:3000/clientes', {
      method: 'POST',
      body: JSON.stringify(dadosNovoCliente),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('Cliente Cadastrado com sucesso!');

        setClientes([...clientes, dadosNovoCliente]);

        setShow(false);
      })
      .catch((error) => {
        console.log('Não foi possivel cadastrar');
      });
  };

  const formik = useFormik({
    initialValues: formDataClientes,
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Button className="m-2" variant="primary" onClick={handleShow}>
        +
      </Button>

      <ClienteCadastroTable clientes={clientes}></ClienteCadastroTable>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Cliente</Modal.Title>
        </Modal.Header>
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                value={formik.values.nome}
                type="text"
                placeholder="Digite o título"
                name="titulo"
              />
              <span>{formik.errors.nome}</span>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                value={formik.values.email}
                type="text"
                placeholder="Digite a descrição"
                name="descricao"
              />
              <span>{formik.errors.email}</span>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                value={formik.values.nascimento}
                type="text"
                placeholder="Digite o valor"
                name="valor"
                
              />
              <span>{formik.errors.nascimento}</span>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>CEP</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                value={formik.values.cep}
                type="text"
                placeholder="Digite o endereço da imagem."
                name="imagemUrl"
              />
              <span>{formik.errors.cep}</span>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleShow} type="button">
              Fechar
            </Button>
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ClienteCadastro