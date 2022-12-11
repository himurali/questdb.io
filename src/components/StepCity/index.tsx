 
import React from "react"

import style from "./styles.module.css"
 
const StepCity = () => {
  return (
    <div>
   
<article>
  <h1>welcome to the css stepper: </h1>
  <ul> 
    <li>work only with CSS</li>
    <li>can add an item by only copying the markup</li>
    <li>small CSS foot-print</li>
  </ul>
</article>
<ul className="{style.container}">
  <li className="{style.container__item}">
    <h2>with debug  </h2>
    <div className="{style.stepper}" data-debug="data-debug">
      <input className="{style.stepper__input}" id="stepper-3-0" name="stepper-3" type="radio" checked="checked"/>
      <div className="{style.stepper__step}">
        <label className="{style.stepper__button}"  >Description</label>
      </div>
      <input className="{style.stepper__input}" id="stepper-3-1" name="stepper-3" type="radio"/>
      <div className="{style.stepper__step}">
        <label className="{style.stepper__button}"  >Duration</label>
      </div>
      <input className="{style.stepper__input" id="stepper-3-2" name="stepper-3" type="radio"/>
      <div className="{style.stepper__step}">
        <label className="{style.stepper__button}" >Due Time</label>
      </div>
      <input className="{style.stepper__input}" id="stepper-3-3" name="stepper-3" type="radio"/>
      <div className="{style.stepper__step}">
        <label className="{style.stepper__button}" >youpi</label>
      </div>
    </div>
  </li>
  
   
</ul>
  </div>
    )
  }
  
  export default StepCity
  