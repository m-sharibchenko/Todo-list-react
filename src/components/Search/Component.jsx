import React from 'react'
import { useHistory } from 'react-router-dom'
import { AutoComplete, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './style.css'
import { projectsPropTypes } from '../../propTypes'

export function SearchCmp (props) {
  const history = useHistory()

  const options = props.projectsArray.map(item => {
    return {
      value: item.projectName,
      path: item.id
    }
  })

  const filterOption = (inputValue, option) => {
    return option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
  }

  const onSelectOption = (inputValue, option) => {
    history.push(option.path)
  }

  return (
    <AutoComplete
      options={options}
      className="header__input-search"
      placeholder="Поиск проекта"
      filterOption={filterOption}
      onSelect={onSelectOption}
    >
      <Input suffix={<SearchOutlined/>}/>
    </AutoComplete>
  )
}

SearchCmp.propTypes = {
  projectsArray: projectsPropTypes
}