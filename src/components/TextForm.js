import React , {useState , useEffect} from 'react'

export default function TextForm(props) {
  const [text , settext] = useState("")
 const[wordsnum , updatewordsnum] = useState(0)

const convertUpperCase = () =>{
    let newtext = text.toUpperCase();
    // console.log("Uppercase was click " + text)
    settext(newtext)
    if(text === ""){
      props.showAlert("There is no text to convert in Uppercase" , "danger")
      // buttons.style.pointerevents="none"
    }
    else if(text === text.toUpperCase()){
      props.showAlert("The text is already in Uppercase" , "warning")
    }
    else{
      props.showAlert("Converted to Uppercase" , "success")
    }
}

const convertLowerCase = () =>{
    let newtext = text.toLowerCase();
    // console.log("Lowercase was click " + text)
    settext(newtext)
    if(text === ""){
      props.showAlert("There is no text to convert in Lowercase" , "danger")
    }
    else if(text === text.toLowerCase()){
      props.showAlert("The text is already in Lowercase" , "warning")
    }
    else{
      props.showAlert("Converted to Lowercase" , "success")
    }
}

const emptytextarea = () =>{
    let newtext = "";
    // console.log("Remove Text was click " + text)
    settext(newtext)
    if(text === ""){
      props.showAlert("The textarea is already empty" , "danger")
    }
    else{
      props.showAlert("The text is removed" , "success")
    }
}

const copytext = () =>{
   navigator.clipboard.writeText(text);
    // console.log("Copy Text was click " + text)
    // settext(newtext)
    if(text === ""){
      props.showAlert("There is no text to copied in clipboard" , "danger")
    }
    else{
      props.showAlert("The text is copied to clipboard" , "success")
    }
}
const removeextraspaces = () =>{
  // It is used to remove spaces both ends only
  // let newtext = text.trim();

  // It is used to remove all the spaces in the text and also both ends
  // let newtext = text.replace(/\s+/g , ""); 

  // It is used to remove spaces at bot ends and between text set one space
  // let newtext = text.replace(/\s+/g , " ").trim();
  
  // It is used to split text where one or more space come then join with the single space and also join the multiple line text in one line
  // let newtext = text.split(/\s+/).join(" ").trim();

  // It is used to split text where one or more space come then join with the single space 
  let newtext = text.split(/[ ]+/).join(" ");
  if(text === ""){
    props.showAlert("There is no text so there is no extra spaces to remove" , "danger")
  }
  else{
    props.showAlert("The extra spaces is removed" , "success")
  }

  settext(newtext)
    // console.log("Copy Text was click " + text)
    // settext(newtext)
}

const handleonchange = (event) =>{
    // console.log("On Change")
    settext(event.target.value)
}



useEffect(()=>{
  const countwords = () =>{
    if(text.length === 0){
      updatewordsnum(0)
    }
    else{
      let num =1;
      for(let i=0; i<text.length; i++){
        if((text.charAt(i)===" " || text.charAt(i)==="\n") && (text.charAt(i+1)!==" ")){
          num++;
        }
      }
      updatewordsnum(num);
    }
  }
  countwords();
} ,[text])

  return (
  <>
  {/* <div className="container my-3" style={{color:props.mode === "dark" ? "white" : "black"}}> */}
  <div className="container my-3" style={{color:props.mode === "light" ? "black" : "white"}}>

<h3 /*style={{color:props.modetext}}*/>{props.heading}</h3>
<div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleonchange}  id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.mode  , color:props.mode === "light" ? "black" : "white" }}></textarea>
</div>
<button disabled={text.length===0} className="btn  mx-2 my-2" onClick={convertUpperCase} style={props.buttonstyle}>Uppercase</button>
<button disabled={text.length===0} className="btn  mx-2 my-2" onClick = {convertLowerCase} style={props.buttonstyle}>Lowercase</button>
<button disabled={text.length===0} className="btn  mx-2 my-2" onClick = {emptytextarea} style={props.buttonstyle}>Remove Text</button>
<button disabled={text.length===0} className="btn  mx-2 my-2" onClick = {copytext} style={props.buttonstyle}>Copy</button>
<button disabled={text.length===0} className="btn  mx-2 my-2" onClick = {removeextraspaces} style={props.buttonstyle}>Remove Extra Spaces</button>
  </div>
<div className="container my-3" style={{color:props.mode === "light" ? "black" : "white"}}>
    <h3>Your Text Summary</h3>
    <p>{wordsnum} words and {text.length} character</p>
    <p>{0.008 *text.split(" ").length} Minutes Read</p>
    <h4>Preview</h4>
    <p>{text.length>0 ? text : "Enter the text in the above Textbox to preview the text"}</p>
</div>
  </>
  )
}
