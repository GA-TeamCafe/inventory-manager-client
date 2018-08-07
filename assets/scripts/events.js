const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields')

const userLogin = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.login(data)
    .then(ui.onLoginSuccess)
    .catch(ui.loginError)
  $("#log-in-form")[0].reset()
}

const userRegister = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.register(data)
    .then(ui.onRegisterSuccess)
    .catch(ui.registerError)
  $("#register-form")[0].reset()
}

const userPwChange = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.pwChange(data)
    .then(ui.onPwSuccess)
    .catch(ui.pwError)
  $("#change-pw-form")[0].reset()
}

const userLogout = function(event) {
  event.preventDefault()
  api.logout()
    .then(ui.onLogoutSuccess)
    .catch(ui.logoutError)
}

const createInventoryItem = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createItem(data)
    .then(ui.onCreateInventoryItemSuccess)
    .catch(ui.onCreateInventoryError)
  $("#create-form")[0].reset()
}


module.exports = {
  userLogin,
  userRegister,
  userPwChange,
  userLogout,
  createInventoryItem
}
