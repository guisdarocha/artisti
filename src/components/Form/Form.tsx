import React, { useState } from 'react'
import { FormStyle } from './Form.style'
import abelha from '../../assets/abelha.png'

type formProps = {
  form:any
  selected: string
  disabled: string
}

const Form = ({form}: formProps) => {

    console.log()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [garrafa,setGarrafa] = useState('')

    function novoNome(event:any) {
        setName(event.target.value)
    }

    function novoEmail(event:any) {
        setEmail(event.target.value)
    }
    
    function novoPhone(event:any) {
        setPhone(event.target.value)
    }
    function novaGarrafa(event:any) {
        setGarrafa(event.target.value)
    }

  return (
    <FormStyle ref={form}>
        <div className='formulario' id='form'>
            <img src={abelha} alt="" />
            <form>
                <h4>Fazer uma reserva</h4>
                <input
                    onChange={novoNome}
                    name="name"
                    id='name'
                    type="name"
                    placeholder="Nome"
                />
                <input
                    onChange={novoEmail}
                    name='email'
                    id='email'
                    type="email"
                    placeholder="E-mail"
                />
                <input
                    onChange={novoPhone}
                    name='phone'
                    id='phone'
                    type="phone"
                    placeholder='Celular'
                />
                <select >
                    <option selected disabled>Selecione sua Garrafa</option>
                    <option  onClick={novaGarrafa} value="hidromel">Hidromel Tradicional</option>
                    <option onClick={novaGarrafa} value="melomel">Melomel</option>
                </select>
                <a href={`https://wa.me/555492423006?text=Olá, me chamo ${name}. Gostaria de fazer a reserva do ${garrafa}, está disponível? Aguardo resposta pelo telefone ${phone} ou no e-mail ${email}`} target={'_blank'}><i className="fa-brands fa-whatsapp"></i>
                 Enviar Pedido
                </a>
            </form>
            <img src={abelha} alt="" />
        </div>

    </FormStyle>
  )
}

export default Form
