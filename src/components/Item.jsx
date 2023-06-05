import React from 'react';

const Item = ({temp_min,temp_max,temp,ciudad,icon}) => {
    let imagen=""
    if(icon){
        imagen=`https://openweathermap.org/img/wn/${icon}@2x.png`
    }
    else{
        imagen="https://openweathermap.org/img/wn/10d@2x.png"
    }
   
    let cadena = imagen;
    cadena=cadena.replace(/["]+/g, '');
    
    if(!cadena){
        cadena="https://openweathermap.org/img/wn/10d@2x.png"
    }
    return (
        <div className="d-flex justify-content-center  container  mt-5">
           <div className='w-50  text-center border border-black bg-info '>

            <h5>Clima en {ciudad?ciudad:"Alderetes"}</h5>
            <img src={cadena?cadena:"https://openweathermap.org/img/wn/10d@2x.png"} alt="icon"/>
            <h2>Temperatura:{temp?temp:25}°C</h2>
            <p>Max: {temp_max?temp_max:30}°C</p>
            <p>Min: {temp_min?temp_min:20}°C</p> 
        </div> 
        </div>
    );
};

export default Item;