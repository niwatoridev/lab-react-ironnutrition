import React from "react"
import "./styles.css"
import { Divider, Input, Form, Button } from 'antd';
import { useState } from "react";

// Iteration 4
function AddFoodForm(props) {

      const [name, setName] = useState("")
      const [image, setImage] = useState("")
      const [calories, setCalories] = useState("")
      const [servings, setServings] = useState("")

      
  return (
    <Form className="form">
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input 
      value={name} 
      type="text" 
      onChange={(event) => setName(event.target.value)} 
      placeholder="Enter Food Name"      
      />

      <label>Image</label>
      <Input 
      value={image} 
      type="text" 
      onChange={(event) => setImage(event.target.value)} 
      placeholder="Enter image URL here"
      />
      
      <label>Calories</label>
      <Input 
      value={calories} 
      type="number" 
      onChange={(event) => setCalories(event.target.value)}
      />

      <label>Servings</label>
      <Input 
      value={servings} 
      type="number" 
      onChange={(event) => setServings(event.target.value)}
      />

      <Button type="primary" onClick={() => {
      props.addFood({ name, calories, image, servings})
      }}>

      Create</Button>
    </Form>
  );
}

export default AddFoodForm;

    