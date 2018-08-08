const store = require('./store.js')


const onLoginSuccess = function(data) {
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  const scoreHTML = (`
      <h4>User Logged In</h4>
      <p>Welcome to IMS</p>
      <br>
    `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
  $(".form2").css("display", "none")
  $(".form1").css("display", "none")
  $(".user-dash").css("display", "flex")
  store.user = data.user
}

const loginError = function(error) {
  $('.modal-body').html('')
  $("#myModalLabel").html('Error')
  const scoreHTML = (`
        <h4>Oh no! Something Went Wrong!</h4>
        <p>Try logging in again</p>
        <br>
      `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const onRegisterSuccess = function(data) {
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  const scoreHTML = (`
      <h4>User Registered!</h4>
      <p>Log in to enter IMS</p>
      <br>
    `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
  $(".form1").css("display", "none")
}

const registerError = function(error) {
  if (error) {
    $('.modal-body').html('')
    $("#myModalLabel").html('Error')
    const scoreHTML = (`
        <h4>Oh no! Something Went Wrong!</h4>
        <p>Try registering again</p>
        <br>
      `)
    $(".modal-body").html(scoreHTML)
    $("#myModal").modal('show')
  }
}

const onPwSuccess = function() {
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  const scoreHTML = (`
      <h4>User Changed Password</h4>
      <br>
    `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const pwError = function(error) {
  if (error) {
    $('.modal-body').html('')
    $("#myModalLabel").html('Error')
    const scoreHTML = (`
        <h4>Oh no! Something Went Wrong!</h4>
        <p>Try entering passwords again</p>
        <br>
      `)
    $(".modal-body").html(scoreHTML)
    $("#myModal").modal('show')
  }
}

const onLogoutSuccess = function() {
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  const message = (`
  <h4>User Logged out</h4>
  <h3>Thank You!</h3>
  `)
  $(".modal-body").html(message)
  $("#myModal").modal('show')

  $(".user-dash").css("display", "none")
  $(".form1").css("display", "flex")
  $(".form2").css("display", "flex")
}

const logoutError = function(error) {
  if (error) {
    $('.modal-body').html('')
    $("#myModalLabel").html('Error')
    const scoreHTML = (`
        <h4>Oh no! Something Went Wrong!</h4>
        <p>Try logging out again</p>
        <br>
      `)
    $(".modal-body").html(scoreHTML)
    $("#myModal").modal('show')
  }
}

const onCreateInventoryItemSuccess = function(data) {
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  console.log(data)
  const scoreHTML = (`
      <h4>Item Added</h4>
      <br>
    `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const onCreateInventoryError = function(error) {
  if (error) {
    $('.modal-body').html('')
    $("#myModalLabel").html('Error')
    const scoreHTML = (`
        <h4>Oh no! Something Went Wrong!</h4>
        <p>Try adding the item again</p>
        <br>
      `)
    $(".modal-body").html(scoreHTML)
    $("#myModal").modal('show')
  }
}

const getInventoryError = function(error) {
  if (error) {
    $('.modal-body').html('')
    $("#myModalLabel").html('Error')
    const scoreHTML = (`
        <h4>Oh no! Something Went Wrong!</h4>
        <p>Try again</p>
        <br>
      `)
    $(".modal-body").html(scoreHTML)
    $("#myModal").modal('show')
  }
}

const onGetWarehouseSuccess = function(data) {
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  console.log(data.items)
  // loop through API data
  data.items.forEach(item => {
    // build HTML element with data
    const scoreHTML = (`
      <h4>All Inventory</h4>
      <p>Name: ${item._id}</p>
      <p>Name: ${item.name}</p>
      <p>Quantity on Hand: ${item.description}</p>
      <p>Quantity Needed: ${item.price}</p>
      <br>
    `)
    $(".modal-body").append(scoreHTML)
    $("#myModal").modal('show')
  })
}

const onGetInventorySuccess = function(data) {
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  console.log(data)
  // loop through API data
  data.inventories.forEach(inventory => {
    // build HTML element with data
    const scoreHTML = (`
      <h4>All Inventory</h4>
      <p>Name: ${inventory._id}</p>
      <p>Name: ${inventory.itemReference.name}</p>
      <p>Quantity on Hand: ${inventory.onhand}</p>
      <p>Quantity Needed: ${inventory.needed}</p>
      <br>
    `)
    $(".modal-body").append(scoreHTML)
    $("#myModal").modal('show')
  })
}

const onSeeOneInventorySuccess = function(data) {
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  // data.inventory
  console.log(data.inventory)
  const scoreHTML = (`
      <h4>Inventory Item</h4>
      <br>
      <p>Name: ${data.inventory._id}</p>
      <p>Name: ${data.inventory.itemReference.name}</p>
      <p>Quantity on Hand: ${data.inventory.onhand}</p>
      <p>Quantity Needed: ${data.inventory.needed}</p>
      <br>
    `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const onUpdateInventorySuccess = function() {
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  const scoreHTML = (`
      <h4>Item Updated</h4>
      <br>
    `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const onDeleteInventorySuccess = function() {
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  const scoreHTML = (`
      <h4>Item Deleted Successfully!</h4>
      <br>
    `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

module.exports = {
  onRegisterSuccess,
  onLoginSuccess,
  onPwSuccess,
  pwError,
  onLogoutSuccess,
  logoutError,
  loginError,
  registerError,
  onCreateInventoryItemSuccess,
  onCreateInventoryError,
  onGetWarehouseSuccess,
  onGetInventorySuccess,
  getInventoryError,
  onSeeOneInventorySuccess,
  onUpdateInventorySuccess,
  onDeleteInventorySuccess
}
