// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from "./components/About";
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
    // const option
    const[mode , setmode] = useState("light")
    const[navColor , setNavColor] = useState("white")
    const[color , setColor] = useState("black")
    const[alert , setAlert] = useState(null)
    const[buttonstyle , setbuttonstyle] =useState({
      color:"white",
      backgroundColor:"#353333",
      border:"none"
    })

    const showAlert = (msg , type)=> {
       setAlert({
        message:msg,
        type:type
       })
       setTimeout(() =>{
        setAlert(null)
       },3000)

    }
    
    const togglemode = (themeColor) => {
      
      if(themeColor === "dark"){
        setColor("white")
        setNavColor("dark")                
        setmode("black")
        setbuttonstyle({
          color:"white",
          backgroundColor:"#363b40",
          border:"none"
        })
        // setmodetext("Disable Dark mode")
        document.body.style.backgroundColor = "black"
        showAlert("Dark Theme has been enable" , "success")
        document.title = "TextUtils-Dark Mode"
      }
      // else if(themeColor === "light"){
      //   setColor("black")
      //   setNavColor("white")
      //   setmode("white")
      //   // setmodetext("Enable Dark mode")
      //   document.body.style.backgroundColor = "white"
      //   showAlert("Light mode has been enable" , "success")
      // }
      else if(themeColor === "blue"){
        setmode("#001f3f")
        setNavColor("primary")
        setColor("white")
        setbuttonstyle({
          color:"white",
          backgroundColor:"#007BFF",
          border:"none"
        })
        // setmodetext("white")
        // setmodetext("Enable Dark mode")
        document.body.style.backgroundColor = "#001f3f"
        document.body.style.color = "white"
        showAlert("Blue Theme has been enable" , "success")
        document.title = "TextUtils-Blue Mode"
      }
      else if(themeColor === "green"){
        setmode("green")
        setNavColor("success")
        setColor("white")
        setbuttonstyle({
          color:"white",
          backgroundColor:"#155724",
          border:"none"
        })
        // setmodetext("Enable Dark mode")
        document.body.style.backgroundColor = "green"
        document.body.style.color = "white"
        showAlert("Green Theme has been enable" , "success")
        document.title = "TextUtils-Green Mode"
      }
      else {
        setmode("red")
        setNavColor("danger")
        setColor("white")
        setbuttonstyle({
          color:"white",
          backgroundColor:"#dc3545",
          border:"none"
        })
        // setmodetext("Enable Dark mode")
        document.body.style.backgroundColor = "red"
        document.body.style.color = "white"
        showAlert("Red Theme has been enable" , "success")
        document.title = "TextUtils-Red Mode"
      }
    }
    
    
    
    
  return (

    <>
    {/* <Router> */}

 
        <Navbar title="TextUtils" homeText="Home" aboutText="About" contactText="Contacts" mode={mode} togglemode = {togglemode} textColor={color} navColor={navColor} /*modetext={modetext}*//>
        <Alert alert={alert}/>
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
          <TextForm heading="Enter the Text to Analyze" showAlert={showAlert} mode={mode} buttonstyle={buttonstyle}/>
          {/* </Route> */}
        {/* </Switch> */}
    {/* </Router> */}
    </>
  );
}

export default App;
