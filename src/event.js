document.querySelector(".anime").addEventListener("click", function (e) {
    if (!document.body.querySelector(".overlay")) {
      document.body.insertAdjacentHTML(
        "afterbegin",
        `<img class="overlayImg" src= ${e.target.dataset.large}>
         <div class="overlay"></div>`
      );
      
      document.body.querySelector(".overlay").addEventListener("click", function () {
        this.remove();
        document.body.querySelector(".overlayImg").remove();
    });
  }
});
