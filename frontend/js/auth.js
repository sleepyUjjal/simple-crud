const API = "http://127.0.0.1:8000/api/v1/auth/";

document.getElementById("loginForm")?.addEventListener("submit", async e => {
    e.preventDefault();
    const res = await fetch(API + "login/", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    });
    const data = await res.json();
    localStorage.setItem("access", data.access);
    window.location.href = "dashboard.html";
});

document.getElementById("registerForm")?.addEventListener("submit", async e => {
    e.preventDefault();
    await fetch(API + "register/", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value,
            role: role.value
        })
    });
    window.location.href = "index.html";
});

function logout(){
    localStorage.removeItem("access");
    window.location.href = "index.html";
}
