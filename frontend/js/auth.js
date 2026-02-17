const API = "http://127.0.0.1:8000/api/v1/auth/";

function showMessage(text) {
    const msg = document.getElementById("message");
    if (msg) msg.innerHTML = `<div class="message">${text}</div>`;
}

document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const res = await fetch(API + "login/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    });

    const data = await res.json();

    if (res.ok) {
        localStorage.setItem("access", data.access);
        window.location.href = "dashboard.html";
    } else {
        showMessage("Invalid credentials");
    }
});

document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const res = await fetch(API + "register/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value
        })
    });

    if (res.ok) {
        showMessage("Registered successfully. Redirecting...");
        setTimeout(() => window.location.href = "index.html", 1000);
    } else {
        showMessage("Registration failed");
    }
});

function logout() {
    localStorage.removeItem("access");
    window.location.href = "index.html";
}
