import React, { useState } from 'react'
import  "./app.css"

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Enter valid weight and height");
    }
    else {
      let bmi = weight / (height * height) * 703
      setBMI(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("You are under Weight")

      }
      else if (bmi >= 25 && bmi <= 30) {
        setMessage("You are Healthy")
      }
      else {
        setMessage(" You are Overweight")
      }
    }
  }
  let reload = () => {
    window.location.reload();
  }

  return (
    <div className="app">
      <div className=" container">
        <h2 className="center"> BMI Calculator   </h2>
        <form onSubmit={calcBmi}>
          <div>
            <label> Weight(lbs)</label><br></br>
            <input value={weight} onChange={(event) => setWeight(+event.target.value)} placeholder="0" />
          </div>
          <div>
            <label> Height(inches)</label><br />
            <input value={height} onChange={(event) => setHeight(+event.target.value)} placeholder="0" />
          </div>
          <div>
            <button className="btn" type='submit' >Submit</button>
            <button className="btn btn-outline" onClick={reload} type='submit'>Reload</button>
          </div>
        </form>
        <div className="center">
          <h3> Your BMI is :{bmi} </h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;