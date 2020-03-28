import React, { useEffect } from "react";
import * as requests from '../requests/Requests'




function App() {

  useEffect(async () => {
    let data = await requests.all(1)
    console.log(data)
    //let responce = await data.json();
    //console.log(responce)
  })


  return (
    <div className="container">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/">
          Home
        </a>
      </nav>
      <h1>Starships get</h1>
    </div>
  );
}

export default App;
