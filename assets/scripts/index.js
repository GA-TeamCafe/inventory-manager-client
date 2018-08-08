'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events.js')

$(() => {
$("#log-in-form").on("submit", events.userLogin)
$("#register-form").on("submit", events.userRegister)
$("#change-pw-form").on("submit", events.userPwChange)
$("#logout-form").on("submit", events.userLogout)
$("#create-form").on("submit", events.createInventoryItem)
$("#index-form").on("submit", events.seeInventoryItems)
$("#update-form").on("submit", events.updateInventoryItem)
})
