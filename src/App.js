// import EffectAtEveryRender from "./EffectAtEveryRender";
// import EffectHook from "./EffectHook";

// import { useState } from "react";
// import UnmountEffect from './UnmountEffect'
// import Form from "./Form";
import Navigation from "./components/Navigation";
// import EffectfetchwithForm from "./EffectfetchwithForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import Product from './screens/Product'
// import EffectFetch from "./EffectFetch";

// import EffectinForm from "./EffectinForm";




function App() {
  // const [mount, setmount] = useState(true)

  return (
<>
{/* <EffectHook/> */}
{/* <EffectAtEveryRender/> */}
{/* <EffectinForm/> */}
{/* <EffectFetch/> */}
{/* <EffectfetchwithForm/> */}
{/* --------------------------------------- */}

{/* <button onClick={()=> setmount(!mount)}>{mount===true?'Mount':'Unmount'}</button>
    {mount===true? (<UnmountEffect/>):null}
*/}
 {/* <Form/> */}

<Router>
<Navigation/>
  <Routes>
  <Route exact path="/" element={<Home />} />
  <Route exact path="/about" element={<About />} />
  <Route exact path="/contact" element={<Contact />} />
  <Route exact path="/products" element={<Product/>} />
  </Routes>
</Router>

</> 

 

  );
}

export default App;
