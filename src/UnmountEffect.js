import React from 'react'


const UnmountEffect = () => {

    React.useEffect(() => {
       const inter =  setInterval(() => {
            console.log('effect')
        }, 1000);

        return () => {
            clearInterval(inter)
            console.log('effect destroyed')
        }
    }, [])

  return (
    <div>UnmountEffect</div>
  )
}

export default UnmountEffect