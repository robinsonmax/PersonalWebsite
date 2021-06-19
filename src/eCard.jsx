import React, { useState } from 'react';
import './css/eCard.css'

export default function ECard (props) {

  const [state, setState] = useState("closed")

  return (
    <>
      <div id="card" className={state}>
          <div id="envelope-wrapper" onClick={() => {
            if(state !== "closed")
              return
            setState("opening")
            setTimeout(() => {
              setState("open")
            },900)
          }}>
              <div id="envelope">
                  <img id="env-back" className="env-component"  src="/img/envelope-back.svg" alt="Envelope Back"/>
                  <img id="env-fold" className="env-component" src="/img/envelope-fold.svg" alt="Envelope Fold"/>
                  <div id="content" style={{background:`url(${props.background}) no-repeat center`,backgroundSize: "cover"}}>
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
