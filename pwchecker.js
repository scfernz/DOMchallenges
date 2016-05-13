//Check user name and password

var userName;
var password;

//Validate user name
function checkUser(userName) {
  if (userName.length <= 5) {
    alert("Username is too short");
    return false;
  }
  if (userName.includes("!") || userName.includes("#") || userName.includes("$")) {
    alert("Username contains illegal character");
    return false;
  }
  if (userName.toLowerCase() === "username") {
    alert("Username cannot be 'username'");
    return false;
  }
  if (userName === password) {
    alert("Username cannot be the same as password");
    return false;
  }

  else {
    return true;
  }
}

//Validate password
function checkPassword(password) {
  if (password.length <= 5) {
    alert("Password is too short");
    return false;
  }
  if (!password.includes("!") && !password.includes("#") &&       !password.includes("$")) {
    alert("Password must contain one: #$!");
    return false;
  }
  if (password.toLowerCase() === "password") {
    alert("Password cannot be 'password'");
    return false;
  }
  if (password === userName) {
    alert("Password cannot be the same as username");
    return false;
  }

  else {
    return true;
  }
}

//Prompt user input and run both functions
function validate() {
  do {
    userName = prompt("Enter Username:");
    password = prompt("Enter Password:");
    var tru = checkUser(userName);
    var pas = checkPassword(password);
  }
  while (tru === false || pas === false);
    alert("Open says a me.");
}

validate();
