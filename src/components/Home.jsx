import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from './Cards';


const Home = () => {
    let x = JSON.parse(localStorage.getItem('data'));
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
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
    }, [])
    return (
        <>
        {loading?
        <div style={{"height":"100rem", "paddingTop": "25%"}} className="text-center">
            <div className="spinner-grow" role="status">
                <span class="sr-only visually-hidden">Loading...</span>
            </div>    
        </div>
        :
        <>
        {data.map((v, i)=>(
            <Cards content={v} key={i}/>
        ))}
        </>
        }
        </>
    )
}

export default Home
