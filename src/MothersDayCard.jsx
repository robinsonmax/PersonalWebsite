import './css/mothersday.css'
import yoda1 from './img/baby-yoda-1.png';
import yoda2 from './img/baby-yoda-2.png';
import {useState} from 'react';

export default function MothersDay() {

  const [yodaImg, setYodaImg] = useState(yoda1);

  setInterval(() => {
    setYodaImg(yoda2)
  }, 1250);

  return (
    <div id="content">
      <div>
        <h1>Yoda best mum!</h1>
        <div className="yoda-container">
          <img src={yodaImg}/>
        </div>
        <h2>Happy Mother's Day</h2>
        <h2>From, Max</h2>
      </div>
    </div>
  )
}
