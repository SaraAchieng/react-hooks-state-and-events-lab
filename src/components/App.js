// import React, {useState} from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {

//   const [isDark, setIsDark] = useState(false)


//   // replace 'false' with a state variable that can be toggled between true and false
//   // this will be used for the Dark Mode Toggle feature
//   const appClass = isDark ? "App dark" : "App light"
//   function handleClick() {
//     setIsDark((appClass)=> !appClass)
//   }

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={handleClick} >{isDark ? "Dark mode" : "Light mode"}</button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;





import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isDark, setIsDark] = useState(false)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light"
  function handleClick(){
    setIsDark((appClass)=> !appClass)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick ={handleClick} >{isDark ? "Dark Mode" : "Light Mode" }</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;






