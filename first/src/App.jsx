import React from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  // Define different types of variables
  const stringVar = "Hello, World!";
  const numberVar = 42;
  const booleanVar = true;
  const arrayVar = ["Apple", "Banana", "Cherry"];
  const objectVar = { name: "John Doe", age: 30 };
  const jsxElement = <p>This is a JSX element.</p>;

  return (
    <div className="app-container">
      <h1>Rendering Variables in React</h1>
      <p><strong>String Variable:</strong> {stringVar}</p>
      <p><strong>Number Variable:</strong> {numberVar}</p>
      <p><strong>Boolean Variable:</strong> {booleanVar ? "True" : "False"}</p>
      <p><strong>Array Variable:</strong></p>
      <ul>
        {arrayVar.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p><strong>Object Variable:</strong> Name: {objectVar.name}, Age: {objectVar.age}</p>
      <div><strong>JSX Element:</strong> {jsxElement}</div>
    </div>
  );
};

export default App;