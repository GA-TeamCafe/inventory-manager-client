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

const seeWarehouseItems = function(event) {
  event.preventDefault()
  api.getWarehouseItems()
    .then(ui.onGetWarehouseSuccess)
    .catch(ui.onCreateInventoryError)
  $("#index-items-form")[0].reset()
}

const seeInventoryItems = function(event) {
  event.preventDefault()
  api.getInventoryItems()
    .then(ui.onGetInventorySuccess)
    .catch(ui.onCreateInventoryError)
  $("#index-form")[0].reset()
}

const seeOneInventoryItem = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.seeOneInventoryItem(data)
    .then(ui.onSeeOneInventorySuccess)
    .catch(ui.onCreateInventoryError)
  $("#see-one-form")[0].reset()
}

const updateInventoryItem = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updateInventoryItem(data)
    .then(ui.onUpdateInventorySuccess)
    .catch(ui.onCreateInventoryError)
  $("#update-form")[0].reset()
}

const deleteInventoryItem = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.deleteInventoryItem(data)
    .then(ui.onDeleteInventorySuccess)
    .catch(ui.onCreateInventoryError)
  $("#delete-form")[0].reset()
}

module.exports = {
  userLogin,
  userRegister,
  userPwChange,
  userLogout,
  createInventoryItem,
  seeWarehouseItems,
  seeInventoryItems,
  seeOneInventoryItem,
  updateInventoryItem,
  deleteInventoryItem
}
