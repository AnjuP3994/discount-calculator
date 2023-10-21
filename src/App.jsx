
import './App.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {

  const [showResults, setShowResults] = useState(false);
  const [amount,setAmount]=useState('')
  const [discount,setDiscount]=useState('')
  const [discountPrice,setDiscountPrice]=useState('')
  const [savings,setSavings]=useState('')

  //discount calculation
  const calculate = (e)=>{
    let discount_price = amount*(discount/100)
    let discount_amount = amount - discount_price
    let total_savings = amount - discount_amount
    setDiscountPrice(discount_amount)
    setSavings(total_savings)
    setShowResults(true); // Show the results card
  }

  //reset
  const reset = (e)=>{
    setAmount('')
    setDiscount('')
    setDiscountPrice('')
    setSavings('')
    setShowResults(false); // Hide the results card
  }

  return (
    <div className="App">

      <div className="container border border-1 border-dark">

        <div className="head">
          <h1 className='heading'>Discount Calculator</h1>
          <p>Use the discount calculator to find out the exact amount you will save!</p>
        </div>

        <div className="input">
          <TextField id="outlined-basic" label="Amount &#8377;" variant="outlined" onChange={e=>setAmount(e.target.value)} value={amount}/>
          <br />
          <TextField id="outlined-basic" label="Discount %" variant="outlined" onChange={e=>setDiscount(e.target.value)} value={discount}/>
          <br />
          <Button onClick={calculate} variant="contained" color='success'>Calculate</Button>
          <br />
          <Button onClick={reset} variant="contained" color='error'>Reset</Button>
        </div>

        {showResults && (
        <center>
          <div className="card">
            <p className='text-center'>After Discount: <span>&#8377;{discountPrice}</span></p>
            <p className='text-center'>Your Savings: <span>&#8377;{savings}</span></p>
          </div>
        </center>
      )}

      </div>

    </div>
  );
}

export default App;
