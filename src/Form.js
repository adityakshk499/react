import React, { useState } from "react";

const Form = () => {
  const [data, setdata] = useState({ fname: "", lname: "" });

    function handleSubmit(e){
            e.preventDefault();
            console.log(data);
            setdata({ fname: "", lname: "" })
    }

    function handleChange(e){
        console.log(e.target.value , e.target.name);
        setdata({...data ,  [e.target.name]: e.target.value });
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="fname">
            First Name
            <input id="fname" value={data.fname} onChange={handleChange}  name="fname" type="text" />
          </label>
          <label htmlFor="lname">
            Last Name
            <input id="lname" value={data.lname} onChange={handleChange}  name="lname" type="text" />
          </label>
          <button  type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
