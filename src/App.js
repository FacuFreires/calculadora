import './App.css';
import logoFreeCode from './img/freecodecamplogo2.jpg';
import Boton from './components/Boton.js'
import Pantalla from './components/Pantalla.js';
import Clear from './components/Clear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val); //Actualiza el input
  };

  const resultado = () => {
    if (input){
      setInput(evaluate(input));
    } else {
      alert('Ingrese valores para realizar la operación');
    }
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={logoFreeCode}
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input = { input }/>
        <div className='fila'>
          <Boton manejarClick = {agregarInput}>1</Boton>
          <Boton manejarClick = {agregarInput}>2</Boton>
          <Boton manejarClick = {agregarInput}>3</Boton>
          <Boton manejarClick = {agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick = {agregarInput}>4</Boton>
        <Boton manejarClick = {agregarInput}>5</Boton>
        <Boton manejarClick = {agregarInput}>6</Boton>
        <Boton manejarClick = {agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick = {agregarInput}>7</Boton>
        <Boton manejarClick = {agregarInput}>8</Boton>
        <Boton manejarClick = {agregarInput}>9</Boton>
        <Boton manejarClick = {agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick = {resultado}>=</Boton>
        <Boton manejarClick = {agregarInput}>0</Boton>
        <Boton manejarClick = {agregarInput}>.</Boton>
        <Boton manejarClick = {agregarInput}>/</Boton>
        </div>
        <div className='fila'>
        <Clear manejarClear ={ () => setInput('')}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
