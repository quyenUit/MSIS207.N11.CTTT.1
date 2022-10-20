import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyButton from "./MyButton";
import MySection from "./MySection";
import MyComponent from "./MyComponent";
import MyList from "./MyList";
import App from "./App";
import MyInput from "./MyInput";

//– Exercise 0.4
// const array = ["First", "Second", "Third"];

// const object = {
//   first: 1,
//   second: 2,
//   third: 3,
// };
//////////////////////////////////////////////////////////////////////////

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root
//   .render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
////////////////////////////////////////////////////////////////////////////////////////////////

//   // Basic React – Exercise 0
//   // <p>
//   //   Hello, <strong>JSX</strong>
//   // </p>
//////////////////////////////////////////////////////////////////////////////////////////////

//   // Basic React – Exercise 0.1
//   // <div>
//   //   <button />
//   //   <code />
//   //   <input />
//   //   <label />
//   //   <p />
//   //   <pre />
//   //   <select />
//   //   <table />
//   //   <ul />
//   // </div>
////////////////////////////////////////////////////////////////////////////////////////////

//   // Basic React – Exercise 0.2
//   // <section>
//   //   <header>
//   //     <h1>A Header</h1>
//   //   </header>
//   //   <nav>
//   //     <a href="item">Nav Item</a>
//   //   </nav>
//   //   <main>
//   //     <p>The main content...</p>
//   //   </main>
//   //   <footer>
//   //     <small>&copy; 2021</small>
//   //   </footer>
//   // </section>
/////////////////////////////////////////////////////////////////////////////////////////////

//   //Basic React – Exercise 0.3 – React components
//   // <MySection>
//   //   <MyButton>My Button Text</MyButton>
//   // </MySection>
////////////////////////////////////////////////////////////////////////////////////////////

//   // Basic React – Exercise 0.4 – Mapping collections
//   // <section>
//   //   <h1>Array</h1>
//   //   <ul>
//   //     {array.map((i) => (
//   //       <li key={i}>{i}</li>
//   //     ))}
//   //   </ul>

//   //   <h1>Object</h1>
//   //   <ul>
//   //     {Object.keys(object).map((i) => (
//   //       <li key={i}>
//   //         <strong>{i}: </strong>
//   //         {object[i]}
//   //       </li>
//   //     ))}
//   //   </ul>
//   // </section>
////////////////////////////////////////////////////////////////////////////////////////////////

//   //Basic React – Exercise 1.0 – Hello component state
//   // <MyComponent />
///////////////////////////////////////////////////////////////////////////////////////////////

//   //Basic React – Exercise 1.1 – Nice to meet component state
//   // <MyComponent />

//   );
////////////////////////////////////////////////////////////////////////////////////////////////

// Basic React – Exercise 1.2 – Setting property value

// const appState = {
//   text: "My Button",
//   disabled: true,
//   items: ["First", "Second", "Third"],
// };

// function alias(props) {
//   root.render(
//     <main>
//       <MyButton text={props.text} disabled={props.disabled} />
//       <MyList items={props.items} />
//     </main>
//   );
// }

// render(appState);

// setTimeout(() => {
//   appState.disabled = false;
//   appState.items.push("Fourth");

//   render(appState);
// }, 1000);
// Exercise 1.2 END
///////////////////////////////////////////////////////////////////////////////////////////////

// Basic React – Exercise 1.3 – Functional components
// function render({ second }) {
//   root.render(
//     <main>
//       <MyButton />
//       <MyButton text={second.text} disabled={second.disabled} />
//     </main>
//   );
// }

// render({
//   second: {
//     text: "Second Button",
//     disabled: true,
//   },
// });
////////////////////////////////////////////////////////////////////////////////////////////////

//Basic React – Exercise 2.1 – Hello React Hook
// root.render(<App />);
///////////////////////////////////////////////////////////////////////////////////////////////

//Basic React – Exercise 2.2 – Nice to meet React Hook
// root.render(<App />);
///////////////////////////////////////////////////////////////////////////////////////////////

//Basic React – Exercise 2.3 – Gét gô react hook
//////////////////////////////////////////////////////////////////////////////////////////////

//Basic React – Exercise 3 – React Event Handling
// root.render(<MyInput />);
//////////////////////////////////////////////////////////////////////////////////////////////

const element = (
  <div style={{ fontsize: "15px" }}>Green is the prime color of the world</div>
);
ReactDOM.render(element, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
