import { useState } from "react";

function App() {
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [min, setMin] = useState();
  const [sec, setSec] = useState();
  let countDownDate = new Date("Jul 15, 2023 19:00:00").getTime();
  let a;
  let x = setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    setDay(days);
    setHour(hours);
    setMin(minutes);
    setSec(seconds);

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

  return (
    <div className='App'>
      <div className='b'>
        <h1>Oğuzhan & Melike </h1>
        <h1>Wedding</h1>
      </div>
      <div className='container'>
        <p className='time'> {day}</p>
        <p className='time'> {hour}</p>
        <p className='time'> {min}</p>
        <p className='time'> {sec}</p>
      </div>
      <div className='a'>
        <p>Gün</p>
        <p>Saat</p>
        <p>Dakika</p>
        <p>Saniye</p>
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;
