import './App.css'
import { useState , useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from './components/Formulario';

function App() {

  const [latitud ,setLatitud]=useState([]);
  const [clima ,setClima]=useState([]);
  const [datosCiudad, setDatosCiudad] = useState([]);
  useEffect(() => {
      consultarApi;
      consultarTemp;
    }, []);

    const key="225eb8bfc952ed0173c0eafb2a8f19a9";
  const consultarApi = async (ciudad) => {
      try {
        const respuesta= await fetch( `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=5&lang=sp&appid=${key}`) 
        const dato = await respuesta.json();
        setDatosCiudad(dato);
        
      } catch (error) {
          console.log(error);
      }
  }
  const consultarTemp = async (lat , long) => {
      try {
        const respuestaLatLong = await fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`) 
        const dato = await respuestaLatLong.json();
        setClima(dato);
        
      } catch (error) {
          console.log(error);
      }
  }

  return (
    <>
    <Formulario datos={datosCiudad} consulta={consultarApi} temperatura={consultarTemp} clima={clima}></Formulario>
    </>
  )
}

export default App
