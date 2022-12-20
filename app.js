const allRadios = document.querySelectorAll('input[type="radio"]');
const title = document.querySelector("#title");
const fullPara = document.querySelector("#fullPara");
const para = document.querySelector(".para");

allRadios.forEach((element) => {
  element.addEventListener('click', () => {
    para.classList.toggle("none");
    title.innerHTML = element.value;
  })
});
