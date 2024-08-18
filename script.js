let accordionTitles = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordionTitles.length; i++) {
  accordionTitles[i].addEventListener("click", function () {
    let icon = this.querySelector(".faq__icon");
    if (icon.classList.contains("fa-plus")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
