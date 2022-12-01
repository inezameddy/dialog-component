const modal = document.querySelector("dialog")

document.querySelector(".button-container button").addEventListener("click", () => {
modal.showModal();
});

const closeBtns = document.getElementsByClassName("close");

for (btn of closeBtns) {
btn.addEventListener("click", () => {
modal.close();
})
}