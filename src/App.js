import React, { useState } from 'react';
import './App.css';
import side1 from './images/side1.png';

function App() {
  const [cvcValue, setcvcValue] = useState("")
  const [cardMonthDate, setcardMonthDate] = useState("")
  const [cardYearDate, setcardYearDate] = useState("")
  const [cardHolderName, setcardHolderName] = useState("")
  const [isValid, setIsValid] = useState(true);
  const [cardHolderNumber, setcardHolderNumber] = useState()
  const [update, setUpdate] = useState(false)


  function holderName(event) {
    const value = event.target.value;
    setcardHolderName(value)

    const containsNumbers = /\d/.test(value);
    setIsValid(!containsNumbers);
  }


  function holderNumber(e) {
    const value = e.target.value;

    // Remove spaces and check if input contains alphabets or spaces
    const containsInvalidChars = /[a-zA-Z]/.test(value);

    // Remove spaces and add a space after every 4 digits
    const formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');

    setcardHolderNumber(formattedValue);
    setIsValid(!containsInvalidChars);
  }
  function monthHandle(e) {
    setcardMonthDate(e.target.value)
  }
  function yearHandle(e) {
    setcardYearDate(e.target.value)
  }
  function cvcHandle(e) {
    setcvcValue(e.target.value)
  }
  function dataUpdate() {
    

    if (
      !cardHolderName ||
      !cardHolderNumber ||
      !cardMonthDate ||
      !cardYearDate ||
      !cvcValue
    ) {
      return;
    }
  
      setUpdate(true)
    

      setTimeout(() => {
        setcvcValue("");
        setcardMonthDate("");
        setcardYearDate("");
        setcardHolderName("");
        setIsValid(true);
        setcardHolderNumber("");
        setUpdate(false);
      }, 5000);
    }



  return (
    <section>
      <div className="leftSide">
        <div className="frontCard">

          <div className="logosCard">
            <div className="whiteCircle"></div>
            <div className="normalCircle"></div>
          </div>

            <div className="cardNumber">
              <p>{!update ? "0000 0000 0000 0000" : cardHolderNumber}</p>
            </div>

          <ul className="nameAndDate">
            <div>
              <p>{!update ? "jane applessed" : cardHolderName}</p>
            </div>
              <li> {!update?"00/00":(cardMonthDate + "/" + cardYearDate)}</li>
                  </ul>
        </div>

        <div className="backCard">
        <p>{!update?"000":cvcValue}</p>
        </div>
      </div>

      <div id="flex">

        <picture>
          <img src={side1} alt="" />
        </picture>

        <div className="rightSide">
          <div className="form">

            <div>
              <label htmlFor="cardHolderName">CARDHOLDER NAME</label> <br />
              <input id="cardHolderName" type="text" placeHolder="e.g. Jane Applessed" maxlength="18" Required value={cardHolderName}
                onChange={(holderName)}
                className={!isValid ? 'invalid' : ''}
              />
              {!isValid && <p className="error">It's  invalid</p>}
            </div>
          </div>


          <div>
            <label htmlFor="cardNumber">CARD NUMBER</label><br />
            <input id="cardNumber" type="numbers" placeHolder="e.g. 1234 5678 9123 0000" maxLength="19" Required value={cardHolderNumber} onChange={(holderNumber)} />
            {!isValid && <p className="error">It's  invalid</p>}


            <div className="expAndCvc">

              <div>
                <label htmlFor="expiryMonth">EXP. DATE (MM/YY)</label><br />
                <div id="flex" className="expDate" >
                  <input id="expiryMonth" type="text" maxLength="2" Required placeHolder="MM" value={cardMonthDate} onChange={monthHandle} />
                  <input id="expiryYear" type="text" maxLength="2" Required placeHolder="YY" value={cardYearDate} onChange={yearHandle} />
                </div>
              </div>

              <div>
                <label htmlFor="cvcCode">CVC</label><br />
                <input id="cvcCode" type="text" placeHolder="e.g. 123" maxLength="3" Required value={cvcValue} onChange={cvcHandle} />
              </div>
            </div>

            <button onClick={(dataUpdate)} >Confirm</button>
          </div>
        </div>
      </div>


    </section>
  );
}

export default App;