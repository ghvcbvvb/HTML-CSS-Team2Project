(() => {
  const openModalBtns = document.querySelectorAll("[data-modal-open]");
  const closeModalBtns = document.querySelectorAll("[data-modal-close]");
  const modals = document.querySelectorAll("[data-modal]");

  openModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal-open");
      const modal = document.querySelector(`[data-modal="${modalId}"]`);
      modal.classList.remove("is-hidden");
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest("[data-modal]");
      modal.classList.add("is-hidden");
    });
  });

})();