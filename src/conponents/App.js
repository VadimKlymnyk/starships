import React, { useEffect, useState } from "react";
import * as requests from '../requests/Requests'
import ListStarships from './ListStarships'




function App() {

  let [data, setData] = useState([])

  useEffect(async () => {
    let data = await requests.all(1)
    console.log(data)
    console.log(data.results)
    setData(data.results)
    //let responce = await data.json();
    //console.log(responce)
  }, [])


  return (
    <div className="container">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/">
          Home
        </a>
      </nav>
      <h1>Starships get</h1>
      <div>{<ListStarships lists={data}/>}</div>
    </div>
  );
}

export default App;
