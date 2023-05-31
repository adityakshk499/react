import React , {useEffect, useState} from 'react'
import axios from 'axios'


// if you remoe the dependecy array then it will goes in infinite array 

const EffectFetch = () => {
    const [datas , setdata] = useState([])


    

      useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setdata(res.data))
      },[])

      console.log(datas)
  return (
    <>
    <div>EffectFetch</div>
    {
      datas.length ===0 ? (<div>Loadingg....</div>)  :  datas.map(data => 
            <ul key={data.id}>
                <li>{data.title}</li>
            </ul>
        )
    }
    </>
  )
}

export default EffectFetch