const API = "http://127.0.0.1:8000/api/v1/auth/";

if (localStorage.getItem("access") && window.location.pathname.includes("index.html")) {
    window.location.href = "dashboard.html";
}

//login
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const res = await fetch(API + "login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
        alert("Invalid credentials");
    }
});

//register
document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const res = await fetch(API + "register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value
        })
    });

    if (res.ok) {
        alert("Registered successfully. Please login.");
        window.location.href = "index.html";
    } else {
        alert("Registration failed");
    }
});

function logout() {
    localStorage.removeItem("access");
    window.location.href = "index.html";
}
