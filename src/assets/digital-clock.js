(() => {
  "use strict";
  var t = {
      383: (t, r) => {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.css = void 0),
          (r.css =
            "\n:host {\n    display: flex;\n}\n\nsvg {\n    color: #eee;\n}\n\npath.active {\n    color: #0f0;\n}\n");
      },
      562: function (t, r, e) {
        var L,
          n,
          l,
          o,
          i,
          a,
          c =
            (this && this.__classPrivateFieldGet) ||
            function (t, r, e, L) {
              if ("a" === e && !L)
                throw new TypeError(
                  "Private accessor was defined without a getter"
                );
              if ("function" == typeof r ? t !== r || !L : !r.has(t))
                throw new TypeError(
                  "Cannot read private member from an object whose class did not declare it"
                );
              return "m" === e
                ? L
                : "a" === e
                ? L.call(t)
                : L
                ? L.value
                : r.get(t);
            },
          s =
            (this && this.__classPrivateFieldSet) ||
            function (t, r, e, L, n) {
              if ("m" === L)
                throw new TypeError("Private method is not writable");
              if ("a" === L && !n)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" == typeof r ? t !== r || !n : !r.has(t))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              return (
                "a" === L ? n.call(t, e) : n ? (n.value = e) : r.set(t, e), e
              );
            };
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.DigitalClock = void 0);
        const h = e(383),
          d = e(39);
        class f extends HTMLElement {
          constructor() {
            super(),
              L.add(this),
              n.set(this, this.attachShadow({ mode: "closed" })),
              l.set(this, void 0);
            const t = document.createElement("style");
            (t.textContent = h.css), c(this, n, "f").append(t);
            const r = document.createElement("div");
            (r.innerHTML = d.svg),
              s(this, l, r.children[0], "f"),
              c(this, n, "f").append(c(this, l, "f"));
          }
          set output(t) {
            const r = Array.from(c(this, l, "f").children);
            c(this, L, "m", o).call(this, t >> 21, r.slice(0, 7)),
              c(this, L, "m", o).call(this, t >> 14, r.slice(7, 14)),
              c(this, L, "m", o).call(this, t >> 7, r.slice(14, 21)),
              c(this, L, "m", o).call(this, t >> 0, r.slice(21, 28)),
              c(this, L, "m", i).call(this, t >> 28, r.slice(28, 30));
          }
        }
        (r.DigitalClock = f),
          (n = new WeakMap()),
          (l = new WeakMap()),
          (L = new WeakSet()),
          (o = function (t, r) {
            r.forEach((r, e) => {
              r.classList[c(this, L, "m", a).call(this, t & Math.pow(2, e))](
                "active"
              );
            });
          }),
          (i = function (t, r) {
            r.forEach((r) => {
              r.classList[c(this, L, "m", a).call(this, 1 & t)]("active");
            });
          }),
          (a = function (t) {
            return t ? "add" : "remove";
          }),
          customElements.define("digital-clock", f);
      },
      329: function (t, r, e) {
        var L =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, r, e, L) {
                  void 0 === L && (L = e),
                    Object.defineProperty(t, L, {
                      enumerable: !0,
                      get: function () {
                        return r[e];
                      },
                    });
                }
              : function (t, r, e, L) {
                  void 0 === L && (L = e), (t[L] = r[e]);
                }),
          n =
            (this && this.__exportStar) ||
            function (t, r) {
              for (var e in t)
                "default" === e ||
                  Object.prototype.hasOwnProperty.call(r, e) ||
                  L(r, t, e);
            };
        Object.defineProperty(r, "__esModule", { value: !0 }), n(e(562), r);
      },
      39: (t, r) => {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.svg = void 0),
          (r.svg =
            '\n<svg xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" viewBox="0 0 236 96">\n    <path fill="currentColor" d="M 10,8 L 14,4 L 42,4 L 46,8 L 42,12 L 14,12 L 10,8 z"/>\n    <path fill="currentColor" d="M 8,10 L 12,14 L 12,42 L 8,46 L 4,42 L 4,14 L 8,10 z"/>\n    <path fill="currentColor" d="M 48,10 L 52,14 L 52,42 L 48,46 L 44,42 L 44,14 L 48,10 z"/>\n    <path fill="currentColor" d="M 10,48 L 14,44 L 42,44 L 46,48 L 42,52 L 14,52 L 10,48 z" />\n    <path fill="currentColor" d="M 8,50 L 12,54 L 12,82 L 8,86 L 4,82 L 4,54 L 8,50 z"/>\n    <path fill="currentColor" d="M 48,50 L 52,54 L 52,82 L 48,86 L 44,82 L 44,54 L 48,50 z" />\n    <path fill="currentColor" d="M 10,88 L 14,84 L 42,84 L 46,88 L 42,92 L 14,92 L 10,88 z"/>\n    <path fill="currentColor" d="M 66,8 L 70,4 L 98,4 L 102,8 L 98,12 L 70,12 L 66,8 z" />\n    <path fill="currentColor" d="M 64,10 L 68,14 L 68,42 L 64,46 L 60,42 L 60,14 L 64,10 z"/>\n    <path fill="currentColor" d="M 104,10 L 108,14 L 108,42 L 104,46 L 100,42 L 100,14 L 104,10 z" />\n    <path fill="currentColor" d="M 66,48 L 70,44 L 98,44 L 102,48 L 98,52 L 70,52 L 66,48 z"/>\n    <path fill="currentColor" d="M 64,50 L 68,54 L 68,82 L 64,86 L 60,82 L 60,54 L 64,50 z" />\n    <path fill="currentColor" d="M 104,50 L 108,54 L 108,82 L 104,86 L 100,82 L 100,54 L 104,50 z"/>\n    <path fill="currentColor" d="M 66,88 L 70,84 L 98,84 L 102,88 L 98,92 L 70,92 L 66,88 z" />\n    <path fill="currentColor" d="M 134,8 L 138,4 L 166,4 L 170,8 L 166,12 L 138,12 L 134,8 z" />\n    <path fill="currentColor" d="M 132,10 L 136,14 L 136,42 L 132,46 L 128,42 L 128,14 L 132,10 z"/>\n    <path fill="currentColor" d="M 172,10 L 176,14 L 176,42 L 172,46 L 168,42 L 168,14 L 172,10 z" />\n    <path fill="currentColor" d="M 134,48 L 138,44 L 166,44 L 170,48 L 166,52 L 138,52 L 134,48 z"/>\n    <path fill="currentColor" d="M 132,50 L 136,54 L 136,82 L 132,86 L 128,82 L 128,54 L 132,50 z" />\n    <path fill="currentColor" d="M 172,50 L 176,54 L 176,82 L 172,86 L 168,82 L 168,54 L 172,50 z"/>\n    <path fill="currentColor" d="M 134,88 L 138,84 L 166,84 L 170,88 L 166,92 L 138,92 L 134,88 z" />\n    <path fill="currentColor" d="M 190,8 L 194,4 L 222,4 L 226,8 L 222,12 L 194,12 L 190,8 z"/>\n    <path fill="currentColor" d="M 188,10 L 192,14 L 192,42 L 188,46 L 184,42 L 184,14 L 188,10 z" />\n    <path fill="currentColor" d="M 228,10 L 232,14 L 232,42 L 228,46 L 224,42 L 224,14 L 228,10 z"/>\n    <path fill="currentColor" d="M 190,48 L 194,44 L 222,44 L 226,48 L 222,52 L 194,52 L 190,48 z" />\n    <path fill="currentColor" d="M 188,50 L 192,54 L 192,82 L 188,86 L 184,82 L 184,54 L 188,50 z"/>\n    <path fill="currentColor" d="M 228,50 L 232,54 L 232,82 L 228,86 L 224,82 L 224,54 L 228,50 z" />\n    <path fill="currentColor" d="M 190,88 L 194,84 L 222,84 L 226,88 L 222,92 L 194,92 L 190,88 z"/>\n\n    <path fill="currentColor" d="M 34,32 A 4,4 0 1 1 26,32 A 4,4 0 1 1 34,32 z" transform="matrix(0.9887175,0,0,0.9870497,88.293345,-3.5855904)"/>\n    <path fill="currentColor" d="M 34,32 A 4,4 0 1 1 26,32 A 4,4 0 1 1 34,32 z" transform="matrix(0.9887175,0,0,0.9870497,88.293345,36.41441)"/>\n</svg>\n');
      },
    },
    r = {};
  !(function e(L) {
    var n = r[L];
    if (void 0 !== n) return n.exports;
    var l = (r[L] = { exports: {} });
    return t[L].call(l.exports, l, l.exports, e), l.exports;
  })(329);
})();
