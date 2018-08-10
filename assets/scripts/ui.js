const store = require('./store.js')
const JsBarcode = require('jsbarcode')

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
  $(".flex-container").css("display", "flex")
  $("#image").css("display", "none")
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
  $(".flex-container").css("display", "none")
  $("#image").css("display", "block")
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

const onCreateInventoryItemSuccess = function (data) {
  $('.modal-body2').html('')
  JsBarcode("#barcode2", `${data.inventory._id}`, {
    width: 1,
    height: 40,
    margin: 8,
    lineColor: "#333231",
    font: "monospace",
    fontSize: 16
  })
  $("#myModalLabel2").html('Success!')
  const scoreHTML = (`
      <h4>Created Inventory Entry</h4>
      <p>Inventory Reference Code Is:</p>
    `)
  $(".modal-body2").html(scoreHTML)
  $("#myModal2").modal('show')
}

const onCreateInventoryError = function (error) {
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

const getInventoryError = function (error) {
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

const onGetWarehouseSuccess = function (data) {
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  // loop through API data
  const scoreHTMLHeaders = (`
  <h4>Warehouse Items</h4>
  <div id="table">
    <div class="tr">
      <span class="th">ID</span>
      <span class="th">Name</span>
      <span class="th">Description</span>
      <span class="th">Price</span>
    </div>
  </div>
  `)

  $(".modal-body").append(scoreHTMLHeaders)

  data.items.forEach(item => {
    // build HTML element with data
    const scoreHTML = (`
      <div class="tr" data-id=${item._id}>
        <span class="td">
          ${item._id}
        </span>
        <span class="td">
          ${item.name}
        </span>
        <span class="td">
          ${item.description}
        </span>
        <span class="td">
          $${item.price}
        </span>
      </div>
    `)
    $("#table").append(scoreHTML)
    $("#myModal").modal('show')
  })
}

const onGetInventorySuccess = function (data) {
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  const scoreHTMLHeaders = (`
  <h4>Inventory Items</h4>
  <div id="table">
    <div class="tr">
      <span class="th" id="wide1">Inventory Item ID</span>
      <span class="th" id="wide2">Product Manufacturer ID</span>
      <span class="th" id="wide3">Product Name</span>
      <span class="th" id="narrow1">$</span>
      <span class="th" id="narrow2">OH</span>
      <span class="th" id="narrow3">QN</span>
      <span class="th" id="pic">Barcode</span>
    </div>
  </div>
  `)

  $(".modal-body").append(scoreHTMLHeaders)
  // loop through API data
  data.inventories.forEach(inventory => {
    // build HTML element with data
    const barcode = `${inventory._id}`
    const scoreHTML = (`
    <div class="tr" data-id=${inventory._id}>
      <span class="td">${inventory._id}</span>
      <span class="td">${inventory.itemReference._id}</span>
      <span class="td">${inventory.itemReference.name}</span>
      <span class="td">$${inventory.itemReference.price}</span>
      <span class="td">${inventory.onhand}</span>
      <span class="td">${inventory.needed}</span>
      <span class="td"><img id="b${barcode}" width="100%"></span>
    </div>
    `)
    $("#table").append(scoreHTML)
  })

  for (let i = 0; i < data.inventories.length; i++) {
    const barcode = `b${data.inventories[i]._id}`
    JsBarcode(`#${barcode}`, `${barcode}`, {
      width: 1,
      height: 40,
      margin: 8,
      lineColor: "#333231",
      font: "monospace",
      fontSize: 16
    })
  }
  $("#myModal").modal('show')
}

const onSeeOneInventorySuccess = function(data) {
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  // data.inventory
  const scoreHTML = (`
      <h4>Inventory Item</h4>
      <br>
      <p>Inventory Item ID: ${data.inventory._id}</p>
      <p>Product Manufacturer ID: ${data.inventory.itemReference._id}</p>
      <p>Name: ${data.inventory.itemReference.name}</p>
      <p>Product Price: $${data.inventory.itemReference.price}</p>
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
    <h4>Updated Inventory Item!</h4>
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
