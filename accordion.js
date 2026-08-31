document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion_item");

  accordions.forEach((item) => {
    const btn = item.querySelector(".accordion_btn");
    const content = item.querySelector(".accordion_content");

    btn.addEventListener("click", () => {
      accordions.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".accordion_content").style.maxHeight = null;
        }
      });

      const isActive = item.classList.toggle("active");

      if (isActive) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});