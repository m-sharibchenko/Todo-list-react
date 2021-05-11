import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import './style.css'

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
      <div className="user-info">
        <p className="user-info-title">{title}</p>

        <div className="edit-user-info">
          <p style={{ display: isSaveHidden ? null : 'none'}}>
            {value}
          </p>

          <Button
            type="link"
            style={{ display: isEditHidden ? 'none' : null }}
            onClick={onEditClick}
          >
            Изменить
          </Button>
        </div>
      </div>

      <div className="user-info-editor">
        <input
          style={{ display: isSaveHidden ? 'none' : null }}
          value={value}
          onChange={onValueChange}
        />

        <Button
          type="link"
          style={{ display: isSaveHidden ? 'none' : null }}
          onClick={onSaveClick}
        >
          Сохранить
        </Button>

        <Button
          type="link"
          style={{ display: isCancelHidden ? 'none' : null }}
          onClick={onCancelClick}
        >
          Отменить
        </Button>
      </div>
    </li>
  )
}

EditUserInfoCmp.propTypes = {
  item: PropTypes.string,
  title: PropTypes.string,
  saveChanges: PropTypes.func,
}