"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/createWallet/page",{

/***/ "(app-pages-browser)/./src/app/createWallet/page.tsx":
/*!***************************************!*\
  !*** ./src/app/createWallet/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _store_zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/zustand */ \"(app-pages-browser)/./src/app/store/zustand.js\");\n/* harmony import */ var signify_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! signify-ts */ \"(app-pages-browser)/./node_modules/signify-ts/dist/signify-ts.mjs\");\n/* harmony import */ var _component_helper_resolve_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/helper/resolve-env */ \"(app-pages-browser)/./src/app/component/helper/resolve-env.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst { url, bootUrl } = (0,_component_helper_resolve_env__WEBPACK_IMPORTED_MODULE_4__.resolveEnvironment)();\nconst CreateWallet = ()=>{\n    _s();\n    const navigate = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const Email = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useEmail)();\n    const setName = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetName)();\n    const setAid = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetAid)();\n    const setBran = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetBran)();\n    const setClient = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetClient)();\n    console.log(Email);\n    signify_ts__WEBPACK_IMPORTED_MODULE_3__.MatterCodex;\n    //   function stringToUint8Array(str: string): Uint8Array {\n    //     return new TextEncoder().encode(str);\n    // }\n    const handleCreatingWallet = async ()=>{\n        // const signer = new Signer({raw: r });\n        // const y = atob('your_public_key_here');\n        // const signature = signer.sign(base64ToUint8Array(y));\n        // console.log(\"signature = \",signature);\n        // const ser = b('hello world');\n        // const cigar = signer.sign(ser);\n        // co\n        // console.log(\"whattt ciger\",cigar,\"what ciger code\", cigar.code, \"mtrdex edd\",MtrDex.Ed25519_Sig);\n        // // console.log(\"whattt ciger raw\",cigar.raw.length, Matter._rawSize(cigar.code));\n        // const result = signer.verfer.verify(cigar.raw, ser);\n        // console.log(\"whattt\",result);\n        const name = document.getElementById(\"formBasicName\").value;\n        await signify_ts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ready();\n        const bran1 = signify_ts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].randomPasscode();\n        const client1 = new signify_ts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SignifyClient(url, bran1, signify_ts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Tier.low, bootUrl);\n        await client1.boot();\n        await client1.connect();\n        setClient(client1);\n        setName(name);\n        setBran(bran1);\n        const state1 = await client1.state();\n        setAid(state1.controller.state.i);\n        console.log(\"Client 1 connected. Client AID:\", state1.controller.state.i, \"Agent AID: \", state1.agent.i, client1.oobis().client.url);\n        // const client: signify.SignifyClient = await getOrCreateClient(bran1);\n        // console.log(client.identifiers.length);\n        // getOrCreateIdentifier(client, name);\n        try {\n            const response = await fetch(\"http://localhost:8081/createWallet\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name: name,\n                    email: Email,\n                    controllerAid: state1.controller.state.i,\n                    agentAid: state1.agent.i,\n                    bran: bran1\n                })\n            });\n            if (response.ok) {\n                console.log(\"walletCreation Successfull\");\n                navigate.push(\"/clientHome\");\n            } else {\n                console.error(\"wallet could not be created. try again\");\n            }\n        } catch (error) {\n            console.error(\"Error occurred while making API call:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        style: {\n            width: \"50%\",\n            marginTop: \"100px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, {\n                    className: \"mb-3\",\n                    controlId: \"formBasicName\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n                            children: \"Enter Wallet Name\"\n                        }, void 0, false, {\n                            fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n                            type: \"text\",\n                            placeholder: \"Name here\"\n                        }, void 0, false, {\n                            fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Text, {\n                            className: \"text-muted\",\n                            children: \"Wallet will be created under this name\"\n                        }, void 0, false, {\n                            fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    onClick: handleCreatingWallet,\n                    children: \"create wallet\"\n                }, void 0, false, {\n                    fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n            lineNumber: 109,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreateWallet, \"AX7tQLQLPvQuueb8mbU1NTivlS4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useEmail,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetName,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetAid,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetBran,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetClient\n    ];\n});\n_c = CreateWallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateWallet);\nvar _c;\n$RefreshReg$(_c, \"CreateWallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3JlYXRlV2FsbGV0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFDZ0M7QUFPaEM7QUFDNEI7QUFDZTtBQUN6QjtBQUU1QyxNQUFNLEVBQUVhLEdBQUcsRUFBRUMsT0FBTyxFQUFFLEdBQUdILGlGQUFrQkE7QUFFM0MsTUFBTUksZUFBZTs7SUFDbkIsTUFBTUMsV0FBV0osMERBQVNBO0lBQzFCLE1BQU1LLFFBQVFiLHdEQUFRQTtJQUN0QixNQUFNYyxVQUFVWiwwREFBVUE7SUFDMUIsTUFBTWEsU0FBU2QseURBQVNBO0lBQ3hCLE1BQU1lLFVBQVVaLDBEQUFVQTtJQUMxQixNQUFNYSxZQUFZZCw0REFBWUE7SUFDOUJlLFFBQVFDLEdBQUcsQ0FBQ047SUFDWlAsbURBQVdBO0lBQ1gsMkRBQTJEO0lBQzNELDRDQUE0QztJQUM1QyxJQUFJO0lBRUosTUFBTWMsdUJBQXVCO1FBSzNCLHdDQUF3QztRQUV4QywwQ0FBMEM7UUFDMUMsd0RBQXdEO1FBQ3hELHlDQUF5QztRQUV6QyxnQ0FBZ0M7UUFFaEMsa0NBQWtDO1FBQ2xDLEtBQUs7UUFDTCxvR0FBb0c7UUFDcEcsb0ZBQW9GO1FBQ3BGLHVEQUF1RDtRQUN2RCxnQ0FBZ0M7UUFDaEMsTUFBTUMsT0FBT0MsU0FBU0MsY0FBYyxDQUFDLGlCQUFrQkMsS0FBSztRQUM1RCxNQUFNbkIsd0RBQWE7UUFDbkIsTUFBTXFCLFFBQVFyQixpRUFBc0I7UUFDcEMsTUFBTXVCLFVBQVUsSUFBSXZCLGdFQUFxQixDQUN2Q0ksS0FDQWlCLE9BQ0FyQix1REFBWSxDQUFDMEIsR0FBRyxFQUNoQnJCO1FBR0YsTUFBTWtCLFFBQVFJLElBQUk7UUFDbEIsTUFBTUosUUFBUUssT0FBTztRQUVyQmhCLFVBQVVXO1FBQ1ZkLFFBQVFPO1FBQ1JMLFFBQVFVO1FBRVIsTUFBTVEsU0FBUyxNQUFNTixRQUFRTyxLQUFLO1FBQ2xDcEIsT0FBT21CLE9BQU9FLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDRSxDQUFDO1FBRWhDbkIsUUFBUUMsR0FBRyxDQUNULG1DQUNBZSxPQUFPRSxVQUFVLENBQUNELEtBQUssQ0FBQ0UsQ0FBQyxFQUN6QixlQUNBSCxPQUFPSSxLQUFLLENBQUNELENBQUMsRUFDZFQsUUFBUVcsS0FBSyxHQUFHQyxNQUFNLENBQUMvQixHQUFHO1FBRTVCLHdFQUF3RTtRQUN4RSwwQ0FBMEM7UUFDMUMsdUNBQXVDO1FBRXZDLElBQUk7WUFDRixNQUFNZ0MsV0FBVyxNQUFNQyxNQUFNLHNDQUFzQztnQkFDakVDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUNuQjFCLE1BQU1BO29CQUNOMkIsT0FBT25DO29CQUNQb0MsZUFBZWYsT0FBT0UsVUFBVSxDQUFDRCxLQUFLLENBQUNFLENBQUM7b0JBQ3hDYSxVQUFVaEIsT0FBT0ksS0FBSyxDQUFDRCxDQUFDO29CQUN4QmMsTUFBTXpCO2dCQUNSO1lBQ0Y7WUFFQSxJQUFJZSxTQUFTVyxFQUFFLEVBQUU7Z0JBQ2ZsQyxRQUFRQyxHQUFHLENBQUM7Z0JBQ1pQLFNBQVN5QyxJQUFJLENBQUM7WUFDaEIsT0FBTztnQkFDTG5DLFFBQVFvQyxLQUFLLENBQUM7WUFDaEI7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZHBDLFFBQVFvQyxLQUFLLENBQUMseUNBQXlDQTtRQUN6RDtJQUNGO0lBRUEscUJBQ0UsOERBQUN2RCxvR0FBU0E7UUFBQ3dELE9BQU87WUFBRUMsT0FBTztZQUFPQyxXQUFXO1FBQVE7a0JBQ25ELDRFQUFDM0Qsb0dBQUlBOzs4QkFDSCw4REFBQ0Esb0dBQUlBLENBQUM0RCxLQUFLO29CQUFDQyxXQUFVO29CQUFPQyxXQUFVOztzQ0FDckMsOERBQUM5RCxvR0FBSUEsQ0FBQytELEtBQUs7c0NBQUM7Ozs7OztzQ0FDWiw4REFBQy9ELG9HQUFJQSxDQUFDZ0UsT0FBTzs0QkFBQ0MsTUFBSzs0QkFBT0MsYUFBWTs7Ozs7O3NDQUN0Qyw4REFBQ2xFLG9HQUFJQSxDQUFDbUUsSUFBSTs0QkFBQ04sV0FBVTtzQ0FBYTs7Ozs7Ozs7Ozs7OzhCQUtwQyw4REFBQzlELG9HQUFNQTtvQkFBQ3FFLFNBQVM5Qzs4QkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9DO0dBeEdNVDs7UUFDYUgsc0RBQVNBO1FBQ1pSLG9EQUFRQTtRQUNORSxzREFBVUE7UUFDWEQscURBQVNBO1FBQ1JHLHNEQUFVQTtRQUNSRCx3REFBWUE7OztLQU4xQlE7QUF5R04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jcmVhdGVXYWxsZXQvcGFnZS50c3g/YTI4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQge1xuICB1c2VFbWFpbCxcbiAgdXNlU2V0QWlkLFxuICB1c2VTZXROYW1lLFxuICB1c2VTZXRDbGllbnQsXG4gIHVzZVNldEJyYW4sXG59IGZyb20gXCIuLi9zdG9yZS96dXN0YW5kXCI7XG5pbXBvcnQgc2lnbmlmeSwgeyAgTWF0dGVyQ29kZXgsIGIgfSBmcm9tIFwic2lnbmlmeS10c1wiO1xuaW1wb3J0IHsgcmVzb2x2ZUVudmlyb25tZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudC9oZWxwZXIvcmVzb2x2ZS1lbnZcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuY29uc3QgeyB1cmwsIGJvb3RVcmwgfSA9IHJlc29sdmVFbnZpcm9ubWVudCgpO1xuXG5jb25zdCBDcmVhdGVXYWxsZXQgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IEVtYWlsID0gdXNlRW1haWwoKTtcbiAgY29uc3Qgc2V0TmFtZSA9IHVzZVNldE5hbWUoKTtcbiAgY29uc3Qgc2V0QWlkID0gdXNlU2V0QWlkKCk7XG4gIGNvbnN0IHNldEJyYW4gPSB1c2VTZXRCcmFuKCk7XG4gIGNvbnN0IHNldENsaWVudCA9IHVzZVNldENsaWVudCgpO1xuICBjb25zb2xlLmxvZyhFbWFpbCk7XG4gIE1hdHRlckNvZGV4O1xuICAvLyAgIGZ1bmN0aW9uIHN0cmluZ1RvVWludDhBcnJheShzdHI6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xuICAvLyAgICAgcmV0dXJuIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShzdHIpO1xuICAvLyB9XG5cbiAgY29uc3QgaGFuZGxlQ3JlYXRpbmdXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICBcbiAgIFxuXG5cbiAgICAvLyBjb25zdCBzaWduZXIgPSBuZXcgU2lnbmVyKHtyYXc6IHIgfSk7XG5cbiAgICAvLyBjb25zdCB5ID0gYXRvYigneW91cl9wdWJsaWNfa2V5X2hlcmUnKTtcbiAgICAvLyBjb25zdCBzaWduYXR1cmUgPSBzaWduZXIuc2lnbihiYXNlNjRUb1VpbnQ4QXJyYXkoeSkpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2lnbmF0dXJlID0gXCIsc2lnbmF0dXJlKTtcblxuICAgIC8vIGNvbnN0IHNlciA9IGIoJ2hlbGxvIHdvcmxkJyk7XG5cbiAgICAvLyBjb25zdCBjaWdhciA9IHNpZ25lci5zaWduKHNlcik7XG4gICAgLy8gY29cbiAgICAvLyBjb25zb2xlLmxvZyhcIndoYXR0dCBjaWdlclwiLGNpZ2FyLFwid2hhdCBjaWdlciBjb2RlXCIsIGNpZ2FyLmNvZGUsIFwibXRyZGV4IGVkZFwiLE10ckRleC5FZDI1NTE5X1NpZyk7XG4gICAgLy8gLy8gY29uc29sZS5sb2coXCJ3aGF0dHQgY2lnZXIgcmF3XCIsY2lnYXIucmF3Lmxlbmd0aCwgTWF0dGVyLl9yYXdTaXplKGNpZ2FyLmNvZGUpKTtcbiAgICAvLyBjb25zdCByZXN1bHQgPSBzaWduZXIudmVyZmVyLnZlcmlmeShjaWdhci5yYXcsIHNlcik7XG4gICAgLy8gY29uc29sZS5sb2coXCJ3aGF0dHRcIixyZXN1bHQpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1CYXNpY05hbWVcIikhLnZhbHVlO1xuICAgIGF3YWl0IHNpZ25pZnkucmVhZHkoKTtcbiAgICBjb25zdCBicmFuMSA9IHNpZ25pZnkucmFuZG9tUGFzc2NvZGUoKTtcbiAgICBjb25zdCBjbGllbnQxID0gbmV3IHNpZ25pZnkuU2lnbmlmeUNsaWVudChcbiAgICAgIHVybCxcbiAgICAgIGJyYW4xLFxuICAgICAgc2lnbmlmeS5UaWVyLmxvdyxcbiAgICAgIGJvb3RVcmxcbiAgICApO1xuXG4gICAgYXdhaXQgY2xpZW50MS5ib290KCk7XG4gICAgYXdhaXQgY2xpZW50MS5jb25uZWN0KCk7XG5cbiAgICBzZXRDbGllbnQoY2xpZW50MSk7XG4gICAgc2V0TmFtZShuYW1lKTtcbiAgICBzZXRCcmFuKGJyYW4xKTtcblxuICAgIGNvbnN0IHN0YXRlMSA9IGF3YWl0IGNsaWVudDEuc3RhdGUoKTtcbiAgICBzZXRBaWQoc3RhdGUxLmNvbnRyb2xsZXIuc3RhdGUuaSk7XG5cbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiQ2xpZW50IDEgY29ubmVjdGVkLiBDbGllbnQgQUlEOlwiLFxuICAgICAgc3RhdGUxLmNvbnRyb2xsZXIuc3RhdGUuaSxcbiAgICAgIFwiQWdlbnQgQUlEOiBcIixcbiAgICAgIHN0YXRlMS5hZ2VudC5pLFxuICAgICAgY2xpZW50MS5vb2JpcygpLmNsaWVudC51cmxcbiAgICApO1xuICAgIC8vIGNvbnN0IGNsaWVudDogc2lnbmlmeS5TaWduaWZ5Q2xpZW50ID0gYXdhaXQgZ2V0T3JDcmVhdGVDbGllbnQoYnJhbjEpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNsaWVudC5pZGVudGlmaWVycy5sZW5ndGgpO1xuICAgIC8vIGdldE9yQ3JlYXRlSWRlbnRpZmllcihjbGllbnQsIG5hbWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODEvY3JlYXRlV2FsbGV0XCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBlbWFpbDogRW1haWwsXG4gICAgICAgICAgY29udHJvbGxlckFpZDogc3RhdGUxLmNvbnRyb2xsZXIuc3RhdGUuaSxcbiAgICAgICAgICBhZ2VudEFpZDogc3RhdGUxLmFnZW50LmksXG4gICAgICAgICAgYnJhbjogYnJhbjEsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIndhbGxldENyZWF0aW9uIFN1Y2Nlc3NmdWxsXCIpO1xuICAgICAgICBuYXZpZ2F0ZS5wdXNoKFwiL2NsaWVudEhvbWVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwid2FsbGV0IGNvdWxkIG5vdCBiZSBjcmVhdGVkLiB0cnkgYWdhaW5cIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCB3aGlsZSBtYWtpbmcgQVBJIGNhbGw6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiLCBtYXJnaW5Ub3A6IFwiMTAwcHhcIiB9fT5cbiAgICAgIDxGb3JtPlxuICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUJhc2ljTmFtZVwiPlxuICAgICAgICAgIDxGb3JtLkxhYmVsPkVudGVyIFdhbGxldCBOYW1lPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWUgaGVyZVwiIC8+XG4gICAgICAgICAgPEZvcm0uVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICBXYWxsZXQgd2lsbCBiZSBjcmVhdGVkIHVuZGVyIHRoaXMgbmFtZVxuICAgICAgICAgIDwvRm9ybS5UZXh0PlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDcmVhdGluZ1dhbGxldH0+Y3JlYXRlIHdhbGxldDwvQnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVdhbGxldDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkZvcm0iLCJDb250YWluZXIiLCJ1c2VFbWFpbCIsInVzZVNldEFpZCIsInVzZVNldE5hbWUiLCJ1c2VTZXRDbGllbnQiLCJ1c2VTZXRCcmFuIiwic2lnbmlmeSIsIk1hdHRlckNvZGV4IiwicmVzb2x2ZUVudmlyb25tZW50IiwidXNlUm91dGVyIiwidXJsIiwiYm9vdFVybCIsIkNyZWF0ZVdhbGxldCIsIm5hdmlnYXRlIiwiRW1haWwiLCJzZXROYW1lIiwic2V0QWlkIiwic2V0QnJhbiIsInNldENsaWVudCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDcmVhdGluZ1dhbGxldCIsIm5hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJyZWFkeSIsImJyYW4xIiwicmFuZG9tUGFzc2NvZGUiLCJjbGllbnQxIiwiU2lnbmlmeUNsaWVudCIsIlRpZXIiLCJsb3ciLCJib290IiwiY29ubmVjdCIsInN0YXRlMSIsInN0YXRlIiwiY29udHJvbGxlciIsImkiLCJhZ2VudCIsIm9vYmlzIiwiY2xpZW50IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVtYWlsIiwiY29udHJvbGxlckFpZCIsImFnZW50QWlkIiwiYnJhbiIsIm9rIiwicHVzaCIsImVycm9yIiwic3R5bGUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIkdyb3VwIiwiY2xhc3NOYW1lIiwiY29udHJvbElkIiwiTGFiZWwiLCJDb250cm9sIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiVGV4dCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/createWallet/page.tsx\n"));

/***/ })

});