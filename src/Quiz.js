import { useEffect, useState } from "react";
import Card from "./Card";

const Quiz = () => {

    const [countryArray, setCountryArray] = useState([]);
    const [isLoading, setIsloading] = useState(false)


  useEffect( ()=>{
      fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data =>{
         setCountryArray(data)
            setIsloading(true)
        });
    }, [])


  
    return ( 
        <div className="container">
            {!isLoading && <h1>Loading...</h1>}
            {isLoading && <Card data={countryArray}/>}
        </div>
     );
}
 
export default Quiz;