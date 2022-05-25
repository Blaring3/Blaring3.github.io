const logo = document.querySelector(".logo");
const side = document.querySelector(".bar");
const mousse = document.querySelector(".mousse");
const boule = document.querySelector(".boule");
const header = document.querySelector("header");
const mouses = document.querySelectorAll(".mouse");

logo.addEventListener("click", () => {
  side.classList.toggle("active");
  logo.classList.toggle("logoX");
});

// Générateur de mdp

const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ùm!:;,&é\"'(-è_ç)";
const rangeValue = document.getElementById("chiffre");
const passwordOutput = document.getElementById("Gmdp");

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Vas te faire enculé");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;

  passwordOutput.select();
  document.execCommand("copy");

  generateButton.textContent = "Copié !";

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);

// Formchecker
const bar = document.getElementById("bar");
const mdp = document.getElementById("mdp");
let prenom, password, email, Cmdp;
const form = document.querySelector("form");
const inputs = document.querySelectorAll("#mdp,#Cmdp,#Email,#Pseudo");
const errorDislay = (tag, message, valid) => {
  const container = document.querySelector("." + tag);
  const span = document.querySelector("." + tag + "> span");
  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDislay("prenom", "Raccourci ton pseudo");
    prenom = null;
  } else if (!value.match(/^[a-zA-Z0-9-._]*$/)) {
    errorDislay("prenom", "Change de Caractère");
    prenom = null;
  } else {
    errorDislay("prenom", "", true);
    prenom = value;
  }
};

const emailChecker = (value) => {
  if (
    !value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    errorDislay("Email", "Mauvais mail");
    email = null;
  } else {
    errorDislay("Email", "", true);
    email = value;
  }
};

const passwordChecker = (value) => {
  bar.classList = "";
  if (
    !value.match(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    )
  ) {
    errorDislay(
      "mdp",
      "Minimum eight characters, at least one letter, one number and one special character"
    );
    bar.classList.add("red");
    password = null;
  } else if (value.length > 14) {
    errorDisplay("mdp", "", true);
    bar.classList.add("valid");
    password = value;
  } else if (value.length > 8) {
    errorDislay("mdp", "", true);
    bar.classList.add("green");
    password = value;
  }
  if (Cmdp) confirmChecker(Cmdp);
};

const confirmChecker = (value) => {
  if (value !== password) {
    errorDislay("Cmdp", "Le mot de passe ne correspond pas");
    Cmdp = false;
  } else {
    errorDislay("Cmdp", "", true);
    Cmdp = true;
  }
};

inputs.forEach((inputs) => {
  inputs.addEventListener("input", (e) => {
    let pseudos, emails;
    switch (e.target.id) {
      case "Pseudo":
        pseudoChecker(e.target.value);
        pseudos = e.target.value;
        break;

      case "mdp":
        passwordChecker(e.target.value);
        break;
      case "Cmdp":
        confirmChecker(e.target.value);
        break;
      case "Email":
        emailChecker(e.target.value);
        emails = e.target.value;

        break;
      default:
        null;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.location.reload();
  if (password && email && Cmdp && prenom) {
    const data = {
      prenom,
      email,
      password,
    };
    console.log(data);
    storeLoc(data);
    inputs.forEach((input) => (input.value = ""));
    bar.classList = "";
    prenom = null;
    email = null;
    password = null;
    Cmdp = null;
  } else {
    alert("Veuillez remplir les cases correspondantes!!!");
  }
});

// Scorll bar menu

const menu = document.querySelector("h1");

let lastScroll = 0;
window.addEventListener("scroll", (e) => {
  if (window.scrollY > lastScroll) {
    menu.style.opacity = "0";
    logo.style.opacity = "0";
    mousse.style.opacity = "0";
    header.style.opacity = "0";
  } else if (window.scrollY < lastScroll) {
    menu.style.opacity = "1";
    logo.style.opacity = "1";
    mousse.style.opacity = "1";
    header.style.opacity = "1";
  }
  lastScroll = window.scrollY;
});

// Stocker les information
function storeLoc(info) {
  window.localStorage.Data = JSON.stringify(info);
}

// Btn pour effect de souris
mousse.addEventListener("click", () => {
  boule.classList.toggle("actives");
  for (i = 0; i < 3; i++) {
    mouses[i].classList.toggle("mouse");
  }
});

let scoll = scrollY;
window.addEventListener("scroll", (e) => {
  scoll = scrollY;
});

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.y + scoll + "px";
    mouse.style.left = e.x + "px";
  });
});

// Verification Utilisateur
const user = document.querySelector(".user");
console.log(user);
function Verif() {
  if (window.localStorage.Data) {
    let info = JSON.parse(window.localStorage.Data);
    user.innerHTML = `<h1 class='pseudo'>${info.prenom}</h1>`;
  }
}
Verif();
