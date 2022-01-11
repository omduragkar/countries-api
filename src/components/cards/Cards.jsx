import React from 'react'
import "./cards.css";
const Cards = (props) => {
    // Getting as a prop: 
    let country = props.content;
    return (
        <>
            <div className="card my-3 mx-auto cardmain">
                <h3 className="card-header"> Name[official]: {country.name.official}</h3>
                <div className="card-body row">
                    <div className="col-sm-7 text-center" >
                        <img className = "flagimg" src={country.flags.png} alt='flag'/>
                    </div>
                    <h4 className="col-sm-5 cb1 text-center my-auto card-title">{(country && country.capital)? country.capital[0]:"None"}</h4>
                </div>
                <div className="card-body row text-center">
                    <div className='my-2 col-md-6 col-sm-4 col-6'>Region: {country.region}</div>
                    <div className='my-2 col-md-6 col-sm-4 col-6'>subregion: {country.subregion}</div>
                    <div className='my-2 col-6'>Pouplation: {country.population}</div>
                    {/* Checking languages objects and putting them properly: */}
                    <div className='my-2 col-6'>Languages: {Object.keys(country.languages).map((v, i)=>(
                        i === Object.keys(country.languages).length - 1?
                        country.languages[v] + " "
                        :
                        country.languages[v] + " , "
                        
                    ))}</div>
                    {/* Checking borders array and putting them properly: */}
                    <div className='my-2 col-12'>Borders: {country.borders && country.borders.map((v, i)=>(
                        i === country.borders.length - 1? v + " ":v + " , "))}
                        {country.borders && country.borders ?country.borders.length===0?"None":"":"None"}</div>
                </div>
                {/* Since in api country has common name substituting it here: */}
                <h5 className="card-footer m-0"> Name[COMMON]: {country.name.common}</h5>

            </div>
                
        </>
    )
}

export default Cards
