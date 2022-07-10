import React from 'react'

function SelectMenu(props) {

    const options = props.lista.map((option, index) => {
        <option key ={index} value={option.value}>{option.label}</option>
    })

  return (
    <select {...props}>{options}</select>
  )
}

export default SelectMenu;