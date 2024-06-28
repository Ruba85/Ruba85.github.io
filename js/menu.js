window.onload = function () {
  let clicks = [].slice.call(document.getElementsByClassName("crm__menu-link"));
  let menuList = [].slice.call(
    document.getElementsByClassName("crm__menu-list")
  );
  for (var i = 0, len = clicks.length; i < len; i++)
    (function (index) {
      clicks[i].onclick = function () {
        menuList.map((m, i) => {
          if (i === index) {
            m.classList.toggle("show");
          } else {
            m.classList.remove("show");
          }
        });
      };
    })(i);
  let menu = document.getElementById("crm__menu");
  let status = document.getElementById("menu-burger");
  let burger = [].slice.call(document.getElementsByClassName("toggle-menu"));
  burger.map(function (e) {
    e.addEventListener("click", toggleMenu);
  });
  function toggleMenu() {
    menu.classList.toggle("show");
    status.classList.toggle("open");
    document.body.classList.toggle("fixer");
  }
};
