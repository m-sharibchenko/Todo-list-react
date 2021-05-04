import React from 'react'
import { useHistory } from 'react-router-dom'
import { pricing } from '../../../../routes/user.routes/pricingRoutes'
import './style.css'
import { EditUserInfo } from '../EditUserInfo'
import { ACCOUNT_INFO_TITLES } from '../../constants/accountInfoTitles'
import { userDataPropTypes } from '../../../../propTypes'

export function UserAccountCmp (props) {
  const history = useHistory()

  const onChangeTariffClick = () => {
    history.push(pricing.path)
  }

  const onDeleteAccClick = () => {
  //  запрос на сервер с id из стэйта
  }

  return (
    <>
      <div className="user-account">
        <p>Тариф</p>
        <p>Бесплатный тариф</p>
        <span>Сейчас у вас Бесплатный тариф. Тариф Pro дает еще больше возможностей для отличной работы.</span>
        <button onClick={onChangeTariffClick}>Подключить Pro</button>
      </div>

      <div className="user-account">
        <p>Личная информация</p>
        <ul>
          <li>
            <p>{ACCOUNT_INFO_TITLES.photo}</p>
            <button>change photo</button>
          </li>
          <EditUserInfo title={ACCOUNT_INFO_TITLES.name} item={props.userData.userName}/>
          <EditUserInfo title={ACCOUNT_INFO_TITLES.email} item={props.userData.email}/>
        </ul>
      </div>

      <div className="user-account">
        <button onClick={onDeleteAccClick}>Удалить аккаунт</button>
      </div>
    </>
  )
}

UserAccountCmp.propTypes = {
  userData: userDataPropTypes,
}