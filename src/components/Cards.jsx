import React from 'react'
import "./cards.css";
const Cards = (props) => {
    let country = props.content;
    return (
        <>
            <div class="card my-3 mx-auto cardmain">
                <h3 class="card-header"> Name[official]: {country.name.official}</h3>
                <div class="card-body row">
                    {/* <h6 class="card-subtitle text-muted">Support card subtitle</h6> */}
                    <div class="col-sm-7 text-center" >
                        <img class = "flagimg" src={country.flags.png} alt='flag'/>
                    </div>
                    <h4 class="col-sm-5 cb1 text-center my-auto card-title">{(country && country.capital)? country.capital[0]:"None"}</h4>
                </div>
                <div class="card-body row text-center">
                    <div className='my-2 col-md-6 col-sm-4 col-6'>Region: {country.region}</div>
                    <div className='my-2 col-md-6 col-sm-4 col-6'>sub-region:{country.subregion}</div>
                    <div className='my-2 col-6'>Pouplation: {country.population}</div>
                    <div className='my-2 col-6'>Languages: {Object.keys(country.languages).map((v, i)=>(
                        i == Object.keys(country.languages).length - 1?
                        country.languages[v] + " "
                        :
                        country.languages[v] + " , "
                        
                    ))}</div>
                    <div className='my-2 col-12'>Borders: {country.borders && country.borders.map((v, i)=>(
                        i === country.borders.length - 1? v + " ":v + " , "))}
                        {country.borders && country.borders ?country.borders.length===0?"None":"":"None"}</div>
                </div>
                <h5 class="card-footer m-0"> Name[COMMON]: {country.name.common}</h5>

            </div>
                
        </>
    )
}

export default Cards
