function login() {
  let id = document.getElementById("loginId").value;

  if (id === "") {
    alert("Student ID is required!");
  } else {
    alert("Welcome Student " + id);
    window.location.href = "home.html";
  }
}

function signup() {
  alert("Account created successfully!");
  window.location.href = "login.html";
}