import React from "react";

import "./App.css";
import AppRouter from "./AppRouter/AppRouter";
import ResponsiveAppBar from "./Components/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <ResponsiveAppBar />
      </div>
      <div style={{flex:1}} >
        <AppRouter />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
