import React,{useState} from 'react'
export default function TextForm(props) {
  const [text, setText] = useState('')

    const handleOnChange=(event)=>{
    setText(event.target.value);
  } 
  
    const handleClick1=()=>{
    let newText = text.toUpperCase();
    setText(newText)
}
  
    const handleClick2=()=>  {
    let newText = text.toLowerCase();
    setText(newText)
}

    const handleClick3=()=>  {
    let newText = '';
    setText(newText)
}

return (
  <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h2> {props.heading} </h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="appbox" rows="8"  style={{backgroundColor: props.mode==='dark'?'#1f2536':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className='btn btn-primary mx-1 my-1' onClick={handleClick1}>Convert to uppercase</button>
      <button className='btn btn-primary mx-1 my-1' onClick={handleClick2} >Convert to lowercase</button>
      <button className='btn btn-primary mx-1 my-1' onClick={handleClick3} >Clear All</button>
    <div className='container my-3'>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Character</p>
    </div>
    </div>
   
  </>
  )
}
  