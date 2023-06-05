import React from 'react';

const Item = ({clima,ciudad}) => {
    const imagen=`https://openweathermap.org/img/wn/${img}@2x.png`
    icon=arrayClima.map((item)=> {return JSON.stringify(item.weather[0].icon)})
  temperaturaClima=JSON.stringify(clima.main.temp)
  temperaturaMax=JSON.stringify(clima.main.temp_max)
  temperaturaMin=JSON.stringify(clima.main.temp_min)
    return (
        <div className="d-flex justify-content-center">
           <div>
            
            <p>Agrege cuidad y pais</p>
            <h5>Clima en {ciudad}</h5>
            <img src="img" alt=""/>
            <img src={imagen} alt="icon"/>
            <h2>:{temperatura}</h2>
            <p>Max: {temperaturaMax}C</p>
            <p>Min: {temperaturaMin}°C</p> 
        </div> 
        </div>
    );
};

export default Item;