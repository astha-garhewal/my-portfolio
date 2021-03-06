function ownKeys(t, e) {
  var a,
    r = Object.keys(t);
  return (
    Object.getOwnPropertySymbols &&
      ((a = Object.getOwnPropertySymbols(t)),
      e &&
        (a = a.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
      r.push.apply(r, a)),
    r
  );
}
function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var a = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? ownKeys(Object(a), !0).forEach(function (e) {
          _defineProperty(t, e, a[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
      : ownKeys(Object(a)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
        });
  }
  return t;
}
function _defineProperty(e, t, a) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = a),
    e
  );
}
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
/**
 * Around | Multipurpose Bootstrap Template
 * Copyright 2021 Createx Studio
 * Theme core scripts
 *
 * @author Createx Studio
 * @version 2.0.0
 */
!(function () {
  "use strict";
  var e, t, a, r, n;
  (function () {
    var n,
      o = document.querySelectorAll(".masonry-grid");
    if (null !== o)
      for (var e = 0; e < o.length; e++) {
        var t = (function (e) {
          (n = new Shuffle(o[e], {
            itemSelector: ".masonry-grid-item",
            sizer: ".masonry-grid-item",
          })),
            imagesLoaded(o[e]).on("progress", function () {
              n.layout();
            });
          var r = o[e].closest(".masonry-filterable");
          if (null === r) return { v: void 0 };
          for (
            var t = r.querySelectorAll(".masonry-filters [data-group]"), a = 0;
            a < t.length;
            a++
          )
            t[a].addEventListener("click", function (e) {
              var t = r.querySelector(".masonry-filters .active"),
                a = this.dataset.group;
              null !== t && t.classList.remove("active"),
                this.classList.add("active"),
                n.filter(a),
                e.preventDefault();
            });
        })(e);
        if ("object" === _typeof(t)) return t.v;
      }
  })(),
    null != (a = document.querySelector(".navbar-sticky")) &&
      ((e = a.classList),
      (t = a.offsetHeight),
      e.contains("navbar-floating") && e.contains("navbar-dark")
        ? window.addEventListener("scroll", function (e) {
            500 < e.currentTarget.pageYOffset
              ? (a.classList.remove("navbar-dark"),
                a.classList.add("navbar-light", "navbar-stuck"))
              : (a.classList.remove("navbar-light", "navbar-stuck"),
                a.classList.add("navbar-dark"));
          })
        : e.contains("navbar-floating") && e.contains("navbar-light")
        ? window.addEventListener("scroll", function (e) {
            500 < e.currentTarget.pageYOffset
              ? a.classList.add("navbar-stuck")
              : a.classList.remove("navbar-stuck");
          })
        : window.addEventListener("scroll", function (e) {
            500 < e.currentTarget.pageYOffset
              ? ((document.body.style.paddingTop = t + "px"),
                a.classList.add("navbar-stuck"))
              : ((document.body.style.paddingTop = ""),
                a.classList.remove("navbar-stuck"));
          })),
    (function () {
      var e = document.querySelectorAll('[data-bs-toggle="search"]'),
        t = document.querySelector(".navbar-search");
      if (null !== t)
        for (
          var a = t.querySelector(".navbar-search-field"), r = 0;
          r < e.length;
          r++
        )
          e[r].addEventListener("click", function (e) {
            t.classList.toggle("show"), a.focus(), e.preventDefault();
          });
    })(),
    (function () {
      for (
        var a = document.querySelectorAll(".password-toggle"), e = 0;
        e < a.length;
        e++
      )
        !(function (e) {
          var t = a[e].querySelector(".form-control");
          a[e].querySelector(".password-toggle-btn").addEventListener(
            "click",
            function (e) {
              "checkbox" === e.target.type &&
                (e.target.checked ? (t.type = "text") : (t.type = "password"));
            },
            !1
          );
        })(e);
    })(),
    (function () {
      for (
        var t = document.querySelectorAll(".file-drop-area"), e = 0;
        e < t.length;
        e++
      )
        !(function (e) {
          var r = t[e].querySelector(".file-drop-input"),
            n = t[e].querySelector(".file-drop-message"),
            o = t[e].querySelector(".file-drop-icon");
          t[e]
            .querySelector(".file-drop-btn")
            .addEventListener("click", function () {
              r.click();
            }),
            r.addEventListener("change", function () {
              var e;
              r.files &&
                r.files[0] &&
                (((e = new FileReader()).onload = function (e) {
                  var t,
                    e = e.target.result,
                    a = r.files[0].name;
                  (n.innerHTML = a),
                    e.startsWith("data:image")
                      ? (((t = new Image()).src = e),
                        (t.onload = function () {
                          (o.className =
                            "file-drop-preview img-thumbnail rounded"),
                            (o.innerHTML =
                              '<img src="' + t.src + '" alt="' + a + '">');
                        }))
                      : e.startsWith("data:video")
                      ? ((o.innerHTML = ""),
                        (o.className = ""),
                        (o.className = "file-drop-icon ai-film"))
                      : ((o.innerHTML = ""),
                        (o.className = ""),
                        (o.className = "file-drop-icon ai-file-text"));
                }),
                e.readAsDataURL(r.files[0]));
            });
        })(e);
    })(),
    window.addEventListener(
      "load",
      function () {
        var e = document.getElementsByClassName("needs-validation");
        Array.prototype.filter.call(e, function (t) {
          t.addEventListener(
            "submit",
            function (e) {
              !1 === t.checkValidity() &&
                (e.preventDefault(), e.stopPropagation()),
                t.classList.add("was-validated");
            },
            !1
          );
        });
      },
      !1
    ),
    (function () {
      var e = document.querySelectorAll("[data-format]");
      if (0 !== e.length)
        for (var t = 0; t < e.length; t++) {
          var a = e[t].dataset.format,
            r = e[t].dataset.blocks,
            n = e[t].dataset.delimiter,
            r = void 0 !== r ? r.split(" ").map(Number) : "",
            n = void 0 !== n ? n : " ";
          switch (a) {
            case "card":
              new Cleave(e[t], { creditCard: !0 });
              break;
            case "cvc":
              new Cleave(e[t], { numeral: !0, numeralIntegerScale: 3 });
              break;
            case "date":
              new Cleave(e[t], { date: !0, datePattern: ["m", "y"] });
              break;
            case "date-long":
              new Cleave(e[t], {
                date: !0,
                delimiter: "-",
                datePattern: ["Y", "m", "d"],
              });
              break;
            case "time":
              new Cleave(e[t], { time: !0, datePattern: ["h", "m"] });
              break;
            case "custom":
              new Cleave(e[t], { delimiter: n, blocks: r });
              break;
            default:
              console.error(
                "Sorry, your format " +
                  a +
                  " is not available. You can add it to the theme object method - inputFormatter in src/js/theme.js or choose one from the list of available formats: card, cvc, date, date-long, time or custom."
              );
          }
        }
    })(),
    new SmoothScroll("[data-scroll]", {
      speed: 800,
      speedAsDuration: !0,
      offset: 40,
      header: "[data-scroll-header]",
      updateURL: !1,
    }),
    (function () {
      var e = document.querySelectorAll('[data-bs-toggle="offcanvas"]'),
        t = document.querySelectorAll('[data-bs-dismiss="offcanvas"]'),
        a = document.querySelectorAll(".offcanvas"),
        r = document.body,
        n = document.querySelectorAll("[data-fixed-element]"),
        o = window.innerWidth > r.clientWidth,
        s = document.createElement("div");
      s.classList.add("offcanvas-backdrop");
      for (
        var l = function () {
            for (var e = 0; e < a.length; e++)
              a[e].removeAttribute("data-offcanvas-show");
            if (
              (s.classList.remove("show"),
              setTimeout(function () {
                s.parentNode.removeChild(s);
              }, 250),
              o && ((r.style.paddingRight = 0), n.length))
            )
              for (var t = 0; t < n.length; t++)
                n[t].classList.remove("right-15");
            r.classList.remove("offcanvas-open");
          },
          c = 0;
        c < e.length;
        c++
      )
        e[c].addEventListener("click", function (e) {
          e.preventDefault(),
            (function (e) {
              var t = document.querySelector(e).parentNode;
              if (
                (t.appendChild(s),
                setTimeout(function () {
                  s.classList.add("show");
                }, 20),
                document
                  .querySelector(e)
                  .setAttribute("data-offcanvas-show", !0),
                o && ((r.style.paddingRight = "15px"), n.length))
              )
                for (var a = 0; a < n.length; a++)
                  n[a].classList.add("right-15");
              r.classList.add("offcanvas-open");
            })(e.currentTarget.dataset.bsTarget, e.currentTarget);
        });
      for (var i = 0; i < t.length; i++)
        t[i].addEventListener("click", function (e) {
          e.preventDefault(), l();
        });
      document.addEventListener("click", function (e) {
        "offcanvas-backdrop" === e.target.classList[0] && l();
      });
    })(),
    null != (n = document.querySelector(".btn-scroll-top")) &&
      ((r = parseInt(600, 10)),
      window.addEventListener("scroll", function (e) {
        e.currentTarget.pageYOffset > r
          ? n.classList.add("show")
          : n.classList.remove("show");
      })),
    [].slice
      .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      .map(function (e) {
        return new bootstrap.Tooltip(e);
      }),
    [].slice
      .call(document.querySelectorAll('[data-bs-toggle="popover"]'))
      .map(function (e) {
        return new bootstrap.Popover(e);
      }),
    [].slice.call(document.querySelectorAll(".toast")).map(function (e) {
      return new bootstrap.Toast(e);
    }),
    (function () {
      var e = document.querySelectorAll(".gallery");
      if (e.length)
        for (var t = 0; t < e.length; t++)
          lightGallery(e[t], {
            selector: ".gallery-item",
            download: !1,
            videojs: !0,
            youtubePlayerParams: { modestbranding: 1, showinfo: 0, rel: 0 },
            vimeoPlayerParams: { byline: 0, portrait: 0, color: "766df4" },
          });
    })(),
    (function () {
      var s = document.querySelectorAll(".subscription-form");
      if (null !== s) {
        for (var e = 0; e < s.length; e++)
          !(function (e) {
            var t = s[e].querySelector('button[type="submit"]'),
              a = t.innerHTML,
              r = s[e].querySelector(".form-control"),
              n = s[e].querySelector(".subscription-form-antispam"),
              o = s[e].querySelector(".subscription-status");
            s[e].addEventListener("submit", function (e) {
              e && e.preventDefault(), "" === n.value && l(this, t, r, a, o);
            });
          })(e);
        var l = function (e, t, a, r, n) {
          t.innerHTML = "Sending...";
          var o = e.action.replace("/post?", "/post-json?"),
            e = "&" + a.name + "=" + encodeURIComponent(a.value),
            s = document.createElement("script");
          (s.src = o + "&c=callback" + e), document.body.appendChild(s);
          var l = "callback";
          window[l] = function (e) {
            delete window[l],
              document.body.removeChild(s),
              (t.innerHTML = r),
              "success" == e.result
                ? (a.classList.remove("is-invalid"),
                  a.classList.add("is-valid"),
                  n.classList.remove("status-error"),
                  n.classList.add("status-success"),
                  (n.innerHTML = e.msg),
                  setTimeout(function () {
                    a.classList.remove("is-valid"),
                      (n.innerHTML = ""),
                      n.classList.remove("status-success");
                  }, 6e3))
                : (a.classList.remove("is-valid"),
                  a.classList.add("is-invalid"),
                  n.classList.remove("status-success"),
                  n.classList.add("status-error"),
                  (n.innerHTML = e.msg.substring(4)),
                  setTimeout(function () {
                    a.classList.remove("is-invalid"),
                      (n.innerHTML = ""),
                      n.classList.remove("status-error");
                  }, 6e3));
          };
        };
      }
    })(),
    (function () {
      for (
        var e = document.querySelectorAll("[data-label]"), t = 0;
        t < e.length;
        t++
      )
        e[t].addEventListener("change", function () {
          var e = this.dataset.label;
          try {
            document.getElementById(e).textContent = this.value;
          } catch (e) {
            (e.message = "Cannot set property 'textContent' of null"),
              console.error(
                "Make sure the [data-label] matches with the id of the target element you want to change text of!"
              );
          }
        });
    })(),
    (function (e, t, a) {
      for (var r = 0; r < e.length; r++) t.call(a, r, e[r]);
    })(
      document.querySelectorAll(".tns-carousel-wrapper .tns-carousel-inner"),
      function (e, t) {
        var a = {
          container: t,
          controlsText: [
            '<i class="ai-arrow-left"></i>',
            '<i class="ai-arrow-right"></i>',
          ],
          navPosition: "top",
          controlsPosition: "top",
          mouseDrag: !0,
          speed: 600,
          autoplayHoverPause: !0,
          autoplayButtonOutput: !1,
        };
        null != t.dataset.carouselOptions &&
          (n = JSON.parse(t.dataset.carouselOptions));
        var a = _objectSpread(_objectSpread({}, a), n),
          r = tns(a),
          n = t.closest(".tns-carousel-wrapper"),
          o = n.querySelectorAll(".tns-item"),
          s = n.querySelector(".tns-carousel-pager");
        if (null != s) {
          for (
            var l = s.querySelectorAll("[data-goto]"), c = 0;
            c < l.length;
            c++
          )
            l[c].addEventListener("click", function (e) {
              r.goTo(this.dataset.goto - 1), e.preventDefault();
            });
          r.events.on("indexChanged", function () {
            for (var e = r.getInfo(), t = 0; t < l.length; t++)
              l[t].classList.remove("active");
            s.querySelector(
              '[data-goto="' + e.displayIndex + '"]'
            ).classList.add("active");
          });
        }
        var i,
          d,
          u = n.querySelector(".tns-carousel-label");
        null != u &&
          r.events.on("indexChanged", function () {
            var e = r.getInfo(),
              e = o[e.index].dataset.carouselLabel;
            u.innerHTML = e;
          }),
          null !== n.querySelector(".tns-carousel-progress") &&
            ((a = r.getInfo()),
            (i = n.querySelector(".tns-current-slide")),
            (t = n.querySelector(".tns-total-slides")),
            (d = n.querySelector(".tns-carousel-progress .progress-bar")),
            (i.innerHTML = a.displayIndex),
            (t.innerHTML = a.slideCount),
            (d.style.width = (a.displayIndex / a.slideCount) * 100 + "%"),
            r.events.on("indexChanged", function () {
              var e = r.getInfo();
              (i.innerHTML = e.displayIndex),
                (d.style.width = (e.displayIndex / e.slideCount) * 100 + "%");
            }));
      }
    ),
    (function () {
      function o(e, t) {
        return e + t;
      }
      var e = document.querySelectorAll("[data-line-chart]"),
        t = document.querySelectorAll("[data-bar-chart]"),
        s = document.querySelectorAll("[data-pie-chart]");
      if (0 !== e.length || 0 !== t.length || 0 !== s.length) {
        var l,
          a = document.head || document.getElementsByTagName("head")[0],
          c = document.createElement("style");
        a.appendChild(c);
        for (var r = 0; r < e.length; r++) {
          var n,
            i = JSON.parse(e[r].dataset.lineChart),
            d =
              null != e[r].dataset.options
                ? JSON.parse(e[r].dataset.options)
                : "",
            u = e[r].dataset.seriesColor;
          if ((e[r].classList.add("line-chart-" + r), null != u)) {
            n = JSON.parse(u);
            for (var f = 0; f < n.colors.length; f++)
              (l = "\n          .line-chart-"
                .concat(r, " .ct-series:nth-child(")
                .concat(f + 1, ") .ct-line,\n          .line-chart-")
                .concat(r, " .ct-series:nth-child(")
                .concat(f + 1, ") .ct-point {\n            stroke: ")
                .concat(n.colors[f], " !important;\n          }\n        ")),
                c.appendChild(document.createTextNode(l));
          }
          new Chartist.Line(e[r], i, d);
        }
        for (var v = 0; v < t.length; v++) {
          var p,
            m = JSON.parse(t[v].dataset.barChart),
            h =
              null != t[v].dataset.options
                ? JSON.parse(t[v].dataset.options)
                : "",
            g = t[v].dataset.seriesColor;
          if ((t[v].classList.add("bar-chart-" + v), null != g)) {
            p = JSON.parse(g);
            for (var y = 0; y < p.colors.length; y++)
              (l = "\n        .bar-chart-"
                .concat(v, " .ct-series:nth-child(")
                .concat(y + 1, ") .ct-bar {\n            stroke: ")
                .concat(p.colors[y], " !important;\n          }\n        ")),
                c.appendChild(document.createTextNode(l));
          }
          new Chartist.Bar(t[v], m, h);
        }
        for (var b = 0; b < s.length; b++)
          !(function (e) {
            var t,
              a = JSON.parse(s[e].dataset.pieChart),
              r = s[e].dataset.seriesColor;
            if ((s[e].classList.add("cz-pie-chart-" + e), null != r)) {
              t = JSON.parse(r);
              for (var n = 0; n < t.colors.length; n++)
                (l = "\n        .cz-pie-chart-"
                  .concat(e, " .ct-series:nth-child(")
                  .concat(n + 1, ") .ct-slice-pie {\n            fill: ")
                  .concat(t.colors[n], " !important;\n          }\n        ")),
                  c.appendChild(document.createTextNode(l));
            }
            new Chartist.Pie(s[e], a, {
              labelInterpolationFnc: function (e) {
                return Math.round((e / a.series.reduce(o)) * 100) + "%";
              },
            });
          })(b);
      }
    })(),
    (function () {
      var d = document.querySelectorAll(".countdown");
      if (null != d)
        for (var e = 0; e < d.length; e++) {
          var t = (function (e) {
            var t,
              a,
              r,
              n,
              o = d[e].dataset.countdown,
              s = d[e].querySelector(".countdown-days .countdown-value"),
              l = d[e].querySelector(".countdown-hours .countdown-value"),
              c = d[e].querySelector(".countdown-minutes .countdown-value"),
              i = d[e].querySelector(".countdown-seconds .countdown-value"),
              o = new Date(o).getTime();
            if (isNaN(o)) return { v: void 0 };
            setInterval(function () {
              var e = new Date().getTime(),
                e = parseInt((o - e) / 1e3);
              0 <= e &&
                ((t = parseInt(e / 86400)),
                (e %= 86400),
                (a = parseInt(e / 3600)),
                (e %= 3600),
                (r = parseInt(e / 60)),
                (e %= 60),
                (n = parseInt(e)),
                null != s && (s.innerHTML = parseInt(t, 10)),
                null != l && (l.innerHTML = a < 10 ? "0" + a : a),
                null != c && (c.innerHTML = r < 10 ? "0" + r : r),
                null != i && (i.innerHTML = n < 10 ? "0" + n : n));
            }, 1e3);
          })(e);
          if ("object" === _typeof(t)) return t.v;
        }
    })(),
    (function () {
      var e = document.querySelectorAll(".date-picker");
      if (0 !== e.length)
        for (var t = 0; t < e.length; t++) {
          var a = void 0;
          null != e[t].dataset.datepickerOptions &&
            (a = JSON.parse(e[t].dataset.datepickerOptions));
          var r = e[t].classList.contains("date-range")
              ? {
                  plugins: [
                    new rangePlugin({ input: e[t].dataset.linkedInput }),
                  ],
                }
              : "{}",
            a = _objectSpread(
              _objectSpread(_objectSpread({}, { disableMobile: "true" }), r),
              a
            );
          flatpickr(e[t], a);
        }
    })(),
    (function () {
      for (
        var e = document.querySelectorAll('[data-bs-toggle="radioTab"]'), t = 0;
        t < e.length;
        t++
      )
        e[t].addEventListener("click", function () {
          var e = this.dataset.bsTarget;
          document
            .querySelector(this.dataset.bsParent)
            .querySelectorAll(".radio-tab-pane")
            .forEach(function (e) {
              e.classList.remove("active");
            }),
            document.querySelector(e).classList.add("active");
        });
    })(),
    (function () {
      for (
        var e = document.querySelectorAll(".parallax"), t = 0;
        t < e.length;
        t++
      )
        new Parallax(e[t]);
    })(),
    (function () {
      var o = document.querySelectorAll(".pricing-wrap");
      if (null !== o)
        for (var e = 0; e < o.length; e++)
          !(function (e) {
            function t() {
              if (r.checked) {
                a.parentNode.classList.add("price-switch-on");
                for (var e = 0; e < n.length; e++)
                  n[e].innerHTML = n[e].dataset.newPrice;
              } else {
                a.parentNode.classList.remove("price-switch-on");
                for (var t = 0; t < n.length; t++)
                  n[t].innerHTML = n[t].dataset.currentPrice;
              }
            }
            var a = o[e].querySelector(".form-switch"),
              r = a.querySelector('input[type="checkbox"]'),
              n = o[e].querySelectorAll(".price");
            t(),
              r.addEventListener("change", function () {
                t();
              });
          })(e);
    })(),
    (function () {
      var o = document.querySelectorAll(".product-gallery");
      if (o.length)
        for (var e = 0; e < o.length; e++)
          !(function (a) {
            for (
              var r = o[a].querySelectorAll(".product-gallery-thumblist-item"),
                n = o[a].querySelectorAll(".product-gallery-preview-item"),
                e = 0;
              e < r.length;
              e++
            )
              r[e].addEventListener("click", t);
            function t(e) {
              e.preventDefault();
              for (var t = 0; t < r.length; t++)
                n[t].classList.remove("active"),
                  r[t].classList.remove("active");
              this.classList.add("active"),
                o[a]
                  .querySelector(this.getAttribute("href"))
                  .classList.add("active");
            }
          })(e);
    })(),
    (function () {
      var e = document.querySelectorAll(".btn-video");
      if (e.length)
        for (var t = 0; t < e.length; t++)
          lightGallery(e[t], {
            selector: "this",
            download: !1,
            videojs: !0,
            youtubePlayerParams: { modestbranding: 1, showinfo: 0, rel: 0 },
            vimeoPlayerParams: { byline: 0, portrait: 0, color: "766df4" },
          });
    })(),
    (function () {
      for (
        var n = document.querySelectorAll(".range-slider"), e = 0;
        e < n.length;
        e++
      )
        !(function (e) {
          var t = n[e].querySelector(".range-slider-ui"),
            a = n[e].querySelector(".range-slider-value-min"),
            r = n[e].querySelector(".range-slider-value-max"),
            e = {
              dataStartMin: parseInt(n[e].dataset.startMin, 10),
              dataStartMax: parseInt(n[e].dataset.startMax, 10),
              dataMin: parseInt(n[e].dataset.min, 10),
              dataMax: parseInt(n[e].dataset.max, 10),
              dataStep: parseInt(n[e].dataset.step, 10),
            };
          noUiSlider.create(t, {
            start: [e.dataStartMin, e.dataStartMax],
            connect: !0,
            step: e.dataStep,
            pips: { mode: "count", values: 5 },
            tooltips: !0,
            range: { min: e.dataMin, max: e.dataMax },
            format: {
              to: function (e) {
                return "$" + parseInt(e, 10);
              },
              from: function (e) {
                return Number(e);
              },
            },
          }),
            t.noUiSlider.on("update", function (e, t) {
              e = (e = e[t]).replace(/\D/g, "");
              t ? (r.value = Math.round(e)) : (a.value = Math.round(e));
            }),
            a.addEventListener("change", function () {
              t.noUiSlider.set([this.value, null]);
            }),
            r.addEventListener("change", function () {
              t.noUiSlider.set([null, this.value]);
            });
        })(e);
    })(),
    (function () {
      var e = document.querySelectorAll("[data-view]");
      if (0 < e.length)
        for (var t = 0; t < e.length; t++)
          e[t].addEventListener("click", function (e) {
            var t = this.dataset.view;
            a(t), "#" === this.getAttribute("href") && e.preventDefault();
          });
      var a = function (e) {
        for (
          var e = document.querySelector(e),
            t = e.parentNode.querySelectorAll(".view"),
            a = 0;
          a < t.length;
          a++
        )
          t[a].classList.remove("show");
        e.classList.add("show");
      };
    })(),
    (function () {
      var e = document.querySelectorAll("[data-checkbox-toggle-class]");
      if (0 !== e.length)
        for (var t = 0; t < e.length; t++)
          e[t].addEventListener("change", function () {
            var e = document.querySelector(this.dataset.bsTarget),
              t = this.dataset.checkboxToggleClass;
            this.checked ? e.classList.add(t) : e.classList.remove(t);
          });
    })(),
    (function () {
      var e = document.querySelectorAll("[data-master-checkbox-for]");
      if (0 !== e.length)
        for (var t = 0; t < e.length; t++)
          e[t].addEventListener("change", function () {
            var e = document
              .querySelector(this.dataset.masterCheckboxFor)
              .querySelectorAll('input[type="checkbox"]');
            if (this.checked)
              for (var t = 0; t < e.length; t++)
                (e[t].checked = !0),
                  e[t].dataset.checkboxToggleClass &&
                    document
                      .querySelector(e[t].dataset.bsTarget)
                      .classList.add(e[t].dataset.checkboxToggleClass);
            else
              for (var a = 0; a < e.length; a++)
                (e[a].checked = !1),
                  e[a].dataset.checkboxToggleClass &&
                    document
                      .querySelector(e[a].dataset.bsTarget)
                      .classList.remove(e[a].dataset.checkboxToggleClass);
          });
    })();
})();

"undefined" != typeof AOS &&
  AOS.init({
    duration: 700,
    easing: "ease-out-quad",
    once: !0,
    startEvent: "load",
  }),
  (function () {
    var e = document.querySelectorAll(".card-stack"),
      o = ["load", "resize", "scroll"];
    [].forEach.call(e, function (e) {
      var t = e.querySelectorAll(".card-stack-item");
      o.forEach(function (e) {
        window.addEventListener(e, function () {
          var d = [].slice.call(t).reverse();
          d.reduce(function (e, t, o) {
            var n =
                t.clientHeight +
                parseInt(
                  window.getComputedStyle(t).getPropertyValue("margin-bottom")
                ),
              a =
                e + (n - (d[o - 1] ? d[o - 1].offsetTop - t.offsetTop : n)) / n,
              r = t.firstElementChild,
              l = r.firstElementChild,
              c = "calc(-1rem * " + a + ")",
              i = "calc(1 - .2 * " + a + ")",
              s = "calc(1 - .03 * " + a + ")";
            return (
              (r.style.transform = "translateY(" + c + ") scale(" + s + ")"),
              (l.style.opacity = i),
              a
            );
          }, 0);
        });
      });
    });
  })(),
  (function () {
    var e = document.querySelectorAll('[data-toggle="countup"]');
    function o(e) {
      var t = e.dataset.from ? +e.dataset.from : null,
        o = e.dataset.to ? +e.dataset.to : null,
        n = e.dataset.decimals ? +e.dataset.decimals : null,
        a = e.dataset.duration ? +e.dataset.duration : null,
        r = e.dataset.options ? JSON.parse(e.dataset.options) : null,
        l = new CountUp(e, t, o, n, a, r);
      l.error
        ? console.error(l.error)
        : (l.start(), e.classList.add("counted"));
    }
    "undefined" != typeof CountUp &&
      e &&
      [].forEach.call(e, function (e) {
        "countup:in" !== e.getAttribute("data-aos-id") && o(e);
      }),
      document.addEventListener("aos:in:countup:in", function (e) {
        if (e.detail instanceof Element) o(e.detail);
        else {
          var t = document.querySelectorAll(
            '.aos-animate[data-aos-id="countup:in"]:not(.counted)'
          );
          [].forEach.call(t, function (e) {
            o(e);
          });
        }
      });
  })(),
  jQuery().fancybox &&
    (($.fancybox.defaults.image.preload = !1),
    ($.fancybox.defaults.toolbar = !1),
    ($.fancybox.defaults.clickContent = !1)),
  (function () {
    var e = document.querySelectorAll('[data-toggle="flickity"]');
    "undefined" != typeof Flickity &&
      e &&
      [].forEach.call(e, function (o) {
        o.addEventListener("click", function () {
          var e = parseInt(o.dataset.slide),
            t = document.querySelector(o.dataset.target);
          Flickity.data(t).selectCell(e);
        });
      });
  })(),
  (function () {
    var e = document.querySelectorAll(".highlight");
    "undefined" != typeof hljs &&
      e &&
      [].forEach.call(e, function (e) {
        hljs.highlightBlock(e);
      });
  })(),
  (function () {
    var e = document.querySelectorAll("[data-isotope]"),
      t = document.querySelectorAll("[data-filter]"),
      o = ["click"];
    e &&
      t &&
      Isotope &&
      imagesLoaded &&
      (window.onload = function () {
        [].forEach.call(e, function (e) {
          var t, o;
          (t = e),
            (o = Isotope.data(t)),
            new imagesLoaded(t, function () {
              o.layout();
            });
        }),
          [].forEach.call(t, function (t) {
            t.addEventListener(o[0], function (e) {
              !(function (e, t) {
                e.preventDefault();
                var o = t.dataset.filter,
                  n = document.querySelector(t.dataset.target);
                Isotope.data(n).arrange({ filter: o });
              })(e, t);
            });
          });
      });
  })(),
  (function () {
    var e = document.querySelectorAll("[data-map]");
    "undefined" != typeof mapboxgl &&
      e &&
      [].forEach.call(e, function (e) {
        var t, o, n, a;
        (o = (t = e).dataset.map ? JSON.parse(t.dataset.map) : {}),
          (n = {
            container: t,
            style: "mapbox://styles/mapbox/streets-v11",
            scrollZoom: !1,
            interactive: !1,
          }),
          (a = Object.assign(n, o)),
          (mapboxgl.accessToken =
            "pk.eyJ1IjoiZ29vZHRoZW1lcyIsImEiOiJjanU5eHR4N2cybDU5NGVwOHZwNGprb3E0In0.msdw9q16dh8v4azJXUdiXg"),
          new mapboxgl.Map(a);
      });
  })(),
  (function () {
    var e = document.querySelectorAll(".modal");
    $(e).on({
      "show.bs.modal": function () {
        document.documentElement.style.overflowX = "visible";
      },
      "hidden.bs.modal": function () {
        document.documentElement.style.overflowX = "";
      },
    });
  })(),
  (function () {
    var e = document.querySelectorAll(
        ".navbar-nav .dropdown, .navbar-nav .dropright"
      ),
      t = document.querySelectorAll(".navbar-nav .dropdown"),
      o = document.querySelectorAll(".navbar-nav .dropright"),
      a = ["mouseenter"],
      r = ["mouseleave", "click"],
      l = 16;
    function c(e) {
      var t, o, n, a, r;
      window.innerWidth < 992 ||
        (e.classList.add("showing"),
        setTimeout(function () {
          e.classList.remove("showing"), e.classList.add("show");
        }, 1),
        (t = e.parentElement),
        (o = t.parentElement),
        (n = o.classList.contains("dropright")),
        (a = n ? [-32, 0] : [0, 0]),
        (r = n ? "right-start" : "auto"),
        Popper.createPopper(o, t, {
          placement: r,
          modifiers: [
            { name: "offset", options: { offset: a } },
            { name: "preventOverflow", options: { padding: l } },
          ],
        }));
    }
    [].forEach.call(e, function (t) {
      var n = t.querySelector(".dropdown-menu");
      a.forEach(function (e) {
        t.addEventListener(e, function () {
          c(n);
        });
      }),
        r.forEach(function (e) {
          t.addEventListener(e, function (e) {
            var t, o;
            (t = e),
              (o = n),
              window.innerWidth < 992 ||
                (o.classList.contains("show") &&
                  (("click" === t.type &&
                    t.target.closest(".dropdown-menu form")) ||
                    (o.classList.add("showing"),
                    o.classList.remove("show"),
                    setTimeout(function () {
                      o.classList.remove("showing");
                    }, 200))));
          });
        });
    }),
      [].forEach.call(o, function (e) {
        var t = e.querySelector('[data-toggle="dropdown"]'),
          o = e.querySelector(".dropdown-menu");
        t.addEventListener("click", function (e) {
          e.preventDefault(),
            (function (e, t) {
              if (!(992 <= window.innerWidth)) {
                e.stopPropagation();
                var o = t.parentElement
                  .closest(".dropdown-menu")
                  .querySelectorAll(".dropdown-menu");
                [].forEach.call(o, function (e) {
                  e !== t && e.classList.remove("show");
                }),
                  t.classList.toggle("show");
              }
            })(e, o);
        });
      }),
      $(t).on("hide.bs.dropdown", function () {
        var e = this.querySelectorAll(".dropright .dropdown-menu");
        [].forEach.call(e, function (e) {
          var t;
          (t = e), 992 <= window.innerWidth || t.classList.remove("show");
        });
      });
  })(),
  (function () {
    var e = document.querySelectorAll(".navbar-reveal"),
      t = ["load", "scroll"],
      a = window.pageYOffset;
    e &&
      [].forEach.call(e, function (n) {
        t.forEach(function (e) {
          window.addEventListener(e, function () {
            var e, t, o;
            (e = n),
              (t = window.pageYOffset),
              (o = a < t && 0 < t ? "-100%" : "0"),
              e.querySelector(".navbar-collapse").classList.contains("show") ||
                (e.style.transform = "translateY(".concat(o, ")")),
              (a = t);
          });
        });
      });
  })(),
  (function () {
    var e = document.querySelectorAll(".navbar"),
      r = ["load", "scroll"];
    function c(e) {
      e.classList.remove("navbar-dark"),
        e.classList.add("navbar-light"),
        (e.style.boxShadow = "inset 1000px 1000px 1000px white");
    }
    function i(e) {
      e.classList.remove("navbar-light"), e.classList.add("navbar-dark"), s(e);
    }
    function s(e) {
      e.style.boxShadow = "";
    }
    function l(e, t, o, n, a) {
      var r = window.pageYOffset,
        l = a.classList.contains("show");
      "show" === e.type && c(t),
        "hidden" === e.type && o && s(t),
        "hidden" === e.type && ((!n && !o) || (n && !r)) && i(t),
        ("load" !== e && "scroll" !== e) || !n || l || (r ? c : i)(t);
    }
    [].forEach.call(e, function (t) {
      var o = t.querySelector(".navbar-collapse"),
        n = t.classList.contains("navbar-light"),
        a = t.classList.contains("navbar-togglable");
      r.forEach(function (e) {
        window.addEventListener(e, function () {
          l(e, t, n, a, o);
        });
      }),
        $(o).on("show.bs.collapse hidden.bs.collapse", function (e) {
          l(e, t, n, a, o);
        });
    });
  })(),
  (function () {
    var e = document.querySelectorAll('[data-toggle="password"]');
    [].forEach.call(e, function (n) {
      n.addEventListener("click", function (e) {
        e.preventDefault();
        var t = document.querySelector(n.getAttribute("href")),
          o = "password" === t.type ? "text" : "password";
        t.type = o;
      });
    });
  })(),
  (function () {
    var e = document.querySelectorAll('[data-toggle="popover"]');
    e && $(e).popover();
  })(),
  (function () {
    var e = document.querySelectorAll('[data-toggle="price"]');
    "undefined" != typeof CountUp &&
      e &&
      [].forEach.call(e, function (r) {
        r.addEventListener("click", function () {
          var e = r.dataset.target,
            t = document.querySelector(e),
            o = t.innerHTML,
            n = r.dataset.value,
            a = new CountUp(t, o, n);
          a.error ? console.error(a.error) : a.start();
        });
      });
  })(),
  (function () {
    var e = document.querySelectorAll('[data-toggle="prices"]');
    "undefined" != typeof CountUp &&
      e &&
      [].forEach.call(e, function (o) {
        o.addEventListener("change", function () {
          var e = o.dataset.target,
            t = document.querySelectorAll(e),
            r = o.checked;
          [].forEach.call(t, function (e) {
            var t = e.dataset.minValue,
              o = e.dataset.maxValue,
              n = e.innerHTML,
              a = new CountUp(e, n, r ? o : t);
            a.error ? console.error(a.error) : a.start();
          });
        });
      });
  })(),
  (function () {
    var e = "[data-scroll]";
    "undefined" != typeof SmoothScroll &&
      new SmoothScroll(e, {
        header: ".navbar.fixed-top",
        offset: function (e, t) {
          return t.dataset.offset ? t.dataset.offset : 24;
        },
      });
  })(),
  (function () {
    var e = document.querySelectorAll(".svg-shim > svg");
    /MSIE \d|Trident.*rv:/.test(navigator.userAgent) &&
      [].forEach.call(e, function (e) {
        !(function (e) {
          var t = window.getComputedStyle(e, null).getPropertyValue("color"),
            o = new XMLSerializer().serializeToString(e);
          o =
            "data:image/svg+xml," +
            (o = (o = (o = (o = (o = (o = o.replace(
              /currentColor/g,
              t
            )).replace(/\s\s+/g, " ")).replace(/</g, "%3C")).replace(
              />/g,
              "%3E"
            )).replace(/#/g, "%23")).replace(/"/g, "'"));
          var n = document.createElement("img");
          (n.src = o), (n.alt = "...");
          var a = e.parentNode;
          a.appendChild(n), a.removeChild(e);
        })(e);
      });
  })(),
  (function () {
    var e = document.querySelectorAll(".table-clickable [data-href]");
    [].forEach.call(e, function (t) {
      t.addEventListener("click", function (e) {
        e.preventDefault(), (document.location.href = t.dataset.href);
      });
    });
  })(),
  (function () {
    var e = document.querySelectorAll('[data-toggle="table-features"]');
    [].forEach.call(e, function (t) {
      t.addEventListener("change", function () {
        var e = t.dataset.target;
        document.querySelector(e).classList.toggle("table-features-alt");
      });
    });
  })(),
  (function () {
    var e = document.querySelectorAll('[data-toggle="tooltip"]');
    e && $(e).tooltip();
  })(),
  (function () {
    var e = document.querySelectorAll("[data-typed]");
    "undefined" != typeof Typed &&
      e &&
      [].forEach.call(e, function (e) {
        var t = e.dataset.options ? JSON.parse(e.dataset.options) : {},
          o = Object.assign(
            { typeSpeed: 30, backSpeed: 30, backDelay: 2e3, loop: !0 },
            t
          );
        new Typed(e, o);
      });
  })();
