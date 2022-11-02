// import logo from './logo.svg';
import "./App.css";
import * as React from "react";
import MyButton from "./MyButton";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
//////////////////////////////////////////////////////////////////////

//Basic React – Exercise 2.1 – Hello React Hook

// export default function App() {
//   const [name] = React.useState("Adam");
//   const [age] = React.useState(35);

//   return (
//     <>
//       <p>My name is {name}</p>
//       <p>My age is {age}</p>
//     </>
//   );
// }
////////////////////////////////////////////////////////////////////////

//Basic React – Exercise 2.2 – Nice to meet React Hook
function App() {
  const [name, setName] = React.useState("Adam");
  const [age, setAge] = React.useState(35);

  return (
    <>
      <section>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>My name is {name}</p>
      </section>
      <section>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>My age is {age}</p>
      </section>
    </>
  );
}
export default App;
