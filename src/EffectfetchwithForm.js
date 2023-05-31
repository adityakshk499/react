import React, { useEffect , useState } from 'react'



const EffectfetchwithForm = () => {
    const [post , setpost] = useState('')
    const [data , setdata] = useState('')
    useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
          .then(res => res.json())
          .then(data => setdata(data))
        }, [post])
    
  return (
  <>
    <div>FetchPost</div>
    <form>
    <fieldset>
    <legend>Post</legend>
    <label htmlFor='post'>Get me A Post</label>
        <input id='post' value={post} onChange={(e) => setpost(e.target.value)} type="text" name="name" placeholder="Name" />
        </fieldset>
    </form>
 <ul>
      <li>{data.title}</li>
    </ul>


  </>
  )
}

export default EffectfetchwithForm