import React, { useState } from 'react'
import * as Yup from 'yup'

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

  
  return (
    <div>Olá</div>
  )
}

export default ClienteCadastro