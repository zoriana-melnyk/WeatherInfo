import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "ffc1d3783f226e08697ca0a486d51551";

class App extends React.Component{

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const API_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await API_url.json();
    console.log(data);
  }

  render(){
    return(
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather}/>
        <Weather />
      </div>
    );
  }
};

export default App;
