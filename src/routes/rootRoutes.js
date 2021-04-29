import React from 'react'
import { Todos } from '../modules/Todos'
import { Redirect } from 'react-router-dom'

export const homePg = {
  path: '/',
  isExact: true,
  component: () => <Redirect to='/app/today'/>,
}

export const app = {
  path: '/app',
  isExact: false,
  component: Todos,
}

export const prefs = {
  path: '/prefs',
  isExact: false,
  component: () => <div>userprof</div>,
}

export const rootRoutes = [homePg, app, prefs]
