import React from 'react'
import { Application } from './components/Application'
import { Redirect } from 'react-router-dom'

const homePg = {
  path: '/',
  isExact: true,
  component: () => <Redirect to='/app'/>,
}

export const app = {
  path: '/app',
  isExact: false,
  component: Application,
}

export const prefs = {
  path: '/prefs',
  isExact: false,
  component: () => <div>userprof</div>,
}

export const routes = [homePg, app, prefs]
