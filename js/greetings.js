const loginForm= document.querySelector("#login-form")
const name = document.querySelector("#name");
const hi = document.querySelector("#greetings");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME="hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = name.value;
  localStorage.setItem("username", username);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  hi.innerText=`Hello ${username}`;
  hi.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}