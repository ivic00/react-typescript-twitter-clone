import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TestComp from "./components/TestComp/TestComp";
import LoginForm from "./components/LoginForm/LoginForm";
import MUITextField from "./components/TestComp/MUITextField";
import MUISelect from "./components/TestComp/MUISelect";
import MUIRadioBtn from "./components/TestComp/MUIRadioBtn";
import MUILayout from "./components/TestComp/MUILayout";

function App() {
  return (
    <div className="App">
      {/*<MUITextField />*/}
      {/*<MUISelect/>*/}
      {/*<MUIRadioBtn />*/}
      {/*<MUILayout />*/}
      <LoginForm />
    </div>
  );
}

export default App;
