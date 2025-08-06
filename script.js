// document.querySelector(".share-button").addEventListener("click", () => {
//   document.querySelector(".share-wrapper").classList.toggle("active");
// });


document.querySelectorAll(".share-button").forEach((button) => {
  button.addEventListener("click", () => {
    const wrapper = button.closest(".share-wrapper");
    wrapper.classList.toggle("active");
  });
});
