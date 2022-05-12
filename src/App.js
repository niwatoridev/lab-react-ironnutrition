
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import { Button } from "antd"


// EXAMPLE
// To start using the pre-made Ant Design components we must first import them:


function App() {
const [food, foodState] = useState(foods);
const [mostrarFormulario, setMostrarFormulario] = useState(true)
const [comidas, setFoods] = useState(foods)
 
function addFood(comida){
  
  const newArr = [...comidas, comida]
  foodState(newArr)
  console.log(newArr)
}

return (
    <div className='masterGrid'>
    <div className='formGrid'>
    {mostrarFormulario && <AddFoodForm addFood={addFood}/>}
    <Button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
    {mostrarFormulario ? "Hide form" : "Add new food"}
    </Button>
 
    </div>
    <div className='foodGrid'>
      {food.map((comida) => {
      return  <FoodBox food={ comida } />
      })}
    </div>
    </div>
  );
}

export default App;
