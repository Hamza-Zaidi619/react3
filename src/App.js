import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/buttons';
import Input from './component2/input';


function App() {

  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  let update = (event) => {
    setText(event.target.value);
  }

  let add = () => {
    items.push(text)
    setItems([...items])
    setText("");
  }

  let editItem = (i) => {
    let edited = prompt("Enter text : ")
    items[i] = edited
    setItems([...items])
  }


  let deleteItem = (i) => {
    items.splice(i,1)// delete kardaiga
    setItems([...items])
  }
  let deleteall=()=>{
    items.length=0
    setItems([...items])
  }

  return (
    <div className="maindiv">
      <div className="centerdiv">
        <h1>TODOAPP</h1>
        <div className='inputField'>
       
          <Input change={update} type="text" placeholder='Enter item' value={text} />
          {/* <button className='add' onClick={add}>+</button> */}
          <Button click={add} label="+"/>
          <button onClick={deleteall}>DELETE ALL
          </button>
        </div>

        <ol>
          {
            items.map((x, i) => {
              return (
                <div key={i}>
                  <li>{x} <Button label="edit" click={() => editItem(i)}/><Button label="delete" click={() => deleteItem(i)}/></li>
                </div>
              )
            })}
        </ol>

      </div>
    </div>
  );
}
export default App;
