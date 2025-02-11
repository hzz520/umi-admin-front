(function (e) {
  function t(t) {
    for (
      var n, i, s = t[0], l = t[1], o = t[2], d = 0, j = [];
      d < s.length;
      d++
    )
      (i = s[d]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && j.push(r[i][0]),
        (r[i] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    u && u(t);
    while (j.length) j.shift()();
    return c.push.apply(c, o || []), a();
  }
  function a() {
    for (var e, t = 0; t < c.length; t++) {
      for (var a = c[t], n = !0, s = 1; s < a.length; s++) {
        var l = a[s];
        0 !== r[l] && (n = !1);
      }
      n && (c.splice(t--, 1), (e = i((i.s = a[0]))));
    }
    return e;
  }
  var n = {},
    r = { 3: 0 },
    c = [];
  function i(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  (i.m = e),
    (i.c = n),
    (i.d = function (e, t, a) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (i.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (i.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          i.d(
            a,
            n,
            function (t) {
              return e[t];
            }.bind(null, n),
          );
      return a;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return i.d(t, 'a', t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = '/');
  var s = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var o = 0; o < s.length; o++) t(s[o]);
  var u = l;
  c.push([0, 5, 0, 1, 2, 4]), a();
})({
  0: function (e, t, a) {
    e.exports = a('tB8F');
  },
  1: function (e, t) {},
  '2Wgr': function (e, t, a) {
    var n = {
      './af': 'XGmc',
      './af.js': 'XGmc',
      './ar': '6lSz',
      './ar-dz': 'xRz2',
      './ar-dz.js': 'xRz2',
      './ar-kw': '6c4H',
      './ar-kw.js': '6c4H',
      './ar-ly': 'Pp/M',
      './ar-ly.js': 'Pp/M',
      './ar-ma': 'wB3b',
      './ar-ma.js': 'wB3b',
      './ar-ps': '+ucP',
      './ar-ps.js': '+ucP',
      './ar-sa': 'OL9J',
      './ar-sa.js': 'OL9J',
      './ar-tn': 's4F+',
      './ar-tn.js': 's4F+',
      './ar.js': '6lSz',
      './az': 'CNNQ',
      './az.js': 'CNNQ',
      './be': '6L3X',
      './be.js': '6L3X',
      './bg': 'Q52H',
      './bg.js': 'Q52H',
      './bm': 'mtjp',
      './bm.js': 'mtjp',
      './bn': 'CbOn',
      './bn-bd': 'oMxJ',
      './bn-bd.js': 'oMxJ',
      './bn.js': 'CbOn',
      './bo': 'IsRo',
      './bo.js': 'IsRo',
      './br': 'rnBh',
      './br.js': 'rnBh',
      './bs': 'Vezt',
      './bs.js': 'Vezt',
      './ca': 'g4h1',
      './ca.js': 'g4h1',
      './cs': 'Fg3M',
      './cs.js': 'Fg3M',
      './cv': 'I+I9',
      './cv.js': 'I+I9',
      './cy': '8/xI',
      './cy.js': '8/xI',
      './da': '+qmq',
      './da.js': '+qmq',
      './de': 'czok',
      './de-at': 'XdeR',
      './de-at.js': 'XdeR',
      './de-ch': 'J03n',
      './de-ch.js': 'J03n',
      './de.js': 'czok',
      './dv': 'Y2Sz',
      './dv.js': 'Y2Sz',
      './el': '+zUz',
      './el.js': '+zUz',
      './en-au': 'Gamk',
      './en-au.js': 'Gamk',
      './en-ca': 'I4IF',
      './en-ca.js': 'I4IF',
      './en-gb': '2hFI',
      './en-gb.js': '2hFI',
      './en-ie': 'vqO6',
      './en-ie.js': 'vqO6',
      './en-il': 'cxM3',
      './en-il.js': 'cxM3',
      './en-in': 'ceBr',
      './en-in.js': 'ceBr',
      './en-nz': 'HbNY',
      './en-nz.js': 'HbNY',
      './en-sg': 'fkHQ',
      './en-sg.js': 'fkHQ',
      './eo': 'PQ/O',
      './eo.js': 'PQ/O',
      './es': '3+gc',
      './es-do': 'Q6bx',
      './es-do.js': 'Q6bx',
      './es-mx': 'grOh',
      './es-mx.js': 'grOh',
      './es-us': '7nze',
      './es-us.js': '7nze',
      './es.js': '3+gc',
      './et': 'JLFr',
      './et.js': 'JLFr',
      './eu': 'loDI',
      './eu.js': 'loDI',
      './fa': 'H0d/',
      './fa.js': 'H0d/',
      './fi': 'xOrb',
      './fi.js': 'xOrb',
      './fil': 'de+C',
      './fil.js': 'de+C',
      './fo': 'Q4Ds',
      './fo.js': 'Q4Ds',
      './fr': '1COl',
      './fr-ca': 'XUJw',
      './fr-ca.js': 'XUJw',
      './fr-ch': 'B+tH',
      './fr-ch.js': 'B+tH',
      './fr.js': '1COl',
      './fy': 'zCSK',
      './fy.js': 'zCSK',
      './ga': 'QYFH',
      './ga.js': 'QYFH',
      './gd': 'p0gg',
      './gd.js': 'p0gg',
      './gl': 'FfFE',
      './gl.js': 'FfFE',
      './gom-deva': '/DVR',
      './gom-deva.js': '/DVR',
      './gom-latn': 'wUhK',
      './gom-latn.js': 'wUhK',
      './gu': 'pcyz',
      './gu.js': 'pcyz',
      './he': 'HFGT',
      './he.js': 'HFGT',
      './hi': '9IHC',
      './hi.js': '9IHC',
      './hr': 'ad95',
      './hr.js': 'ad95',
      './hu': 'Aasb',
      './hu.js': 'Aasb',
      './hy-am': 'UIhw',
      './hy-am.js': 'UIhw',
      './id': 'jCN6',
      './id.js': 'jCN6',
      './is': 'b8aO',
      './is.js': 'b8aO',
      './it': 'HAVP',
      './it-ch': 'yXL2',
      './it-ch.js': 'yXL2',
      './it.js': 'HAVP',
      './ja': 'yAyT',
      './ja.js': 'yAyT',
      './jv': '7TK5',
      './jv.js': '7TK5',
      './ka': 'nE2M',
      './ka.js': 'nE2M',
      './kk': 'URLp',
      './kk.js': 'URLp',
      './km': 'ROrH',
      './km.js': 'ROrH',
      './kn': 'T8x0',
      './kn.js': 'T8x0',
      './ko': 'tm4Q',
      './ko.js': 'tm4Q',
      './ku': 'EVFM',
      './ku-kmr': 'Rpkv',
      './ku-kmr.js': 'Rpkv',
      './ku.js': 'EVFM',
      './ky': 'vyBf',
      './ky.js': 'vyBf',
      './lb': 'jEOA',
      './lb.js': 'jEOA',
      './lo': 'vQPx',
      './lo.js': 'vQPx',
      './lt': 'ni7j',
      './lt.js': 'ni7j',
      './lv': 'IeZK',
      './lv.js': 'IeZK',
      './me': 'Su7u',
      './me.js': 'Su7u',
      './mi': 'GzHg',
      './mi.js': 'GzHg',
      './mk': '/GLN',
      './mk.js': '/GLN',
      './ml': '6ku5',
      './ml.js': '6ku5',
      './mn': 'M3aJ',
      './mn.js': 'M3aJ',
      './mr': 'ZoYp',
      './mr.js': 'ZoYp',
      './ms': 'JtZs',
      './ms-my': 'Fz9b',
      './ms-my.js': 'Fz9b',
      './ms.js': 'JtZs',
      './mt': 'vNkR',
      './mt.js': 'vNkR',
      './my': 'NLD2',
      './my.js': 'NLD2',
      './nb': 'Y4dM',
      './nb.js': 'Y4dM',
      './ne': 'pT8h',
      './ne.js': 'pT8h',
      './nl': 'x+tW',
      './nl-be': 'l5oT',
      './nl-be.js': 'l5oT',
      './nl.js': 'x+tW',
      './nn': 'pzTP',
      './nn.js': 'pzTP',
      './oc-lnc': 'EKxz',
      './oc-lnc.js': 'EKxz',
      './pa-in': 'vdvQ',
      './pa-in.js': 'vdvQ',
      './pl': 'LIfq',
      './pl.js': 'LIfq',
      './pt': '/xGg',
      './pt-br': 'Hyrg',
      './pt-br.js': 'Hyrg',
      './pt.js': '/xGg',
      './ro': 'YzwZ',
      './ro.js': 'YzwZ',
      './ru': 'xv0J',
      './ru.js': 'xv0J',
      './sd': 'fvM6',
      './sd.js': 'fvM6',
      './se': '5tGU',
      './se.js': '5tGU',
      './si': '24X9',
      './si.js': '24X9',
      './sk': 'C6yK',
      './sk.js': 'C6yK',
      './sl': 'XX+l',
      './sl.js': 'XX+l',
      './sq': 'MUqn',
      './sq.js': 'MUqn',
      './sr': 'GN2e',
      './sr-cyrl': 'mRTr',
      './sr-cyrl.js': 'mRTr',
      './sr.js': 'GN2e',
      './ss': 'HXTn',
      './ss.js': 'HXTn',
      './sv': '5HCs',
      './sv.js': '5HCs',
      './sw': '7RtV',
      './sw.js': '7RtV',
      './ta': 'svvG',
      './ta.js': 'svvG',
      './te': 'ZDFm',
      './te.js': 'ZDFm',
      './tet': 'U/Zq',
      './tet.js': 'U/Zq',
      './tg': 'UsRU',
      './tg.js': 'UsRU',
      './th': '9uSG',
      './th.js': '9uSG',
      './tk': 'r81R',
      './tk.js': 'r81R',
      './tl-ph': '9Bko',
      './tl-ph.js': '9Bko',
      './tlh': '1RoK',
      './tlh.js': '1RoK',
      './tr': 'EacV',
      './tr.js': 'EacV',
      './tzl': 'Aiiz',
      './tzl.js': 'Aiiz',
      './tzm': 'ushI',
      './tzm-latn': 'RFaw',
      './tzm-latn.js': 'RFaw',
      './tzm.js': 'ushI',
      './ug-cn': 'SPUm',
      './ug-cn.js': 'SPUm',
      './uk': 'MILe',
      './uk.js': 'MILe',
      './ur': 'HDtF',
      './ur.js': 'HDtF',
      './uz': 'Z3lJ',
      './uz-latn': 'iCQg',
      './uz-latn.js': 'iCQg',
      './uz.js': 'Z3lJ',
      './vi': 'sxyy',
      './vi.js': 'sxyy',
      './x-pseudo': 'fB+2',
      './x-pseudo.js': 'fB+2',
      './yo': 'd2sv',
      './yo.js': 'd2sv',
      './zh-cn': '0Q5D',
      './zh-cn.js': '0Q5D',
      './zh-hk': 'W6+y',
      './zh-hk.js': 'W6+y',
      './zh-mo': 'rOoi',
      './zh-mo.js': 'rOoi',
      './zh-tw': 'N12/',
      './zh-tw.js': 'N12/',
    };
    function r(e) {
      var t = c(e);
      return a(t);
    }
    function c(e) {
      if (!a.o(n, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = 'MODULE_NOT_FOUND'), t);
      }
      return n[e];
    }
    (r.keys = function () {
      return Object.keys(n);
    }),
      (r.resolve = c),
      (e.exports = r),
      (r.id = '2Wgr');
  },
  '848m': function (e, t, a) {
    'use strict';
    a.d(t, 'b', function () {
      return i;
    }),
      a.d(t, 'c', function () {
        return l;
      }),
      a.d(t, 'a', function () {
        return u;
      }),
      a.d(t, 'd', function () {
        return j;
      });
    var n = a('DBVu'),
      r = a('GAyR'),
      c = a('sy1d');
    function i(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = Object(r['a'])(
          Object(n['a'])().mark(function e(t) {
            return Object(n['a'])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(c['a'])('/article/edit', {
                        method: 'post',
                        data: t,
                      }),
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )),
        s.apply(this, arguments)
      );
    }
    function l(e) {
      return o.apply(this, arguments);
    }
    function o() {
      return (
        (o = Object(r['a'])(
          Object(n['a'])().mark(function e(t) {
            return Object(n['a'])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(c['a'])('/article/detail', {
                        method: 'post',
                        data: t,
                      }),
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )),
        o.apply(this, arguments)
      );
    }
    function u(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = Object(r['a'])(
          Object(n['a'])().mark(function e(t) {
            return Object(n['a'])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(c['a'])('/article/del', {
                        method: 'post',
                        data: t,
                      }),
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )),
        d.apply(this, arguments)
      );
    }
    function j(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = Object(r['a'])(
          Object(n['a'])().mark(function e(t) {
            return Object(n['a'])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(c['a'])('/article/list', {
                        method: 'post',
                        data: t,
                      }),
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )),
        b.apply(this, arguments)
      );
    }
  },
  '8yLC': function (e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'layout', function () {
        return r;
      });
    var n = a('t12N'),
      r = (e) => Object(n['jsx'])('div', { children: e.children });
  },
  '9kvl': function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return r['b'];
    }),
      a.d(t, 'b', function () {
        return c['a'];
      }),
      a.d(t, 'c', function () {
        return i['a'];
      });
    var n,
      r = a('FfOG'),
      c = a('bCY9'),
      i = a('I5X1');
    a('DBVu'),
      a('GAyR'),
      a('J9RX'),
      a('G3cz'),
      a('KGnJ'),
      a('2KoA'),
      a('ex35'),
      a('gO/O');
    (function (e) {
      (e[(e['SILENT'] = 0)] = 'SILENT'),
        (e[(e['WARN_MESSAGE'] = 1)] = 'WARN_MESSAGE'),
        (e[(e['ERROR_MESSAGE'] = 2)] = 'ERROR_MESSAGE'),
        (e[(e['NOTIFICATION'] = 4)] = 'NOTIFICATION'),
        (e[(e['REDIRECT'] = 9)] = 'REDIRECT');
    })(n || (n = {}));
    a('AYEP');
  },
  A8du: function (e, t, a) {
    'use strict';
    a.r(t);
    var n = a('G3cz'),
      r = (a('f/3t'), a('n1QO')),
      c = (a('mlHj'), a('7y59')),
      i = a('DBVu'),
      s = (a('s+eS'), a('IOnQ')),
      l = a('GAyR'),
      o = (a('17P0'), a('NAQr')),
      u = (a('Np2d'), a('UsAc')),
      d = a('iojd'),
      j = a('1QO0'),
      b = a('ITvK'),
      p = a.n(b),
      O = a('Bm2L'),
      h = a('9kvl'),
      f = a('jb+D'),
      m = a('pLYI'),
      v = a('t12N'),
      x = {
        labelCol: { span: 6, flex: 1 },
        wrapperCol: { span: 18 },
        colon: !1,
      };
    t['default'] = Object(j['memo'])(function () {
      var e = Object(j['useState'])({ name: '', password: '' }),
        t = Object(d['a'])(e, 2),
        a = t[0],
        b = t[1],
        g = u['a'].useForm(),
        y = Object(d['a'])(g, 1),
        k = y[0],
        w = Object(O['k'])(),
        C = Object(h['c'])('@@initialState'),
        S = C.setInitialState,
        R = Object(j['useMemo'])(
          () => [
            { label: '\u767b\u5f55', key: '/user/login' },
            { label: '\u6ce8\u518c', key: '/user/registry' },
            ...(a.name
              ? [{ label: '\u4fee\u6539\u5bc6\u7801', key: '/user/changePwd' }]
              : []),
          ],
          [a],
        ),
        I = Object(j['useMemo'])(() => {
          return '/user/login' === w.pathname
            ? Object(v['jsx'])(v['Fragment'], {})
            : ('/user/registry' === w.pathname
                ? ((t = '\u786e\u8ba4\u5bc6\u7801'), (e = 'confirmPassword'))
                : '/user/changePwd' === w.pathname &&
                  ((t = '\u65b0\u5bc6\u7801'), (e = 'newPassword')),
              Object(v['jsx'])(u['a'].Item, {
                label: t,
                name: e,
                rules: [
                  { required: !0, message: '\u8bf7\u8f93\u5165'.concat(t) },
                ],
                children: Object(v['jsx'])(o['a'], {
                  type: 'password',
                  allowClear: !0,
                  maxLength: 100,
                  placeholder: '\u8bf7\u8f93\u5165'.concat(t),
                }),
              }));
          var e, t;
        }, [w]),
        F = Object(j['useCallback'])(
          (e) => {
            h['a'].push(e);
          },
          [h['a']],
        ),
        z = Object(j['useCallback'])(() => {
          h['a'].push('/user/login');
        }, [h['a']]),
        N = Object(j['useCallback'])(() => {
          h['a'].replace('/');
        }, [h['a']]),
        A = Object(j['useMemo'])(() => '/user/changePwd' === w.pathname, [w]),
        T = Object(j['useCallback'])(() => {
          k &&
            k.validateFields().then((e) => {
              var t,
                a,
                n = '';
              '/user/login' === w.pathname &&
                ((t = f['f']), (n = '\u767b\u5f55\u6210\u529f'), (a = N)),
                '/user/registry' === w.pathname &&
                  ((t = f['g']), (n = '\u6ce8\u518c\u6210\u529f'), (a = z)),
                '/user/changePwd' === w.pathname &&
                  ((t = f['b']),
                  (n = '\u4fee\u6539\u5bc6\u7801\u6210\u529f'),
                  (a = z)),
                t &&
                  t(e).then(
                    (function () {
                      var e = Object(l['a'])(
                        Object(i['a'])().mark(function e(t) {
                          var r;
                          return Object(i['a'])().wrap(function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (r = t.data),
                                    s['default'].success(n),
                                    a === N
                                      ? (window.localStorage.setItem(
                                          'token',
                                          'Bearer '.concat(r),
                                        ),
                                        Object(m['getInitialState'])().then(
                                          (e) => {
                                            var t = e.user;
                                            S({ user: t }), a();
                                          },
                                        ))
                                      : a();
                                case 3:
                                case 'end':
                                  return e.stop();
                              }
                          }, e);
                        }),
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  );
            });
        }, [w, k]),
        E = Object(j['useCallback'])(
          Object(l['a'])(
            Object(i['a'])().mark(function e() {
              var t, a;
              return Object(i['a'])().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(m['getInitialState'])();
                    case 2:
                      if (
                        ((t = e.sent),
                        (a = t.user),
                        a && (b(a), S({ user: a })),
                        null === a ||
                          void 0 === a ||
                          !a.name ||
                          '/user/login' !== w.pathname)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return N(), e.abrupt('return');
                    case 8:
                      null !== a &&
                      void 0 !== a &&
                      a.name &&
                      '/user/changePwd' === w.pathname
                        ? k.setFieldValue('name', a.name)
                        : k.setFieldValue('name', '');
                    case 9:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          ),
          [k, m['getInitialState'], w],
        );
      return (
        Object(j['useEffect'])(() => {
          E();
        }, [E]),
        Object(v['jsx'])('div', {
          className: p.a.container,
          children: Object(v['jsxs'])(
            u['a'],
            Object(n['a'])(
              Object(n['a'])({ className: 'form', form: k }, x),
              {},
              {
                children: [
                  Object(v['jsx'])(u['a'].Item, {
                    noStyle: !0,
                    children: Object(v['jsx'])(c['a'], {
                      centered: !0,
                      items: R,
                      onChange: F,
                      activeKey: w.pathname,
                    }),
                  }),
                  Object(v['jsx'])(u['a'].Item, {
                    label: '\u7528\u6237\u540d',
                    name: 'name',
                    rules: [
                      {
                        required: !0,
                        message: '\u8bf7\u8f93\u5165\u7528\u6237\u540d',
                      },
                    ],
                    children: Object(v['jsx'])(o['a'], {
                      disabled: A,
                      allowClear: !0,
                      maxLength: 100,
                      placeholder: '\u8bf7\u8f93\u5165\u7528\u6237\u540d',
                    }),
                  }),
                  Object(v['jsx'])(u['a'].Item, {
                    label: '\u5bc6\u7801',
                    name: 'password',
                    rules: [
                      {
                        required: !0,
                        message: '\u8bf7\u8f93\u5165\u5bc6\u7801',
                      },
                    ],
                    children: Object(v['jsx'])(o['a'], {
                      type: 'password',
                      allowClear: !0,
                      maxLength: 100,
                      placeholder: '\u8bf7\u8f93\u5165\u5bc6\u7801',
                    }),
                  }),
                  I,
                  Object(v['jsx'])(u['a'].Item, {
                    wrapperCol: { span: 24 },
                    children: Object(v['jsx'])(r['a'], {
                      onClick: T,
                      size: 'large',
                      type: 'primary',
                      className: 'confirm-btn',
                      children: '\u786e\u8ba4',
                    }),
                  }),
                ],
              },
            ),
          ),
        })
      );
    });
  },
  FfOG: function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return i;
    }),
      a.d(t, 'b', function () {
        return c;
      });
    var n = a('ptaF'),
      r = { basename: '/' };
    window.routerBase && (r.basename = window.routerBase);
    var c = Object({ NODE_ENV: 'production' }).__IS_SERVER
        ? null
        : Object(n['a'])(r),
      i = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e || (c = Object(n['a'])(r)), c;
      };
  },
  I5X1: function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return l;
    });
    var n = a('iojd'),
      r = a('1QO0'),
      c = a('uQOe'),
      i = a.n(c),
      s = a('qwGt');
    function l(e, t) {
      var a = Object(r['useContext'])(s['a']),
        c = Object(r['useRef'])(t);
      c.current = t;
      var l = Object(r['useState'])(() =>
          c.current ? c.current(a.data[e]) : a.data[e],
        ),
        o = Object(n['a'])(l, 2),
        u = o[0],
        d = o[1],
        j = Object(r['useRef'])(u);
      j.current = u;
      var b = Object(r['useRef'])(!1);
      return (
        Object(r['useEffect'])(
          () => (
            (b.current = !0),
            () => {
              b.current = !1;
            }
          ),
          [],
        ),
        Object(r['useEffect'])(() => {
          var n = (n) => {
            if (b.current)
              if (t && c.current) {
                var r = c.current(n),
                  s = j.current;
                i()(r, s) || d(r);
              } else d(n);
            else
              setTimeout(() => {
                (a.data[e] = n), a.update(e);
              });
          };
          try {
            a.callbacks[e].add(n), a.update(e);
          } catch (r) {
            (a.callbacks[e] = new Set()), a.callbacks[e].add(n), a.update(e);
          }
          return () => {
            a.callbacks[e].delete(n);
          };
        }, [e]),
        u
      );
    }
  },
  ITvK: function (e, t, a) {
    e.exports = { container: 'container___24lE3' };
  },
  L1sS: function (e, t, a) {
    'use strict';
    a.r(t);
    a('f/3t');
    var n = a('n1QO'),
      r = (a('4iWQ'), a('ADLy')),
      c = a('G3cz'),
      i = a('DBVu'),
      s = a('GAyR'),
      l = (a('s+eS'), a('IOnQ')),
      o = (a('Pz+B'), a('aXwA')),
      u = (a('ueYI'), a('LbPj')),
      d = a('848m'),
      j = a('D9mt'),
      b = a('1QO0'),
      p = a('Bm2L'),
      O = a('9kvl'),
      h = a('a8+A'),
      f = a('JTol'),
      m = a('t12N');
    t['default'] = Object(b['memo'])(function () {
      var e = Object(p['j'])(),
        t = Object(O['c'])('@@initialState'),
        a = t.initialState,
        v = Object(b['useRef'])(),
        x = Object(b['useRef'])(),
        g = Object(b['useMemo'])(
          () => [
            { dataIndex: 'id', title: '\u6587\u7ae0id', hideInSearch: !0 },
            { dataIndex: 'title', title: '\u6587\u7ae0\u6807\u9898' },
            {
              dataIndex: 'author',
              title: '\u4f5c\u8005',
              render: (e, t) => {
                var a;
                return (
                  (null === t ||
                  void 0 === t ||
                  null === (a = t.author) ||
                  void 0 === a
                    ? void 0
                    : a.name) || '-'
                );
              },
            },
            {
              valueType: 'option',
              title: '\u64cd\u4f5c',
              render(e, t) {
                var n,
                  r,
                  c,
                  i =
                    null === a ||
                    void 0 === a ||
                    null === (n = a.user) ||
                    void 0 === n ||
                    null === (r = n.role) ||
                    void 0 === r
                      ? void 0
                      : r.code,
                  s =
                    4 !== i &&
                    ([1, 2].includes(i) ||
                      t.author.name ===
                        (null === a ||
                        void 0 === a ||
                        null === (c = a.user) ||
                        void 0 === c
                          ? void 0
                          : c.name));
                return [
                  Object(m['jsx'])(
                    u['a'].Link,
                    { onClick: () => k(t), children: '\u8be6\u60c5' },
                    'detail',
                  ),
                  Object(m['jsx'])(
                    u['a'].Link,
                    { onClick: () => w(t), children: '\u7f16\u8f91' },
                    'editable',
                  ),
                  Object(m['jsx'])(
                    u['a'].Link,
                    {
                      disabled: !s,
                      onClick: () => C(t),
                      children: '\u5220\u9664',
                    },
                    'editable',
                  ),
                ];
              },
            },
          ],
          [a],
        ),
        y = Object(b['useCallback'])(() => {
          e.push('/article/add');
        }, [e]),
        k = Object(b['useCallback'])(
          (t) => {
            e.push('/article/detail?id='.concat(t.id));
          },
          [e],
        ),
        w = Object(b['useCallback'])(
          (t) => {
            e.push('/article/edit?id='.concat(t.id));
          },
          [e],
        ),
        C = Object(b['useCallback'])((e) => {
          o['a'].confirm({
            title: '\u786e\u8ba4\u5220\u9664',
            content: '\u662f\u5426\u786e\u8ba4\u5220\u9664',
            okText: '\u786e\u8ba4',
            cancelText: '\u53d6\u6d88',
            onOk: () => {
              Object(d['a'])({ id: e.id }).then(() => {
                l['default'].success('\u5220\u9664\u6210\u529f'),
                  x.current.reload();
              });
            },
          });
        }, []),
        S = Object(b['useCallback'])(
          Object(s['a'])(
            Object(i['a'])().mark(function e() {
              var t;
              return Object(i['a'])().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      null === (t = x.current) || void 0 === t || t.reload();
                    case 1:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          ),
          [x],
        ),
        R = Object(b['useCallback'])(
          (function () {
            var e = Object(s['a'])(
              Object(i['a'])().mark(function e(t) {
                var a, n, r, s, l, o, u, j;
                return Object(i['a'])().wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.current),
                          (r = t.pageSize),
                          (s =
                            null === (a = v.current) || void 0 === a
                              ? void 0
                              : a.getFieldsValue()),
                          (e.next = 4),
                          Object(d['d'])(
                            Object(c['a'])(
                              Object(c['a'])({}, s),
                              {},
                              { page: n, pageSize: r },
                            ),
                          )
                        );
                      case 4:
                        return (
                          (l = e.sent),
                          (o = l.data),
                          (u = o.list),
                          (j = o.total),
                          e.abrupt('return', { success: !0, data: u, total: j })
                        );
                      case 9:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [v],
        );
      return (
        Object(b['useEffect'])(() => {
          setTimeout(() => {
            x.current && x.current.reload();
          }, 500);
        }, [x.current]),
        Object(m['jsx'])(j['a'], {
          headerTitle: Object(m['jsxs'])(m['Fragment'], {
            children: [
              '\u6587\u7ae0\u5217\u8868',
              Object(m['jsx'])(r['a'], {
                title:
                  '\u8bbf\u5ba2\u7528\u6237\u65e0\u6cd5\u65b0\u5efa/\u7f16\u8f91\u6587\u7ae0\uff0c\u666e\u901a\u7528\u6237\u53ea\u80fd\u65b0\u5efa\u6587\u7ae0\u548c\u7f16\u8f91\u5f52\u5c5e\u81ea\u5df1\u7684\u6587\u7ae0',
                children: Object(m['jsx'])(h['a'], {
                  style: { marginLeft: '5px' },
                }),
              }),
            ],
          }),
          columns: g,
          actionRef: x,
          formRef: v,
          request: R,
          pagination: { position: ['topLeft', 'bottomRight'] },
          onReset: S,
          toolBarRender: () => [
            Object(m['jsx'])(
              n['a'],
              {
                icon: Object(m['jsx'])(f['a'], {}),
                type: 'primary',
                onClick: y,
                children: '\u65b0\u5efa',
              },
              'button',
            ),
          ],
          rowKey: 'id',
        })
      );
    });
  },
  PeeD: function (e, t, a) {
    'use strict';
    a.r(t);
    var n = a('G3cz'),
      r = a('iojd'),
      c = a('1QO0'),
      i = a.n(c),
      s = a('9kvl'),
      l = a('2KoA'),
      o = a('J9RX'),
      u = a('QwZf'),
      d = a('TyEu'),
      j = (a('rZaO'), a('FRp6'), a('d7M4')),
      b = (a('y7O7'), a('HSQH')),
      p = (a('OEma'), a('78Sz')),
      O = (a('1Ad9'), a('LCgx')),
      h = a('QDcA'),
      f = a('t12N');
    function m(e, t, a, n) {
      if (e.rightRender) return e.rightRender(a, n, e);
      var r = Object(f['jsx'])(O['a'], {
          className: 'umi-plugin-layout-menu',
          children: Object(f['jsxs'])(
            O['a'].Item,
            {
              onClick: () =>
                e.logout && (null === e || void 0 === e ? void 0 : e.logout(a)),
              children: [
                Object(f['jsx'])(h['a'], {}),
                '\u9000\u51fa\u767b\u5f55',
              ],
            },
            'logout',
          ),
        }),
        c = Object(f['jsxs'])('span', {
          className: 'umi-plugin-layout-action',
          children: [
            Object(f['jsx'])(p['a'], {
              size: 'small',
              className: 'umi-plugin-layout-avatar',
              src:
                (null === a || void 0 === a ? void 0 : a.avatar) ||
                'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
              alt: 'avatar',
            }),
            Object(f['jsx'])('span', {
              className: 'umi-plugin-layout-name',
              children: null === a || void 0 === a ? void 0 : a.name,
            }),
          ],
        });
      return t
        ? Object(f['jsx'])('div', {
            className: 'umi-plugin-layout-right',
            children: Object(f['jsx'])(b['a'], {
              size: 'small',
              style: { marginLeft: 8, marginRight: 8 },
            }),
          })
        : Object(f['jsx'])('div', {
            className: 'umi-plugin-layout-right anticon',
            children: e.logout
              ? Object(f['jsx'])(j['a'], {
                  overlay: r,
                  overlayClassName: 'umi-plugin-layout-container',
                  children: c,
                })
              : c,
          });
    }
    a('mXc7');
    var v = a('Tz5v'),
      x = (a('f/3t'), a('n1QO'));
    function g() {
      s['a'].push('/');
    }
    var y = () =>
        Object(f['jsx'])(v['a'], {
          status: '404',
          title: '404',
          subTitle:
            '\u62b1\u6b49\uff0c\u4f60\u8bbf\u95ee\u7684\u9875\u9762\u4e0d\u5b58\u5728',
          extra: Object(f['jsx'])(x['a'], {
            type: 'primary',
            onClick: g,
            children: '\u8fd4\u56de\u9996\u9875',
          }),
        }),
      k = () =>
        Object(f['jsx'])(v['a'], {
          status: '403',
          title: '403',
          subTitle:
            '\u62b1\u6b49\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u8be5\u9875\u9762',
          extra: Object(f['jsx'])(x['a'], {
            type: 'primary',
            onClick: g,
            children: '\u8fd4\u56de\u9996\u9875',
          }),
        }),
      w = (e) => {
        var t = e.children,
          a = e.currentPathConfig;
        return a
          ? a.unAccessible || a.unaccessible
            ? e.unAccessible || Object(f['jsx'])(k, {})
            : t
          : e.noFound || Object(f['jsx'])(y, {});
      },
      C = a('KP8t'),
      S = () =>
        Object(f['jsxs'])('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '32',
          height: '32',
          viewBox: '0 0 200 200',
          children: [
            Object(f['jsxs'])('defs', {
              children: [
                Object(f['jsxs'])('linearGradient', {
                  id: 'linearGradient-1',
                  x1: '62.102%',
                  x2: '108.197%',
                  y1: '0%',
                  y2: '37.864%',
                  children: [
                    Object(f['jsx'])('stop', {
                      offset: '0%',
                      stopColor: '#4285EB',
                    }),
                    Object(f['jsx'])('stop', {
                      offset: '100%',
                      stopColor: '#2EC7FF',
                    }),
                  ],
                }),
                Object(f['jsxs'])('linearGradient', {
                  id: 'linearGradient-2',
                  x1: '69.644%',
                  x2: '54.043%',
                  y1: '0%',
                  y2: '108.457%',
                  children: [
                    Object(f['jsx'])('stop', {
                      offset: '0%',
                      stopColor: '#29CDFF',
                    }),
                    Object(f['jsx'])('stop', {
                      offset: '37.86%',
                      stopColor: '#148EFF',
                    }),
                    Object(f['jsx'])('stop', {
                      offset: '100%',
                      stopColor: '#0A60FF',
                    }),
                  ],
                }),
                Object(f['jsxs'])('linearGradient', {
                  id: 'linearGradient-3',
                  x1: '69.691%',
                  x2: '16.723%',
                  y1: '-12.974%',
                  y2: '117.391%',
                  children: [
                    Object(f['jsx'])('stop', {
                      offset: '0%',
                      stopColor: '#FA816E',
                    }),
                    Object(f['jsx'])('stop', {
                      offset: '41.473%',
                      stopColor: '#F74A5C',
                    }),
                    Object(f['jsx'])('stop', {
                      offset: '100%',
                      stopColor: '#F51D2C',
                    }),
                  ],
                }),
                Object(f['jsxs'])('linearGradient', {
                  id: 'linearGradient-4',
                  x1: '68.128%',
                  x2: '30.44%',
                  y1: '-35.691%',
                  y2: '114.943%',
                  children: [
                    Object(f['jsx'])('stop', {
                      offset: '0%',
                      stopColor: '#FA8E7D',
                    }),
                    Object(f['jsx'])('stop', {
                      offset: '51.264%',
                      stopColor: '#F74A5C',
                    }),
                    Object(f['jsx'])('stop', {
                      offset: '100%',
                      stopColor: '#F51D2C',
                    }),
                  ],
                }),
              ],
            }),
            Object(f['jsx'])('g', {
              fill: 'none',
              fillRule: 'evenodd',
              stroke: 'none',
              strokeWidth: '1',
              children: Object(f['jsx'])('g', {
                transform: 'translate(-20 -20)',
                children: Object(f['jsx'])('g', {
                  transform: 'translate(20 20)',
                  children: Object(f['jsxs'])('g', {
                    children: [
                      Object(f['jsxs'])('g', {
                        fillRule: 'nonzero',
                        children: [
                          Object(f['jsxs'])('g', {
                            children: [
                              Object(f['jsx'])('path', {
                                fill: 'url(#linearGradient-1)',
                                d: 'M91.588 4.177L4.18 91.513a11.981 11.981 0 000 16.974l87.408 87.336a12.005 12.005 0 0016.989 0l36.648-36.618c4.209-4.205 4.209-11.023 0-15.228-4.208-4.205-11.031-4.205-15.24 0l-27.783 27.76c-1.17 1.169-2.945 1.169-4.114 0l-69.802-69.744c-1.17-1.169-1.17-2.942 0-4.11l69.802-69.745c1.17-1.169 2.944-1.169 4.114 0l27.783 27.76c4.209 4.205 11.032 4.205 15.24 0 4.209-4.205 4.209-11.022 0-15.227L108.581 4.056c-4.719-4.594-12.312-4.557-16.993.12z',
                              }),
                              Object(f['jsx'])('path', {
                                fill: 'url(#linearGradient-2)',
                                d: 'M91.588 4.177L4.18 91.513a11.981 11.981 0 000 16.974l87.408 87.336a12.005 12.005 0 0016.989 0l36.648-36.618c4.209-4.205 4.209-11.023 0-15.228-4.208-4.205-11.031-4.205-15.24 0l-27.783 27.76c-1.17 1.169-2.945 1.169-4.114 0l-69.802-69.744c-1.17-1.169-1.17-2.942 0-4.11l69.802-69.745c2.912-2.51 7.664-7.596 14.642-8.786 5.186-.883 10.855 1.062 17.009 5.837L108.58 4.056c-4.719-4.594-12.312-4.557-16.993.12z',
                              }),
                            ],
                          }),
                          Object(f['jsx'])('path', {
                            fill: 'url(#linearGradient-3)',
                            d: 'M153.686 135.855c4.208 4.205 11.031 4.205 15.24 0l27.034-27.012c4.7-4.696 4.7-12.28 0-16.974l-27.27-27.15c-4.218-4.2-11.043-4.195-15.254.013-4.209 4.205-4.209 11.022 0 15.227l18.418 18.403c1.17 1.169 1.17 2.943 0 4.111l-18.168 18.154c-4.209 4.205-4.209 11.023 0 15.228z',
                          }),
                        ],
                      }),
                      Object(f['jsx'])('ellipse', {
                        cx: '100.519',
                        cy: '100.437',
                        fill: 'url(#linearGradient-4)',
                        rx: '23.6',
                        ry: '23.581',
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        }),
      R = S,
      I = (e) => {
        var t,
          a,
          n,
          r = {};
        return (
          null !== e && void 0 !== e && e.hideFooter && (r.footerRender = !1),
          0 == (null === e || void 0 === e ? void 0 : e.layout)
            ? ((r.pure = !0), r)
            : (null !== e &&
                void 0 !== e &&
                null !== (t = e.layout) &&
                void 0 !== t &&
                t.hideMenu &&
                (r.menuRender = !1),
              null !== e &&
                void 0 !== e &&
                null !== (a = e.layout) &&
                void 0 !== a &&
                a.hideFooter &&
                (r.footerRender = !1),
              null !== e &&
                void 0 !== e &&
                null !== (n = e.layout) &&
                void 0 !== n &&
                n.hideNav &&
                (r.headerRender = !1),
              r)
        );
      },
      F = I,
      z = ['children', 'userConfig', 'location', 'route'],
      N = (e) => {
        var t,
          a = e.children,
          r = e.userConfig,
          i = void 0 === r ? {} : r,
          l = e.location,
          j = e.route,
          b = Object(o['a'])(e, z),
          p = (s['c'] && Object(s['c'])('@@initialState')) || {
            initialState: void 0,
            loading: !1,
            setInitialState: null,
          },
          O = p.initialState,
          h = p.loading,
          v = p.setInitialState,
          x = Object(c['useMemo'])(() => {
            var t,
              a = Object(C['b'])(
                (null === e ||
                void 0 === e ||
                null === (t = e.route) ||
                void 0 === t
                  ? void 0
                  : t.routes) || [],
                void 0,
                void 0,
                !0,
              ),
              n = a.menuData,
              r = Object(C['a'])(l.pathname, n).pop();
            return r || {};
          }, [
            null === l || void 0 === l ? void 0 : l.pathname,
            null === e || void 0 === e || null === (t = e.route) || void 0 === t
              ? void 0
              : t.routes,
          ]),
          g = Object(n['a'])(
            Object(n['a'])(
              Object(n['a'])(
                {
                  itemRender: (e) =>
                    Object(f['jsx'])(u['a'], {
                      to: e.path,
                      children: e.breadcrumbName,
                    }),
                },
                i,
              ),
              b,
            ),
            F(x || {}),
          );
        return Object(f['jsx'])(
          d['a'],
          Object(n['a'])(
            Object(n['a'])(
              {
                route: j,
                location: l,
                title:
                  (null === i || void 0 === i ? void 0 : i.name) ||
                  (null === i || void 0 === i ? void 0 : i.title),
                navTheme: 'dark',
                siderWidth: 256,
                onMenuHeaderClick: (e) => {
                  e.stopPropagation(), e.preventDefault(), s['a'].push('/');
                },
                menu: { locale: i.locale },
                menuDataRender: i.patchMenus
                  ? (e) =>
                      null === i || void 0 === i ? void 0 : i.patchMenus(e, p)
                  : void 0,
                formatMessage:
                  null === i || void 0 === i ? void 0 : i.formatMessage,
                logo: R,
                menuItemRender: (e, t) =>
                  e.isUrl
                    ? t
                    : e.path && l.pathname !== e.path
                    ? Object(f['jsx'])(u['a'], {
                        to: e.path,
                        target: e.target,
                        children: t,
                      })
                    : t,
                disableContentMargin: !0,
                fixSiderbar: !0,
                fixedHeader: !0,
              },
              g,
            ),
            {},
            {
              rightContentRender:
                !1 !==
                  (null === g || void 0 === g
                    ? void 0
                    : g.rightContentRender) &&
                ((e) => {
                  var t = null === m || void 0 === m ? void 0 : m(i, h, O, v);
                  return g.rightContentRender
                    ? g.rightContentRender(e, t, {
                        userConfig: i,
                        loading: h,
                        initialState: O,
                        setInitialState: v,
                      })
                    : t;
                }),
              children: Object(f['jsx'])(w, {
                noFound: null === i || void 0 === i ? void 0 : i.noFound,
                unAccessible:
                  null === i || void 0 === i ? void 0 : i.unAccessible,
                currentPathConfig: x,
                children: i.childrenRender ? i.childrenRender(a, e) : a,
              }),
            },
          ),
        );
      },
      A = N;
    t['default'] = (e) => {
      var t = Object(c['useState'])(null),
        a = Object(r['a'])(t, 2),
        o = a[0],
        u = a[1],
        d = (s['c'] && Object(s['c'])('@@initialState')) || {
          initialState: void 0,
          loading: !1,
          setInitialState: null,
        };
      Object(c['useEffect'])(() => {
        var e =
          s['b'].applyPlugins({
            key: 'layout',
            type: l['ApplyPluginsType'].modify,
            initialValue: Object(n['a'])({}, d),
          }) || {};
        e instanceof Promise
          ? e.then((e) => {
              u(e);
            })
          : u(e);
      }, [null === d || void 0 === d ? void 0 : d.initialState]);
      var j = Object(n['a'])(
        Object(n['a'])({}, { theme: 'PRO', locale: !1, showBreadcrumb: !0 }),
        o || {},
      );
      return o
        ? i.a.createElement(A, Object(n['a'])({ userConfig: j }, e))
        : null;
    };
  },
  bCY9: function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return r;
    });
    var n = a('2KoA'),
      r = new n['Plugin']({
        validKeys: [
          'modifyClientRenderOpts',
          'patchRoutes',
          'rootContainer',
          'render',
          'onRouteChange',
          '__mfsu',
          'getInitialState',
          'initialStateConfig',
          'layout',
          'layoutActionRef',
          'request',
        ],
      });
  },
  i1J9: function (e, t, a) {
    'use strict';
    a.r(t);
    a('cqI5');
    var n = a('SQOF'),
      r = (a('17P0'), a('NAQr')),
      c = (a('4iWQ'), a('ADLy')),
      i = a('G3cz'),
      s = (a('f/3t'), a('n1QO')),
      l = a('DBVu'),
      o = a('GAyR'),
      u = (a('Pz+B'), a('aXwA')),
      d = (a('s+eS'), a('IOnQ')),
      j = (a('ueYI'), a('LbPj')),
      b = (a('Np2d'), a('UsAc')),
      p = a('iojd'),
      O = a('D9mt'),
      h = a('1QO0'),
      f = a('9kvl'),
      m = a('jb+D'),
      v = a('JTol'),
      x = a('a8+A'),
      g = a('t12N'),
      y = {
        labelCol: { span: 6, flex: 1 },
        wrapperCol: { span: 18 },
        colon: !1,
      };
    t['default'] = Object(h['memo'])(function () {
      var e = Object(f['c'])('@@initialState'),
        t = e.initialState,
        a = b['a'].useForm(),
        k = Object(p['a'])(a, 1),
        w = k[0],
        C = Object(h['useRef'])(),
        S = Object(h['useRef'])(),
        R = Object(h['useState'])(!1),
        I = Object(p['a'])(R, 2),
        F = I[0],
        z = I[1],
        N = Object(h['useState'])(''),
        A = Object(p['a'])(N, 2),
        T = A[0],
        E = A[1],
        P = Object(h['useMemo'])(
          () => [
            { dataIndex: 'id', title: '\u7528\u6237id', hideInSearch: !0 },
            { dataIndex: 'name', title: '\u7528\u6237\u540d\u79f0' },
            {
              dataIndex: 'password',
              title: '\u7528\u6237\u5bc6\u7801',
              hideInSearch: !0,
            },
            {
              dataIndex: 'role',
              title: '\u89d2\u8272',
              render: (e, t) => {
                var a;
                return (
                  (null === t ||
                  void 0 === t ||
                  null === (a = t.role) ||
                  void 0 === a
                    ? void 0
                    : a.name) || '-'
                );
              },
            },
            {
              valueType: 'option',
              title: '\u64cd\u4f5c',
              render(e, a) {
                var n,
                  r,
                  c =
                    (null === t ||
                    void 0 === t ||
                    null === (n = t.user) ||
                    void 0 === n
                      ? void 0
                      : n.role) || {},
                  i = c.code,
                  s =
                    i &&
                    1 === i &&
                    1 !==
                      (null === (r = a.role) || void 0 === r ? void 0 : r.code);
                return [
                  Object(g['jsx'])(
                    j['a'].Link,
                    {
                      disabled: !s,
                      onClick: () => {
                        M(a);
                      },
                      children: '\u7f16\u8f91',
                    },
                    'edit',
                  ),
                  Object(g['jsx'])(
                    j['a'].Link,
                    {
                      disabled: !s,
                      onClick: () => {
                        D(a);
                      },
                      children: '\u4fee\u6539\u5bc6\u7801',
                    },
                    'edit',
                  ),
                  Object(g['jsx'])(
                    j['a'].Link,
                    {
                      disabled: !s,
                      onClick: () => {
                        Q(a);
                      },
                      children: '\u5220\u9664',
                    },
                    'del',
                  ),
                ];
              },
            },
          ],
          [],
        ),
        G = Object(h['useCallback'])(() => {
          w.resetFields(), z(!1);
        }, []),
        L = Object(h['useCallback'])(() => {
          w.validateFields().then((e) => {
            Object(m['a'])(e).then(() => {
              d['default'].success('\u64cd\u4f5c\u6210\u529f'),
                z(!1),
                S.current.reload();
            });
          });
        }, []),
        M = Object(h['useCallback'])((e) => {
          E('\u7f16\u8f91\u89d2\u8272'),
            w.setFieldsValue({ name: e.name, roleId: e.role.id, id: e.id }),
            z(!0);
        }, []),
        D = Object(h['useCallback'])((e) => {
          E('\u4fee\u6539\u5bc6\u7801'),
            w.setFieldsValue({ name: e.name, id: e.id, roleId: e.role.id }),
            z(!0);
        }, []),
        B = Object(h['useCallback'])(() => {
          E('\u65b0\u589e\u7528\u6237'), z(!0);
        }, []),
        Q = Object(h['useCallback'])(
          (e) => {
            u['a'].confirm({
              title: '\u786e\u8ba4\u5220\u9664',
              content:
                '\u662f\u5426\u786e\u8ba4\u5220\u9664\uff0c\u5220\u9664\u540e\u4e0d\u53ef\u6062\u590d\uff01',
              okText: '\u786e\u8ba4',
              cancelText: '\u53d6\u6d88',
              onOk: (function () {
                var t = Object(o['a'])(
                  Object(l['a'])().mark(function t() {
                    return Object(l['a'])().wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              Object(m['c'])({ id: e.id }).then(() => {
                                d['default'].success(
                                  '\u5220\u9664\u6210\u529f',
                                ),
                                  z(!1),
                                  S.current.reload();
                              })
                            );
                          case 2:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                function a() {
                  return t.apply(this, arguments);
                }
                return a;
              })(),
            });
          },
          [S],
        ),
        H = Object(h['useCallback'])(
          Object(o['a'])(
            Object(l['a'])().mark(function e() {
              var t;
              return Object(l['a'])().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      null === (t = S.current) || void 0 === t || t.reload();
                    case 1:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          ),
          [S],
        ),
        V = Object(h['useCallback'])(() => {
          var e,
            a =
              (null === t ||
              void 0 === t ||
              null === (e = t.user) ||
              void 0 === e
                ? void 0
                : e.role) || {},
            n = a.code,
            r = n && 1 === n;
          return [
            Object(g['jsx'])(
              s['a'],
              {
                icon: Object(g['jsx'])(v['a'], {}),
                type: 'primary',
                onClick: B,
                disabled: !r,
                children: '\u65b0\u5efa',
              },
              'button',
            ),
          ];
        }, [B]),
        q = Object(h['useCallback'])(
          (function () {
            var e = Object(o['a'])(
              Object(l['a'])().mark(function e(t) {
                var a, n, r, c, s, o, u, d;
                return Object(l['a'])().wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.current),
                          (r = t.pageSize),
                          (c =
                            null === (a = C.current) || void 0 === a
                              ? void 0
                              : a.getFieldsValue()),
                          (e.next = 4),
                          Object(m['e'])(
                            Object(i['a'])(
                              Object(i['a'])({}, c),
                              {},
                              { page: n, pageSize: r },
                            ),
                          )
                        );
                      case 4:
                        return (
                          (s = e.sent),
                          (o = s.data),
                          (u = o.list),
                          (d = o.total),
                          e.abrupt('return', { success: !0, data: u, total: d })
                        );
                      case 9:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [C],
        );
      return Object(g['jsxs'])(g['Fragment'], {
        children: [
          Object(g['jsx'])(O['a'], {
            headerTitle: Object(g['jsxs'])(g['Fragment'], {
              children: [
                '\u7528\u6237\u5217\u8868',
                Object(g['jsx'])(c['a'], {
                  title:
                    '\u53ea\u6709\u8d85\u7ea7\u7ba1\u7406\u5458\u624d\u80fd\u7f16\u8f91\u548c\u5220\u9664\u7528\u6237\uff0c\u8d85\u7ea7\u7ba1\u7406\u5458\u53ea\u6709\u4e00\u4e2a',
                  children: Object(g['jsx'])(x['a'], {
                    style: { marginLeft: '5px' },
                  }),
                }),
              ],
            }),
            columns: P,
            actionRef: S,
            formRef: C,
            request: q,
            pagination: { position: ['topLeft', 'bottomRight'] },
            onReset: H,
            toolBarRender: V,
            rowKey: 'id',
          }),
          Object(g['jsx'])(u['a'], {
            title: T,
            open: F,
            onOk: L,
            onCancel: G,
            okText: '\u786e\u8ba4',
            cancelText: '\u53d6\u6d88',
            children: Object(g['jsxs'])(
              b['a'],
              Object(i['a'])(
                Object(i['a'])({ form: w }, y),
                {},
                {
                  children: [
                    Object(g['jsx'])(b['a'].Item, {
                      label: '\u7528\u6237id',
                      name: 'id',
                      style: { display: 'none' },
                      children: Object(g['jsx'])(r['a'], {
                        disabled: !0,
                        allowClear: !0,
                        maxLength: 100,
                        placeholder: '\u8bf7\u8f93\u5165\u7528\u6237id',
                      }),
                    }),
                    Object(g['jsx'])(b['a'].Item, {
                      label: '\u7528\u6237\u540d',
                      name: 'name',
                      rules: [
                        {
                          required: !0,
                          message: '\u8bf7\u8f93\u5165\u7528\u6237\u540d',
                        },
                      ],
                      children: Object(g['jsx'])(r['a'], {
                        disabled: '\u65b0\u589e\u7528\u6237' !== T,
                        allowClear: !0,
                        maxLength: 100,
                        placeholder: '\u8bf7\u8f93\u5165\u7528\u6237\u540d',
                      }),
                    }),
                    '\u7f16\u8f91\u89d2\u8272' !== T
                      ? Object(g['jsx'])(g['Fragment'], {
                          children: Object(g['jsx'])(b['a'].Item, {
                            label: '\u5bc6\u7801',
                            name: 'password',
                            rules: [
                              {
                                required: !0,
                                message: '\u8bf7\u8f93\u5165\u5bc6\u7801',
                              },
                            ],
                            children: Object(g['jsx'])(r['a'], {
                              type: 'password',
                              allowClear: !0,
                              maxLength: 100,
                              placeholder: '\u8bf7\u8f93\u5165\u5bc6\u7801',
                            }),
                          }),
                        })
                      : Object(g['jsx'])(g['Fragment'], {}),
                    Object(g['jsx'])(b['a'].Item, {
                      label: '\u89d2\u8272',
                      name: 'roleId',
                      rules: [
                        {
                          required: !0,
                          message: '\u8bf7\u9009\u62e9\u89d2\u8272',
                        },
                      ],
                      children: Object(g['jsx'])(n['a'], {
                        disabled: '\u4fee\u6539\u5bc6\u7801' === T,
                        options: [
                          { label: '\u7ba1\u7406\u5458', value: 2 },
                          { label: '\u666e\u901a\u7528\u6237', value: 3 },
                          { label: '\u8bbf\u5ba2\u7528\u6237', value: 4 },
                        ],
                      }),
                    }),
                  ],
                },
              ),
            ),
          }),
        ],
      });
    });
  },
  ipAC: function (e, t, a) {
    'use strict';
    a.r(t);
    var n = a('iojd'),
      r = (a('4brT'), a('1QO0')),
      c = a('02mt'),
      i = a('vLoq'),
      s = a('Bm2L'),
      l = a('848m'),
      o = a('t12N');
    t['default'] = Object(r['memo'])(
      function () {
        var e = Object(r['useState'])(null),
          t = Object(n['a'])(e, 2),
          a = t[0],
          i = t[1],
          u = Object(s['k'])(),
          d = Object(r['useState'])(''),
          j = Object(n['a'])(d, 2),
          b = j[0],
          p = j[1],
          O = {
            placeholder: '\u8bf7\u8f93\u5165\u5185\u5bb9...',
            MENU_CONF: {},
            readOnly: !0,
            EXTEND_CONF: {},
          };
        return (
          Object(r['useEffect'])(
            () => (
              a &&
                u.query.id &&
                Object(l['c'])({ id: +u.query.id })
                  .then((e) => {
                    var t = e.data;
                    p(t.html);
                  })
                  .catch(() => {}),
              () => {
                null != a && (a.destroy(), i(null));
              }
            ),
            [a, u],
          ),
          Object(o['jsx'])(o['Fragment'], {
            children: Object(o['jsx'])('div', {
              style: { border: '1px solid #ccc', zIndex: 100 },
              children: Object(o['jsx'])(c['a'], {
                defaultConfig: O,
                value: b,
                onCreated: i,
                onChange: (e) => p(e.getHtml()),
                mode: 'default',
                style: { height: 'auto', overflowY: 'hidden' },
              }),
            }),
          })
        );
      },
      (e, t) => Object(i['isEqual'])(e, t),
    );
  },
  'jb+D': function (e, t, a) {
    'use strict';
    a.d(t, 'f', function () {
      return i;
    }),
      a.d(t, 'g', function () {
        return l;
      }),
      a.d(t, 'b', function () {
        return u;
      }),
      a.d(t, 'd', function () {
        return j;
      }),
      a.d(t, 'e', function () {
        return p;
      }),
      a.d(t, 'c', function () {
        return h;
      }),
      a.d(t, 'a', function () {
        return m;
      });
    var n = a('DBVu'),
      r = a('GAyR'),
      c = a('sy1d');
    function i(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = Object(r['a'])(
          Object(n['a'])().mark(function e(t) {
            return Object(n['a'])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(c['a'])('/user/login', {
                        method: 'post',
                        data: t,
                      }),
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )),
        s.apply(this, arguments)
      );
    }
    function l(e) {
      return o.apply(this, arguments);
    }
    function o() {
      return (
        (o = Object(r['a'])(
          Object(n['a'])().mark(function e(t) {
            return Object(n['a'])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(c['a'])('/user/registry', {
                        method: 'post',
                        data: t,
                      }),
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )),
        o.apply(this, arguments)
      );
    }
    function u(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = Object(r['a'])(
          Object(n['a'])().mark(function e(t) {
            return Object(n['a'])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(c['a'])('/user/changePwd', {
                        method: 'post',
                        data: t,
                      }),
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )),
        d.apply(this, arguments)
      );
    }
    function j() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = Object(r['a'])(
          Object(n['a'])().mark(function e() {
            return Object(n['a'])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(c['a'])('/user/info', { method: 'post' }),
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )),
        b.apply(this, arguments)
      );
    }
    function p() {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = Object(r['a'])(
          Object(n['a'])().mark(function e() {
            var t,
              a = arguments;
            return Object(n['a'])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                      e.abrupt(
                        'return',
                        Object(c['a'])('/user/list', {
                          method: 'post',
                          data: t,
                        }),
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )),
        O.apply(this, arguments)
      );
    }
    function h(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = Object(r['a'])(
          Object(n['a'])().mark(function e(t) {
            return Object(n['a'])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(c['a'])('/user/del', { method: 'post', data: t }),
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )),
        f.apply(this, arguments)
      );
    }
    function m(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = Object(r['a'])(
          Object(n['a'])().mark(function e(t) {
            return Object(n['a'])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(c['a'])('/user/addOrUpdate', {
                        method: 'post',
                        data: t,
                      }),
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )),
        v.apply(this, arguments)
      );
    }
  },
  pLYI: function (e, t, a) {
    'use strict';
    a.r(t),
      a.d(t, 'getInitialState', function () {
        return x;
      }),
      a.d(t, 'layout', function () {
        return y;
      });
    var n = a('DBVu'),
      r = a('G3cz'),
      c = a('GAyR'),
      i = a('QIiB'),
      s = a('IO8t'),
      l = a('wH52'),
      o = a('9kvl'),
      u = a('jb+D'),
      d = (a('FRp6'), a('d7M4')),
      j = (a('xO3v'), a('qGSJ')),
      b = (a('OEma'), a('78Sz')),
      p = (a('f/3t'), a('n1QO')),
      O = (a('ueYI'), a('LbPj')),
      h = a('1QO0'),
      f = a('Bm2L'),
      m = a('t12N'),
      v = Object(h['memo'])(() => {
        var e,
          t = Object(f['j'])(),
          a = Object(o['c'])('@@initialState'),
          n = a.initialState,
          r = Object(h['useMemo'])(() => {
            var e, a;
            return {
              items: [
                {
                  label: Object(m['jsx'])(O['a'].Text, {
                    style: {
                      fontWeight: 'bold',
                      textAlign: 'center',
                      display: 'block',
                    },
                    children:
                      null === n ||
                      void 0 === n ||
                      null === (e = n.user) ||
                      void 0 === e ||
                      null === (a = e.role) ||
                      void 0 === a
                        ? void 0
                        : a.name,
                  }),
                  key: 'role',
                  disabled: !0,
                },
                { type: 'divider' },
                {
                  label: Object(m['jsx'])(p['a'], {
                    block: !0,
                    type: 'text',
                    ghost: !0,
                    children: '\u4fee\u6539\u5bc6\u7801',
                  }),
                  key: 'changePwd',
                },
                {
                  label: Object(m['jsx'])(p['a'], {
                    block: !0,
                    type: 'text',
                    ghost: !0,
                    children: '\u9000\u51fa\u767b\u5f55',
                  }),
                  key: 'logout',
                },
              ],
              onClick: (e) => {
                'logout' === e.key &&
                  (localStorage.removeItem('token'),
                  setTimeout(() => {
                    t.push('/user/login');
                  }, 0)),
                  'changePwd' === e.key && t.push('/user/changePwd');
              },
            };
          }, [t]);
        return Object(m['jsx'])(d['a'], {
          menu: r,
          children: Object(m['jsx'])(j['b'], {
            children: Object(m['jsx'])(O['a'].Link, {
              children: Object(m['jsxs'])(j['b'], {
                children: [
                  Object(m['jsx'])(b['a'], {
                    src: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
                  }),
                  Object(m['jsx'])(O['a'].Text, {
                    style: { maxWidth: '100px' },
                    ellipsis: !0,
                    children:
                      (null === n ||
                      void 0 === n ||
                      null === (e = n.user) ||
                      void 0 === e
                        ? void 0
                        : e.name) || '',
                  }),
                ],
              }),
            }),
          }),
        });
      });
    function x() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = Object(c['a'])(
          Object(n['a'])().mark(function e() {
            var t, a;
            return Object(n['a'])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), Object(u['d'])();
                  case 2:
                    return (
                      (t = e.sent),
                      (a = t.data),
                      e.abrupt('return', { user: a })
                    );
                  case 5:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )),
        g.apply(this, arguments)
      );
    }
    var y = (e) => {
      var t = e.initialState,
        a = () => {
          o['a'].goBack();
        };
      return Object(r['a'])(
        {
          title: '\u6211\u7684\u7cfb\u7edf',
          logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
          rightContentRender: () => Object(m['jsx'])(v, {}),
          footerRender: () =>
            Object(m['jsx'])(s['a'], {
              copyright: '@2025 \u4e2a\u4eba\u51fa\u54c1',
            }),
          headerContentRender: () =>
            Object(m['jsxs'])('div', {
              style: { display: 'flex', alignItems: 'center', height: '100%' },
              children: [
                Object(m['jsx'])(l['a'], {
                  onClick: a,
                  style: { marginRight: '10px' },
                }),
                Object(m['jsx'])(i['a'], {}),
              ],
            }),
          breadcrumbRender: (e) => [
            { path: '/', breadcrumbName: '\u9996\u9875' },
            ...e.map((e) => {
              var t = e.breadcrumbName,
                a = e.path;
              return { breadcrumbName: t, path: a };
            }),
          ],
          menuHeaderRender: void 0,
        },
        null === t || void 0 === t ? void 0 : t.settings,
      );
    };
  },
  qwGt: function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return c;
    });
    var n = a('1QO0'),
      r = a.n(n),
      c = r.a.createContext({});
  },
  rZaO: function (e, t, a) {},
  sy1d: function (e, t, a) {
    'use strict';
    a('s+eS');
    var n = a('IOnQ'),
      r = a('iojd'),
      c = a('DBVu'),
      i = a('GAyR'),
      s = (a('zFg+'), a('mvaj')),
      l = a('KGnJ'),
      o = a('9kvl'),
      u = {
        200: '\u670d\u52a1\u5668\u6210\u529f\u8fd4\u56de\u8bf7\u6c42\u7684\u6570\u636e\u3002',
        201: '\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u6210\u529f\u3002',
        202: '\u4e00\u4e2a\u8bf7\u6c42\u5df2\u7ecf\u8fdb\u5165\u540e\u53f0\u6392\u961f\uff08\u5f02\u6b65\u4efb\u52a1\uff09\u3002',
        204: '\u5220\u9664\u6570\u636e\u6210\u529f\u3002',
        400: '\u53d1\u51fa\u7684\u8bf7\u6c42\u6709\u9519\u8bef\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u7684\u64cd\u4f5c\u3002',
        401: '\u7528\u6237\u6ca1\u6709\u6743\u9650\uff08\u4ee4\u724c\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u9519\u8bef\uff09\u3002',
        403: '\u7528\u6237\u5f97\u5230\u6388\u6743\uff0c\u4f46\u662f\u8bbf\u95ee\u662f\u88ab\u7981\u6b62\u7684\u3002',
        404: '\u53d1\u51fa\u7684\u8bf7\u6c42\u9488\u5bf9\u7684\u662f\u4e0d\u5b58\u5728\u7684\u8bb0\u5f55\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u64cd\u4f5c\u3002',
        406: '\u8bf7\u6c42\u7684\u683c\u5f0f\u4e0d\u53ef\u5f97\u3002',
        410: '\u8bf7\u6c42\u7684\u8d44\u6e90\u88ab\u6c38\u4e45\u5220\u9664\uff0c\u4e14\u4e0d\u4f1a\u518d\u5f97\u5230\u7684\u3002',
        422: '\u5f53\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u53d1\u751f\u4e00\u4e2a\u9a8c\u8bc1\u9519\u8bef\u3002',
        500: '\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u3002',
        502: '\u7f51\u5173\u9519\u8bef\u3002',
        503: '\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002',
        504: '\u7f51\u5173\u8d85\u65f6\u3002',
      },
      d = (e) => {
        var t = e.response;
        if (t && t.status) {
          var a = u[t.status] || t.statusText,
            n = t.status,
            r = t.url;
          s['default'].error({
            message: '\u8bf7\u6c42\u9519\u8bef '.concat(n, ': ').concat(r),
            description: a,
          });
        }
        return t;
      },
      j = '/api',
      b = Object(l['a'])({
        prefix: j,
        errorHandler: d,
        credentials: 'include',
      }),
      p = (e, t) =>
        new Promise(
          (function () {
            var a = Object(i['a'])(
              Object(c['a'])().mark(function a(n, r) {
                var i, s, l;
                return Object(c['a'])().wrap(function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (a.next = 2), b(e, t);
                      case 2:
                        if (((i = a.sent), null !== i)) {
                          a.next = 6;
                          break;
                        }
                        return (
                          r('\u672a\u77e5\u9519\u8bef'), a.abrupt('return')
                        );
                      case 6:
                        (s = O(i.code, e, i.msg)),
                          console.log('res', i, s),
                          s && r(s),
                          (l = h(i)),
                          n(l);
                      case 11:
                      case 'end':
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e, t) {
              return a.apply(this, arguments);
            };
          })(),
        ).catch((e) => {
          throw e;
        }),
      O = (e, t, a) => {
        var n = f[e] || void 0;
        if (Array.isArray(n)) {
          var c = Object(r['a'])(n, 2),
            i = c[0],
            s = c[1];
          return 'function' === typeof s && s(a || i, t), a;
        }
        return n;
      },
      h = (e) => {
        var t = e.data;
        if (t && t.pageTool) {
          var a = t.pageTool;
          return {
            dataList: t.beanList || [],
            meta: {
              pageNum: a.pageNum,
              pageSize: a.pageTool,
              total: a.totalSize,
            },
          };
        }
        return e;
      },
      f = {
        B0003: [
          'token error!',
          () => {
            ['/user/login', '/user/registry'].includes(
              o['a'].location.pathname,
            ) || o['a'].push('/user/login');
          },
        ],
        B0001: [
          '\u540e\u53f0\u670d\u52a1\u5668\u5f02\u5e38\u8bf7\u67e5\u9605\u65e5\u5fd7!',
          (e, t) => {
            s['default'].error({
              message: '\u8bf7\u6c42\u9519\u8bef '
                .concat(status, ': ')
                .concat(t),
              description: e,
            });
          },
        ],
        C0001: [
          '\u540e\u53f0\u670d\u52a1\u5668\u5f02\u5e38\u8bf7\u67e5\u9605\u65e5\u5fd7!',
          (e, t) => {
            n['default'].error(
              '\u8bf7\u6c42\u9519\u8bef '
                .concat(status, ': ')
                .concat(t, ' ')
                .concat(e),
            );
          },
        ],
      };
    b.use(
      (function () {
        var e = Object(i['a'])(
          Object(c['a'])().mark(function e(t, a) {
            var n;
            return Object(c['a'])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.req),
                      (n.options.headers = {
                        Authorization: localStorage.getItem('token'),
                      }),
                      (e.next = 4),
                      a()
                    );
                  case 4:
                    t.res;
                  case 5:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        );
        return function (t, a) {
          return e.apply(this, arguments);
        };
      })(),
    ),
      (t['a'] = p);
  },
  tB8F: function (e, t, a) {
    'use strict';
    a.r(t);
    var n = {};
    a.r(n),
      a.d(n, 'rootContainer', function () {
        return p;
      });
    var r = {};
    a.r(r),
      a.d(r, 'patchRoutes', function () {
        return x;
      });
    var c = {};
    a.r(c),
      a.d(c, 'rootContainer', function () {
        return M;
      });
    a('GgYM'),
      a('EcSx'),
      a('3jBk'),
      a('WJ2W'),
      a('OcJn'),
      a('SCBt'),
      a('SNWb'),
      a('U5u0'),
      a('HpiU'),
      a('8BbM'),
      a('oSdA'),
      a('UDnj'),
      a('4Whr'),
      a('PdXw'),
      a('j2YP'),
      a('K9Gs'),
      a('FlI8'),
      a('2Yex'),
      a('vqhe'),
      a('0pkz'),
      a('NWic'),
      a('TMNz'),
      a('iwOu'),
      a('rHUP'),
      a('n0UN'),
      a('cBkf'),
      a('Ft2i'),
      a('brx1'),
      a('SFyC'),
      a('/5AF'),
      a('CCJA'),
      a('aUZo'),
      a('D0rO'),
      a('GDDI'),
      a('hWwf'),
      a('KuRq'),
      a('mRlv'),
      a('h9Wi'),
      a('eOjw'),
      a('2q/4'),
      a('kccB'),
      a('xut5'),
      a('N/7o'),
      a('C2dz'),
      a('5TAQ'),
      a('7Xfv'),
      a('lEPs'),
      a('B4x4'),
      a('MTV7'),
      a('p1yP'),
      a('eyew'),
      a('kMjI'),
      a('iS+J'),
      a('Qm0Y'),
      a('ukK5'),
      a('CZpw'),
      a('X0H4'),
      a('e38J'),
      a('yh5m'),
      a('G6hb'),
      a('/gJP'),
      a('jYqw'),
      a('opL2'),
      a('+ock'),
      a('SlEr'),
      a('v1go'),
      a('beEN'),
      a('XyOe'),
      a('/1uK'),
      a('BLCN'),
      a('nQi/'),
      a('GnHn'),
      a('t+pk'),
      a('ig3D'),
      a('vRqM'),
      a('y3he'),
      a('ldjU'),
      a('ecma'),
      a('Bzsg'),
      a('Dkad'),
      a('Nvne'),
      a('Uv1i'),
      a('iJ36'),
      a('XDG7'),
      a('5RAN'),
      a('+37V'),
      a('tZ8k'),
      a('xiuu'),
      a('HznY'),
      a('gIQF'),
      a('7NTl'),
      a('n7Ds'),
      a('XZPW'),
      a('uAOU'),
      a('x1LQ'),
      a('Ox3h'),
      a('tOwT'),
      a('io+V'),
      a('iLo9'),
      a('Z67V'),
      a('JLOv'),
      a('kZ+D'),
      a('RSL4'),
      a('aVyU'),
      a('ahVg'),
      a('CpWJ'),
      a('1cq2'),
      a('jHOP'),
      a('pDCl'),
      a('mnt4'),
      a('1mu+'),
      a('rjd2'),
      a('KUb8'),
      a('SGY3'),
      a('7PoB'),
      a('XxTS'),
      a('3CiM'),
      a('cDrQ'),
      a('zqEY'),
      a('EiSY'),
      a('9E0W'),
      a('jht+'),
      a('5jZn'),
      a('GgXi'),
      a('p/Qk'),
      a('1aCi'),
      a('Hw3O'),
      a('iBNQ'),
      a('lT6V'),
      a('A9Ar'),
      a('XuqB'),
      a('yFoN'),
      a('CKBX'),
      a('Obug'),
      a('HVkW'),
      a('QKCj'),
      a('VnLQ'),
      a('d+E4'),
      a('ZIdP'),
      a('em2R'),
      a('ediS'),
      a('KZPF'),
      a('Kk74'),
      a('9dXS'),
      a('3YDC'),
      a('5WWi'),
      a('lSsb'),
      a('G51k'),
      a('gTJW'),
      a('G7Wg'),
      a('aTTI'),
      a('UMve'),
      a('+3Zf'),
      a('KTM1'),
      a('NlHq'),
      a('7wbt'),
      a('1x+Y'),
      a('paFN'),
      a('Gs6S'),
      a('cuAp'),
      a('cCMi'),
      a('ry2H'),
      a('xTvi'),
      a('Yxqv'),
      a('V96g'),
      a('T2cE'),
      a('1rhD'),
      a('RHHP'),
      a('5bpw'),
      a('PynX'),
      a('5G5g'),
      a('zZ4V'),
      a('6Y7Z'),
      a('Czbz'),
      a('nndC'),
      a('9wx5'),
      a('i3On'),
      a('iIWa'),
      a('ZxN6'),
      a('8unG'),
      a('M5mG'),
      a('bHKe'),
      a('8xBB'),
      a('EN7L'),
      a('1a2d'),
      a('BC4x'),
      a('FHCv');
    var i = a('bCY9'),
      s = a('pLYI'),
      l = a('1QO0'),
      o = a.n(l),
      u = a('9kvl'),
      d = a('2KoA'),
      j = a('I5X1');
    if ('function' !== typeof j['a'])
      throw new Error(
        '[plugin-initial-state]: useModel is not a function, @umijs/plugin-model is required.',
      );
    var b = (e) => {
      var t = e.children,
        a = Object(l['useRef'])(!1),
        n =
          u['b'].applyPlugins({
            key: 'initialStateConfig',
            type: d['ApplyPluginsType'].modify,
            initialValue: {},
          }) || {},
        r = Object(j['a'])('@@initialState') || {},
        c = r.loading,
        i = void 0 !== c && c;
      return (
        Object(l['useEffect'])(() => {
          i || (a.current = !0);
        }, [i]),
        i && !a.current ? n.loading || null : t
      );
    };
    function p(e) {
      return o.a.createElement(b, null, e);
    }
    var O = a('gPgq'),
      h = a('7hAl'),
      f = { FileTextOutlined: O['a'], UserOutlined: h['a'] };
    function m(e) {
      return e.replace(/\-(\w)/g, function (e, t) {
        return t.toUpperCase();
      });
    }
    function v(e) {
      return Array.isArray(e)
        ? ((e || []).forEach(function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { path: '/' },
              t = e.icon ? e.icon : e.menu ? e.menu.icon : '';
            if (t && 'string' === typeof t) {
              var a = m(t.replace(t[0], t[0].toUpperCase())),
                n = f[t] || f[''.concat(a, 'Outlined')];
              if (n)
                try {
                  e.icon && (e.icon = o.a.createElement(n)),
                    e.menu && (e.menu.icon = o.a.createElement(n));
                } catch (c) {
                  console.log(c);
                }
            }
            if (e.routes || e.children) {
              var r = v(e.routes || e.children);
              e.children = r;
            }
          }),
          e)
        : e;
    }
    function x(e) {
      var t = e.routes;
      v(t);
    }
    var g = a('iojd'),
      y = a('DBVu'),
      k = a('G3cz'),
      w = a('GAyR'),
      C = (e) => new Promise((t) => setTimeout(t, e || 0));
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = Object(w['a'])(
          Object(y['a'])().mark(function e() {
            return Object(y['a'])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), s['getInitialState']();
                  case 2:
                    return e.abrupt('return', e.sent);
                  case 3:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )),
        R.apply(this, arguments)
      );
    }
    var I = { initialState: void 0, loading: !0, error: void 0 },
      F = () => {
        var e = Object(l['useState'])(I),
          t = Object(g['a'])(e, 2),
          a = t[0],
          n = t[1],
          r = Object(l['useCallback'])(
            Object(w['a'])(
              Object(y['a'])().mark(function e() {
                var t, a;
                return Object(y['a'])().wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            n((e) =>
                              Object(k['a'])(
                                Object(k['a'])({}, e),
                                {},
                                { loading: !0, error: void 0 },
                              ),
                            ),
                            (e.prev = 1),
                            (t = () => new Promise((e) => e(S()))),
                            (e.next = 5),
                            t()
                          );
                        case 5:
                          (a = e.sent),
                            n((e) =>
                              Object(k['a'])(
                                Object(k['a'])({}, e),
                                {},
                                { initialState: a, loading: !1 },
                              ),
                            ),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e['catch'](1)),
                            n((t) =>
                              Object(k['a'])(
                                Object(k['a'])({}, t),
                                {},
                                { error: e.t0, loading: !1 },
                              ),
                            );
                        case 12:
                          return (e.next = 14), C(10);
                        case 14:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]],
                );
              }),
            ),
            [],
          ),
          c = Object(l['useCallback'])(
            (function () {
              var e = Object(w['a'])(
                Object(y['a'])().mark(function e(t) {
                  return Object(y['a'])().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            n((e) =>
                              'function' === typeof t
                                ? Object(k['a'])(
                                    Object(k['a'])({}, e),
                                    {},
                                    {
                                      initialState: t(e.initialState),
                                      loading: !1,
                                    },
                                  )
                                : Object(k['a'])(
                                    Object(k['a'])({}, e),
                                    {},
                                    { initialState: t, loading: !1 },
                                  ),
                            ),
                            (e.next = 3),
                            C(10)
                          );
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            [],
          );
        return (
          Object(l['useEffect'])(() => {
            r();
          }, []),
          Object(k['a'])(
            Object(k['a'])({}, a),
            {},
            { refresh: r, setInitialState: c },
          )
        );
      };
    class z {
      constructor() {
        (this.callbacks = {}),
          (this.data = {}),
          (this.update = (e) => {
            (this.callbacks[e] || []).forEach((t) => {
              try {
                var a = this.data[e];
                t(a);
              } catch (n) {
                t(void 0);
              }
            });
          });
      }
    }
    var N = a('t12N'),
      A = (e) => {
        var t = e.hook,
          a = e.onUpdate,
          n = e.namespace,
          r = Object(l['useRef'])(a);
        r.current = a;
        var c,
          i = Object(l['useRef'])(!1);
        try {
          c = t();
        } catch (s) {
          console.error(
            "plugin-model: Invoking '".concat(
              n || 'unknown',
              "' model failed:",
            ),
            s,
          );
        }
        return (
          Object(l['useMemo'])(() => {
            r.current(c), (i.current = !1);
          }, []),
          Object(l['useEffect'])(() => {
            i.current ? r.current(c) : (i.current = !0);
          }),
          Object(N['jsx'])(N['Fragment'], {})
        );
      },
      T = a('qwGt'),
      E = { '@@initialState': F },
      P = new z(),
      G = A,
      L = (e) => {
        var t = e.children;
        return Object(N['jsxs'])(T['a'].Provider, {
          value: P,
          children: [
            Object.entries(E).map((e) =>
              Object(N['jsx'])(
                G,
                {
                  namespace: e[0],
                  hook: e[1],
                  onUpdate: (t) => {
                    var a = e,
                      n = Object(g['a'])(a, 1),
                      r = n[0];
                    (P.data[r] = t), P.update(r);
                  },
                },
                e[0],
              ),
            ),
            t,
          ],
        });
      };
    function M(e) {
      return o.a.createElement(L, null, e);
    }
    i['a'].register({ apply: s, path: '../../app.tsx' }),
      i['a'].register({ apply: n, path: '../plugin-initial-state/runtime' }),
      i['a'].register({ apply: r, path: '@@/plugin-layout/runtime.tsx' }),
      i['a'].register({ apply: c, path: '../plugin-model/runtime' });
    var D = a('FfOG'),
      B = a('xjFD');
    function Q() {
      var e = [
        {
          path: '/',
          component: a('PeeD').default,
          routes: [
            { path: '/', redirect: '/article/list', exact: !0 },
            {
              path: '/user/:type',
              component: a('A8du').default,
              name: '\u767b\u5f55',
              headerRender: !1,
              footerRender: !1,
              menuRender: !1,
              hideInMenu: !0,
              exact: !0,
            },
            {
              path: '/article',
              name: '\u6587\u7ae0\u7ba1\u7406',
              component: a('8yLC').default,
              breadcrumbName: '\u6587\u7ae0\u7ba1\u7406',
              icon: 'fileText',
              routes: [
                { path: '/article', redirect: '/article/list', exact: !0 },
                {
                  path: '/article/list',
                  component: a('L1sS').default,
                  name: '\u6587\u7ae0\u5217\u8868',
                  breadcrumbName: '\u6587\u7ae0\u5217\u8868',
                  exact: !0,
                },
                {
                  path: '/article/add',
                  component: a('y8iF').default,
                  name: '\u6dfb\u52a0',
                  breadcrumbName: '\u6dfb\u52a0',
                  hideInMenu: !0,
                  footerRender: !1,
                  exact: !0,
                },
                {
                  path: '/article/edit',
                  component: a('y8iF').default,
                  name: '\u7f16\u8f91',
                  breadcrumbName: '\u7f16\u8f91',
                  hideInMenu: !0,
                  footerRender: !1,
                  exact: !0,
                },
                {
                  path: '/article/detail',
                  component: a('ipAC').default,
                  name: '\u8be6\u60c5',
                  breadcrumbName: '\u8be6\u60c5',
                  hideInMenu: !0,
                  footerRender: !1,
                  exact: !0,
                },
              ],
            },
            {
              path: '/usermng',
              name: '\u7528\u6237\u7ba1\u7406',
              component: a('8yLC').default,
              breadcrumbName: '\u7528\u6237\u7ba1\u7406',
              icon: 'user',
              routes: [
                { path: '/usermng', redirect: '/usermng/list', exact: !0 },
                {
                  path: '/usermng/list',
                  component: a('i1J9').default,
                  name: '\u7528\u6237\u5217\u8868',
                  breadcrumbName: '\u7528\u6237\u5217\u8868',
                  exact: !0,
                },
              ],
            },
          ],
        },
      ];
      return (
        i['a'].applyPlugins({
          key: 'patchRoutes',
          type: d['ApplyPluginsType'].event,
          args: { routes: e },
        }),
        e
      );
    }
    var H = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return i['a'].applyPlugins({
          key: 'render',
          type: d['ApplyPluginsType'].compose,
          initialValue: () => {
            var t = i['a'].applyPlugins({
              key: 'modifyClientRenderOpts',
              type: d['ApplyPluginsType'].modify,
              initialValue: {
                routes: e.routes || Q(),
                plugin: i['a'],
                history: Object(D['a'])(e.hot),
                isServer: Object({ NODE_ENV: 'production' }).__IS_SERVER,
                rootElement: 'root',
              },
            });
            return Object(B['renderClient'])(t);
          },
          args: e,
        });
      },
      V = H();
    t['default'] = V();
    window.g_umi = { version: '3.5.43' };
  },
  y8iF: function (e, t, a) {
    'use strict';
    a.r(t);
    a('Pz+B');
    var n = a('aXwA'),
      r = (a('17P0'), a('NAQr')),
      c = (a('s+eS'), a('IOnQ')),
      i = a('DBVu'),
      s = a('GAyR'),
      l = a('G3cz'),
      o = (a('Np2d'), a('UsAc')),
      u = a('iojd'),
      d = (a('4brT'), a('1QO0')),
      j = a('02mt'),
      b = a('X2VH'),
      p = a('vLoq'),
      O = a('sy1d');
    function h(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = Object(s['a'])(
          Object(i['a'])().mark(function e(t) {
            return Object(i['a'])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(O['a'])('/oss/upload', {
                        method: 'post',
                        body: t,
                        requestType: 'form',
                        headers: {},
                      }),
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )),
        f.apply(this, arguments)
      );
    }
    class m {
      constructor() {
        (this.title = void 0),
          (this.tag = void 0),
          (this.isSaving = void 0),
          (this.title = '\u4fdd\u5b58'),
          (this.tag = 'button');
      }
      getValue(e) {
        return e.getHtml();
      }
      isActive(e) {
        return !1;
      }
      isDisabled(e) {
        return !1;
      }
      exec(e, t) {
        this.isDisabled(e) || e.emit('save');
      }
    }
    var v = a('Bm2L'),
      x = a('9kvl'),
      g = a('848m'),
      y = a('t12N');
    b['a'].registerMenu({
      key: 'save',
      factory() {
        return new m();
      },
    });
    t['default'] = Object(d['memo'])(
      function () {
        var e = Object(d['useState'])(null),
          t = Object(u['a'])(e, 2),
          a = t[0],
          b = t[1],
          p = Object(d['useState'])(!1),
          O = Object(u['a'])(p, 2),
          f = O[0],
          m = O[1],
          k = Object(v['k'])(),
          w = Object(v['j'])(),
          C = Object(d['useState'])(!1),
          S = Object(u['a'])(C, 2),
          R = S[0],
          I = S[1],
          F = Object(d['useState'])(!1),
          z = Object(u['a'])(F, 2),
          N = z[0],
          A = z[1],
          T = o['a'].useForm(),
          E = Object(u['a'])(T, 1),
          P = E[0],
          G = Object(x['c'])('@@initialState'),
          L = G.initialState,
          M = Object(d['useState'])(''),
          D = Object(u['a'])(M, 2),
          B = D[0],
          Q = D[1],
          H = Object(d['useState'])(''),
          V = Object(u['a'])(H, 2),
          q = V[0],
          U = V[1],
          X = Object(d['useMemo'])(() => {
            var e,
              t,
              a,
              n =
                null === L ||
                void 0 === L ||
                null === (e = L.user) ||
                void 0 === e ||
                null === (t = e.role) ||
                void 0 === t
                  ? void 0
                  : t.code,
              r =
                null === L ||
                void 0 === L ||
                null === (a = L.user) ||
                void 0 === a
                  ? void 0
                  : a.name,
              c = !n || 4 === n;
            return (
              ('/article/add' === k.pathname ||
                [1, 2].includes(n) ||
                B === r) &&
              !c
            );
          }, [k, L, B]),
          K = Object(d['useMemo'])(
            () =>
              Object(l['a'])(
                { excludeKeys: ['group-video'] },
                X ? { insertKeys: { index: 100, keys: 'save' } } : {},
              ),
            [X],
          ),
          J = Object(d['useMemo'])(
            () => ({
              placeholder: '\u8bf7\u8f93\u5165\u5185\u5bb9...',
              MENU_CONF: {
                uploadImage: {
                  customUpload(e, t) {
                    return Object(s['a'])(
                      Object(i['a'])().mark(function a() {
                        var n, r, c;
                        return Object(i['a'])().wrap(function (a) {
                          while (1)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (n = new FormData()),
                                  n.append('file', e),
                                  n.append('bizCode', 'article'),
                                  (a.next = 5),
                                  h(n)
                                );
                              case 5:
                                (r = a.sent), (c = r.data), t(c, '', c);
                              case 8:
                              case 'end':
                                return a.stop();
                            }
                        }, a);
                      }),
                    )();
                  },
                },
              },
              EXTEND_CONF: {},
            }),
            [],
          ),
          Y = Object(d['useCallback'])(() => {
            R ||
              (I(!0),
              Object(g['b'])({
                id: +k.query.id,
                html: a.getHtml(),
                title: P.getFieldValue('title'),
              })
                .then(() => {
                  c['default'].success('\u4fdd\u5b58\u6210\u529f'),
                    A(!1),
                    w.replace('/article/list', { refresh: !0 });
                })
                .finally(() => {
                  I(!1);
                }));
          }, [R, a, P, k, w]),
          Z = Object(d['useCallback'])(() => {
            A(!1);
          }, []);
        return (
          Object(d['useEffect'])(
            () => (
              '/article/edit' === k.pathname
                ? Object(g['c'])({ id: +k.query.id }).then((e) => {
                    var t = e.data;
                    U(t.html),
                      Q(t.name),
                      m(!0),
                      P.setFieldValue('title', t.title);
                  })
                : m(!0),
              a &&
                a.on('save', () => {
                  N || A(!0);
                }),
              () => {
                null != a && (a.destroy(), b(null));
              }
            ),
            [a, k],
          ),
          Object(y['jsx'])(y['Fragment'], {
            children: Object(y['jsxs'])('div', {
              style: { border: '1px solid #ccc', zIndex: 100 },
              children: [
                f
                  ? Object(y['jsxs'])(y['Fragment'], {
                      children: [
                        Object(y['jsx'])(j['b'], {
                          editor: a,
                          defaultConfig: K,
                          mode: 'default',
                          style: { borderBottom: '1px solid #ccc' },
                        }),
                        Object(y['jsx'])(j['a'], {
                          defaultConfig: J,
                          value: q,
                          onCreated: b,
                          onChange: (e) => U(e.getHtml()),
                          mode: 'default',
                          style: { height: '680px', overflowY: 'hidden' },
                        }),
                      ],
                    })
                  : Object(y['jsx'])(y['Fragment'], {}),
                Object(y['jsx'])(n['a'], {
                  title: '\u4fdd\u5b58\u6587\u7ae0',
                  open: N,
                  onOk: Y,
                  onCancel: Z,
                  okText: '\u786e\u8ba4',
                  cancelText: '\u53d6\u6d88',
                  children: Object(y['jsx'])(o['a'], {
                    form: P,
                    children: Object(y['jsx'])(o['a'].Item, {
                      label: '\u6587\u7ae0\u6807\u9898',
                      name: 'title',
                      rules: [
                        {
                          required: !0,
                          message: '\u8bf7\u8f93\u5165\u6587\u7ae0\u6807\u9898',
                        },
                      ],
                      children: Object(y['jsx'])(r['a'], { maxLength: 100 }),
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      },
      (e, t) => Object(p['isEqual'])(e, t),
    );
  },
});
