import React, { useState } from 'react'
import { FormStyle } from './Form.style'
import abelha from '../../assets/abelha.png'

type formProps = {
  form:any

}

const Form = ({form}: formProps) => {

    const [name, setName] = useState('')
    console.log(name)

    function handleSubmit(event: any){

    }

    function novoNome(event:any) {
        setName(event.target.value)
    }
  return (
    <FormStyle ref={form}>
        <div className='formulario' id='form'>
            <img src={abelha} alt="" />
            <form onSubmit={handleSubmit}>
                <h4>Fazer uma reserva</h4>
                <input
                    onChange={novoNome}
                    name="name"
                    id='name'
                    type="name"
                    placeholder="Nome"
                />
                <input
                    id='email'
                    type="email"
                    placeholder="E-mail"
                />
                <input
                    id='phone'
                    type="phone"
                    placeholder='Celular'
                />
                <select>
                    <option value="hidromel">Hidromel Tradicional</option>
                    <option value="melomel">Melomel</option>
                </select>
                <a href={`https://wa.me/555492423006?text=${name}`} target={'_blank'}><i className="fa-brands fa-whatsapp"></i>
                 Enviar Pedido
                </a>
            </form>
            <img src={abelha} alt="" />
        </div>

    </FormStyle>
  )
}

export default Form
