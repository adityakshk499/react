import React , {useEffect,useState} from 'react'

const EffectAtEveryRender = () => {
    const [count, setcount] = useState(0)
    console.log('effect hook')

    useEffect(() => {
      console.log("effect call at mount of component")
    },[count])
    
  return (
    <>
    <div>{count}</div>
    <button onClick={()=> setcount(count+1)}>Hello</button>
    </>
  )
}

export default EffectAtEveryRender