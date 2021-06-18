(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Contact_form_tsx"],{

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = (0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@unform/core/dist/index.es.js":
/*!****************************************************!*\
  !*** ./node_modules/@unform/core/dist/index.es.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormContext": () => (/* binding */ s),
/* harmony export */   "FormProvider": () => (/* binding */ h),
/* harmony export */   "Scope": () => (/* binding */ b),
/* harmony export */   "useField": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var dot_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dot-object */ "./node_modules/dot-object/index.js");
/* harmony import */ var dot_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dot_object__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var s=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});function p(r){var i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(s),u=i.initialData,a=i.errors,c=i.scopePath,l=i.unregisterField,p=i.registerField,v=i.clearFieldError;if(!r)throw new Error('You need to provide the "name" prop.');var d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return c?c+"."+r:r}),[r,c]),h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return dot_object__WEBPACK_IMPORTED_MODULE_1___default().pick(d,u)}),[d,u]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return a[d]}),[a,d]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){v(d)}),[v,d]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return function(){return l(d)}}),[d,l]),{fieldName:d,registerField:p,defaultValue:h,clearError:y,error:b}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var v=function(){return(v=Object.assign||function(r){for(var n,t=1,e=arguments.length;t<e;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o]);return r}).apply(this,arguments)};function d(r,n){var t,e,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,e&&(o=2&i[0]?e.return:i[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,i[1])).done)return o;switch(e=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,e=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(r,u)}catch(r){i=[6,r],e=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var h=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(r,n){var t=r.initialData,o=void 0===t?{}:t,i=r.children,p=r.onSubmit,h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),b=h[0],y=h[1],m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(r){return m.current.find((function(n){return n.name===r}))}),[]),w=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(r){var n=r.ref,t=r.getValue,e=r.path;return t?t(n):e&&dot_object__WEBPACK_IMPORTED_MODULE_1___default().pick(e,n)}),[]),E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(r,n){var t=r.path,e=r.ref,o=r.setValue;return o?o(e,n):!!t&&dot_object__WEBPACK_IMPORTED_MODULE_1___default().set(t,n,e)}),[]),F=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(r){var n=r.clearValue,t=r.ref,e=r.path;return n?n(t,""):e&&dot_object__WEBPACK_IMPORTED_MODULE_1___default().set(e,"",t)}),[]),O=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(r){void 0===r&&(r={}),m.current.forEach((function(n){var t=n.name,e=n.ref,o=n.path,i=n.clearValue;return i?i(e,r[t]):o&&dot_object__WEBPACK_IMPORTED_MODULE_1___default().set(o,r[t]?r[t]:"",e)}))}),[]),P=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(r){var n={};m.current.forEach((function(t){n[t.name]=dot_object__WEBPACK_IMPORTED_MODULE_1___default().pick(t.name,r)})),Object.entries(n).forEach((function(r){var n=r[0],t=r[1],e=g(n);e&&E(e,t)}))}),[g,E]),j=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(r){var n=dot_object__WEBPACK_IMPORTED_MODULE_1___default().dot(r);y(n)}),[]),x=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){var r={};return m.current.forEach((function(n){r[n.name]=w(n)})),dot_object__WEBPACK_IMPORTED_MODULE_1___default().object(r),r}),[w]),k=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(r){return n=void 0,t=void 0,o=function(){var n;return d(this,(function(t){return r&&r.preventDefault(),n=x(),p(n,{reset:O},r),[2]}))},new((e=void 0)||(e=Promise))((function(r,i){function u(r){try{c(o.next(r))}catch(r){i(r)}}function a(r){try{c(o.throw(r))}catch(r){i(r)}}function c(n){n.done?r(n.value):new e((function(r){r(n.value)})).then(u,a)}c((o=o.apply(n,t||[])).next())}));var n,t,e,o}),[p,x,O]),V=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(r){m.current.push(r)}),[]),D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(r){var n=m.current.findIndex((function(n){return n.name===r}));n>-1&&m.current.splice(n,1)}),[]),S=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(r){y((function(n){var t;return v(v({},n),((t={})[r]=void 0,t))}))}),[]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(n,(function(){return{getFieldValue:function(r){var n=g(r);return!!n&&w(n)},setFieldValue:function(r,n){var t=g(r);return!!t&&E(t,n)},getFieldError:function(r){return b[r]},setFieldError:function(r,n){y((function(t){var e;return v(v({},t),((e={})[r]=n,e))}))},clearField:function(r){var n=g(r);n&&F(n)},getErrors:function(){return b},setErrors:function(r){return j(r)},getData:function(){return x()},getFieldRef:function(r){var n=g(r);return!!n&&n.ref},setData:function(r){return P(r)},reset:function(r){return O(r)},submitForm:function(){k()}}})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(s.Provider,v({value:{initialData:o,errors:b,scopePath:"",registerField:V,unregisterField:D,clearFieldError:S,handleSubmit:k}},{children:i}),void 0)}));function b(r){var t=r.path,e=r.children,o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(s),i=o.scopePath,u=function(r,n){var t={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(t[e]=r[e]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(r);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(r,e[o])&&(t[e[o]]=r[e[o]])}return t}(o,["scopePath"]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(s.Provider,v({value:v(v({},u),{scopePath:i.concat(i?"."+t:t)})},{children:e}),void 0)}
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/@unform/web/dist/index.es.js":
/*!***************************************************!*\
  !*** ./node_modules/@unform/web/dist/index.es.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _unform_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @unform/core */ "./node_modules/@unform/core/dist/index.es.js");

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var e=function(){return(e=Object.assign||function(r){for(var t,n=1,o=arguments.length;n<o;n++)for(var e in t=arguments[n])Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e]);return r}).apply(this,arguments)};var i=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(t,i){var a=t.initialData,c=void 0===a?{}:a,l=t.children,u=t.onSubmit,f=function(r,t){var n={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&t.indexOf(o)<0&&(n[o]=r[o]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(o=Object.getOwnPropertySymbols(r);e<o.length;e++)t.indexOf(o[e])<0&&Object.prototype.propertyIsEnumerable.call(r,o[e])&&(n[o[e]]=r[o[e]])}return n}(t,["initialData","children","onSubmit"]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_unform_core__WEBPACK_IMPORTED_MODULE_2__.FormProvider,e({ref:i,initialData:c,onSubmit:u},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_unform_core__WEBPACK_IMPORTED_MODULE_2__.FormContext.Consumer,{children:function(t){var n=t.handleSubmit;return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form",e({onSubmit:n},f,{children:l}),void 0)}},void 0)}),void 0)}));
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./resources/js/Components/Header.tsx":
/*!********************************************!*\
  !*** ./resources/js/Components/Header.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var S = __importStar(__webpack_require__(/*! @Style/HeaderComponentStyle */ "./resources/js/Styles/HeaderComponentStyle.ts"));

function Header() {
  return react_1["default"].createElement(S.Header, null, react_1["default"].createElement(S.AppIcon, null), react_1["default"].createElement(S.AppTitle, null, "Contactar"));
}

exports.default = Header;

/***/ }),

/***/ "./resources/js/Components/UInput.tsx":
/*!********************************************!*\
  !*** ./resources/js/Components/UInput.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var core_1 = __webpack_require__(/*! @unform/core */ "./node_modules/@unform/core/dist/index.es.js");

var UInput = function UInput(props) {
  var name = props.name,
      label = props.label,
      type = props.type,
      placeholder = props.placeholder,
      required = props.required,
      accept = props.accept,
      errors = props.errors;
  var inputRef = react_1.useRef(null);

  var _a = core_1.useField(name),
      fieldName = _a.fieldName,
      defaultValue = _a.defaultValue,
      registerField = _a.registerField;

  react_1.useEffect(function () {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: type === 'file' ? 'files[0]' : 'value',
      clearValue: function clearValue(ref) {
        ref.value = '';
      }
    });
  }, [fieldName, registerField]);

  var inputClasses = function inputClasses() {
    if (errors && errors[name]) {
      return "form-control border-danger";
    }

    return "form-control";
  };

  var renderError = function renderError() {
    if (errors && errors[name]) {
      return react_1["default"].createElement("small", {
        className: "text-danger"
      }, errors[name]);
    }
  };

  return react_1["default"].createElement("div", {
    className: "form-group"
  }, label && react_1["default"].createElement("label", null, label), react_1["default"].createElement("input", __assign({
    type: type,
    className: inputClasses(),
    ref: inputRef,
    defaultValue: defaultValue
  }, accept && {
    accept: accept
  }, required && {
    required: required
  }, placeholder && {
    placeholder: placeholder
  })), renderError());
};

UInput.defaultProps = {
  type: 'text'
};
exports.default = UInput;

/***/ }),

/***/ "./resources/js/Components/UTextArea.tsx":
/*!***********************************************!*\
  !*** ./resources/js/Components/UTextArea.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var core_1 = __webpack_require__(/*! @unform/core */ "./node_modules/@unform/core/dist/index.es.js");

var UTextArea = function UTextArea(props) {
  var name = props.name,
      label = props.label,
      placeholder = props.placeholder,
      required = props.required,
      errors = props.errors;
  var textAreaRef = react_1.useRef(null);

  var _a = core_1.useField(name),
      fieldName = _a.fieldName,
      defaultValue = _a.defaultValue,
      registerField = _a.registerField;

  react_1.useEffect(function () {
    registerField({
      name: fieldName,
      ref: textAreaRef,
      getValue: function getValue(ref) {
        return ref.current.value;
      },
      setValue: function setValue(ref, value) {
        ref.current.value = value;
      },
      clearValue: function clearValue(ref) {
        ref.current.value = '';
      }
    });
  }, [fieldName, registerField]);

  var textAreaClasses = function textAreaClasses() {
    if (errors && errors[name]) {
      return "form-control border-danger";
    }

    return "form-control";
  };

  var renderError = function renderError() {
    if (errors && errors[name]) {
      return react_1["default"].createElement("small", {
        className: "text-danger"
      }, errors[name]);
    }
  };

  return react_1["default"].createElement("div", {
    className: "form-group"
  }, label && react_1["default"].createElement("label", null, label), react_1["default"].createElement("textarea", __assign({
    className: textAreaClasses(),
    ref: textAreaRef,
    defaultValue: defaultValue
  }, required && {
    required: required
  }, placeholder && {
    placeholder: placeholder
  })), renderError());
};

exports.default = UTextArea;

/***/ }),

/***/ "./resources/js/Configs/device.ts":
/*!****************************************!*\
  !*** ./resources/js/Configs/device.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.size = void 0;
exports.size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};
exports.default = {
  mobileS: "(max-width: " + exports.size.mobileS + ")",
  mobileM: "(max-width: " + exports.size.mobileM + ")",
  mobileL: "(max-width: " + exports.size.mobileL + ")",
  tablet: "(max-width: " + exports.size.tablet + ")",
  laptop: "(max-width: " + exports.size.laptop + ")",
  laptopL: "(max-width: " + exports.size.laptopL + ")",
  desktop: "(max-width: " + exports.size.desktop + ")",
  desktopL: "(max-width: " + exports.size.desktop + ")"
};

/***/ }),

/***/ "./resources/js/Layouts/Main.tsx":
/*!***************************************!*\
  !*** ./resources/js/Layouts/Main.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_notifications_component_1 = __importDefault(__webpack_require__(/*! react-notifications-component */ "./node_modules/react-notifications-component/dist/index.js"));

var S = __importStar(__webpack_require__(/*! @Style/MainLayoutStyle */ "./resources/js/Styles/MainLayoutStyle.ts"));

var Header_1 = __importDefault(__webpack_require__(/*! @Component/Header */ "./resources/js/Components/Header.tsx"));

var MainLayout = function MainLayout(props) {
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(react_notifications_component_1["default"], null), react_1["default"].createElement(Header_1["default"], null), react_1["default"].createElement(S.ChildrenContainer, null, props.children));
};

exports.default = MainLayout;

/***/ }),

/***/ "./resources/js/Pages/Contact/form.tsx":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Contact/form.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var web_1 = __webpack_require__(/*! @unform/web */ "./node_modules/@unform/web/dist/index.es.js");

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_notifications_component_1 = __webpack_require__(/*! react-notifications-component */ "./node_modules/react-notifications-component/dist/index.js");

__webpack_require__(/*! react-notifications-component/dist/theme.css */ "./node_modules/react-notifications-component/dist/theme.css");

var Main_1 = __importDefault(__webpack_require__(/*! @Layout/Main */ "./resources/js/Layouts/Main.tsx"));

var S = __importStar(__webpack_require__(/*! @Style/ContactPageStyle */ "./resources/js/Styles/ContactPageStyle.ts"));

var UInput_1 = __importDefault(__webpack_require__(/*! @Component/UInput */ "./resources/js/Components/UInput.tsx"));

var UTextArea_1 = __importDefault(__webpack_require__(/*! @Component/UTextArea */ "./resources/js/Components/UTextArea.tsx"));

var GetIP_1 = __importDefault(__webpack_require__(/*! @Service/GetIP */ "./resources/js/Services/GetIP.ts"));

var Form = function Form() {
  var formRef = react_1.useRef(null);

  var _a = react_1.useState(false),
      loading = _a[0],
      setLoading = _a[1];

  var _b = inertia_react_1.usePage().props,
      errors = _b.errors,
      title = _b.title,
      message = _b.message,
      clearTime = _b.clearTime;
  var acceptedFiles = 'application/msword, text/plain, application/pdf, application/vnd.oasis.opendocument.text';
  react_1.useEffect(function () {
    var _a;

    if (clearTime || Object.keys(errors).length) {
      setLoading(false);
    }

    if (clearTime) {
      (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.reset();
    }

    if (title && message) {
      react_notifications_component_1.store.addNotification({
        title: title,
        message: message,
        type: 'success',
        container: 'bottom-right'
      });
    }
  }, [clearTime, message, errors]);

  var handleSubmit = function handleSubmit(data) {
    return __awaiter(void 0, void 0, void 0, function () {
      var formData, _a, _b, _c;

      return __generator(this, function (_d) {
        switch (_d.label) {
          case 0:
            if (loading) {
              return [2
              /*return*/
              ];
            }

            setLoading(true);
            formData = new FormData();
            Object.keys(data).map(function (k) {
              formData.append(k, data[k]);
            });
            _b = (_a = formData).append;
            _c = ['ip'];
            return [4
            /*yield*/
            , GetIP_1["default"]()];

          case 1:
            _b.apply(_a, _c.concat([_d.sent()]));

            inertia_1.Inertia.post('/contact', formData);
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return react_1["default"].createElement(Main_1["default"], null, react_1["default"].createElement(S.Container, null, react_1["default"].createElement(S.SubContainer, null, react_1["default"].createElement(S.Title, null, "Contact form"), react_1["default"].createElement(web_1.Form, {
    ref: formRef,
    onSubmit: handleSubmit
  }, react_1["default"].createElement(UInput_1["default"], {
    name: "name",
    label: "Name",
    placeholder: "Please insert your name",
    errors: errors,
    required: true
  }), react_1["default"].createElement(UInput_1["default"], {
    name: "email",
    label: "E-mail",
    placeholder: "Please insert your e-mail",
    errors: errors,
    required: true
  }), react_1["default"].createElement(UInput_1["default"], {
    name: "phone",
    label: "Phone",
    placeholder: "Please insert your phone",
    errors: errors,
    required: true
  }), react_1["default"].createElement(UTextArea_1["default"], {
    name: "message",
    label: "Message",
    placeholder: "Please enter with your message here",
    errors: errors,
    required: true
  }), react_1["default"].createElement(UInput_1["default"], {
    type: 'file',
    name: "attachment",
    label: "Attachment (pdf, doc, docx, odt or txt)",
    accept: acceptedFiles,
    errors: errors,
    required: true
  }), react_1["default"].createElement(S.Submit, null, loading ? '...' : 'Send')))));
};

exports.default = Form;

/***/ }),

/***/ "./resources/js/Services/GetIP.ts":
/*!****************************************!*\
  !*** ./resources/js/Services/GetIP.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/**
 * Try get IPv4 from getlocation-db
 */

function GetIP() {
  return __awaiter(this, void 0, void 0, function () {
    var response, data, e_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 4]);

          return [4
          /*yield*/
          , fetch("https://geolocation-db.com/json/")];

        case 1:
          response = _a.sent();
          return [4
          /*yield*/
          , response.json()];

        case 2:
          data = _a.sent();
          return [2
          /*return*/
          , data.IPv4];

        case 3:
          e_1 = _a.sent();
          return [2
          /*return*/
          , ""];

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.default = GetIP;

/***/ }),

/***/ "./resources/js/Styles/ContactPageStyle.ts":
/*!*************************************************!*\
  !*** ./resources/js/Styles/ContactPageStyle.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Submit = exports.Title = exports.SubContainer = exports.Container = void 0;

var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var device_1 = __importDefault(__webpack_require__(/*! @Config/device */ "./resources/js/Configs/device.ts"));

exports.Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: calc(100vh - 30px);\n\n  @media ", " {\n    min-height: auto;\n    height: 100%;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: calc(100vh - 30px);\n\n  @media ", " {\n    min-height: auto;\n    height: 100%;\n  }\n"])), device_1["default"].mobileL);
exports.SubContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 500px;\n  height: auto;\n  margin-top: 30px;\n  padding: 15px;\n  border: 1px solid lightgray;\n  box-shadow: 1px 1px 5px 1px #ccc;\n  background-color: white;\n\n  @media ", " {\n    margin-top: 0;\n    border: 0;\n    box-shadow: unset;\n  }\n"], ["\n  width: 500px;\n  height: auto;\n  margin-top: 30px;\n  padding: 15px;\n  border: 1px solid lightgray;\n  box-shadow: 1px 1px 5px 1px #ccc;\n  background-color: white;\n\n  @media ", " {\n    margin-top: 0;\n    border: 0;\n    box-shadow: unset;\n  }\n"])), device_1["default"].mobileL);
exports.Title = styled_components_1["default"].h1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 22px;\n"], ["\n  font-size: 22px;\n"])));
exports.Submit = styled_components_1["default"].button.attrs(function () {
  return {
    type: "submit",
    className: "btn btn-primary w-100 font-weight-bold"
  };
})(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

/***/ }),

/***/ "./resources/js/Styles/HeaderComponentStyle.ts":
/*!*****************************************************!*\
  !*** ./resources/js/Styles/HeaderComponentStyle.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AppTitle = exports.AppIcon = exports.Header = void 0;

var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var device_1 = __importDefault(__webpack_require__(/*! @Config/device */ "./resources/js/Configs/device.ts"));

exports.Header = styled_components_1["default"].header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background-color: #333;\n  box-shadow: 0px 2px 3px 1px #333;\n\n  @media ", " {\n    position: unset;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background-color: #333;\n  box-shadow: 0px 2px 3px 1px #333;\n\n  @media ", " {\n    position: unset;\n  }\n"])), device_1["default"].mobileL);
exports.AppIcon = styled_components_1["default"].img.attrs(function () {
  return {
    src: "/img/contactar-small.png",
    alt: "Application icon"
  };
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 10px;\n  left: 20px;\n  width: 35px;\n  height: 35px;\n"], ["\n  position: absolute;\n  top: 10px;\n  left: 20px;\n  width: 35px;\n  height: 35px;\n"])));
exports.AppTitle = styled_components_1["default"].p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 0;\n  font-size: 22px;\n  color: white;\n"], ["\n  margin: 0;\n  font-size: 22px;\n  color: white;\n"])));
var templateObject_1, templateObject_2, templateObject_3;

/***/ }),

/***/ "./resources/js/Styles/MainLayoutStyle.ts":
/*!************************************************!*\
  !*** ./resources/js/Styles/MainLayoutStyle.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ChildrenContainer = void 0;

var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var device_1 = __importDefault(__webpack_require__(/*! @Config/device */ "./resources/js/Configs/device.ts"));

exports.ChildrenContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 30px;\n\n  @media ", " {\n    margin-top: 0;\n  }\n"], ["\n  margin-top: 30px;\n\n  @media ", " {\n    margin-top: 0;\n  }\n"])), device_1["default"].mobileL);
var templateObject_1;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/react-notifications-component/dist/theme.css":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/react-notifications-component/dist/theme.css ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".notification-container--bottom-center,.notification-container--bottom-full,.notification-container--bottom-left,.notification-container--bottom-right,.notification-container--center,.notification-container--top-center,.notification-container--top-full,.notification-container--top-left,.notification-container--top-right{min-width:325px;position:absolute;pointer-events:all}.notification-container--bottom-center,.notification-container--center,.notification-container--top-center{display:flex;justify-content:center;align-items:center;flex-direction:column;left:calc(50% - 175px);max-width:350px}.notification-container--center{top:20px;height:100%;pointer-events:none}.notification-container--bottom-full,.notification-container--top-full{width:100%;min-width:100%}.notification-container--bottom-full{bottom:0}.flex-center{min-width:325px;display:flex;justify-content:center;align-items:center;flex-direction:column;pointer-events:all}.notification-container--top-center{top:20px}.notification-container--bottom-center{bottom:20px}.notification-container--top-left{left:20px;top:20px}.notification-container--top-right{right:20px;top:20px}.notification-container--bottom-left{left:20px;bottom:20px}.notification-container--bottom-right{bottom:20px;right:20px}.notification-container--mobile-bottom,.notification-container--mobile-top{pointer-events:all;position:absolute}.notification-container--mobile-top{right:20px;left:20px;top:20px}.notification-container--mobile-bottom{right:20px;left:20px;bottom:20px;margin-bottom:-15px}.notification__item--default{background-color:#007bff;border-left:8px solid #0562c7}.notification__item--default .notification__timer{background-color:#007bff}.notification__item--default .notification__timer-filler{background-color:#fff}.notification__item--default .notification__close{background-color:#007bff}.notification__item--success{background-color:#28a745;border-left:8px solid #1f8838}.notification__item--success .notification__timer{background-color:#28a745}.notification__item--success .notification__timer-filler{background-color:#fff}.notification__item--success .notification__close{background-color:#28a745}.notification__item--danger{background-color:#dc3545;border-left:8px solid #bd1120}.notification__item--danger .notification__timer{background-color:#dc3545}.notification__item--danger .notification__timer-filler{background-color:#fff}.notification__item--danger .notification__close{background-color:#dc3545}.notification__item--info{background-color:#17a2b8;border-left:8px solid #138b9e}.notification__item--info .notification__timer{background-color:#17a2b8}.notification__item--info .notification__timer-filler{background-color:#fff}.notification__item--info .notification__close{background-color:#17a2b8}.notification__item--warning{background-color:#eab000;border-left:8px solid #ce9c09}.notification__item--warning .notification__timer{background-color:#eab000}.notification__item--warning .notification__timer-filler{background-color:#fff}.notification__item--warning .notification__close{background-color:#eab000}.notification__item--awesome{background-color:#685dc3;border-left:8px solid #4c3fb1}.notification__item--awesome .notification__timer{background-color:#685dc3}.notification__item--awesome .notification__timer-filler{background-color:#fff}.notification__item--awesome .notification__close{background-color:#685dc3}@-webkit-keyframes timer{0%{width:100%}to{width:0}}@keyframes timer{0%{width:100%}to{width:0}}.notifications-component{position:fixed;z-index:9000;pointer-events:none;width:100%;height:100%}.notification__item{display:flex;position:relative;border-radius:3px;margin-bottom:15px;box-shadow:1px 3px 4px rgba(0,0,0,.2);cursor:pointer}.notification-container--bottom-full .notification__item,.notification-container--top-full .notification__item{margin-bottom:0;border-radius:0}.notification__timer{width:100%;margin-top:10px}.notification__timer,.notification__timer-filler{height:3px;border-radius:5px}.notification__title{color:#fff;font-weight:700;font-size:14px;margin-top:5px;margin-bottom:5px}.notification__message{color:#fff;max-width:calc(100% - 15px);font-size:14px;line-height:150%;word-wrap:break-word;margin-bottom:0;margin-top:0}.notification__content{padding:8px 15px;display:inline-block;width:100%}.notification__close{width:18px;height:18px;border-radius:50%;display:inline-block;position:absolute;right:10px;top:10px}.notification__close:after{content:\"\\D7\";position:absolute;transform:translate(-50%,-50%);color:#fff;font-size:12px;left:50%;top:50%}.notification-container--mobile-bottom .notification,.notification-container--mobile-bottom .notification__item,.notification-container--mobile-top .notification,.notification-container--mobile-top .notification__item{max-width:100%;width:100%}.notification-container--bottom-right .notification,.notification-container--top-right .notification{margin-left:auto}.notification-container--bottom-left .notification,.notification-container--top-left .notification{margin-right:auto}.notification-container--mobile-bottom .notification,.notification-container--mobile-top .notification{margin-left:auto;margin-right:auto}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/dot-object/index.js":
/*!******************************************!*\
  !*** ./node_modules/dot-object/index.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


function _process (v, mod) {
  var i
  var r

  if (typeof mod === 'function') {
    r = mod(v)
    if (r !== undefined) {
      v = r
    }
  } else if (Array.isArray(mod)) {
    for (i = 0; i < mod.length; i++) {
      r = mod[i](v)
      if (r !== undefined) {
        v = r
      }
    }
  }

  return v
}

function parseKey (key, val) {
  // detect negative index notation
  if (key[0] === '-' && Array.isArray(val) && /^-\d+$/.test(key)) {
    return val.length + parseInt(key, 10)
  }
  return key
}

function isIndex (k) {
  return /^\d+$/.test(k)
}

function isObject (val) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

function isArrayOrObject (val) {
  return Object(val) === val
}

function isEmptyObject (val) {
  return Object.keys(val).length === 0
}

var blacklist = ['__proto__', 'prototype', 'constructor']
var blacklistFilter = function (part) { return blacklist.indexOf(part) === -1 }

function parsePath (path, sep) {
  if (path.indexOf('[') >= 0) {
    path = path.replace(/\[/g, sep).replace(/]/g, '')
  }

  var parts = path.split(sep)

  var check = parts.filter(blacklistFilter)

  if (check.length !== parts.length) {
    throw Error('Refusing to update blacklisted property ' + path)
  }

  return parts
}

var hasOwnProperty = Object.prototype.hasOwnProperty

function DotObject (separator, override, useArray, useBrackets) {
  if (!(this instanceof DotObject)) {
    return new DotObject(separator, override, useArray, useBrackets)
  }

  if (typeof override === 'undefined') override = false
  if (typeof useArray === 'undefined') useArray = true
  if (typeof useBrackets === 'undefined') useBrackets = true
  this.separator = separator || '.'
  this.override = override
  this.useArray = useArray
  this.useBrackets = useBrackets
  this.keepArray = false

  // contains touched arrays
  this.cleanup = []
}

var dotDefault = new DotObject('.', false, true, true)
function wrap (method) {
  return function () {
    return dotDefault[method].apply(dotDefault, arguments)
  }
}

DotObject.prototype._fill = function (a, obj, v, mod) {
  var k = a.shift()

  if (a.length > 0) {
    obj[k] = obj[k] || (this.useArray && isIndex(a[0]) ? [] : {})

    if (!isArrayOrObject(obj[k])) {
      if (this.override) {
        obj[k] = {}
      } else {
        if (!(isArrayOrObject(v) && isEmptyObject(v))) {
          throw new Error(
            'Trying to redefine `' + k + '` which is a ' + typeof obj[k]
          )
        }

        return
      }
    }

    this._fill(a, obj[k], v, mod)
  } else {
    if (!this.override && isArrayOrObject(obj[k]) && !isEmptyObject(obj[k])) {
      if (!(isArrayOrObject(v) && isEmptyObject(v))) {
        throw new Error("Trying to redefine non-empty obj['" + k + "']")
      }

      return
    }

    obj[k] = _process(v, mod)
  }
}

/**
 *
 * Converts an object with dotted-key/value pairs to it's expanded version
 *
 * Optionally transformed by a set of modifiers.
 *
 * Usage:
 *
 *   var row = {
 *     'nr': 200,
 *     'doc.name': '  My Document  '
 *   }
 *
 *   var mods = {
 *     'doc.name': [_s.trim, _s.underscored]
 *   }
 *
 *   dot.object(row, mods)
 *
 * @param {Object} obj
 * @param {Object} mods
 */
DotObject.prototype.object = function (obj, mods) {
  var self = this

  Object.keys(obj).forEach(function (k) {
    var mod = mods === undefined ? null : mods[k]
    // normalize array notation.
    var ok = parsePath(k, self.separator).join(self.separator)

    if (ok.indexOf(self.separator) !== -1) {
      self._fill(ok.split(self.separator), obj, obj[k], mod)
      delete obj[k]
    } else {
      obj[k] = _process(obj[k], mod)
    }
  })

  return obj
}

/**
 * @param {String} path dotted path
 * @param {String} v value to be set
 * @param {Object} obj object to be modified
 * @param {Function|Array} mod optional modifier
 */
DotObject.prototype.str = function (path, v, obj, mod) {
  var ok = parsePath(path, this.separator).join(this.separator)

  if (path.indexOf(this.separator) !== -1) {
    this._fill(ok.split(this.separator), obj, v, mod)
  } else {
    obj[path] = _process(v, mod)
  }

  return obj
}

/**
 *
 * Pick a value from an object using dot notation.
 *
 * Optionally remove the value
 *
 * @param {String} path
 * @param {Object} obj
 * @param {Boolean} remove
 */
DotObject.prototype.pick = function (path, obj, remove, reindexArray) {
  var i
  var keys
  var val
  var key
  var cp

  keys = parsePath(path, this.separator)
  for (i = 0; i < keys.length; i++) {
    key = parseKey(keys[i], obj)
    if (obj && typeof obj === 'object' && key in obj) {
      if (i === keys.length - 1) {
        if (remove) {
          val = obj[key]
          if (reindexArray && Array.isArray(obj)) {
            obj.splice(key, 1)
          } else {
            delete obj[key]
          }
          if (Array.isArray(obj)) {
            cp = keys.slice(0, -1).join('.')
            if (this.cleanup.indexOf(cp) === -1) {
              this.cleanup.push(cp)
            }
          }
          return val
        } else {
          return obj[key]
        }
      } else {
        obj = obj[key]
      }
    } else {
      return undefined
    }
  }
  if (remove && Array.isArray(obj)) {
    obj = obj.filter(function (n) {
      return n !== undefined
    })
  }
  return obj
}
/**
 *
 * Delete value from an object using dot notation.
 *
 * @param {String} path
 * @param {Object} obj
 * @return {any} The removed value
 */
DotObject.prototype.delete = function (path, obj) {
  return this.remove(path, obj, true)
}

/**
 *
 * Remove value from an object using dot notation.
 *
 * Will remove multiple items if path is an array.
 * In this case array indexes will be retained until all
 * removals have been processed.
 *
 * Use dot.delete() to automatically  re-index arrays.
 *
 * @param {String|Array<String>} path
 * @param {Object} obj
 * @param {Boolean} reindexArray
 * @return {any} The removed value
 */
DotObject.prototype.remove = function (path, obj, reindexArray) {
  var i

  this.cleanup = []
  if (Array.isArray(path)) {
    for (i = 0; i < path.length; i++) {
      this.pick(path[i], obj, true, reindexArray)
    }
    if (!reindexArray) {
      this._cleanup(obj)
    }
    return obj
  } else {
    return this.pick(path, obj, true, reindexArray)
  }
}

DotObject.prototype._cleanup = function (obj) {
  var ret
  var i
  var keys
  var root
  if (this.cleanup.length) {
    for (i = 0; i < this.cleanup.length; i++) {
      keys = this.cleanup[i].split('.')
      root = keys.splice(0, -1).join('.')
      ret = root ? this.pick(root, obj) : obj
      ret = ret[keys[0]].filter(function (v) {
        return v !== undefined
      })
      this.set(this.cleanup[i], ret, obj)
    }
    this.cleanup = []
  }
}

/**
 * Alias method  for `dot.remove`
 *
 * Note: this is not an alias for dot.delete()
 *
 * @param {String|Array<String>} path
 * @param {Object} obj
 * @param {Boolean} reindexArray
 * @return {any} The removed value
 */
DotObject.prototype.del = DotObject.prototype.remove

/**
 *
 * Move a property from one place to the other.
 *
 * If the source path does not exist (undefined)
 * the target property will not be set.
 *
 * @param {String} source
 * @param {String} target
 * @param {Object} obj
 * @param {Function|Array} mods
 * @param {Boolean} merge
 */
DotObject.prototype.move = function (source, target, obj, mods, merge) {
  if (typeof mods === 'function' || Array.isArray(mods)) {
    this.set(target, _process(this.pick(source, obj, true), mods), obj, merge)
  } else {
    merge = mods
    this.set(target, this.pick(source, obj, true), obj, merge)
  }

  return obj
}

/**
 *
 * Transfer a property from one object to another object.
 *
 * If the source path does not exist (undefined)
 * the property on the other object will not be set.
 *
 * @param {String} source
 * @param {String} target
 * @param {Object} obj1
 * @param {Object} obj2
 * @param {Function|Array} mods
 * @param {Boolean} merge
 */
DotObject.prototype.transfer = function (
  source,
  target,
  obj1,
  obj2,
  mods,
  merge
) {
  if (typeof mods === 'function' || Array.isArray(mods)) {
    this.set(
      target,
      _process(this.pick(source, obj1, true), mods),
      obj2,
      merge
    )
  } else {
    merge = mods
    this.set(target, this.pick(source, obj1, true), obj2, merge)
  }

  return obj2
}

/**
 *
 * Copy a property from one object to another object.
 *
 * If the source path does not exist (undefined)
 * the property on the other object will not be set.
 *
 * @param {String} source
 * @param {String} target
 * @param {Object} obj1
 * @param {Object} obj2
 * @param {Function|Array} mods
 * @param {Boolean} merge
 */
DotObject.prototype.copy = function (source, target, obj1, obj2, mods, merge) {
  if (typeof mods === 'function' || Array.isArray(mods)) {
    this.set(
      target,
      _process(
        // clone what is picked
        JSON.parse(JSON.stringify(this.pick(source, obj1, false))),
        mods
      ),
      obj2,
      merge
    )
  } else {
    merge = mods
    this.set(target, this.pick(source, obj1, false), obj2, merge)
  }

  return obj2
}

/**
 *
 * Set a property on an object using dot notation.
 *
 * @param {String} path
 * @param {any} val
 * @param {Object} obj
 * @param {Boolean} merge
 */
DotObject.prototype.set = function (path, val, obj, merge) {
  var i
  var k
  var keys
  var key

  // Do not operate if the value is undefined.
  if (typeof val === 'undefined') {
    return obj
  }
  keys = parsePath(path, this.separator)

  for (i = 0; i < keys.length; i++) {
    key = keys[i]
    if (i === keys.length - 1) {
      if (merge && isObject(val) && isObject(obj[key])) {
        for (k in val) {
          if (hasOwnProperty.call(val, k)) {
            obj[key][k] = val[k]
          }
        }
      } else if (merge && Array.isArray(obj[key]) && Array.isArray(val)) {
        for (var j = 0; j < val.length; j++) {
          obj[keys[i]].push(val[j])
        }
      } else {
        obj[key] = val
      }
    } else if (
      // force the value to be an object
      !hasOwnProperty.call(obj, key) ||
      (!isObject(obj[key]) && !Array.isArray(obj[key]))
    ) {
      // initialize as array if next key is numeric
      if (/^\d+$/.test(keys[i + 1])) {
        obj[key] = []
      } else {
        obj[key] = {}
      }
    }
    obj = obj[key]
  }
  return obj
}

/**
 *
 * Transform an object
 *
 * Usage:
 *
 *   var obj = {
 *     "id": 1,
 *    "some": {
 *      "thing": "else"
 *    }
 *   }
 *
 *   var transform = {
 *     "id": "nr",
 *    "some.thing": "name"
 *   }
 *
 *   var tgt = dot.transform(transform, obj)
 *
 * @param {Object} recipe Transform recipe
 * @param {Object} obj Object to be transformed
 * @param {Array} mods modifiers for the target
 */
DotObject.prototype.transform = function (recipe, obj, tgt) {
  obj = obj || {}
  tgt = tgt || {}
  Object.keys(recipe).forEach(
    function (key) {
      this.set(recipe[key], this.pick(key, obj), tgt)
    }.bind(this)
  )
  return tgt
}

/**
 *
 * Convert object to dotted-key/value pair
 *
 * Usage:
 *
 *   var tgt = dot.dot(obj)
 *
 *   or
 *
 *   var tgt = {}
 *   dot.dot(obj, tgt)
 *
 * @param {Object} obj source object
 * @param {Object} tgt target object
 * @param {Array} path path array (internal)
 */
DotObject.prototype.dot = function (obj, tgt, path) {
  tgt = tgt || {}
  path = path || []
  var isArray = Array.isArray(obj)

  Object.keys(obj).forEach(
    function (key) {
      var index = isArray && this.useBrackets ? '[' + key + ']' : key
      if (
        isArrayOrObject(obj[key]) &&
        ((isObject(obj[key]) && !isEmptyObject(obj[key])) ||
          (Array.isArray(obj[key]) && !this.keepArray && obj[key].length !== 0))
      ) {
        if (isArray && this.useBrackets) {
          var previousKey = path[path.length - 1] || ''
          return this.dot(
            obj[key],
            tgt,
            path.slice(0, -1).concat(previousKey + index)
          )
        } else {
          return this.dot(obj[key], tgt, path.concat(index))
        }
      } else {
        if (isArray && this.useBrackets) {
          tgt[path.join(this.separator).concat('[' + key + ']')] = obj[key]
        } else {
          tgt[path.concat(index).join(this.separator)] = obj[key]
        }
      }
    }.bind(this)
  )
  return tgt
}

DotObject.pick = wrap('pick')
DotObject.move = wrap('move')
DotObject.transfer = wrap('transfer')
DotObject.transform = wrap('transform')
DotObject.copy = wrap('copy')
DotObject.object = wrap('object')
DotObject.str = wrap('str')
DotObject.set = wrap('set')
DotObject.delete = wrap('delete')
DotObject.del = DotObject.remove = wrap('remove')
DotObject.dot = wrap('dot');
['override', 'overwrite'].forEach(function (prop) {
  Object.defineProperty(DotObject, prop, {
    get: function () {
      return dotDefault.override
    },
    set: function (val) {
      dotDefault.override = !!val
    }
  })
});
['useArray', 'keepArray', 'useBrackets'].forEach(function (prop) {
  Object.defineProperty(DotObject, prop, {
    get: function () {
      return dotDefault[prop]
    },
    set: function (val) {
      dotDefault[prop] = val
    }
  })
})

DotObject._process = _process

module.exports = DotObject


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-notifications-component/dist/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-notifications-component/dist/index.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
 false?0:module.exports = __webpack_require__(/*! ./js/react-notifications.dev.js */ "./node_modules/react-notifications-component/dist/js/react-notifications.dev.js");

/***/ }),

/***/ "./node_modules/react-notifications-component/dist/js/react-notifications.dev.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-notifications-component/dist/js/react-notifications.dev.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_187__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_187__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_187__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_187__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_187__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./src/components/Container.tsx":
/*!**************************************!*\
  !*** ./src/components/Container.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_6725__) {

"use strict";
__nested_webpack_require_6725__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_6725__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_6725__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_6725__(/*! src/components/Notification */ "./src/components/Notification.tsx");
/* harmony import */ var src_scss_notification_scss__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_6725__(/*! src/scss/notification.scss */ "./src/scss/notification.scss");
/* harmony import */ var src_store__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_6725__(/*! src/store */ "./src/store/index.ts");
/* harmony import */ var src_utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_6725__(/*! src/utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var src_utils_helpers__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_6725__(/*! src/utils/helpers */ "./src/utils/helpers.ts");






class Container extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.handleResize = () => {
            this.setState({ windowWidth: window.innerWidth });
        };
        this.add = (notification) => {
            this.setState(({ notifications }) => ({
                notifications: notification.insert === 'top'
                    ? [notification, ...notifications]
                    : [...notifications, notification]
            }));
            return notification.id;
        };
        this.remove = (id) => {
            this.setState(({ notifications }) => ({
                notifications: notifications.map((notification) => {
                    if (notification.id === id) {
                        notification.hasBeenRemoved = true;
                    }
                    return notification;
                })
            }));
        };
        this.removeAllNotifications = () => {
            this.setState({
                notifications: this.state.notifications.map((notification) => (Object.assign(Object.assign({}, notification), { hasBeenRemoved: true })))
            });
        };
        this.toggleRemoval = (id, callback) => {
            this.setState(({ notifications }) => ({
                notifications: notifications.filter(({ id: nId }) => nId !== id)
            }), callback);
        };
        this.state = {
            isMobile: Object(src_utils_helpers__WEBPACK_IMPORTED_MODULE_5__["isNull"])(props.isMobile) ? src_utils_constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_CONTAINER_VALUES"].isMobile : props.isMobile,
            breakpoint: Object(src_utils_helpers__WEBPACK_IMPORTED_MODULE_5__["isNull"])(props.breakpoint) ? src_utils_constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_CONTAINER_VALUES"].breakpoint : props.breakpoint,
            notifications: [],
            windowWidth: undefined
        };
    }
    componentDidMount() {
        const { types, defaultNotificationWidth } = this.props;
        src_store__WEBPACK_IMPORTED_MODULE_3__["default"].register({
            addNotification: this.add,
            removeNotification: this.remove,
            removeAllNotifications: this.removeAllNotifications,
            defaultNotificationWidth: defaultNotificationWidth || src_utils_constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_CONTAINER_VALUES"].defaultNotificationWidth,
            types
        });
        this.setState({ windowWidth: window.innerWidth });
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    renderNotifications(notifications, isMobile) {
        return notifications.map((notification) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_Notification__WEBPACK_IMPORTED_MODULE_1__["default"], { id: notification.id, key: notification.id, isMobile: isMobile, defaultNotificationWidth: this.props.defaultNotificationWidth, notification: notification, toggleRemoval: this.toggleRemoval, notificationsCount: notifications.length, hasBeenRemoved: notification.hasBeenRemoved })));
    }
    renderMobileNotifications(props) {
        const { className, id } = props;
        const { notifications } = this.state;
        const mobileNotifications = Object(src_utils_helpers__WEBPACK_IMPORTED_MODULE_5__["getNotificationsForMobileView"])(notifications);
        const top = this.renderNotifications(mobileNotifications.top, true);
        const bottom = this.renderNotifications(mobileNotifications.bottom, true);
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { id: id, key: "mobile", className: `notifications-component ${className || ''}` },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification-container--mobile-top" }, top),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification-container--mobile-bottom" }, bottom)));
    }
    renderScreenNotifications(props) {
        const { className, id } = props;
        const { notifications } = this.state;
        const items = Object(src_utils_helpers__WEBPACK_IMPORTED_MODULE_5__["getNotificationsForEachContainer"])(notifications);
        const topFull = this.renderNotifications(items.topFull, false);
        const bottomFull = this.renderNotifications(items.bottomFull, false);
        const topLeft = this.renderNotifications(items.topLeft, false);
        const topRight = this.renderNotifications(items.topRight, false);
        const topCenter = this.renderNotifications(items.topCenter, false);
        const bottomLeft = this.renderNotifications(items.bottomLeft, false);
        const bottomRight = this.renderNotifications(items.bottomRight, false);
        const bottomCenter = this.renderNotifications(items.bottomCenter, false);
        const center = this.renderNotifications(items.center, false);
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { id: id, key: "screen", className: `notifications-component ${className || ''}` },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification-container--top-full" }, topFull),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification-container--bottom-full" }, bottomFull),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification-container--top-left" }, topLeft),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification-container--top-right" }, topRight),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification-container--bottom-left" }, bottomLeft),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification-container--bottom-right" }, bottomRight),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification-container--top-center" }, topCenter),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification-container--center" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "flex-center" }, center)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification-container--bottom-center" }, bottomCenter)));
    }
    render() {
        const { isMobile } = this.props;
        const { windowWidth, breakpoint } = this.state;
        if (isMobile && windowWidth <= breakpoint) {
            return this.renderMobileNotifications(this.props);
        }
        return this.renderScreenNotifications(this.props);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Container);


/***/ }),

/***/ "./src/components/Notification.tsx":
/*!*****************************************!*\
  !*** ./src/components/Notification.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_15183__) {

"use strict";
__nested_webpack_require_15183__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_15183__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_15183__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_15183__(/*! ../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_15183__(/*! ../utils/helpers */ "./src/utils/helpers.ts");
/* harmony import */ var _utils_timer__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_15183__(/*! ../utils/timer */ "./src/utils/timer.ts");




class iNotificationProps {
}
class Notification extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.onClick = () => {
            const { notification: { dismiss } } = this.props;
            if (dismiss.click || dismiss.showIcon) {
                this.removeNotification(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["REMOVAL"].CLICK);
            }
        };
        this.onTouchStart = (event) => {
            const { pageX } = event.touches[0];
            this.setState(({ parentStyle }) => ({
                startX: pageX,
                currentX: pageX,
                parentStyle: Object.assign(Object.assign({}, parentStyle), { position: 'relative' })
            }));
        };
        this.onTouchMove = (event) => {
            const { pageX } = event.touches[0];
            const { startX } = this.state;
            const { toggleRemoval, notification: { id, onRemoval, slidingExit, touchSlidingExit: { swipe, fade } } } = this.props;
            const distance = pageX - startX;
            const { offsetWidth: width } = this.rootElementRef.current;
            const swipeTo = window.innerWidth + width;
            const left = `${pageX - startX >= 0 ? swipeTo : -swipeTo}px`;
            if (Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["hasFullySwiped"])(distance, width)) {
                const t1 = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["getTransition"])(swipe, 'left');
                const t2 = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["getTransition"])(fade, 'opacity');
                const onTransitionEnd = () => {
                    toggleRemoval(id, () => onRemoval(id, _utils_constants__WEBPACK_IMPORTED_MODULE_1__["REMOVAL"].TOUCH));
                };
                return this.setState(({ parentStyle }) => ({
                    touchEnabled: false,
                    parentStyle: Object.assign(Object.assign({}, parentStyle), { left, opacity: 0, transition: `${t1}, ${t2}` }),
                    onTransitionEnd: () => {
                        this.setState(({ parentStyle }) => ({
                            parentStyle: Object.assign(Object.assign({}, parentStyle), { height: `0px`, overflow: 'hidden', transition: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["getTransition"])(slidingExit, 'height') }),
                            onTransitionEnd
                        }));
                    }
                }));
            }
            return this.setState(({ parentStyle }) => ({
                currentX: pageX,
                parentStyle: Object.assign(Object.assign({}, parentStyle), { left: `${0 + distance}px` })
            }));
        };
        this.onTouchEnd = () => {
            const { notification: { touchRevert } } = this.props;
            this.setState(({ parentStyle }) => ({
                parentStyle: Object.assign(Object.assign({}, parentStyle), { left: 0, transition: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["getTransition"])(touchRevert, 'left') })
            }));
        };
        this.onMouseEnter = () => {
            if (this.timer) {
                this.timer.pause();
            }
            else {
                this.setState({ animationPlayState: 'paused' });
            }
        };
        this.onMouseLeave = () => {
            if (this.timer) {
                this.timer.resume();
            }
            else {
                this.setState({ animationPlayState: 'running' });
            }
        };
        this.rootElementRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
        const { defaultNotificationWidth, notification, isMobile } = props;
        const { width, container } = notification;
        this.state = {
            parentStyle: {
                height: `0px`,
                overflow: 'hidden',
                width: `${width ? width : defaultNotificationWidth}px`
            },
            htmlClassList: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["getHtmlClassesForType"])(notification),
            animationPlayState: 'running',
            touchEnabled: true
        };
        const isFullWidthNotification = [_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].TOP_FULL, _utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].BOTTOM_FULL, _utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].TOP_CENTER, _utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].BOTTOM_CENTER, _utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].CENTER].indexOf(container) !== -1;
        if (isMobile || isFullWidthNotification) {
            this.state.parentStyle.width = '100%';
        }
    }
    componentWillUnmount() {
        if (this.timer) {
            this.timer.clear();
        }
    }
    componentDidMount() {
        const { notification, notificationsCount } = this.props;
        const { dismiss: { duration, onScreen } } = notification;
        const willSlide = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["shouldNotificationHaveSliding"])(notification, notificationsCount);
        const { scrollHeight } = this.rootElementRef.current;
        const onTransitionEnd = () => {
            if (!duration || onScreen)
                return;
            const callback = () => this.removeNotification(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["REMOVAL"].TIMEOUT);
            this.timer = new _utils_timer__WEBPACK_IMPORTED_MODULE_3__["default"](callback, duration);
        };
        const callback = () => {
            requestAnimationFrame(() => {
                this.setState((prevState) => ({
                    htmlClassList: [...notification.animationIn, ...prevState.htmlClassList]
                }));
            });
        };
        this.setState(({ parentStyle: { width } }) => ({
            parentStyle: {
                width,
                height: `${scrollHeight}px`,
                transition: willSlide ? Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["getTransition"])(notification.slidingEnter, 'height') : '10ms height'
            },
            onTransitionEnd
        }), callback);
    }
    componentDidUpdate({ hasBeenRemoved }) {
        if (this.props.hasBeenRemoved && !hasBeenRemoved) {
            this.removeNotification(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["REMOVAL"].MANUAL);
        }
    }
    removeNotification(removalFlag) {
        const { notification, toggleRemoval } = this.props;
        const { id, onRemoval, dismiss: { waitForAnimation } } = notification;
        const htmlClassList = [...notification.animationOut, ...Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["getHtmlClassesForType"])(notification)];
        const onTransitionEnd = () => toggleRemoval(id, () => onRemoval(id, removalFlag));
        const parentStyle = {
            height: `0px`,
            overflow: 'hidden',
            transition: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["getTransition"])(notification.slidingExit, 'height')
        };
        if (waitForAnimation) {
            return this.setState(({ parentStyle: { width } }) => ({
                htmlClassList,
                onAnimationEnd: () => {
                    this.setState({
                        parentStyle: Object.assign({ width }, parentStyle),
                        onTransitionEnd
                    });
                }
            }));
        }
        return this.setState(({ parentStyle: { width } }) => ({
            parentStyle: Object.assign({ width }, parentStyle),
            onTransitionEnd,
            htmlClassList
        }));
    }
    renderTimer() {
        const { notification: { dismiss } } = this.props;
        const { duration, onScreen } = dismiss;
        const { animationPlayState } = this.state;
        if (!duration || !onScreen) {
            return;
        }
        const style = {
            animationName: 'timer',
            animationDuration: `${duration}ms`,
            animationTimingFunction: 'linear',
            animationFillMode: 'forwards',
            animationDelay: `0`,
            animationPlayState
        };
        const onAnimationEnd = () => this.removeNotification(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["REMOVAL"].TIMEOUT);
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification__timer" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification__timer-filler", onAnimationEnd: onAnimationEnd, style: style })));
    }
    renderCustomContent() {
        const { htmlClassList } = this.state;
        const { notification: { id, content: CustomContent, dismiss: { duration, pauseOnHover } } } = this.props;
        const hasMouseEvents = duration > 0 && pauseOnHover;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: `${[...htmlClassList].join(' ')}`, onMouseEnter: hasMouseEvents ? this.onMouseEnter : null, onMouseLeave: hasMouseEvents ? this.onMouseLeave : null }, react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(CustomContent) ? CustomContent : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomContent, Object.assign({}, { id }))));
    }
    renderNotification() {
        const { notification: { title, message, dismiss: { showIcon, duration, pauseOnHover } } } = this.props;
        const { htmlClassList } = this.state;
        const hasMouseEvents = duration > 0 && pauseOnHover;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: `${[...htmlClassList].join(' ')}`, onMouseEnter: hasMouseEvents ? this.onMouseEnter : null, onMouseLeave: hasMouseEvents ? this.onMouseLeave : null },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification__content" },
                showIcon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification__close", onClick: this.onClick }),
                title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification__title" }, title),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification__message" }, message),
                this.renderTimer())));
    }
    render() {
        const { notification: { content, dismiss: { click } } } = this.props;
        const { parentStyle, onAnimationEnd, onTransitionEnd, touchEnabled } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: this.rootElementRef, onClick: click ? this.onClick : null, className: "notification", style: parentStyle, onAnimationEnd: onAnimationEnd, onTransitionEnd: onTransitionEnd, onTouchStart: touchEnabled ? this.onTouchStart : null, onTouchMove: touchEnabled ? this.onTouchMove : null, onTouchEnd: touchEnabled ? this.onTouchEnd : null }, content ? this.renderCustomContent() : this.renderNotification()));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Notification);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: store, default */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_27532__) {

"use strict";
__nested_webpack_require_27532__.r(__webpack_exports__);
/* harmony import */ var src_components_Container__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_27532__(/*! src/components/Container */ "./src/components/Container.tsx");
/* harmony import */ var src_store__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_27532__(/*! src/store */ "./src/store/index.ts");
/* harmony reexport (safe) */ __nested_webpack_require_27532__.d(__webpack_exports__, "store", function() { return src_store__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (src_components_Container__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/scss/notification.scss":
/*!************************************!*\
  !*** ./src/scss/notification.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_28459__) {

"use strict";
__nested_webpack_require_28459__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_28459__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_28459__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".notification-container--top-center,\n.notification-container--top-left,\n.notification-container--top-right,\n.notification-container--bottom-center,\n.notification-container--bottom-left,\n.notification-container--bottom-right,\n.notification-container--center,\n.notification-container--top-full,\n.notification-container--bottom-full {\n  min-width: 325px;\n  position: absolute;\n  pointer-events: all; }\n\n.notification-container--center,\n.notification-container--top-center,\n.notification-container--bottom-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  left: calc(50% - 175px); }\n\n.notification-container--center,\n.notification-container--top-center,\n.notification-container--bottom-center {\n  max-width: 350px; }\n\n.notification-container--center {\n  top: 20px;\n  height: 100%;\n  pointer-events: none; }\n\n.notification-container--top-full,\n.notification-container--bottom-full {\n  width: 100%;\n  min-width: 100%; }\n\n.notification-container--bottom-full {\n  bottom: 0; }\n\n.flex-center {\n  min-width: 325px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  pointer-events: all; }\n\n.notification-container--top-center {\n  top: 20px; }\n\n.notification-container--bottom-center {\n  bottom: 20px; }\n\n.notification-container--top-left {\n  left: 20px;\n  top: 20px; }\n\n.notification-container--top-right {\n  right: 20px;\n  top: 20px; }\n\n.notification-container--bottom-left {\n  left: 20px;\n  bottom: 20px; }\n\n.notification-container--bottom-right {\n  bottom: 20px;\n  right: 20px; }\n\n.notification-container--mobile-top,\n.notification-container--mobile-bottom {\n  pointer-events: all;\n  position: absolute; }\n\n.notification-container--mobile-top {\n  right: 20px;\n  left: 20px;\n  top: 20px; }\n\n.notification-container--mobile-bottom {\n  right: 20px;\n  left: 20px;\n  bottom: 20px;\n  margin-bottom: -15px; }\n\n.notification__item--default {\n  background-color: #007bff;\n  border-left: 8px solid #0562c7; }\n  .notification__item--default .notification__timer {\n    background-color: #007bff; }\n  .notification__item--default .notification__timer-filler {\n    background-color: #fff; }\n  .notification__item--default .notification__close {\n    background-color: #007bff; }\n\n.notification__item--success {\n  background-color: #28a745;\n  border-left: 8px solid #1f8838; }\n  .notification__item--success .notification__timer {\n    background-color: #28a745; }\n  .notification__item--success .notification__timer-filler {\n    background-color: #fff; }\n  .notification__item--success .notification__close {\n    background-color: #28a745; }\n\n.notification__item--danger {\n  background-color: #dc3545;\n  border-left: 8px solid #bd1120; }\n  .notification__item--danger .notification__timer {\n    background-color: #dc3545; }\n  .notification__item--danger .notification__timer-filler {\n    background-color: #fff; }\n  .notification__item--danger .notification__close {\n    background-color: #dc3545; }\n\n.notification__item--info {\n  background-color: #17a2b8;\n  border-left: 8px solid #138b9e; }\n  .notification__item--info .notification__timer {\n    background-color: #17a2b8; }\n  .notification__item--info .notification__timer-filler {\n    background-color: #fff; }\n  .notification__item--info .notification__close {\n    background-color: #17a2b8; }\n\n.notification__item--warning {\n  background-color: #eab000;\n  border-left: 8px solid #ce9c09; }\n  .notification__item--warning .notification__timer {\n    background-color: #eab000; }\n  .notification__item--warning .notification__timer-filler {\n    background-color: #fff; }\n  .notification__item--warning .notification__close {\n    background-color: #eab000; }\n\n.notification__item--awesome {\n  background-color: #685dc3;\n  border-left: 8px solid #4c3fb1; }\n  .notification__item--awesome .notification__timer {\n    background-color: #685dc3; }\n  .notification__item--awesome .notification__timer-filler {\n    background-color: #fff; }\n  .notification__item--awesome .notification__close {\n    background-color: #685dc3; }\n\n@keyframes timer {\n  0% {\n    width: 100%; }\n  100% {\n    width: 0%; } }\n\n.notifications-component {\n  position: fixed;\n  z-index: 9000;\n  pointer-events: none;\n  width: 100%;\n  height: 100%; }\n\n.notification__item {\n  display: flex;\n  position: relative;\n  border-radius: 3px;\n  margin-bottom: 15px;\n  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);\n  cursor: pointer; }\n\n.notification-container--top-full .notification__item,\n.notification-container--bottom-full .notification__item {\n  margin-bottom: 0;\n  border-radius: 0; }\n\n.notification__timer {\n  width: 100%;\n  height: 3px;\n  margin-top: 10px;\n  border-radius: 5px; }\n\n.notification__timer-filler {\n  height: 3px;\n  border-radius: 5px; }\n\n.notification__title {\n  color: #fff;\n  font-weight: 700;\n  font-size: 14px;\n  margin-top: 5px;\n  margin-bottom: 5px; }\n\n.notification__message {\n  color: #fff;\n  max-width: calc(100% - 15px);\n  font-size: 14px;\n  line-height: 150%;\n  word-wrap: break-word;\n  margin-bottom: 0;\n  margin-top: 0; }\n\n.notification__content {\n  padding: 8px 15px;\n  display: inline-block;\n  width: 100%; }\n\n.notification__close {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: inline-block;\n  position: absolute;\n  right: 10px;\n  top: 10px; }\n  .notification__close::after {\n    content: '\\D7';\n    position: absolute;\n    transform: translate(-50%, -50%);\n    color: #fff;\n    font-size: 12px;\n    left: 50%;\n    top: 50%; }\n\n.notification-container--mobile-top .notification__item,\n.notification-container--mobile-bottom .notification__item,\n.notification-container--mobile-top .notification,\n.notification-container--mobile-bottom .notification {\n  max-width: 100%;\n  width: 100%; }\n\n.notification-container--top-right .notification,\n.notification-container--bottom-right .notification {\n  margin-left: auto; }\n\n.notification-container--top-left .notification,\n.notification-container--bottom-left .notification {\n  margin-right: auto; }\n\n.notification-container--mobile-top .notification,\n.notification-container--mobile-bottom .notification {\n  margin-left: auto;\n  margin-right: auto; }\n", "",{"version":3,"sources":["F:/Projects/react-notifications-component/src/scss/_containers.scss","F:/Projects/react-notifications-component/src/scss/_types.scss","F:/Projects/react-notifications-component/src/scss/_variables.scss","F:/Projects/react-notifications-component/src/scss/notification.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB,EAAA;;AAGrB;;;EAGE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB,EAAA;;AAGzB;;;EAGE,gBAAgB,EAAA;;AAGlB;EACE,SAAS;EACT,YAAY;EACZ,oBAAoB,EAAA;;AAGtB;;EAEE,WAAW;EACX,eAAe,EAAA;;AAGjB;EACE,SAAS,EAAA;;AAGX;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB,EAAA;;AAGrB;EACE,SAAS,EAAA;;AAEX;EACE,YAAY,EAAA;;AAGd;EACE,UAAU;EACV,SAAS,EAAA;;AAGX;EACE,WAAW;EACX,SAAS,EAAA;;AAGX;EACE,UAAU;EACV,YAAY,EAAA;;AAGd;EACE,YAAY;EACZ,WAAW,EAAA;;AAGb;;EAEE,mBAAmB;EACnB,kBAAkB,EAAA;;AAGpB;EACE,WAAW;EACX,UAAU;EACV,SAAS,EAAA;;AAGX;EACE,WAAW;EACX,UAAU;EACV,YAAY;EACZ,oBAAoB,EAAA;;AChGtB;EACE,yBCHe;EDIf,8BCHoB,EAAA;EDCtB;IAKI,yBCWmB,EAAA;EDhBvB;IAQI,sBCSuB,EAAA;EDjB3B;IAWI,yBCba,EAAA;;ADiBjB;EACE,yBCfe;EDgBf,8BCfoB,EAAA;EDatB;IAKI,yBCDmB,EAAA;EDJvB;IAQI,sBCHuB,EAAA;EDL3B;IAWI,yBCzBa,EAAA;;AD6BjB;EACE,yBC3Bc;ED4Bd,8BC3BmB,EAAA;EDyBrB;IAKI,yBCbkB,EAAA;EDQtB;IAQI,sBCfsB,EAAA;EDO1B;IAWI,yBCrCY,EAAA;;ADyChB;EACE,yBCvCY;EDwCZ,8BCvCiB,EAAA;EDqCnB;IAKI,yBCzBgB,EAAA;EDoBpB;IAQI,sBC3BoB,EAAA;EDmBxB;IAWI,yBCjDU,EAAA;;ADqDd;EACE,yBCnDe;EDoDf,8BCnDoB,EAAA;EDiDtB;IAKI,yBCrCmB,EAAA;EDgCvB;IAQI,sBCvCuB,EAAA;ED+B3B;IAWI,yBC7Da,EAAA;;ADiEjB;EACE,yBC/De;EDgEf,8BC/DoB,EAAA;ED6DtB;IAKI,yBCjDmB,EAAA;ED4CvB;IAQI,sBCnDuB,EAAA;ED2C3B;IAWI,yBCzEa,EAAA;;ACZjB;EACE;IAAK,WAAW,EAAA;EAChB;IAAO,SAAS,EAAA,EAAA;;AAGlB;EACE,eAAe;EACf,aAAa;EACb,oBAAoB;EACpB,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,0CAA0C;EAC1C,eAAe,EAAA;;AAGjB;;EAEE,gBAAgB;EAChB,gBAAgB,EAAA;;AAGlB;EACE,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,kBAAkB,EAAA;;AAEpB;EACE,WAAW;EACX,kBAAkB,EAAA;;AAEpB;EACE,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,kBAAkB,EAAA;;AAEpB;EACE,WAAW;EACX,4BAA4B;EAC5B,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,gBAAgB;EAChB,aAAa,EAAA;;AAEf;EACE,iBAAiB;EACjB,qBAAqB;EACrB,WAAW,EAAA;;AAEb;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,SAAS,EAAA;EAPX;IAUI,cAAc;IACd,kBAAkB;IAClB,gCAAgC;IAChC,WAAW;IACX,eAAe;IACf,SAAS;IACT,QAAQ,EAAA;;AAIZ;;;;EAIE,eAAe;EACf,WAAW,EAAA;;AAGb;;EAEE,iBAAiB,EAAA;;AAGnB;;EAEE,kBAAkB,EAAA;;AAGpB;;EAEE,iBAAiB;EACjB,kBAAkB,EAAA","file":"notification.scss","sourcesContent":[".notification-container--top-center,\r\n.notification-container--top-left,\r\n.notification-container--top-right,\r\n.notification-container--bottom-center,\r\n.notification-container--bottom-left,\r\n.notification-container--bottom-right,\r\n.notification-container--center,\r\n.notification-container--top-full,\r\n.notification-container--bottom-full {\r\n  min-width: 325px;\r\n  position: absolute;\r\n  pointer-events: all;\r\n}\r\n\r\n.notification-container--center,\r\n.notification-container--top-center,\r\n.notification-container--bottom-center {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  left: calc(50% - 175px);\r\n}\r\n\r\n.notification-container--center,\r\n.notification-container--top-center,\r\n.notification-container--bottom-center {\r\n  max-width: 350px;\r\n}\r\n\r\n.notification-container--center {\r\n  top: 20px;\r\n  height: 100%;\r\n  pointer-events: none;\r\n}\r\n\r\n.notification-container--top-full,\r\n.notification-container--bottom-full {\r\n  width: 100%;\r\n  min-width: 100%;\r\n}\r\n\r\n.notification-container--bottom-full {\r\n  bottom: 0;\r\n}\r\n\r\n.flex-center {\r\n  min-width: 325px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  pointer-events: all;\r\n}\r\n\r\n.notification-container--top-center {\r\n  top: 20px;\r\n}\r\n.notification-container--bottom-center {\r\n  bottom: 20px;\r\n}\r\n\r\n.notification-container--top-left {\r\n  left: 20px;\r\n  top: 20px;\r\n}\r\n\r\n.notification-container--top-right {\r\n  right: 20px;\r\n  top: 20px;\r\n}\r\n\r\n.notification-container--bottom-left {\r\n  left: 20px;\r\n  bottom: 20px;\r\n}\r\n\r\n.notification-container--bottom-right {\r\n  bottom: 20px;\r\n  right: 20px;\r\n}\r\n\r\n.notification-container--mobile-top,\r\n.notification-container--mobile-bottom {\r\n  pointer-events: all;\r\n  position: absolute;\r\n}\r\n\r\n.notification-container--mobile-top {\r\n  right: 20px;\r\n  left: 20px;\r\n  top: 20px;\r\n}\r\n\r\n.notification-container--mobile-bottom {\r\n  right: 20px;\r\n  left: 20px;\r\n  bottom: 20px;\r\n  margin-bottom: -15px;\r\n}\r\n","@import \"_variables.scss\";\r\n\r\n.notification__item--default {\r\n  background-color: $default;\r\n  border-left: 8px solid $default_dark;\r\n\r\n  .notification__timer {\r\n    background-color: $default_timer;\r\n  }\r\n  .notification__timer-filler {\r\n    background-color: $default_timer_filler;\r\n  }\r\n  .notification__close {\r\n    background-color: $default;\r\n  }\r\n}\r\n\r\n.notification__item--success {\r\n  background-color: $success;\r\n  border-left: 8px solid $success_dark;\r\n\r\n  .notification__timer {\r\n    background-color: $success_timer;\r\n  }\r\n  .notification__timer-filler {\r\n    background-color: $success_timer_filler;\r\n  }\r\n  .notification__close {\r\n    background-color: $success;\r\n  }\r\n}\r\n\r\n.notification__item--danger {\r\n  background-color: $danger;\r\n  border-left: 8px solid $danger_dark;\r\n\r\n  .notification__timer {\r\n    background-color: $danger_timer;\r\n  }\r\n  .notification__timer-filler {\r\n    background-color: $danger_timer_filler;\r\n  }\r\n  .notification__close {\r\n    background-color: $danger;\r\n  }\r\n}\r\n\r\n.notification__item--info {\r\n  background-color: $info;\r\n  border-left: 8px solid $info_dark;\r\n\r\n  .notification__timer {\r\n    background-color: $info_timer;\r\n  }\r\n  .notification__timer-filler {\r\n    background-color: $info_timer_filler;\r\n  }\r\n  .notification__close {\r\n    background-color: $info;\r\n  }\r\n}\r\n\r\n.notification__item--warning {\r\n  background-color: $warning;\r\n  border-left: 8px solid $warning_dark;\r\n\r\n  .notification__timer {\r\n    background-color: $warning_timer;\r\n  }\r\n  .notification__timer-filler {\r\n    background-color: $warning_timer_filler;\r\n  }\r\n  .notification__close {\r\n    background-color: $warning;\r\n  }\r\n}\r\n\r\n.notification__item--awesome {\r\n  background-color: $awesome;\r\n  border-left: 8px solid $awesome_dark;\r\n\r\n  .notification__timer {\r\n    background-color: $awesome_timer;\r\n  }\r\n  .notification__timer-filler {\r\n    background-color: $awesome_timer_filler;\r\n  }\r\n  .notification__close {\r\n    background-color: $awesome;\r\n  }\r\n}","$default: #007bff !default;\r\n$default_dark: #0562c7 !default;\r\n\r\n$success: #28a745 !default;\r\n$success_dark: #1f8838 !default;\r\n\r\n$danger: #dc3545 !default;\r\n$danger_dark: #bd1120 !default;\r\n\r\n$info: #17a2b8 !default;\r\n$info_dark: #138b9e !default;\r\n\r\n$warning: #eab000 !default;\r\n$warning_dark: #ce9c09 !default;\r\n\r\n$awesome: #685dc3 !default;\r\n$awesome_dark: #4c3fb1 !default;\r\n\r\n$default_timer: #007bff !default;\r\n$default_timer_filler: #fff !default;\r\n\r\n$success_timer: #28a745 !default;\r\n$success_timer_filler: #fff !default;\r\n\r\n$danger_timer: #dc3545 !default;\r\n$danger_timer_filler: #fff !default;\r\n\r\n$info_timer: #17a2b8 !default;\r\n$info_timer_filler: #fff !default;\r\n\r\n$warning_timer: #eab000 !default;\r\n$warning_timer_filler: #fff !default;\r\n\r\n$awesome_timer: #685dc3 !default;\r\n$awesome_timer_filler: #fff !default;\r\n","@import \"./_containers.scss\";\r\n@import \"./_types.scss\";\r\n\r\n@keyframes timer {\r\n  0% { width: 100%; }\r\n  100% { width: 0%; }\r\n}\r\n\r\n.notifications-component {\r\n  position: fixed;\r\n  z-index: 9000;\r\n  pointer-events: none;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.notification__item {\r\n  display: flex;\r\n  position: relative;\r\n  border-radius: 3px;\r\n  margin-bottom: 15px;\r\n  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n.notification-container--top-full .notification__item,\r\n.notification-container--bottom-full .notification__item {\r\n  margin-bottom: 0;\r\n  border-radius: 0;\r\n}\r\n\r\n.notification__timer {\r\n  width: 100%;\r\n  height: 3px;\r\n  margin-top: 10px;\r\n  border-radius: 5px;\r\n}\r\n.notification__timer-filler {\r\n  height: 3px;\r\n  border-radius: 5px;\r\n}\r\n.notification__title {\r\n  color: #fff;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.notification__message {\r\n  color: #fff;\r\n  max-width: calc(100% - 15px);\r\n  font-size: 14px;\r\n  line-height: 150%;\r\n  word-wrap: break-word;\r\n  margin-bottom: 0;\r\n  margin-top: 0;\r\n}\r\n.notification__content {\r\n  padding: 8px 15px;\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n.notification__close {\r\n  width: 18px;\r\n  height: 18px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 10px;\r\n\r\n  &::after {\r\n    content: '\\D7';\r\n    position: absolute;\r\n    transform: translate(-50%, -50%);\r\n    color: #fff;\r\n    font-size: 12px;\r\n    left: 50%;\r\n    top: 50%;\r\n  }\r\n}\r\n\r\n.notification-container--mobile-top .notification__item,\r\n.notification-container--mobile-bottom .notification__item,\r\n.notification-container--mobile-top .notification,\r\n.notification-container--mobile-bottom .notification {\r\n  max-width: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.notification-container--top-right .notification,\r\n.notification-container--bottom-right .notification {\r\n  margin-left: auto;\r\n}\r\n\r\n.notification-container--top-left .notification,\r\n.notification-container--bottom-left .notification {\r\n  margin-right: auto;\r\n}\r\n\r\n.notification-container--mobile-top .notification,\r\n.notification-container--mobile-bottom .notification {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_46070__) {

"use strict";
__nested_webpack_require_46070__.r(__webpack_exports__);
/* harmony import */ var src_utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_46070__(/*! src/utils/helpers */ "./src/utils/helpers.ts");
/* harmony import */ var src_utils_validators__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_46070__(/*! src/utils/validators */ "./src/utils/validators.ts");


class Store {
    constructor() {
        this.incrementCounter = () => (this.counter += 1);
        this.getCounter = () => this.counter;
        this.counter = 0;
        this.add = null;
    }
    addNotification(notification) {
        if (true) {
            const transitions = ['slidingEnter', 'slidingExit', 'touchRevert', 'touchSlidingExit'];
            transitions.forEach((transition) => Object(src_utils_validators__WEBPACK_IMPORTED_MODULE_1__["validateTransition"])(notification, transition));
            src_utils_validators__WEBPACK_IMPORTED_MODULE_1__["validators"].forEach((validator) => validator(notification, this.types));
        }
        this.incrementCounter();
        const parsedNotification = Object(src_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["parseNotification"])(notification, this.types, this.defaultNotificationWidth);
        return this.add(parsedNotification);
    }
    register(parameters) {
        const { addNotification, removeNotification, removeAllNotifications, types, defaultNotificationWidth } = parameters;
        this.add = addNotification;
        this.removeNotification = removeNotification;
        this.removeAllNotifications = removeAllNotifications;
        this.defaultNotificationWidth = defaultNotificationWidth;
        this.types = types;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (new Store());


/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/*! exports provided: DEFAULT_CONTAINER_VALUES, NOTIFICATION_BASE_CLASS, NOTIFICATION_CONTAINER, INSERTION, NOTIFICATION_TYPE, REMOVAL, ERROR */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_48225__) {

"use strict";
__nested_webpack_require_48225__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_48225__.d(__webpack_exports__, "DEFAULT_CONTAINER_VALUES", function() { return DEFAULT_CONTAINER_VALUES; });
/* harmony export (binding) */ __nested_webpack_require_48225__.d(__webpack_exports__, "NOTIFICATION_BASE_CLASS", function() { return NOTIFICATION_BASE_CLASS; });
/* harmony export (binding) */ __nested_webpack_require_48225__.d(__webpack_exports__, "NOTIFICATION_CONTAINER", function() { return NOTIFICATION_CONTAINER; });
/* harmony export (binding) */ __nested_webpack_require_48225__.d(__webpack_exports__, "INSERTION", function() { return INSERTION; });
/* harmony export (binding) */ __nested_webpack_require_48225__.d(__webpack_exports__, "NOTIFICATION_TYPE", function() { return NOTIFICATION_TYPE; });
/* harmony export (binding) */ __nested_webpack_require_48225__.d(__webpack_exports__, "REMOVAL", function() { return REMOVAL; });
/* harmony export (binding) */ __nested_webpack_require_48225__.d(__webpack_exports__, "ERROR", function() { return ERROR; });
const DEFAULT_CONTAINER_VALUES = {
    isMobile: true,
    breakpoint: 768,
    defaultNotificationWidth: 325
};
const NOTIFICATION_BASE_CLASS = 'notification__item';
var NOTIFICATION_CONTAINER;
(function (NOTIFICATION_CONTAINER) {
    NOTIFICATION_CONTAINER["BOTTOM_LEFT"] = "bottom-left";
    NOTIFICATION_CONTAINER["BOTTOM_RIGHT"] = "bottom-right";
    NOTIFICATION_CONTAINER["BOTTOM_CENTER"] = "bottom-center";
    NOTIFICATION_CONTAINER["TOP_LEFT"] = "top-left";
    NOTIFICATION_CONTAINER["TOP_RIGHT"] = "top-right";
    NOTIFICATION_CONTAINER["TOP_CENTER"] = "top-center";
    NOTIFICATION_CONTAINER["CENTER"] = "center";
    NOTIFICATION_CONTAINER["TOP_FULL"] = "top-full";
    NOTIFICATION_CONTAINER["BOTTOM_FULL"] = "bottom-full";
})(NOTIFICATION_CONTAINER || (NOTIFICATION_CONTAINER = {}));
var INSERTION;
(function (INSERTION) {
    INSERTION["TOP"] = "top";
    INSERTION["BOTTOM"] = "bottom";
})(INSERTION || (INSERTION = {}));
var NOTIFICATION_TYPE;
(function (NOTIFICATION_TYPE) {
    NOTIFICATION_TYPE["SUCCESS"] = "success";
    NOTIFICATION_TYPE["DANGER"] = "danger";
    NOTIFICATION_TYPE["INFO"] = "info";
    NOTIFICATION_TYPE["DEFAULT"] = "default";
    NOTIFICATION_TYPE["WARNING"] = "warning";
})(NOTIFICATION_TYPE || (NOTIFICATION_TYPE = {}));
var REMOVAL;
(function (REMOVAL) {
    REMOVAL["TIMEOUT"] = "timeout";
    REMOVAL["CLICK"] = "click";
    REMOVAL["TOUCH"] = "touch";
    REMOVAL["MANUAL"] = "manual";
})(REMOVAL || (REMOVAL = {}));
const ERROR = {
    ANIMATION_IN: 'Validation error. `animationIn` option must be an array',
    ANIMATION_OUT: 'Validation error. `animationOut` option must be an array',
    DISMISS_REQUIRED: 'Validation error. `duration` property of `dismiss` option is required',
    DISMISS_NUMBER: 'Validation error. `duration` property of `dismiss` option must be a Number',
    DISMISS_POSITIVE: 'Validation error. `duration` property of `dismiss` option must be a positive Number',
    DISMISS_CLICK_BOOL: 'Validation error. `click` property of `dismiss` option must be a Boolean',
    DISMISS_TOUCH_BOOL: 'Validation error. `touch` property of `dismiss` option must be a Boolean',
    DISMISS_WAIT: 'Validation error. `waitForAnimation` property of `dismiss` option must be a Boolean',
    DISMISS_PAUSE_BOOL: 'Validation error. `pauseOnHover` property of `dismiss` option must be a Boolean',
    DISMISS_ONSCREEN_BOOL: 'Validation error. `onScreen` property of `dismiss` option must be a Boolean',
    DISMISS_ICON: 'Validation error. `showIcon` property of `dismiss` option must be a Boolean',
    TITLE_STRING: 'Validation error. `title` option must be a String',
    TITLE_ELEMENT: 'Validation error. `title` option must be a valid React element/function',
    MESSAGE_REQUIRED: 'Validation error. `message` option is required',
    MESSAGE_STRING: 'Validation error. `message` option must be a String',
    MESSAGE_ELEMENT: 'Validation error. `message` option must be a valid React element/function',
    TYPE_REQUIRED: 'Validation error. `type` option is required',
    TYPE_STRING: 'Validation error. `type` option must be a String',
    TYPE_NOT_EXISTENT: 'Validation error. `type` option not found',
    CONTAINER_REQUIRED: 'Validation error. `container` option is required',
    CONTAINER_STRING: 'Validation error. `container` option must be a String',
    CONTENT_INVALID: 'Validation error. `content` option must be a valid React component/function/element',
    WIDTH_NUMBER: 'Validation error. `width` option must be a Number',
    INSERT_STRING: 'Validation error. `insert` option must be a String',
    TRANSITION_DURATION_NUMBER: 'Validation error. `duration` property of `transition` option must be a Number',
    TRANSITION_TIMING_FUNCTION: 'Validation error. `timingFunction` property of `transition` option must be a String',
    TRANSITION_DELAY_NUMBER: 'Validation error. `delay` property of `transition` option must be a Number',
    TYPE_NOT_FOUND: 'Validation error. Custom type not found',
    REMOVAL_FUNC: 'Validation error. `onRemoval` must be a function'
};


/***/ }),

/***/ "./src/utils/helpers.ts":
/*!******************************!*\
  !*** ./src/utils/helpers.ts ***!
  \******************************/
/*! exports provided: isNull, isBottomContainer, isTopContainer, hasFullySwiped, shouldNotificationHaveSliding, htmlClassesForExistingType, getHtmlClassesForType, getNotificationsForMobileView, getNotificationsForEachContainer, getTransition, parseNotification */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_53832__) {

"use strict";
__nested_webpack_require_53832__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_53832__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __nested_webpack_require_53832__.d(__webpack_exports__, "isBottomContainer", function() { return isBottomContainer; });
/* harmony export (binding) */ __nested_webpack_require_53832__.d(__webpack_exports__, "isTopContainer", function() { return isTopContainer; });
/* harmony export (binding) */ __nested_webpack_require_53832__.d(__webpack_exports__, "hasFullySwiped", function() { return hasFullySwiped; });
/* harmony export (binding) */ __nested_webpack_require_53832__.d(__webpack_exports__, "shouldNotificationHaveSliding", function() { return shouldNotificationHaveSliding; });
/* harmony export (binding) */ __nested_webpack_require_53832__.d(__webpack_exports__, "htmlClassesForExistingType", function() { return htmlClassesForExistingType; });
/* harmony export (binding) */ __nested_webpack_require_53832__.d(__webpack_exports__, "getHtmlClassesForType", function() { return getHtmlClassesForType; });
/* harmony export (binding) */ __nested_webpack_require_53832__.d(__webpack_exports__, "getNotificationsForMobileView", function() { return getNotificationsForMobileView; });
/* harmony export (binding) */ __nested_webpack_require_53832__.d(__webpack_exports__, "getNotificationsForEachContainer", function() { return getNotificationsForEachContainer; });
/* harmony export (binding) */ __nested_webpack_require_53832__.d(__webpack_exports__, "getTransition", function() { return getTransition; });
/* harmony export (binding) */ __nested_webpack_require_53832__.d(__webpack_exports__, "parseNotification", function() { return parseNotification; });
/* harmony import */ var src_store__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_53832__(/*! src/store */ "./src/store/index.ts");
/* harmony import */ var src_utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_53832__(/*! src/utils/constants */ "./src/utils/constants.ts");


const isNull = (object) => object === null || object === undefined;
function isBottomContainer(container) {
    return (container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].BOTTOM_FULL ||
        container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].BOTTOM_LEFT ||
        container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].BOTTOM_RIGHT ||
        container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].BOTTOM_CENTER);
}
function isTopContainer(container) {
    return (container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].TOP_FULL ||
        container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].TOP_LEFT ||
        container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].TOP_RIGHT ||
        container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].TOP_CENTER);
}
function hasFullySwiped(diffX, width) {
    const swipeLength = Math.abs(diffX);
    const requiredSwipeLength = (40 / 100) * width;
    return swipeLength >= requiredSwipeLength;
}
function shouldNotificationHaveSliding(notification, count) {
    if (count <= 1) {
        return false;
    }
    return (count > 1 &&
        ((notification.insert === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["INSERTION"].TOP && isTopContainer(notification.container)) ||
            (notification.insert === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["INSERTION"].BOTTOM && isBottomContainer(notification.container)) ||
            notification.container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].CENTER));
}
function htmlClassesForExistingType(type) {
    switch (type) {
        case src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].DEFAULT:
            return [src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_BASE_CLASS"], 'notification__item--default'];
        case src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].SUCCESS:
            return [src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_BASE_CLASS"], 'notification__item--success'];
        case src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].DANGER:
            return [src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_BASE_CLASS"], 'notification__item--danger'];
        case src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].WARNING:
            return [src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_BASE_CLASS"], 'notification__item--warning'];
        case src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].INFO:
            return [src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_BASE_CLASS"], 'notification__item--info'];
        default:
            return [src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_BASE_CLASS"]];
    }
}
function getHtmlClassesForType(notification) {
    const { type, content, userDefinedTypes } = notification;
    const base = [src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_BASE_CLASS"]];
    if (content) {
        return base;
    }
    if (isNull(userDefinedTypes)) {
        return htmlClassesForExistingType(type);
    }
    const foundType = userDefinedTypes.find((q) => q.name === type);
    return base.concat(foundType.htmlClasses);
}
function getNotificationsForMobileView(notifications) {
    const top = [];
    const bottom = [];
    notifications.forEach((notification) => {
        const { container } = notification;
        const { CENTER } = src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"];
        if (isTopContainer(container) || container === CENTER) {
            top.push(notification);
        }
        else if (isBottomContainer(container)) {
            bottom.push(notification);
        }
    });
    return { top, bottom };
}
function getNotificationsForEachContainer(notifications) {
    const topLeft = [];
    const topRight = [];
    const topCenter = [];
    const bottomLeft = [];
    const bottomRight = [];
    const bottomCenter = [];
    const center = [];
    const topFull = [];
    const bottomFull = [];
    notifications.forEach((notification) => {
        const { container } = notification;
        if (container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].TOP_FULL) {
            topFull.push(notification);
        }
        else if (container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].BOTTOM_FULL) {
            bottomFull.push(notification);
        }
        else if (container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].TOP_LEFT) {
            topLeft.push(notification);
        }
        else if (container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].TOP_RIGHT) {
            topRight.push(notification);
        }
        else if (container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].TOP_CENTER) {
            topCenter.push(notification);
        }
        else if (container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].BOTTOM_LEFT) {
            bottomLeft.push(notification);
        }
        else if (container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].BOTTOM_RIGHT) {
            bottomRight.push(notification);
        }
        else if (container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].BOTTOM_CENTER) {
            bottomCenter.push(notification);
        }
        else if (container === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CONTAINER"].CENTER) {
            center.push(notification);
        }
    });
    return {
        topFull,
        bottomFull,
        topLeft,
        topRight,
        topCenter,
        bottomLeft,
        bottomRight,
        bottomCenter,
        center
    };
}
function getTransition({ duration, timingFunction, delay }, property) {
    return `${duration}ms ${property} ${timingFunction} ${delay}ms`;
}
function defaultTransition(transition, { duration, timingFunction, delay }) {
    const transitionOptions = transition || {};
    if (isNull(transitionOptions.duration)) {
        transitionOptions.duration = duration;
    }
    if (isNull(transitionOptions.timingFunction)) {
        transitionOptions.timingFunction = timingFunction;
    }
    if (isNull(transitionOptions.delay)) {
        transitionOptions.delay = delay;
    }
    return transitionOptions;
}
function defaultDismiss(dismiss) {
    const option = dismiss;
    const defaults = {
        duration: 0,
        click: true,
        touch: true,
        onScreen: false,
        pauseOnHover: false,
        waitForAnimation: false,
        showIcon: false
    };
    if (!option) {
        return defaults;
    }
    Object.keys(defaults).forEach((prop) => {
        if (isNull(option[prop])) {
            option[prop] = defaults[prop];
        }
    });
    return option;
}
function defaultUserDefinedTypes(notification, definedTypes) {
    const { content, type } = notification;
    if (content) {
        return undefined;
    }
    if (type === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].SUCCESS ||
        type === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].DANGER ||
        type === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].INFO ||
        type === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].DEFAULT ||
        type === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].WARNING ||
        !definedTypes) {
        return undefined;
    }
    return definedTypes;
}
function parseNotification(options, userDefinedTypes, defaultNotificationWidth) {
    const notification = options;
    const { id, type, insert, content, container, animationIn, animationOut, slidingEnter, slidingExit, touchRevert, touchSlidingExit, dismiss, width, onRemoval } = notification;
    notification.id = id || src_store__WEBPACK_IMPORTED_MODULE_0__["default"].getCounter().toString();
    notification.type = content ? null : type.toLowerCase();
    if (userDefinedTypes && !content) {
        notification.userDefinedTypes = defaultUserDefinedTypes(notification, userDefinedTypes);
    }
    notification.width = isNull(width) ? defaultNotificationWidth : width;
    notification.container = container.toLowerCase();
    notification.insert = (insert || 'top').toLowerCase();
    notification.dismiss = defaultDismiss(dismiss);
    notification.animationIn = animationIn || [];
    notification.animationOut = animationOut || [];
    notification.onRemoval = onRemoval || (() => { });
    const t = (duration, timingFunction, delay) => ({
        duration,
        timingFunction,
        delay
    });
    notification.slidingEnter = defaultTransition(slidingEnter, t(600, 'linear', 0));
    notification.slidingExit = defaultTransition(slidingExit, t(600, 'linear', 0));
    notification.touchRevert = defaultTransition(touchRevert, t(600, 'linear', 0));
    const touchExit = touchSlidingExit || {};
    const swipe = touchExit.swipe || {};
    const fade = touchExit.fade || {};
    notification.touchSlidingExit = touchExit;
    notification.touchSlidingExit.swipe = defaultTransition(swipe, t(600, 'linear', 0));
    notification.touchSlidingExit.fade = defaultTransition(fade, t(300, 'linear', 0));
    return notification;
}


/***/ }),

/***/ "./src/utils/timer.ts":
/*!****************************!*\
  !*** ./src/utils/timer.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_65963__) {

"use strict";
__nested_webpack_require_65963__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_65963__.d(__webpack_exports__, "default", function() { return Timer; });
class Timer {
    constructor(callback, delay) {
        this.callback = callback;
        this.remaining = delay;
        this.resume();
    }
    pause() {
        clearTimeout(this.timerId);
        this.remaining -= Date.now() - this.start;
    }
    resume() {
        this.start = Date.now();
        clearTimeout(this.timerId);
        this.timerId = setTimeout(this.callback, this.remaining);
    }
    clear() {
        clearTimeout(this.timerId);
    }
}


/***/ }),

/***/ "./src/utils/validators.ts":
/*!*********************************!*\
  !*** ./src/utils/validators.ts ***!
  \*********************************/
/*! exports provided: validateTransition, validators */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_66910__) {

"use strict";
__nested_webpack_require_66910__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_66910__.d(__webpack_exports__, "validateTransition", function() { return validateTransition; });
/* harmony export (binding) */ __nested_webpack_require_66910__.d(__webpack_exports__, "validators", function() { return validators; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_66910__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_66910__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_66910__(/*! src/utils/constants */ "./src/utils/constants.ts");


const isNull = (object) => object === null || object === undefined;
const isString = (object) => typeof object === 'string';
const isNumber = (object) => typeof object === 'number';
const isBoolean = (object) => typeof object === 'boolean';
const isFunction = (object) => !!(object && object.constructor && object.call && object.apply);
const isArray = (object) => !isNull(object) && object.constructor === Array;
function isClassComponent(component) {
    return typeof component === 'function' && component.prototype && !!component.prototype.render;
}
function isFunctionComponent(component) {
    return typeof component === 'function';
}
const isReactElement = (value) => isFunctionComponent(value) || react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(value);
function validateTransition(notification, transition) {
    const { TRANSITION_DURATION_NUMBER, TRANSITION_TIMING_FUNCTION, TRANSITION_DELAY_NUMBER } = src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"];
    const { duration, timingFunction, delay } = notification[transition] || {};
    if (!isNull(duration) && !isNumber(duration)) {
        throw new Error(TRANSITION_DURATION_NUMBER.replace('transition', transition));
    }
    if (!isNull(timingFunction) && !isString(timingFunction)) {
        throw new Error(TRANSITION_TIMING_FUNCTION.replace('transition', transition));
    }
    if (!isNull(delay) && !isNumber(delay)) {
        throw new Error(TRANSITION_DELAY_NUMBER.replace('transition', transition));
    }
}
const validators = [
    function title({ content, title: _title }) {
        if (content)
            return;
        if (isNull(_title))
            return;
        const isReactEl = isReactElement(_title);
        if (isReactEl || typeof _title === 'string')
            return;
        if (!isReactEl) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].TITLE_ELEMENT);
        }
        if (typeof _title !== 'string') {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].TITLE_STRING);
        }
    },
    function message({ content, message: _message }) {
        if (content)
            return;
        if (!_message) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].MESSAGE_REQUIRED);
        }
        const isReactEl = isReactElement(_message);
        if (isString(_message) || isReactEl) {
            return;
        }
        if (!isString(_message)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].MESSAGE_STRING);
        }
        if (!isReactEl) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].MESSAGE_ELEMENT);
        }
    },
    function type({ content, type: _type }, userDefinedTypes) {
        if (content)
            return;
        if (!_type) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].TYPE_REQUIRED);
        }
        if (!isString(_type)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].TYPE_STRING);
        }
        if (!userDefinedTypes &&
            _type !== src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].SUCCESS &&
            _type !== src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].DANGER &&
            _type !== src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].INFO &&
            _type !== src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].DEFAULT &&
            _type !== src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].WARNING) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].TYPE_NOT_EXISTENT);
        }
    },
    function container({ container: _container }) {
        if (isNull(_container)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].CONTAINER_REQUIRED);
        }
        if (!isString(_container)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].CONTAINER_STRING);
        }
    },
    function insert({ insert: _insert }) {
        if (isNull(_insert))
            return;
        if (!isString(_insert)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].INSERT_STRING);
        }
    },
    function width({ width: _width }) {
        if (isNull(_width))
            return;
        if (!isNumber(_width)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].WIDTH_NUMBER);
        }
    },
    function userDefinedTypes({ type, content }, _userDefinedTypes) {
        if (content)
            return;
        if (type === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].SUCCESS ||
            type === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].DANGER ||
            type === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].INFO ||
            type === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].DEFAULT ||
            type === src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_TYPE"].WARNING ||
            !_userDefinedTypes) {
            return;
        }
        if (!_userDefinedTypes.find((p) => p.name === type)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].TYPE_NOT_FOUND);
        }
    },
    function content({ content: _content }) {
        if (!_content)
            return;
        const isClass = isClassComponent(_content);
        const isFunction = isFunctionComponent(_content);
        const isElem = react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(_content);
        if (!isClass && !isFunction && !isElem) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].CONTENT_INVALID);
        }
    },
    function animationIn({ animationIn: _animationIn }) {
        if (isNull(_animationIn))
            return;
        if (!isArray(_animationIn)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].ANIMATION_IN);
        }
    },
    function animationOut({ animationOut: _animationOut }) {
        if (isNull(_animationOut))
            return;
        if (!isArray(_animationOut)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].ANIMATION_OUT);
        }
    },
    function onRemoval({ onRemoval: _onRemoval }) {
        if (!_onRemoval)
            return;
        if (!isFunction(_onRemoval)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].REMOVAL_FUNC);
        }
    },
    function dismiss({ dismiss: _dismiss }) {
        if (!_dismiss)
            return;
        const { duration, onScreen, showIcon, pauseOnHover, waitForAnimation: wait, click, touch } = _dismiss;
        if (isNull(duration)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].DISMISS_REQUIRED);
        }
        if (!isNumber(duration)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].DISMISS_NUMBER);
        }
        if (duration < 0) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].DISMISS_POSITIVE);
        }
        if (!isNull(onScreen) && !isBoolean(onScreen)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].DISMISS_ONSCREEN_BOOL);
        }
        if (!isNull(pauseOnHover) && !isBoolean(pauseOnHover)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].DISMISS_PAUSE_BOOL);
        }
        if (!isNull(click) && !isBoolean(click)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].DISMISS_CLICK_BOOL);
        }
        if (!isNull(touch) && !isBoolean(touch)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].DISMISS_TOUCH_BOOL);
        }
        if (!isNull(showIcon) && !isBoolean(showIcon)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].DISMISS_ICON);
        }
        if (!isNull(wait) && !isBoolean(wait)) {
            throw new Error(src_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR"].DISMISS_WAIT);
        }
    }
];


/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/***/ })

/******/ });
//# sourceMappingURL=react-notifications.dev.js.map

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/react-notifications-component/dist/theme.css":
/*!*******************************************************************!*\
  !*** ./node_modules/react-notifications-component/dist/theme.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_theme_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./theme.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/react-notifications-component/dist/theme.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_theme_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_theme_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ServerStyleSheet": () => (/* binding */ Ue),
/* harmony export */   "StyleSheetConsumer": () => (/* binding */ le),
/* harmony export */   "StyleSheetContext": () => (/* binding */ ue),
/* harmony export */   "StyleSheetManager": () => (/* binding */ ye),
/* harmony export */   "ThemeConsumer": () => (/* binding */ Le),
/* harmony export */   "ThemeContext": () => (/* binding */ ze),
/* harmony export */   "ThemeProvider": () => (/* binding */ Ge),
/* harmony export */   "__PRIVATE__": () => (/* binding */ Ze),
/* harmony export */   "createGlobalStyle": () => (/* binding */ $e),
/* harmony export */   "css": () => (/* binding */ Ae),
/* harmony export */   "isStyledComponent": () => (/* binding */ N),
/* harmony export */   "keyframes": () => (/* binding */ We),
/* harmony export */   "useTheme": () => (/* binding */ Xe),
/* harmony export */   "version": () => (/* binding */ C),
/* harmony export */   "withTheme": () => (/* binding */ Je)
/* harmony export */ });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.typeOf)(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.3.0",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),O={},R= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:0;function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?0:new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var s=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),k=new Map,x=new Map,V=1,B=function(e){if(k.has(e))return k.get(e);for(;x.has(V);)V++;var t=V++;return true&&((0|t)<0||t>1<<30)&&j(16,""+t),k.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},z=function(e,t){k.set(e,t),x.set(t,e)},L="style["+A+'][data-styled-version="5.3.0"]',G=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Y=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,i=n.length;o<i;o++){var s=n[o].trim();if(s){var a=s.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(s)}}},q=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.3.0");var s=q();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(L),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var i=M(o);if(void 0!==i){var s=e.names.get(i),a=t.getGroup(o);if(void 0!==s&&0!==a.length){var c=A+".g"+o+'[id="'+i+'"]',u="";void 0!==s&&s.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.3.0"),ie=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&0,this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var i=Ne(this.rules,e,t,n).join(""),s=ee(te(this.baseHash,i.length)>>>0);if(!t.hasNameForId(r,s)){var a=n(i,"."+s,void 0,r);t.insertRules(r,s,a)}o.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,i=void 0===e?E:e,s=i.options,a=void 0===s?E:s,c=i.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__.default(a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,i,s,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,i){return 0===r&&-1!==ae.indexOf(i[n.length])||i.match(o)?e:"."+t};function m(e,i,s,a){void 0===a&&(a="&");var c=e.replace(se,""),u=i&&s?s+" "+i+" { "+c+" }":c;return t=a,n=i,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(s||!i?"":i,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react__WEBPACK_IMPORTED_MODULE_1__.createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1__.createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ue)||he}function me(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(de)||pe}function ye(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],i=t[1],c=fe(),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1__.createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1__.createElement(de.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1__.Children.only(e.children):0))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var i,s=[],a=0,c=e.length;a<c;a+=1)""!==(i=Ne(e[a],n,r,o))&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isElement)(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,i=[];for(var s in t)t.hasOwnProperty(s)&&!_e(t[s])&&(S(t[s])?i.push.apply(i,e(t[s],s)):b(t[s])?i.push(be(s)+":",t[s],";"):i.push(be(s)+": "+(r=s,null==(o=t[s])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__.default?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString()}function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ne(g(w,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(g(e,n))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";try{(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),Ie.has(n)||(console.warn(n),Ie.add(n))}catch(e){Ce.test(e.message)&&Ie.delete(n)}}},Oe=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return ee(ne(e)>>>0)};function ke(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var xe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Be(e,t,n){var r=e[n];xe(t)&&xe(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var s=i[o];if(xe(s))for(var a in s)Ve(a)&&Be(e,s[a],a)}return e}var ze=react__WEBPACK_IMPORTED_MODULE_1__.createContext(),Le=ze.Consumer;function Ge(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),n=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:j(7)}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1__.createElement(ze.Provider,{value:n},e.children):null}var Fe={};function Ye(e,t,n){var o=N(e),s=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.3.0"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new ie(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,s=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,i,s=e;for(t in b(s)&&(s=s(r)),s)r[t]=o[t]="className"===t?(n=o[t],i=s[t],n&&i?n+" "+i:n||i):s[t]})),[r,o]}(Oe(t,(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),i=me(),s=t?e.generateAndInjectStyles(E,o,i):e.generateAndInjectStyles(n,o,i);return true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(s), true&&!t&&r&&r(s),s}(s,r,y, true?e.warnTooManyClasses:0),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default,_):!N||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default)(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),i=r&&r+"-"+(ke(e)?e:je(_(e)));return Ye(e,v({},o,{attrs:S,componentId:i}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), true&&(Pe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var i=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+i+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(f,g)),C.toString=function(){return"."+C.styledComponentId},s&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isValidElementType)(r))return j(1,String(r));var i=function(){return t(r,o,Ae.apply(void 0,arguments))};return i.withConfig=function(n){return e(t,r,v({},o,{},n))},i.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},i}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){qe[e]=qe(e)}));var He=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),i=this.componentId+e;n.insertRules(i,i,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=Ae.apply(void 0,[e].concat(n)),a="sc-global-"+Te(JSON.stringify(s)),u=new He(s,a);function l(e){var t=fe(),n=me(),o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1__.Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&s.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)((function(){return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var i=v({},t,{theme:Oe(t,r,l.defaultProps)});u.renderStyles(e,i,n,o)}}return true&&Pe(a),react__WEBPACK_IMPORTED_MODULE_1__.memo(l)}function We(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ae.apply(void 0,[e].concat(n)).join(""),i=Te(o);return new ve(i,o)}var Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.3.0"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.3.0",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1__.createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1__.createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Je=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function(t,n){var o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),s=e.defaultProps,a=Oe(t,o,s);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+_(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1__.createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Xe=function(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze)},Ze={StyleSheet:Z,masterSheet:he}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (qe);
//# sourceMappingURL=styled-components.browser.esm.js.map


/***/ })

}]);