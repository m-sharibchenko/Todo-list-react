import React from 'react'
import { useHistory } from 'react-router-dom'
import { pricing } from '../../../../routes/user.routes/pricingRoutes'
import './style.css'
import { EditUserInfo } from '../EditUserInfo'
import { ACCOUNT_INFO_TITLES } from '../../constants/accountInfoTitles'
import { userDataPropTypes } from '../../../../propTypes'
import { Button } from 'antd'

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
      <div className="account-info">
        <p className="account-info__title">Тариф</p>

        <div className="account-info__tariff">
          <div className="account-info__current-tariff">
            <p className="account-info__tariff-title">Бесплатный тариф</p>
            <span className="account-info__tariff-info">
              Сейчас у вас Бесплатный тариф.
              Тариф Pro дает еще больше возможностей для отличной работы.
            </span>
          </div>


          <Button type="primary" onClick={onChangeTariffClick}>
            Подключить Pro
          </Button>
        </div>
      </div>

      <div className="account-info">
        <p className="account-info__title">Личная информация</p>

        <ul>
          <li>
            <p>{ACCOUNT_INFO_TITLES.photo}</p>
            <Button>change photo</Button>
          </li>

          <EditUserInfo title={ACCOUNT_INFO_TITLES.name} item={props.userData.userName}/>
          <EditUserInfo title={ACCOUNT_INFO_TITLES.email} item={props.userData.email}/>
        </ul>
      </div>

      <div className="account-info">
        <Button onClick={onDeleteAccClick}
                className="account-info__btn-delete-acc"
        >
          Удалить аккаунт
        </Button>
      </div>
    </>
  )
}

UserAccountCmp.propTypes = {
  userData: userDataPropTypes,
}