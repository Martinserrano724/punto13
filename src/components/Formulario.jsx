import React from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Item from "./Item";

const Formulario = ({ datos, consulta ,temperatura ,clima }) => {
  const [selectPais, setSelectPais] = useState("");
  const [ciudad, setCiudad] = useState("");
    const arrayClima=[clima];
  let longitud=0;
  let latitud=0;
  let icon='';
  let temperaturaClima ;
  let temperaturaMax='';
  let temperaturaMin='';

  const handleSubmit = (e) => {
    e.preventDefault();
    consulta(ciudad);
    cargaDatos();
  }
 function cargaDatos(){
    const resultado = datos.filter((dat) => {
        if (dat.country == selectPais) {
          console.log(dat);
          longitud=dat.lon
          latitud=dat.lat
          return dat;
        }
      });
      temperatura(latitud,longitud)
      console.log(`resultado ${JSON.stringify(resultado)}`);
      console.log(clima.main)
  //icon=arrayClima.map((item)=> {return JSON.stringify(item.weather[0].icon)})
  icon=JSON.stringify(clima.weather)
  temperaturaClima=JSON.stringify(clima.main)
  temperaturaMax=JSON.stringify(clima.main)
  temperaturaMin=JSON.stringify(clima.main)
  const imagen=`https://openweathermap.org/img/wn/${icon}@2x.png`
  console.log(`temperatura: ${temperaturaClima}`)
    console.log(`max temperatura: ${temperaturaMax}`)
    console.log(`min temperatura: ${temperaturaMin}`)
    console.log(`icon: ${icon}`)
  }
  
  return (
    <div>
  
    
    <Form className="container bg-danger" onSubmit={(e)=>handleSubmit(e)}>
      <Row className="">
        <Form.Group className="d-flex p-5">
          <Form.Label className="col-sm-3 col-lg-2">
            Ingrese una ciudad:
          </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese una localidad "
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="d-flex p-5">
          <Form.Label className="col-sm-2 col-lg-2">Pais:</Form.Label>
          <select
            onChange={(e) => {
              return setSelectPais(e.target.value);
            }}
            value={selectPais}
            className="w-100"
            name="Pais"
          >
            <option value="AL">Albania</option>
            <option value="AD">Andorra</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaiyán</option>
            <option value="BE">Bélgica</option>
            <option value="BA">Bosnia y Herzegovina</option>
            <option value="BR">Brasil</option>
            <option value="BG">Bulgaria</option>
            <option value="HR">Croacia</option>
            <option value="CY">Chipre</option>
            <option value="CZ">República Checa</option>
            <option value="DK">Dinamarca</option>
            <option value="DO">República Dominicana</option>
            <option value="EC">Ecuador</option>
            <option value="EE">Estonia</option>
            <option value="SV">El Salvador</option>
            <option value="FO">Islas Feroe</option>
            <option value="FI">Finlandia</option>
            <option value="FR">Francia</option>
            <option value="GE">Georgia</option>
            <option value="DE">Alemania</option>
            <option value="GR">Grecia</option>
            <option value="GT">Guatemala</option>
            <option value="HN">Honduras</option>
            <option value="HU">Hungría</option>
            <option value="IS">Islandia</option>
            <option value="IE">Irlanda</option>
            <option value="IT">Italia</option>
            <option value="XK">Kosovo</option>
            <option value="KZ">Kazajistán</option>
            <option value="LV">Letonia</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lituania</option>
            <option value="LU">Luxemburgo</option>
            <option value="MK">Macedonia del Norte</option>
            <option value="MT">Malta</option>
            <option value="MX">México</option>
            <option value="MD">Moldavia</option>
            <option value="MC">Mónaco</option>
            <option value="ME">Montenegro</option>
            <option value="NL">Países Bajos</option>
            <option value="NI">Nicaragua</option>
            <option value="NO">Noruega</option>
            <option value="PA">Panamá</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Perú</option>
            <option value="PL">Polonia</option>
            <option value="PT">Portugal</option>
            <option value="RO">Rumania</option>
            <option value="RU">Rusia</option>
            <option value="SM">San Marino</option>
            <option value="RS">Serbia</option>
            <option value="SK">Eslovaquia</option>
            <option value="SI">Eslovenia</option>
            <option value="ES">España</option>
            <option value="SE">Suecia</option>
            <option value="CH">Suiza</option>
            <option value="TR">Turquía</option>
            <option value="UA">Ucrania</option>
            <option value="GB">Reino Unido</option>
            <option value="US">Estados Unidos</option>
            <option value="UY">Uruguay</option>
            <option value="VE">Venezuela</option>
            <option value="VA">Ciudad del Vaticano</option>
          </select>
        </Form.Group>
        <Button type="submit" className="">
          Enviar
        </Button>
      </Row>
    </Form>
   
    </div>
  );
};

export default Formulario;
