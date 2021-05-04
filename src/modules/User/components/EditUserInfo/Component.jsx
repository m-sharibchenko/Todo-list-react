import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

export function EditUserInfoCmp (props) {
  const { item, title } = props

  const [ isEditHidden, setIsEditHidden ] = useState(false)
  const [ isSaveHidden, setIsSaveHidden ] = useState(true)
  const [ isCancelHidden, setIsCancelHidden ] = useState(true)

  const [ value, setValue ] = useState(item)

  const onEditClick = () => {
    setIsEditHidden(true)
    setIsSaveHidden(false)
    setIsCancelHidden(false)
  }

  const onSaveClick = () => {
    const { saveChanges } = props

    console.log(value)
    saveChanges(value, title)

    setIsEditHidden(false)
    setIsSaveHidden(true)
    setIsCancelHidden(true)
  }

  const onValueChange = (evt) => {
    setValue(evt.target.value)
  }

  const onCancelClick = () => {
    setValue(item)

    setIsEditHidden(false)
    setIsSaveHidden(true)
    setIsCancelHidden(true)
  }

  return (
    <li>
      <p>{title}</p>
      <p>{value}</p>
      <input
        style={{ display: isSaveHidden ? 'none' : null }}
        value={value}
        onChange={onValueChange}
      />
      <Button
        style={{ display: isEditHidden ? 'none' : null }}
        onClick={onEditClick}
      >
        Изменить
      </Button>
      <Button
        style={{ display: isSaveHidden ? 'none' : null }}
        onClick={onSaveClick}
      >
        Сохранить
      </Button>
      <Button
        style={{ display: isCancelHidden ? 'none' : null }}
        onClick={onCancelClick}
      >
        Отменить
      </Button>
    </li>
  )
}

EditUserInfoCmp.propTypes = {
  item: PropTypes.string,
  title: PropTypes.string,
  saveChanges: PropTypes.func,
}