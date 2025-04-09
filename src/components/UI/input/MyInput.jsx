import classes from "./MyInput.module.css"

import React from 'react'

function MyInput(props) {
  return (
    <input className={classes.myInput} {...props}/>
  )
}

export {MyInput}
