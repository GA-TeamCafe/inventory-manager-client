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

module.exports = {
  onRegisterSuccess,
  onLoginSuccess,
  onPwSuccess,
  pwError,
  onLogoutSuccess,
  logoutError,
  loginError,
  registerError,
  onCreateInventoryItemSuccess
}
