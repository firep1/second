import {useState} from 'react'

export default function Form(props) {
    const [name, setName] = useState('This is old');
    function changetoup(){
        console.log("onclick is fired");
        let newname=name.toLocaleUpperCase();
        setName(newname);
    }
        function changetolo(){
        let newname=name.toLocaleLowerCase();
        setName(newname);
        

    }
    function onchangefn(event){
        console.log("onchange is done");
        setName(event.target.value);
    }
  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'black'}} >
    <h1>{props.heading}</h1>
    <div className="mb-3">
      
      <textarea className="form-control" value={name} onChange={onchangefn} style={{backgroundColor:props.mode==='light'?'dark':'light'}} id="mybox" rows="6"></textarea>
    </div>
    <button type="button" className="btn btn-primary" onClick={changetoup}>Change to uppercase</button> <br/>
    <br />
    <button type="button" className="button2" onClick={changetolo}>Change to lowercase</button>
    <div>
        <h1>preview</h1>
        <br />
        <p>{name}</p>
    </div>
    </div>
        </>
        
  )
}


