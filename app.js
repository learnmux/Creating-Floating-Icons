window.addEventListener("load", () => {
  const plus = document.querySelector(".plus");
  plus.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("open");
  });
});
