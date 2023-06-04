document.querySelectorAll(".accordion-item").forEach(function (accordionItem) {
  accordionItem.addEventListener("click", function (e) {
    document.querySelectorAll(".accordion-item").forEach(function (item) {
      item.classList.remove("active");
    });
    this.classList.toggle("active");
  });
});
