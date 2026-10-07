const DEMO_USER_ID = "admin";
const DEMO_PASSWORD = "123456";

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const userId = document.getElementById("userId").value.trim();
    const password = document.getElementById("password").value;

    if (userId === DEMO_USER_ID && password === DEMO_PASSWORD) {

        sessionStorage.setItem("qr_admin_logged_in", "true");

        window.location.href = "dashboard.html";

    } else {

        loginMessage.textContent = "Invalid User ID or Password.";

    }

});
