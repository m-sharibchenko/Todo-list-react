import React, { useState } from 'react'
import { Input } from 'antd'
import './style.css'

const SearchAntd = Input.Search

export function Search () {
  const [value, setValue] = useState('')

  const onInputChange = (evt) => {
    setValue(evt.target.value)
  }

  const onSearch = () => {
    //some action with value
    setValue('')
  }

  const onEnter = () => {
    //some action with value
    setValue('')
  }

  return (
    <SearchAntd
      className="header__input-search"
      value={value}
      placeholder="input search text"
      onChange={onInputChange}
      onSearch={onSearch}
      enterButton
      onPressEnter={onEnter}/>
  )
}