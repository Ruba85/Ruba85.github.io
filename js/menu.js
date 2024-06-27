window.onload = function () {
  let clicks = [].slice.call(document.getElementsByClassName("main_list"));
  let menu = [].slice.call(document.getElementsByClassName("main_menu"));
  console.log(clicks, menu);
  for (var i = 0, len = clicks.length; i < len; i++)
    (function (index) {
      clicks[i].onclick = function () {
        menu.map((m, i) => {
          if (i === index) {
            m.classList.toggle("show");
          } else {
            m.classList.remove("show");
          }
        });
      };
    })(i);
};
