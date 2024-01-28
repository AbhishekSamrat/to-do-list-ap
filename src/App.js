import { useState } from 'react';
import './App.css';


function App() {
  const[inputitem,setinputitem] = useState("");
  const[item,setitem] = useState([]);

  const additem = () =>{

    if(!inputitem){

    }else{
      setitem([...item,inputitem]);
      setinputitem("");
    }


  }
  const deleteitem =(id) =>{
 const updateitem = item.filter((elem,index) => {
    return index !== id;

 });
setitem(updateitem);
  }
  const delAll=() =>{
setitem([]);
  }
  return (
    <div className="App">
         <center>
         <h1>TO - DO - LIST  APPLICATION</h1>
         <div>
         <label>
   <input type='text'  placeholder='add your item' value={inputitem}  onChange={(e)=>setinputitem(e.target.value)}></input>
   <button onClick={additem}>Add Item</button>
</label>
         </div>

         <div>
          {
            item.map((elem,index) =>{
              return(
                <div>
                <div className='content'>
                <ul>
                <li>     <span>{elem}</span>
                <button className='bttn' onClick={()=>deleteitem(index)}>Delete</button></li>
                </ul>
           
                </div>
            
                </div>
              )
          

            })
          }
    
         
         </div>
            <br></br>
            <br></br>
            <button onClick={delAll}>Remove All</button>
      
         </center>
    </div>
  );
}

export default App;
