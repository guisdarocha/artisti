import React from 'react'
import { FormStyle } from './Form.style'
import abelha from '../../assets/abelha.png'

type formProps = {
  form:any
}

const Form = ({form}: formProps) => {
  return (
    <FormStyle ref={form}>
        <div className='formulario' id='form'>
            <img src={abelha} alt="" />
            <form>
                <h4>Fazer uma reserva</h4>
                <input
                    type="name"
                    placeholder="Nome"
                />
                <input
                    type="email"
                    placeholder="E-mail"
                />
                <input
                    type="phone"
                    placeholder='Celular'
                />
                <select>
                    <option value="hidromel">Hidromel Tradicional</option>
                    <option value="melomel">Melomel</option>
                </select>
                <button type="submit" className="enviar"><i className="fa-brands fa-whatsapp"></i> Enviar Pedido</button>
            </form>
            <img src={abelha} alt="" />
        </div>

    </FormStyle>
  )
}

export default Form
