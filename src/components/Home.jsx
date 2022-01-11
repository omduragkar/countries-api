import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from './cards/Cards';

const Home = () => {
    // Will store data in localstorage as of now to save data [ An optimization ] which is optional:

    let x = JSON.parse(localStorage.getItem('data'));
    // Creating some useState for setting data use:
    const [data, setData] = useState([]);
    // Creating some useState for Loading time use:
    const [loading, setLoading] = useState(true);

    // This useeffect will check if data is retrieved from ls if not then will fetch it from api:
    useEffect(() => {
        if(!x){

            (async function(){
                setLoading(true);
                const maindata = await axios.get('https://restcountries.com/v3.1/region/asia');
                setLoading(false);
                setData(maindata.data);
                localStorage.setItem('data', JSON.stringify(maindata.data));
                // console.log(maindata);
            })();
        }
        else{
            setLoading(false);
            setData([...x]);

        }
    },[])
    return (
        <>
        {/* On loading this will run so as to showcase data is loading: */}
        {loading?
        <div style={{"height":"100rem", "paddingTop": "25%"}} className="text-center">
            <div className="spinner-grow" role="status">
                <span className="sr-only visually-hidden">Loading...</span>
            </div>    
        </div>
        :
        <>
            {/* Mapping the data after Finding out: and sending it as props to Cards Components: */}
            {data.map((v, i)=>(
                <Cards content={v} key={i}/>
            ))}
        </>
        }
        </>
    )
}

export default Home
