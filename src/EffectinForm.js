import React , {useEffect , useState} from 'react'


const EffectinForm = () => {
    const [input, setinput] = useState('')

    useEffect(()=>{
        console.log(input)
    },[input])

  return (
    <form>
    <label htmlFor='input'>Enter </label>
        <input id='input' onChange={(e)=> setinput(e.target.value)} value={input} type="text" name="name" placeholder="Name" />
    </form>
  )
}

export default EffectinForm