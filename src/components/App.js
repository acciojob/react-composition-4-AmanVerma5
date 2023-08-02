
import React from "react";
import './../styles/App.css';
import Form from "./Form";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Form />
    </div>
  )
}

export default App



// Create a Form component that accepts a onSubmit callback and a list of fields objects with properties name, type, and label.

// The component should render an input field for each object in the fields prop, with the label property as the label for the input field.

// When the form is submitted, the onSubmit callback should be called with an object containing the values of each input field.