import { useState } from 'react'
import './App.css'

function App() {
  const [dolaresBlue, setDolares] = useState(0)
  const [dolaresBolsa, setDolaresBolsa] = useState(0)
  const [dolaresOficial, setDolaresOficial] = useState(0)
  const [dolaresTarjeta, setDolaresTarjeta] = useState(0)
  const [oficial, setOficial] = useState(0)
  const [blue, setBlue] = useState(0)
  const [bolsa, setBolsa] = useState(0)
  const [tarjeta, setTarjeta] = useState(0)

  fetch("https://dolarapi.com/v1/dolares/oficial")
    .then(response => response.json())
    .then(data => setOficial(data.venta));
  fetch("https://dolarapi.com/v1/dolares/blue")
    .then(response => response.json())
    .then(data => setBlue(data.venta));
  fetch("https://dolarapi.com/v1/dolares/bolsa")
    .then(response => response.json())
    .then(data => setBolsa(data.venta));
  fetch("https://dolarapi.com/v1/dolares/tarjeta")
    .then(response => response.json())
    .then(data => setTarjeta(data.venta));

  function handleChange(e) {
    setDolaresOficial(((e.target.value) * oficial).toFixed(2))
    setDolares(((e.target.value) * blue).toFixed(2));
    setDolaresBolsa(((e.target.value) * bolsa).toFixed(2))
    setDolaresTarjeta(((e.target.value) * tarjeta).toFixed(2))

  }
  return (
    <>
      <section className='flex flex-col gap-10 justify-start items-center bg-sky-200 '>
        <p className='rounded-md p-2 text-white bg-emerald-600'>Bienvenido a la Calculadora de tipos de cambio del dólar</p>
        <div className='bg-white rounded-3xl flex w-3/4  justify-between'>
          <div className='w-1/2 flex flex-col'>
            <div className="p-4  rounded-xl flex flex-col">
              <div>
                Ingrese el monto en <span className='text-green-600 text-xl p-2'>USD </span></div>
              <input placeholder='$$$' type='number' className='border-2 border-emerald-600 rounded-xl w-1/2' onChange={handleChange} />
            </div>
            <div className=" p-2 bg-emerald-100 flex flex-col  rounded-xl">
              <p className='p-2'> Tipos de dólar al día de hoy:</p>
              <div className='flex p-2 gap-10 flex-wrap'>
                <div className='flex'>
                  <p className='rounded-md p-2 text-white bg-emerald-600' >Dólar Oficial: ${oficial}</p>
                </div>
                <div className='flex'>
                  <p className='rounded-md p-2 text-white bg-emerald-600' >Dólar Blue: ${blue}</p>
                </div>
                <div className='flex'>
                  <p className='rounded-md p-2 text-white bg-emerald-600' >Dólar Bolsa: ${bolsa}</p>
                </div>
                <div className='flex'>
                  <p className='rounded-md p-2 text-white bg-emerald-600' >Dólar Tarjeta: ${tarjeta}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-emerald-600 p-8 rounded-xl w-1/2 flex justify-end">
            <div className='flex flex-col gap-8'>
              <p className='text-white p-2'>A dolar Oficial son: ${dolaresOficial}</p>
              <p className='text-white p-2'>A dolar Blue son: ${dolaresBlue}</p>
              <p className='text-white p-2'>A dolar Bolsa son: ${dolaresBolsa}</p>
              <p className='text-white p-2'>A dolar Tarjeta son: ${dolaresTarjeta}</p>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default App
