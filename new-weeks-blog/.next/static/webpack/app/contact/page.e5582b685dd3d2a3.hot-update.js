"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contact/page",{

/***/ "(app-client)/./app/components/Contact.js":
/*!***********************************!*\
  !*** ./app/components/Contact.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import React, { useState } from 'react'\n// import { NextRequest, NextResponse } from 'next/server'\n// function ContactForm() {\n// \tconst [loading, setLoading] = useState(false)\n// \tconst [successMessage, setSuccessMessage] = useState('')\n// \tconst onSubmit = async (e: React.FormEvent) => {\n// \t\t// Prevent the form from submitting the traditional way\n// \t\te.preventDefault()\n// \t\t// Don't submit twice\n// \t\tif (loading) {\n// \t\t\treturn\n// \t\t}\n// \t\t// 👇 A nice little trick to get all the form values as an object\n// \t\tconst form = e.target as HTMLFormElement\n// \t\tconst formValues = Object.fromEntries(new FormData(form).entries())\n// \t\tsetLoading(true)\n// \t\tsetSuccessMessage('')\n// \t\ttry {\n// \t\t\tawait fetch('/api/contact', {\n// \t\t\t\tmethod: 'POST',\n// \t\t\t\theaders: { 'Content-Type': 'application/json' },\n// \t\t\t\tbody: JSON.stringify(formValues),\n// \t\t\t}).then((response) => {\n// \t\t\t\tif (!response.ok) {\n// \t\t\t\t\tthrow new Error(`HTTP error! Status: ${response.status}`)\n// \t\t\t\t}\n// \t\t\t\treturn response.json()\n// \t\t\t})\n// \t\t\tsetLoading(false)\n// \t\t\tsetSuccessMessage('Thank you for contacting us!')\n// \t\t\t// Reset the form values after a successful submission\n// \t\t\tform.reset()\n// \t\t} catch (err) {\n// \t\t\tconsole.error(err)\n// \t\t\talert('An error occurred while sending your message...')\n// \t\t\tsetLoading(false)\n// \t\t}\n// \t}\n// import Link from \"next/link\";\n// // import sendEmail from \"../api/contact/route\";\n// export default async ContactForm(req, res)    {\n//     const { email } = req.body;\n//     async function handleSubmit(event) {\n//         event.preventDefault();\n//         const formData = new FormData(event.target);\n//         try [\n//             const response = await fetch('/api/contact', {\n//                 method: 'post',\n//                 body: formData,\n//             });\n//         ]\n// }\n\n\nfunction ContactForm() {\n    _s();\n    // const ref = useRef<HTMLFormElement>(null)\n    // const ref = useRef();\n    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        message: \"\"\n    });\n    const { name, email, message } = values;\n    console.log(values.name);\n    const handleChange = (e)=>setValues({\n            ...values,\n            [e.target.name]: e.target.value\n        });\n    const handleSubmit = async (e)=>{\n        const clear_input_values = ()=>{\n            setValues({\n                name: \"\",\n                email: \"\",\n                message: \"\"\n            });\n        };\n        e.preventDefault();\n        clear_input_values(\"\");\n        //         // const formData = new FormData(event.target)\n        try {\n            //             // const apiUrl = process.env.NEXT_PUBLIC_API_KEY\n            //             // const res = await fetch('$(apiUrl)/api/contact', {\n            // const ref = useRef<HTMLFormElement>(null);\n            const res = await fetch(\"/api/contact\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(values),\n                mode: \"no-cors\"\n            });\n            // \n            alert(\"Message Sent\");\n            //             .then((res) => {\n            //                 if (!res.ok) {\n            //                     throw new Error(`HTTP error! Status: ${res.status}`)\n            //                 }\n            //                     // \t\t\t})// body: formData,\n            //             })\n            //                 // \t\t\t\tif (!response.ok) {\n            //                 // \t\t\t\t\tthrow new Error(`HTTP error! Status: ${response.status}`)\n            //                 // \t\t\t\t}\n            //                 // \t\t\t\treturn response.json()\n            const { err } = await res.json();\n            if (err) {\n                console.log(err);\n                return;\n            }\n        //             // // // if (!response.ok) {\n        //             // // //     console.log(\"falling over\")\n        //             // // //     throw new Error(`response status: ${response.status}`);\n        //             // // // }\n        //             // // // const responseData = await response.json();\n        //             // // // console.log(responseData['message'])\n        } catch (err) {\n            console.log(values);\n            alert(\"Error, please try resubmitting the form\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center divide-y divide-gray-200 dark:divide-gray-700\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pb-7 dark:divide-gray-700 xl:divide-y-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"xl:col-span-3 xl:row-span-2 xl:pb-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"prose max-w-none pb-4 pt-4 dark:prose-invert prose-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"For any general questions or inquiries, feel free to fill out and submit the following form to reach out to us. We are building a community here from the ground up and would love your feedback. Please be respectful in your discourse. I will respond by e-mail (weeksagenda@gmail.com) as soon as possible. Let's connect!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jamil\\\\New-Weeks-Blog\\\\new-weeks-blog\\\\app\\\\components\\\\Contact.js\",\n                            lineNumber: 153,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jamil\\\\New-Weeks-Blog\\\\new-weeks-blog\\\\app\\\\components\\\\Contact.js\",\n                        lineNumber: 152,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jamil\\\\New-Weeks-Blog\\\\new-weeks-blog\\\\app\\\\components\\\\Contact.js\",\n                    lineNumber: 151,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jamil\\\\New-Weeks-Blog\\\\new-weeks-blog\\\\app\\\\components\\\\Contact.js\",\n                lineNumber: 150,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                method: \"post\",\n                // ref={ref}\n                action: \"//api/contact\",\n                onSubmit: handleSubmit,\n                className: \"mt-4 mb-2 w-80 max-w-screen-lg sm:w-96 dark:text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 mt-4 flex flex-col w-500\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"form-name\",\n                                children: \"Name: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jamil\\\\New-Weeks-Blog\\\\new-weeks-blog\\\\app\\\\components\\\\Contact.js\",\n                                lineNumber: 167,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"form-name\",\n                                value: name,\n                                onChange: handleChange,\n                                required: true,\n                                placeholder: \"Enter your full name\",\n                                className: \"mb-4 dark:text-white border-solid border-2 border-gray-900 rounded-md bg-white-500 p-4 text-black\",\n                                autoComplete: \"name\",\n                                maxLength: 50,\n                                name: \"name\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jamil\\\\New-Weeks-Blog\\\\new-weeks-blog\\\\app\\\\components\\\\Contact.js\",\n                                lineNumber: 168,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"form-email\",\n                                children: \" Email:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jamil\\\\New-Weeks-Blog\\\\new-weeks-blog\\\\app\\\\components\\\\Contact.js\",\n                                lineNumber: 170,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"form-email\",\n                                value: email,\n                                onChange: handleChange,\n                                required: true,\n                                placeholder: \"Enter your email\",\n                                className: \"mb-4 dark:text-white border-solid border-2 border-gray-900 rounded-md bg-white-500 p-4 text-black\",\n                                autoComplete: \"email\",\n                                maxLength: 80,\n                                name: \"email\",\n                                type: \"email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jamil\\\\New-Weeks-Blog\\\\new-weeks-blog\\\\app\\\\components\\\\Contact.js\",\n                                lineNumber: 171,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"form-message\",\n                                children: \" Message: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jamil\\\\New-Weeks-Blog\\\\new-weeks-blog\\\\app\\\\components\\\\Contact.js\",\n                                lineNumber: 173,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"form-message\",\n                                value: message,\n                                onChange: handleChange,\n                                required: true,\n                                placeholder: \"Enter your message\",\n                                className: \"mb-4 dark:text-white border-solid border-2 border-gray-900 rounded-md bg-white-500 p-4 text-black\",\n                                name: \"message\",\n                                rows: 5\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jamil\\\\New-Weeks-Blog\\\\new-weeks-blog\\\\app\\\\components\\\\Contact.js\",\n                                lineNumber: 174,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jamil\\\\New-Weeks-Blog\\\\new-weeks-blog\\\\app\\\\components\\\\Contact.js\",\n                        lineNumber: 165,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleChange,\n                        className: \"mt-8 border-solid border-2 border-gray-900 dark:border-white rounded-md bg-teal-500 p-4 text-black dark:text-white\",\n                        type: \"submit\",\n                        children: \"Let's Connect, Politic, Ditto!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jamil\\\\New-Weeks-Blog\\\\new-weeks-blog\\\\app\\\\components\\\\Contact.js\",\n                        lineNumber: 177,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jamil\\\\New-Weeks-Blog\\\\new-weeks-blog\\\\app\\\\components\\\\Contact.js\",\n                lineNumber: 159,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jamil\\\\New-Weeks-Blog\\\\new-weeks-blog\\\\app\\\\components\\\\Contact.js\",\n        lineNumber: 149,\n        columnNumber: 9\n    }, this);\n}\n_s(ContactForm, \"DcvQ2zg3Zi76oW/eWzO0kQpJ+1Q=\");\n_c = ContactForm;\n; // return (\n // \t\t<form onSubmit={handleSubmit}>\n // \t\t\t<label>\n // \t\t\t\t<span>Name</span>\n // \t\t\t\t<input type=\"text\" name=\"name\" required placeholder=\"Full Name\" className='border-solid border-2 border-gray-900 rounded-md p-2 ml-11' />\n // \t\t\t</label>\n // \t\t\t<br></br>\n // \t\t\t<br></br>\n // \t\t\t<label>\n // \t\t\t\t<span>Email</span>\n // \t\t\t\t<input type=\"email\" name=\"email\" placeholder=\"Email\" required className='border-solid border-2 border-gray-900 rounded-md p-2 ml-12' />\n // \t\t\t</label>\n // \t\t\t<br></br>\n // \t\t\t<br></br>\n // \t\t\t<label>\n // \t\t\t\t<span>Subject</span>\n // \t\t\t\t<input type=\"text\" placeholder=\"Subject\" name=\"name\" required className='border-solid border-2 border-gray-900 rounded-md p-2 ml-7' />\n // \t\t\t</label>\n // \t\t\t<br></br>\n // \t\t\t<br></br>\n // \t\t\t<label>\n // \t\t\t\t<span>Message</span>\n // \t\t\t\t<textarea name=\"message\" required placeholder=\"Message\" className='border-solid border-2 border-gray-900 rounded-md p-2 ml-4'/>\n // \t\t\t</label>\n // \t\t\t<br></br>\n // \t\t\t<br></br>\n // \t\t\t<button disabled={loading} className='border-solid border-2 border-gray-900 rounded-md bg-teal-500 p-4 text-black' type=\"submit\" >\n // \t\t\t\tLet's Connect, Politic, Ditto!\n // \t\t\t</button>\n // \t\t\t{successMessage && <p>{successMessage}</p>}\n // \t\t</form>\n // \t)\n // }\n // export default \nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZCxlQUFlO0NBQ2YsZUFBZTtDQUNmLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsOElBQThJO0NBQzlJLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZUFBZTtDQUNmLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsNklBQTZJO0NBQzdJLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZUFBZTtDQUNmLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0Isc0lBQXNJO0NBQ3RJLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZUFBZTtDQUNmLHdJQUF3STtDQUN4SSxxQ0FBcUM7Q0FDckMsZUFBZTtDQUNmLGlEQUFpRDtDQUNqRCxZQUFZO0NBQ1osS0FBSztDQUVMLElBQUk7Q0FFSixrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQ29udGFjdC5qcz83ZmJmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcblxyXG4vLyBmdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcclxuLy8gXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuLy8gXHRjb25zdCBbc3VjY2Vzc01lc3NhZ2UsIHNldFN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuLy8gXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcclxuLy8gXHRcdC8vIFByZXZlbnQgdGhlIGZvcm0gZnJvbSBzdWJtaXR0aW5nIHRoZSB0cmFkaXRpb25hbCB3YXlcclxuLy8gXHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuLy8gXHRcdC8vIERvbid0IHN1Ym1pdCB0d2ljZVxyXG4vLyBcdFx0aWYgKGxvYWRpbmcpIHtcclxuLy8gXHRcdFx0cmV0dXJuXHJcbi8vIFx0XHR9XHJcblxyXG4vLyBcdFx0Ly8g8J+RhyBBIG5pY2UgbGl0dGxlIHRyaWNrIHRvIGdldCBhbGwgdGhlIGZvcm0gdmFsdWVzIGFzIGFuIG9iamVjdFxyXG4vLyBcdFx0Y29uc3QgZm9ybSA9IGUudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudFxyXG4vLyBcdFx0Y29uc3QgZm9ybVZhbHVlcyA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybSkuZW50cmllcygpKVxyXG5cclxuLy8gXHRcdHNldExvYWRpbmcodHJ1ZSlcclxuLy8gXHRcdHNldFN1Y2Nlc3NNZXNzYWdlKCcnKVxyXG5cclxuLy8gXHRcdHRyeSB7XHJcbi8vIFx0XHRcdGF3YWl0IGZldGNoKCcvYXBpL2NvbnRhY3QnLCB7XHJcbi8vIFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcbi8vIFx0XHRcdFx0aGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbi8vIFx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoZm9ybVZhbHVlcyksXHJcbi8vIFx0XHRcdH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbi8vIFx0XHRcdFx0aWYgKCFyZXNwb25zZS5vaykge1xyXG4vLyBcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApXHJcbi8vIFx0XHRcdFx0fVxyXG4vLyBcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKClcclxuLy8gXHRcdFx0fSlcclxuXHJcbi8vIFx0XHRcdHNldExvYWRpbmcoZmFsc2UpXHJcbi8vIFx0XHRcdHNldFN1Y2Nlc3NNZXNzYWdlKCdUaGFuayB5b3UgZm9yIGNvbnRhY3RpbmcgdXMhJylcclxuXHJcbi8vIFx0XHRcdC8vIFJlc2V0IHRoZSBmb3JtIHZhbHVlcyBhZnRlciBhIHN1Y2Nlc3NmdWwgc3VibWlzc2lvblxyXG4vLyBcdFx0XHRmb3JtLnJlc2V0KClcclxuLy8gXHRcdH0gY2F0Y2ggKGVycikge1xyXG4vLyBcdFx0XHRjb25zb2xlLmVycm9yKGVycilcclxuLy8gXHRcdFx0YWxlcnQoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHNlbmRpbmcgeW91ciBtZXNzYWdlLi4uJylcclxuLy8gXHRcdFx0c2V0TG9hZGluZyhmYWxzZSlcclxuLy8gXHRcdH1cclxuLy8gXHR9XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gLy8gaW1wb3J0IHNlbmRFbWFpbCBmcm9tIFwiLi4vYXBpL2NvbnRhY3Qvcm91dGVcIjtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jIENvbnRhY3RGb3JtKHJlcSwgcmVzKSAgICB7XHJcbi8vICAgICBjb25zdCB7IGVtYWlsIH0gPSByZXEuYm9keTtcclxuXHJcbi8vICAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcclxuXHJcbi8vICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xyXG4vLyAgICAgICAgIHRyeSBbXHJcbi8vICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvY29udGFjdCcsIHtcclxuLy8gICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4vLyAgICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIF1cclxuLy8gfVxyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcclxuICAgIC8vIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQ+KG51bGwpXHJcbiAgICAvLyBjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qge25hbWUsIGVtYWlsLCBtZXNzYWdlfSA9IHZhbHVlcztcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlcy5uYW1lKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSAgICA9PiBcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsZWFyX2lucHV0X3ZhbHVlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNsZWFyX2lucHV0X3ZhbHVlcyhcIlwiKVxyXG5cclxuLy8gICAgICAgICAvLyBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpXHJcbiAgICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgICAgLy8gY29uc3QgYXBpVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWVxyXG4vLyAgICAgICAgICAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnJChhcGlVcmwpL2FwaS9jb250YWN0Jywge1xyXG4gICAgICAgICAgICAvLyBjb25zdCByZWYgPSB1c2VSZWY8SFRNTEZvcm1FbGVtZW50PihudWxsKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvY29udGFjdCcsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlYXJlcjogTkVYVF9QVUJMSUNfU0VOREdSSURfQVBJX0tFWVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlcyksXHJcbiAgICAgICAgICAgICAgICBtb2RlOiAnbm8tY29ycycsXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGFsZXJ0KFwiTWVzc2FnZSBTZW50XCIpXHJcblxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAvLyAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlcy5zdGF0dXN9YClcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBcdFx0XHR9KS8vIGJvZHk6IGZvcm1EYXRhLFxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAgICAgLy8gXHRcdFx0XHRpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbi8vICAgICAgICAgICAgICAgICAvLyBcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApXHJcbi8vICAgICAgICAgICAgICAgICAvLyBcdFx0XHRcdH1cclxuLy8gICAgICAgICAgICAgICAgIC8vIFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICBjb25zdCB7IGVyciB9ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgaWYgKGVycikgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAvLyAvLyAvLyBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbi8vICAgICAgICAgICAgIC8vIC8vIC8vICAgICBjb25zb2xlLmxvZyhcImZhbGxpbmcgb3ZlclwiKVxyXG4vLyAgICAgICAgICAgICAvLyAvLyAvLyAgICAgdGhyb3cgbmV3IEVycm9yKGByZXNwb25zZSBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4vLyAgICAgICAgICAgICAvLyAvLyAvLyB9XHJcbi8vICAgICAgICAgICAgIC8vIC8vIC8vIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuLy8gICAgICAgICAgICAgLy8gLy8gLy8gY29uc29sZS5sb2cocmVzcG9uc2VEYXRhWydtZXNzYWdlJ10pXHJcbiAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKVxyXG4gICAgICAgICAgICBhbGVydChcIkVycm9yLCBwbGVhc2UgdHJ5IHJlc3VibWl0dGluZyB0aGUgZm9ybVwiKTtcclxuICAgICAgICB9ICAgICAgXHJcbiAgICB9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgZGFyazpkaXZpZGUtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi03IGRhcms6ZGl2aWRlLWdyYXktNzAwIHhsOmRpdmlkZS15LTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bDpjb2wtc3Bhbi0zIHhsOnJvdy1zcGFuLTIgeGw6cGItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZSBtYXgtdy1ub25lIHBiLTQgcHQtNCBkYXJrOnByb3NlLWludmVydCBwcm9zZS1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3IgYW55IGdlbmVyYWwgcXVlc3Rpb25zIG9yIGlucXVpcmllcywgZmVlbCBmcmVlIHRvIGZpbGwgb3V0IGFuZCBzdWJtaXQgdGhlIGZvbGxvd2luZyBmb3JtIHRvIHJlYWNoIG91dCB0byB1cy4gV2UgYXJlIGJ1aWxkaW5nIGEgY29tbXVuaXR5IGhlcmUgZnJvbSB0aGUgZ3JvdW5kIHVwIGFuZCB3b3VsZCBsb3ZlIHlvdXIgZmVlZGJhY2suIFBsZWFzZSBiZSByZXNwZWN0ZnVsIGluIHlvdXIgZGlzY291cnNlLiBJIHdpbGwgcmVzcG9uZCBieSBlLW1haWwgKHdlZWtzYWdlbmRhQGdtYWlsLmNvbSkgYXMgc29vbiBhcyBwb3NzaWJsZS4gTGV0J3MgY29ubmVjdCFcclxuICAgICAgICAgICAgICAgICAgICA8L3A+ICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZj17cmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj1cIi8vYXBpL2NvbnRhY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9ICBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IG1iLTIgdy04MCBtYXgtdy1zY3JlZW4tbGcgc206dy05NiBkYXJrOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgbXQtNCBmbGV4IGZsZXgtY29sIHctNTAwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZvcm0tbmFtZVwiPk5hbWU6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImZvcm0tbmFtZVwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZnVsbCBuYW1lXCIgY2xhc3NOYW1lPSdtYi00IGRhcms6dGV4dC13aGl0ZSBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktOTAwIHJvdW5kZWQtbWQgYmctd2hpdGUtNTAwIHAtNCB0ZXh0LWJsYWNrJyBhdXRvQ29tcGxldGU9XCJuYW1lXCIgbWF4TGVuZ3RoPXs1MH0gbmFtZT1cIm5hbWVcIiAgdHlwZT1cInRleHRcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZvcm0tZW1haWxcIj4gRW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZm9ybS1lbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCIgY2xhc3NOYW1lPSdtYi00IGRhcms6dGV4dC13aGl0ZSBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktOTAwIHJvdW5kZWQtbWQgYmctd2hpdGUtNTAwIHAtNCB0ZXh0LWJsYWNrJyBhdXRvQ29tcGxldGU9XCJlbWFpbFwiIG1heExlbmd0aD17ODB9IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZvcm0tbWVzc2FnZVwiPiBNZXNzYWdlOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJmb3JtLW1lc3NhZ2VcIiB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1lc3NhZ2VcIiBjbGFzc05hbWU9J21iLTQgZGFyazp0ZXh0LXdoaXRlIGJvcmRlci1zb2xpZCBib3JkZXItMiBib3JkZXItZ3JheS05MDAgcm91bmRlZC1tZCBiZy13aGl0ZS01MDAgcC00IHRleHQtYmxhY2snIG5hbWU9XCJtZXNzYWdlXCIgICByb3dzPXs1fSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPVwibXQtOCBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktOTAwIGRhcms6Ym9yZGVyLXdoaXRlIHJvdW5kZWQtbWQgYmctdGVhbC01MDAgcC00IHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCIgdHlwZT1cInN1Ym1pdFwiPkxldCdzIENvbm5lY3QsIFBvbGl0aWMsIERpdHRvITwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICApXHJcbiAgICB9O1xyXG5cclxuICAgICAgICBcclxuLy8gcmV0dXJuIChcclxuLy8gXHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4vLyBcdFx0XHQ8bGFiZWw+XHJcbi8vIFx0XHRcdFx0PHNwYW4+TmFtZTwvc3Bhbj5cclxuLy8gXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCIgY2xhc3NOYW1lPSdib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktOTAwIHJvdW5kZWQtbWQgcC0yIG1sLTExJyAvPlxyXG4vLyBcdFx0XHQ8L2xhYmVsPlxyXG4vLyBcdFx0XHQ8YnI+PC9icj5cclxuLy8gXHRcdFx0PGJyPjwvYnI+XHJcbi8vIFx0XHRcdDxsYWJlbD5cclxuLy8gXHRcdFx0XHQ8c3Bhbj5FbWFpbDwvc3Bhbj5cclxuLy8gXHRcdFx0XHQ8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHJlcXVpcmVkIGNsYXNzTmFtZT0nYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJvcmRlci1ncmF5LTkwMCByb3VuZGVkLW1kIHAtMiBtbC0xMicgLz5cclxuLy8gXHRcdFx0PC9sYWJlbD5cclxuLy8gXHRcdFx0PGJyPjwvYnI+XHJcbi8vIFx0XHRcdDxicj48L2JyPlxyXG4vLyBcdFx0XHQ8bGFiZWw+XHJcbi8vIFx0XHRcdFx0PHNwYW4+U3ViamVjdDwvc3Bhbj5cclxuLy8gXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkIGNsYXNzTmFtZT0nYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJvcmRlci1ncmF5LTkwMCByb3VuZGVkLW1kIHAtMiBtbC03JyAvPlxyXG4vLyBcdFx0XHQ8L2xhYmVsPlxyXG4vLyBcdFx0XHQ8YnI+PC9icj5cclxuLy8gXHRcdFx0PGJyPjwvYnI+XHJcbi8vIFx0XHRcdDxsYWJlbD5cclxuLy8gXHRcdFx0XHQ8c3Bhbj5NZXNzYWdlPC9zcGFuPlxyXG4vLyBcdFx0XHRcdDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiIGNsYXNzTmFtZT0nYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJvcmRlci1ncmF5LTkwMCByb3VuZGVkLW1kIHAtMiBtbC00Jy8+XHJcbi8vIFx0XHRcdDwvbGFiZWw+XHJcbi8vIFx0XHRcdDxicj48L2JyPlxyXG4vLyBcdFx0XHQ8YnI+PC9icj5cclxuLy8gXHRcdFx0PGJ1dHRvbiBkaXNhYmxlZD17bG9hZGluZ30gY2xhc3NOYW1lPSdib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktOTAwIHJvdW5kZWQtbWQgYmctdGVhbC01MDAgcC00IHRleHQtYmxhY2snIHR5cGU9XCJzdWJtaXRcIiA+XHJcbi8vIFx0XHRcdFx0TGV0J3MgQ29ubmVjdCwgUG9saXRpYywgRGl0dG8hXHJcbi8vIFx0XHRcdDwvYnV0dG9uPlxyXG4vLyBcdFx0XHR7c3VjY2Vzc01lc3NhZ2UgJiYgPHA+e3N1Y2Nlc3NNZXNzYWdlfTwvcD59XHJcbi8vIFx0XHQ8L2Zvcm0+XHJcbi8vIFx0KVxyXG5cdFxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBcclxuICAgICAgICAiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJDb250YWN0Rm9ybSIsInZhbHVlcyIsInNldFZhbHVlcyIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiY2xlYXJfaW5wdXRfdmFsdWVzIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vZGUiLCJhbGVydCIsImVyciIsImpzb24iLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsImZvcm0iLCJhY3Rpb24iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJhdXRvQ29tcGxldGUiLCJtYXhMZW5ndGgiLCJ0eXBlIiwidGV4dGFyZWEiLCJyb3dzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Contact.js\n"));

/***/ })

});