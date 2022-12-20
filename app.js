const allRadios = document.querySelectorAll('input[type="radio"]');
const title = document.querySelector("#title");
const fullPara = document.querySelector("#fullPara");
const para = document.querySelector(".para");



allRadios.forEach((element) => {
  element.addEventListener('click', () => {
    para.classList.remove("none");
    title.innerHTML = element.value;
    if (element.value === "drupal") {
      fullPara.innerText = 'Hello';
    }

    if (element.value === "umbraco") {
      fullPara.innerText = "first";
    }
  })
});
