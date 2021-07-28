import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

API_KEY = "ffc1d3783f226e08697ca0a486d51551";

class App extends React.Component{

  gettingWeather = async () => {
    const API_url = await fetch(`api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_KEY}&units=metric`);
    const data = API_url.json();
    console.log(data);
  }

  render(){
    return(
      <div>
        <Info />
        <Form />
        <Weather />
      </div>
    );
  }
};

export default App;
