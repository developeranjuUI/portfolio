document.addEventListener("DOMContentLoaded", () => {
  !(function (t) {
    "use strict";
    t(".tp-theme-settings-open-btn").on("click", function () {
      t(".tp-theme-settings-area").toggleClass("settings-opened");
    }),
      t("#tp-dir-toggler").length > 0 &&
        (function () {
          function e(e) {
            if (
              (localStorage.setItem("tp_dir", e),
              document.documentElement.setAttribute("dir", e),
              "rtl" === e)
            ) {
              var o = t("[href='css/bootstrap.css']");
              t(o).attr("href", "css/bootstrap-rtl.css");
            } else
              (o = t("[href='css/bootstrap.css']")),
                t(o).attr("href", "css/bootstrap.css");
          }
          t("#tp-dir-toggler").on("change", function () {
            !(function () {
              if ("rtl" === localStorage.getItem("tp_dir")) {
                e("ltr");
                var o = t("[href='css/bootstrap-rtl.css']");
                t(o).attr("href", "css/bootstrap.css");
              } else e("rtl"), (o = t("[href='css/bootstrap.css']")), t(o).attr("href", "css/bootstrap-rtl.css");
            })();
          }),
            (function () {
              if ("rtl" === localStorage.getItem("tp_dir")) {
                e("rtl");
                var o = t("[href='css/bootstrap.css']");
                t(o).attr("href", "css/bootstrap-rtl.css"),
                  (document.getElementById("tp-dir-toggler").checked = !0);
              } else
                e("ltr"),
                  (document.getElementById("tp-dir-toggler").checked = !1),
                  (o = t("[href='css/bootstrap.css']")),
                  t(o).attr("href", "css/bootstrap.css");
            })();
        })(),
      t(".themepure-theme-toggle-input").length > 0 &&
        (function () {
          function e(t) {
            localStorage.setItem("tp_theme_scheme", t),
              document.documentElement.setAttribute("tp-theme", t);
          }
          t(".themepure-theme-toggle-input").on("change", function () {
            "tp-theme-dark" === localStorage.getItem("tp_theme_scheme")
              ? (e("tp-theme-light"),
                t(".themepure-theme-toggle")
                  .removeClass("dark-active")
                  .addClass("light-active"))
              : (e("tp-theme-dark"),
                t(".themepure-theme-toggle")
                  .removeClass("light-active")
                  .addClass("dark-active")),
              console.log("hi");
          }),
            "tp-theme-light" === localStorage.getItem("tp_theme_scheme")
              ? (e("tp-theme-light"),
                t(".themepure-theme-toggle")
                  .removeClass("dark-active")
                  .addClass("light-active"),
                (document.getElementsByClassName("tp-theme-toggler").checked =
                  !1))
              : (e("tp-theme-dark"),
                (document.getElementsByClassName("tp-theme-toggler").checked =
                  !0),
                t(".themepure-theme-toggle")
                  .removeClass("light-active")
                  .addClass("dark-active"));
        })(),
      t(".tp-color-settings-btn").length > 0 &&
        t("#tp-color-setings-input").length > 0 &&
        t("#tp-theme-color-label").length > 0 &&
        (function () {
          function e(t) {
            localStorage.setItem("tp_color_scheme", t),
              document
                .querySelector(":root")
                .style.setProperty("--tp-theme-1", t),
              (document.getElementById("tp-color-setings-input").value = t),
              (document.getElementById(
                "tp-theme-color-label"
              ).style.backgroundColor = t);
          }
          var o, l, r;
          (o = localStorage.getItem("tp_color_scheme")),
            (document.getElementById("tp-color-setings-input").value = o),
            (document.getElementById(
              "tp-theme-color-label"
            ).style.backgroundColor = o),
            (l = t(".tp-color-settings-btn").attr("data-color-default")),
            null != (r = localStorage.getItem("tp_color_scheme")) || (r = l),
            l !== r
              ? (document
                  .querySelector(":root")
                  .style.setProperty("--tp-theme-1", r),
                (document.getElementById("tp-color-setings-input").value = r),
                (document.getElementById(
                  "tp-theme-color-label"
                ).style.backgroundColor = r),
                e(r))
              : (document
                  .querySelector(":root")
                  .style.setProperty("--tp-theme-1", l),
                (document.getElementById("tp-color-setings-input").value = l),
                (document.getElementById(
                  "tp-theme-color-label"
                ).style.backgroundColor = l),
                e(l)),
            document.querySelectorAll(".tp-color-settings-btn").forEach((t) => {
              t.addEventListener("click", () => {
                let o = t.getAttribute("data-color");
                document
                  .querySelector(":root")
                  .style.setProperty("--tp-theme-1", o),
                  (document.getElementById(
                    "tp-theme-color-label"
                  ).style.backgroundColor = o),
                  e(o);
              });
            });
          var c;
          document
            .querySelector("#tp-color-setings-input")
            .addEventListener("change", function (o) {
              var l = o.target.value;
              document.documentElement.style.setProperty("--tp-theme-1", l),
                e(l),
                (function (e) {
                  const o = Array.from(
                    document.querySelectorAll("[data-color]")
                  );
                  var l = localStorage.getItem("tp_color_scheme");
                  let r = o
                    .map((t) => t.getAttribute("data-color"))
                    .filter((t) => t == l);
                  0 == r.length
                    ? t(".tp-color-active").removeClass("active")
                    : t(".tp-color-active").addClass("active");
                })();
            }),
            (c = localStorage.getItem("tp_color_scheme")),
            t(`[data-color="${c}"]`)
              .parent()
              .addClass("active")
              .parent()
              .siblings()
              .find(".tp-color-active")
              .removeClass("active"),
            t(".tp-color-active").on("click", function () {
              t(this)
                .addClass("active")
                .parent()
                .siblings()
                .find(".tp-color-active")
                .removeClass("active");
            });
        })();
  })(jQuery);
});
