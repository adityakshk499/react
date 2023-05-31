import React, { useEffect } from 'react'

const EffectHook = () => {

    console.log('effect hook')

    useEffect(() => {
      console.log("effect call at mount of component")
    }, [])
    

  return (
    <>

        <button>Hello</button>
    </>
  )
}

export default EffectHook