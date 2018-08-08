const config = require('./config.js')
const store = require('./store.js')

const register = function(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const login = function(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const pwChange = function(data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const logout = function() {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createItem = function(data) {
  return $.ajax({
    url: config.apiUrl + '/inventories',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      "inventory": {
        "itemReference": `${data.itemReference}`,
        "onhand": `${data.onhand}`,
        "needed": `${data.needed}`
      }
    }
  })
}

const getWarehouseItems = function() {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getInventoryItems = function() {
  return $.ajax({
    url: config.apiUrl + '/inventories',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const seeOneInventoryItem = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/inventories/' + data.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateInventoryItem = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/inventories/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      "inventory": {
        "onhand": `${data.onhand}`,
        "needed": `${data.needed}`
      }
    }
  })
}

const deleteInventoryItem = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/inventories/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  register,
  login,
  pwChange,
  logout,
  createItem,
  getWarehouseItems,
  getInventoryItems,
  seeOneInventoryItem,
  updateInventoryItem,
  deleteInventoryItem
}
