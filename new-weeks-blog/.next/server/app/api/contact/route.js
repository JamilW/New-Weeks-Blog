"use strict";
(() => {
var exports = {};
exports.id = 386;
exports.ids = [386];
exports.modules = {

/***/ 97783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 40252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 67341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/contact/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32413);
;// CONCATENATED MODULE: ./app/api/contact/route.ts
// import { NextResponse, NextRequest } from 'next/server'
// const nodemailer = require('nodemailer');
// require('dotenv').config()
// export async function POST(request) {
//     const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
//     const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
//     const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
//     const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
//     const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
//     const refreshToken = process.env.NEXT_PUBLIC_REFRESH_TOKEN;
//     const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
//     console.log("dealing with request")
//     const formData = await request.formData()
//     const name = formData.get('name')
//     const email = formData.get('email')
//     const message = formData.get('message')
//     console.log(formData)
//     // create transporter object
//     const transporter = nodemailer.createTransport({
//         service: "Gmail",
//         host: "smtp.gmail.com",
//         port: 465,
//         secure: true,
//         tls: {
//             ciphers: "SSLv3",
//             rejectUnauthorized: false,
//         },
//         auth: {
//             host: 'OAuth2',
//             clientId: clientId,
//             clientSecret: clientSecret,
//             accessToken: accessToken,
//             refreshToken: refreshToken,
//             user: username,
//             pass: password
//         }
//     });
//     try {
//         const mailOptions = await transporter.sendMail({
//             from: username,
//             to: myEmail,
//             replyTo: email,
//             subject: `Website activity from ${email}`,
//             html: `
//             <p>Name: ${name} </p>
//             <p>Email: ${email} </p>
//             <p>Message: ${message} </p>
//             `,
//         })
//             console.log(mailOptions)
//         return NextResponse.json({mailOptions, message: "Success: email was sent" })
//     } catch (error) {
//         console.log(error)
//         NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
//     }
// }
// import { NextApiRequest, NextApiResponse } from 'next';

// import values from "../../components/Contact"
(__webpack_require__(73307).config)();
const sgMail = __webpack_require__(93228);
const { NEXT_PUBLIC_SENDGRID_API_KEY, NEXT_PUBLIC_FROM_EMAIL, NEXT_PUBLIC_TO_EMAIL } = process.env;
sgMail.setApiKey(NEXT_PUBLIC_SENDGRID_API_KEY);
// export async function GET( req: NextRequest ) {
//     return NextResponse.json
// }
async function POST(req) {
    // const handler = NextAuth({
    const { name, email, message } = req.body;
    const body = await req.json();
    console.log(body.name);
    const msg = {
        to: NEXT_PUBLIC_TO_EMAIL,
        from: NEXT_PUBLIC_FROM_EMAIL,
        subject: `Website activity from ${NEXT_PUBLIC_FROM_EMAIL}`,
        html: `<p><strong>Name: </strong> ${body.name}</p>
        <p><strong>Email: </strong> ${body.email}</p>
        <p><strong>Message: </strong> ${body.message}</p>
        `
    };
    console.log(msg);
    await sgMail.send(msg);
    return next_response/* default */.Z.json({
        success: true
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcontact%2Froute&name=app%2Fapi%2Fcontact%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=C%3A%5CUsers%5Cjamil%5CNew-Weeks-Blog%5Cnew-weeks-blog%5Capp&appPaths=%2Fapi%2Fcontact%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/contact/route","pathname":"/api/contact","filename":"route","bundlePath":"app/api/contact/route"},"resolvedPagePath":"C:\\Users\\jamil\\New-Weeks-Blog\\new-weeks-blog\\app\\api\\contact\\route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/contact/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [381,60,625,694], () => (__webpack_exec__(67341)));
module.exports = __webpack_exports__;

})();