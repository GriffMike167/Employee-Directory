import React from "react";
import Main from "./components"
import Wrapper from "./components"
import Header from "./components"
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
          <Main />
      </Wrapper>
    </div>
    
  );
}

export default App;
