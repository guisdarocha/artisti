import React from 'react'
import { FormStyle } from './Form.style'
import abelha from '../../assets/abelha.png'
type formProps = {}

const Form = (props: formProps) => {
  return (
    <FormStyle>
        <div className='formulario'>
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
                <button type="submit" className="enviar">Enviar Pedido</button>
            </form>
            <img src={abelha} alt="" />
        </div>

    </FormStyle>
  )
}

export default Form