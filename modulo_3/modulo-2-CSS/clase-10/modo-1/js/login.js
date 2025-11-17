document.addEventListener("DOMContentLoaded", function () {
  initUsers();
  setupEventListeners();
});

function initUsers() {
  if (!localStorage.getItem("users")) {
    const initialUsers = [
      {
        username: "admin",
        email: "admin@ejemplo.com",
        password: "admin123",
      },
      {
        username: "estudiante",
        email: "estudiante@ejemplo.com",
        password: "estudiante123",
      },
    ];
    localStorage.setItem("users", JSON.stringify(initialUsers));
  }
}

function setupEventListeners() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }

  if (registerForm) {
    registerForm.addEventListener("submit", handleRegister);
  }
}

function handleLogin(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;

  if (!username || !password) {
    showError("Por favor, completa todos los campos");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const user = users.find(
    (u) =>
      (u.username === username || u.email === username) &&
      u.password === password
  );

  if (user) {
    showSuccess("¡Inicio de sesión exitoso! Redirigiendo...");

    if (remember) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          username: user.username,
          email: user.email,
        })
      );
    } else {
      sessionStorage.setItem(
        "currentUser",
        JSON.stringify({
          username: user.username,
          email: user.email,
        })
      );
    }

    setTimeout(() => {
      window.location.href = "../../index.html";
    }, 1000);
  } else {
    showError("Usuario o contraseña incorrectos. Por favor, intenta de nuevo.");
  }
}

function handleRegister(e) {
  e.preventDefault();

  const username = document.getElementById("reg-username").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value;
  const passwordConfirm = document.getElementById("reg-password-confirm").value;

  if (!username || !email || !password || !passwordConfirm) {
    showError("Por favor, completa todos los campos");
    return;
  }

  if (username.length < 3) {
    showError("El nombre de usuario debe tener al menos 3 caracteres");
    return;
  }

  if (!isValidEmail(email)) {
    showError("Por favor, ingresa un email válido");
    return;
  }

  if (password.length < 6) {
    showError("La contraseña debe tener al menos 6 caracteres");
    return;
  }

  if (password !== passwordConfirm) {
    showError("Las contraseñas no coinciden");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const userExists = users.some(
    (u) => u.username === username || u.email === email
  );

  if (userExists) {
    showError("El usuario o email ya está registrado. Por favor, usa otro.");
    return;
  }

  const newUser = {
    username: username,
    email: email,
    password: password,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  showSuccess("¡Registro exitoso! Ahora puedes iniciar sesión.");

  document.getElementById("register-form").reset();

  setTimeout(() => {
    showLogin();
    document.getElementById("username").value = username;
  }, 2000);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showError(message) {
  const registerBox = document.getElementById("register-box");
  const isRegisterVisible =
    registerBox && !registerBox.classList.contains("is-hidden");

  let errorDiv, errorText, successDiv;

  if (isRegisterVisible) {
    errorDiv = document.getElementById("error-message-register");
    errorText = document.getElementById("error-text-register");
    successDiv = document.getElementById("success-message-register");
  } else {
    errorDiv = document.getElementById("error-message");
    errorText = document.getElementById("error-text");
    successDiv = document.getElementById("success-message");
  }

  if (errorDiv && errorText) {
    errorText.textContent = message;
    errorDiv.classList.remove("is-hidden");

    if (successDiv) {
      successDiv.classList.add("is-hidden");
    }

    setTimeout(() => {
      if (isRegisterVisible) {
        closeErrorRegister();
      } else {
        closeError();
      }
    }, 5000);
  }
}

function showSuccess(message) {
  const registerBox = document.getElementById("register-box");
  const isRegisterVisible =
    registerBox && !registerBox.classList.contains("is-hidden");

  let successDiv, successText, errorDiv;

  if (isRegisterVisible) {
    successDiv = document.getElementById("success-message-register");
    successText = document.getElementById("success-text-register");
    errorDiv = document.getElementById("error-message-register");
  } else {
    successDiv = document.getElementById("success-message");
    successText = document.getElementById("success-text");
    errorDiv = document.getElementById("error-message");
  }

  if (successDiv && successText) {
    successText.textContent = message;
    successDiv.classList.remove("is-hidden");

    if (errorDiv) {
      errorDiv.classList.add("is-hidden");
    }
  }
}

function closeError() {
  const errorDiv = document.getElementById("error-message");
  if (errorDiv) {
    errorDiv.classList.add("is-hidden");
  }
}

function closeErrorRegister() {
  const errorDiv = document.getElementById("error-message-register");
  if (errorDiv) {
    errorDiv.classList.add("is-hidden");
  }
}

function showRegister() {
  const loginBox = document.querySelector(".box");
  const registerBox = document.getElementById("register-box");

  if (loginBox && registerBox) {
    loginBox.classList.add("is-hidden");
    registerBox.classList.remove("is-hidden");
    closeError();
    closeErrorRegister();
  }
}

function showLogin() {
  const loginBox = document.querySelector(".box");
  const registerBox = document.getElementById("register-box");

  if (loginBox && registerBox) {
    loginBox.classList.remove("is-hidden");
    registerBox.classList.add("is-hidden");
    closeError();
    closeErrorRegister();
  }
}
