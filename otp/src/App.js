
import './App.css';

import { useEffect,useState } from 'react';

function App() {

const [minutes,setMinutes]= useState(1);
const [seconds, setSeconds] = useState(10)

useEffect(()=> {
  const interval = setInterval(()=> {
    if( seconds >0) {
      setSeconds(seconds-1);
    }

    if(seconds===0){
      if(minutes===0) {
        clearInterval(interval);
      }  else{
          
        setSeconds(59);
        setMinutes(minutes - 1);
        }
    }
  },1000)

  return () => {
    clearInterval(interval);
  };
},[seconds])

const resendOTP = () => {
  setMinutes(1);
  setSeconds(10);
};

  return (
    <div className="container">
      <div className='timer'>
        {seconds > 0 || minutes > 0 ?(
          <p>
            <span>
              {minutes < 10 ? `0${minutes}` :minutes}:
              {seconds < 10 ? `0${seconds}` :seconds}
            </span>
          </p>
        ):(
          <p>Vaxt bitdi</p>
        )} 

          <button onClick={resendOTP}>Resend OTP</button>

      </div>

    </div>
  );
}

export default App;
