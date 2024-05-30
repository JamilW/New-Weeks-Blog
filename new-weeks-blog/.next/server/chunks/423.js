exports.id = 423;
exports.ids = [423];
exports.modules = {

/***/ 14951:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 86249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 97844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13100, 23))

/***/ }),

/***/ 67663:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 27977, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 95539));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 86240))

/***/ }),

/***/ 86240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Providers: () => (/* binding */ Providers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95176);
/* __next_internal_client_entry_do_not_use__ Providers auto */ 

function Providers({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_1__/* .ThemeProvider */ .f, {
        attribute: "class",
        children: children
    });
}


/***/ }),

/***/ 95539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Themebutton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95176);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Themebutton() {
    const { setTheme, resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__/* .useTheme */ .F)();
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: ()=>setTheme(resolvedTheme === "dark" ? "light" : "dark"),
        children: resolvedTheme === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "w-6 h-6",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "w-6 h-6",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            })
        })
    });
}


/***/ }),

/***/ 27308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(160);
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(92817);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(34834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21313);
;// CONCATENATED MODULE: ./app/components/ThemeButton.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\jamil\New-Weeks-Blog\new-weeks-blog\app\components\ThemeButton.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const ThemeButton = (__default__);
// EXTERNAL MODULE: ./node_modules/react-social-icons/dist/react-social-icons.js + 62 modules
var react_social_icons = __webpack_require__(53888);
;// CONCATENATED MODULE: ./app/components/Navbar.tsx




function Navbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex justify-between h-16",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between items-center w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            className: "text-2xl font-medium",
                            children: [
                                "THE WEEKS ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-teal-500",
                                    children: "AGENDA"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_social_icons/* SocialIcon */.QZ, {
                                className: "mx-1 navbar-center display-iniine-block float-right clear-left",
                                url: "https://www.instagram.com/weeksagenda",
                                style: {
                                    height: 30,
                                    width: 30
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_social_icons/* SocialIcon */.QZ, {
                                className: "mx-1 navbar-center",
                                url: "https://x.com/WeeksAgendaBlog",
                                style: {
                                    height: 30,
                                    width: 30
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_social_icons/* SocialIcon */.QZ, {
                                className: "mx-1 navbar-center",
                                url: "https://www.threads.net/weeksagenda",
                                style: {
                                    height: 30,
                                    width: 30
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ThemeButton, {})
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./app/components/Providers.tsx

const Providers_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\jamil\New-Weeks-Blog\new-weeks-blog\app\components\Providers.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Providers_esModule, $$typeof: Providers_$$typeof } = Providers_proxy;
const Providers_default_ = Providers_proxy.default;

const e0 = Providers_proxy["Providers"];

;// CONCATENATED MODULE: ./app/layout.tsx





const metadata = {
    title: "The Weeks Agenda",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: ` ${(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className} bg-white text-black dark:bg-gray-900 dark:selection:bg-gray-900 dark:text-white h-full selection:bg-gray-50`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e0, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: children
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 83174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 92817:
/***/ (() => {



/***/ })

};
;