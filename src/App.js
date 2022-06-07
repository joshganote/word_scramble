import React, {useState, useEffect} from 'react';

import { Oval } from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';

function App() {
  const [data, setData] = useState({});
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const sentence = data.data?.sentence;

  useEffect(() => {
    setLoading(false);
    fetch(`https://api.hatchways.io/assessment/sentences/${count}`)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
    .finally(() => setLoading(true))
  }, [count])

  // const handleNext = () => {
  //   setCount(count + 1)
  // }

  return (
    <div className="App">
      {loading ? (
        <>
          <p className="sentence">{sentence}</p>
          {/* <button onClick={handleNext} cl>Next</button> */}
        </>
      ) : (
      <div className="loading-spin">
      <Oval color="#00BFFF" height={80} width={80} />
      </div>
      )}
    </div>
  );
}

export default App;
