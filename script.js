const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const btn = document.querySelector(".btn");
const errorMessage = document.querySelector(".msg");
const items = document.querySelector(".items");

function handleBtn(e) {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    errorMessage.textContent = "Por favor preencha os campos!";
    errorMessage.classList = "error";

    setTimeout(() => {
      errorMessage.textContent = "";
      errorMessage.classList = "";
    }, 3000);
    return;
  }

  const li1 = document.createElement("li");
  const li2 = document.createElement("li");

  li1.classList = "item";
  li2.classList = "item";
  li1.innerHTML = `Nome: ${nameValue}`;
  li2.innerHTML = `Email: ${emailValue}`;

  items.appendChild(li1);
  items.appendChild(li2);

  nameInput.value = "";
  emailInput.value = "";
}

btn.addEventListener("click", handleBtn);
