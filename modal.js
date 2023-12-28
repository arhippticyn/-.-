document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var closeBtn = document.getElementById("closeModalBtn");
  
    // Показати модальне вікно при завантаженні сторінки
    modal.style.display = "block";
  
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  