import React, { useState } from 'react';
import './css/eCard.css'

export default function ECard (props) {

  const [state, setState] = useState("closed")

  return (
    <>
      <div id="card" className={state}>
          <div id="envelope-wrapper">
              <div id="envelope">
                  <img id="env-back" className="env-component"  src="/img/envelope-back.svg" alt="Envelope Back"/>
                  <img id="env-fold" className="env-component" src="/img/envelope-fold.svg" alt="Envelope Fold"/>
                  <div id="content">
                    {/*<img src={props.img} alt="Background"/>*/}
                    <h1>{props.title}</h1>
                    <h2>{props.message}</h2>
                  </div>
                  <img id="env-body" className="env-component" src="/img/envelope-body.svg" alt="Envelope Body"/>
              </div>
          </div>
      </div>
    </>
  )

}
