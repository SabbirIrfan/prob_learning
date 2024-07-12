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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _store_zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/zustand */ \"(app-pages-browser)/./src/app/store/zustand.js\");\n/* harmony import */ var signify_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! signify-ts */ \"(app-pages-browser)/./node_modules/signify-ts/dist/signify-ts.mjs\");\n/* harmony import */ var _component_helper_resolve_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/helper/resolve-env */ \"(app-pages-browser)/./src/app/component/helper/resolve-env.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst { url, bootUrl } = (0,_component_helper_resolve_env__WEBPACK_IMPORTED_MODULE_4__.resolveEnvironment)();\nconst CreateWallet = ()=>{\n    _s();\n    const navigate = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const Email = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useEmail)();\n    const setName = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetName)();\n    const setAid = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetAid)();\n    const setBran = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetBran)();\n    const setClient = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetClient)();\n    console.log(Email);\n    const handleCreatingWallet = async ()=>{\n        const name = document.getElementById(\"formBasicName\").value;\n        await signify_ts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ready();\n        const bran1 = signify_ts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].randomPasscode();\n        const client1 = new signify_ts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SignifyClient(url, bran1, signify_ts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Tier.low, bootUrl);\n        await client1.boot();\n        await client1.connect();\n        setClient(client1);\n        setName(name);\n        setBran(bran1);\n        const state1 = await client1.state();\n        setAid(state1.controller.state.i);\n        console.log(\"Client 1 connected. Client AID:\", state1.controller.state.i, \"Agent AID: \", state1.agent.i, client1.oobis().client.url);\n        // const client: signify.SignifyClient = await getOrCreateClient(bran1);\n        // console.log(client.identifiers.length);\n        // getOrCreateIdentifier(client, name);\n        try {\n            const response = await fetch(\"http://localhost:8081/createWallet\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name: name,\n                    email: Email,\n                    controllerAid: state1.controller.state.i,\n                    agentAid: state1.agent.i,\n                    bran: bran1\n                })\n            });\n            if (response.ok) {\n                console.log(\"walletCreation Successfull\");\n                navigate.push(\"/clientHome\");\n            } else {\n                console.error(\"wallet could not be created. try again\");\n            }\n        } catch (error) {\n            console.error(\"Error occurred while making API call:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        style: {\n            width: \"50%\",\n            marginTop: \"100px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, {\n                    className: \"mb-3\",\n                    controlId: \"formBasicName\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n                            children: \"Enter Wallet Name\"\n                        }, void 0, false, {\n                            fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n                            type: \"text\",\n                            placeholder: \"Name here\"\n                        }, void 0, false, {\n                            fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Text, {\n                            className: \"text-muted\",\n                            children: \"Wallet will be created under this name\"\n                        }, void 0, false, {\n                            fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    onClick: handleCreatingWallet,\n                    children: \"create wallet\"\n                }, void 0, false, {\n                    fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n            lineNumber: 88,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreateWallet, \"AX7tQLQLPvQuueb8mbU1NTivlS4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useEmail,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetName,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetAid,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetBran,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetClient\n    ];\n});\n_c = CreateWallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateWallet);\nvar _c;\n$RefreshReg$(_c, \"CreateWallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3JlYXRlV2FsbGV0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFDK0I7QUFDb0M7QUFDNUQ7QUFDb0M7QUFDekI7QUFFNUMsTUFBTSxFQUFFWSxHQUFHLEVBQUVDLE9BQU8sRUFBRSxHQUFHSCxpRkFBa0JBO0FBRTNDLE1BQU1JLGVBQWU7O0lBRW5CLE1BQU1DLFdBQVdKLDBEQUFTQTtJQUMxQixNQUFNSyxRQUFRWix3REFBUUE7SUFDdEIsTUFBTWEsVUFBVVgsMERBQVVBO0lBQzFCLE1BQU1ZLFNBQVFiLHlEQUFTQTtJQUN2QixNQUFNYyxVQUFVWCwwREFBVUE7SUFDMUIsTUFBTVksWUFBWWIsNERBQVlBO0lBQzlCYyxRQUFRQyxHQUFHLENBQUNOO0lBQ1osTUFBTU8sdUJBQXVCO1FBQzNCLE1BQU1DLE9BQU9DLFNBQVNDLGNBQWMsQ0FBQyxpQkFBa0JDLEtBQUs7UUFDNUQsTUFBTWxCLHdEQUFhO1FBQ25CLE1BQU1vQixRQUFRcEIsaUVBQXNCO1FBQ3BDLE1BQU1zQixVQUFVLElBQUl0QixnRUFBcUIsQ0FDdkNHLEtBQ0FpQixPQUNBcEIsdURBQVksQ0FBQ3lCLEdBQUcsRUFDaEJyQjtRQUdGLE1BQU1rQixRQUFRSSxJQUFJO1FBQ2xCLE1BQU1KLFFBQVFLLE9BQU87UUFFckJoQixVQUFVVztRQUNWZCxRQUFRTztRQUNSTCxRQUFRVTtRQUVSLE1BQU1RLFNBQVMsTUFBTU4sUUFBUU8sS0FBSztRQUNsQ3BCLE9BQU9tQixPQUFPRSxVQUFVLENBQUNELEtBQUssQ0FBQ0UsQ0FBQztRQUdoQ25CLFFBQVFDLEdBQUcsQ0FDVCxtQ0FDQWUsT0FBT0UsVUFBVSxDQUFDRCxLQUFLLENBQUNFLENBQUMsRUFDekIsZUFDQUgsT0FBT0ksS0FBSyxDQUFDRCxDQUFDLEVBQ2RULFFBQVFXLEtBQUssR0FBR0MsTUFBTSxDQUFDL0IsR0FBRztRQUs1Qix3RUFBd0U7UUFDeEUsMENBQTBDO1FBQzFDLHVDQUF1QztRQUd2QyxJQUFJO1lBQ0EsTUFBTWdDLFdBQVcsTUFBTUMsTUFBTSxzQ0FBc0M7Z0JBQ2pFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFDbkIxQixNQUFNQTtvQkFDTjJCLE9BQU9uQztvQkFDUG9DLGVBQWVmLE9BQU9FLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDRSxDQUFDO29CQUN4Q2EsVUFBVWhCLE9BQU9JLEtBQUssQ0FBQ0QsQ0FBQztvQkFDeEJjLE1BQU96QjtnQkFDVDtZQUNGO1lBRUEsSUFBSWUsU0FBU1csRUFBRSxFQUFFO2dCQUNmbEMsUUFBUUMsR0FBRyxDQUFDO2dCQUNaUCxTQUFTeUMsSUFBSSxDQUFDO1lBQ2hCLE9BQU87Z0JBQ0xuQyxRQUFRb0MsS0FBSyxDQUFDO1lBQ2hCO1FBQ0YsRUFBRSxPQUFPQSxPQUFPO1lBQ2RwQyxRQUFRb0MsS0FBSyxDQUFDLHlDQUF5Q0E7UUFDekQ7SUFDSjtJQUlBLHFCQUNFLDhEQUFDdEQsb0dBQVNBO1FBQUN1RCxPQUFPO1lBQUNDLE9BQU87WUFBT0MsV0FBVztRQUFPO2tCQUNqRCw0RUFBQzFELG9HQUFJQTs7OEJBQ0gsOERBQUNBLG9HQUFJQSxDQUFDMkQsS0FBSztvQkFBQ0MsV0FBVTtvQkFBT0MsV0FBVTs7c0NBQ3JDLDhEQUFDN0Qsb0dBQUlBLENBQUM4RCxLQUFLO3NDQUFDOzs7Ozs7c0NBQ1osOERBQUM5RCxvR0FBSUEsQ0FBQytELE9BQU87NEJBQUNDLE1BQUs7NEJBQU9DLGFBQVk7Ozs7OztzQ0FDdEMsOERBQUNqRSxvR0FBSUEsQ0FBQ2tFLElBQUk7NEJBQUNOLFdBQVU7c0NBQWE7Ozs7Ozs7Ozs7Ozs4QkFLcEMsOERBQUM3RCxvR0FBTUE7b0JBQUNvRSxTQUFTOUM7OEJBQXNCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQztHQTFGTVQ7O1FBRWFILHNEQUFTQTtRQUNaUCxvREFBUUE7UUFDTkUsc0RBQVVBO1FBQ1pELHFEQUFTQTtRQUNQRyxzREFBVUE7UUFDUkQsd0RBQVlBOzs7S0FQMUJPO0FBMkZOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY3JlYXRlV2FsbGV0L3BhZ2UudHN4P2EyOGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSAsQ29udGFpbmVyfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyB1c2VFbWFpbCwgdXNlU2V0QWlkLCB1c2VTZXROYW1lLCB1c2VTZXRDbGllbnQsIHVzZVNldEJyYW4gfSBmcm9tIFwiLi4vc3RvcmUvenVzdGFuZFwiO1xuaW1wb3J0IHNpZ25pZnkgZnJvbSBcInNpZ25pZnktdHNcIjtcbmltcG9ydCB7IHJlc29sdmVFbnZpcm9ubWVudCB9IGZyb20gJy4uL2NvbXBvbmVudC9oZWxwZXIvcmVzb2x2ZS1lbnYnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVJZGVudGlmaWVyIH0gZnJvbSBcIi4uL2hlbHBlci9jbGllbnRVdGlsXCI7XG5jb25zdCB7IHVybCwgYm9vdFVybCB9ID0gcmVzb2x2ZUVudmlyb25tZW50KCk7XG5cbmNvbnN0IENyZWF0ZVdhbGxldCA9ICgpID0+IHtcblxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBFbWFpbCA9IHVzZUVtYWlsKCk7XG4gIGNvbnN0IHNldE5hbWUgPSB1c2VTZXROYW1lKCk7XG4gIGNvbnN0IHNldEFpZCA9dXNlU2V0QWlkKCk7XG4gIGNvbnN0IHNldEJyYW4gPSB1c2VTZXRCcmFuKCk7XG4gIGNvbnN0IHNldENsaWVudCA9IHVzZVNldENsaWVudCgpO1xuICBjb25zb2xlLmxvZyhFbWFpbCk7XG4gIGNvbnN0IGhhbmRsZUNyZWF0aW5nV2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1CYXNpY05hbWVcIikhLnZhbHVlO1xuICAgIGF3YWl0IHNpZ25pZnkucmVhZHkoKTtcbiAgICBjb25zdCBicmFuMSA9IHNpZ25pZnkucmFuZG9tUGFzc2NvZGUoKTtcbiAgICBjb25zdCBjbGllbnQxID0gbmV3IHNpZ25pZnkuU2lnbmlmeUNsaWVudChcbiAgICAgIHVybCxcbiAgICAgIGJyYW4xLFxuICAgICAgc2lnbmlmeS5UaWVyLmxvdyxcbiAgICAgIGJvb3RVcmxcbiAgICApO1xuXG4gICAgYXdhaXQgY2xpZW50MS5ib290KCk7XG4gICAgYXdhaXQgY2xpZW50MS5jb25uZWN0KCk7XG5cbiAgICBzZXRDbGllbnQoY2xpZW50MSk7XG4gICAgc2V0TmFtZShuYW1lKTtcbiAgICBzZXRCcmFuKGJyYW4xKTtcbiAgICBcbiAgICBjb25zdCBzdGF0ZTEgPSBhd2FpdCBjbGllbnQxLnN0YXRlKCk7XG4gICAgc2V0QWlkKHN0YXRlMS5jb250cm9sbGVyLnN0YXRlLmkpO1xuICAgIFxuXG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIkNsaWVudCAxIGNvbm5lY3RlZC4gQ2xpZW50IEFJRDpcIixcbiAgICAgIHN0YXRlMS5jb250cm9sbGVyLnN0YXRlLmksXG4gICAgICBcIkFnZW50IEFJRDogXCIsXG4gICAgICBzdGF0ZTEuYWdlbnQuaSxcbiAgICAgIGNsaWVudDEub29iaXMoKS5jbGllbnQudXJsLFxuICAgICBcbiAgICBcbiAgICAgIFxuICAgICk7XG4gICAgLy8gY29uc3QgY2xpZW50OiBzaWduaWZ5LlNpZ25pZnlDbGllbnQgPSBhd2FpdCBnZXRPckNyZWF0ZUNsaWVudChicmFuMSk7XG4gICAgLy8gY29uc29sZS5sb2coY2xpZW50LmlkZW50aWZpZXJzLmxlbmd0aCk7XG4gICAgLy8gZ2V0T3JDcmVhdGVJZGVudGlmaWVyKGNsaWVudCwgbmFtZSk7XG4gICAgXG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9jcmVhdGVXYWxsZXRcIiwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgZW1haWw6IEVtYWlsLFxuICAgICAgICAgICAgY29udHJvbGxlckFpZDogc3RhdGUxLmNvbnRyb2xsZXIuc3RhdGUuaSxcbiAgICAgICAgICAgIGFnZW50QWlkOiBzdGF0ZTEuYWdlbnQuaSxcbiAgICAgICAgICAgIGJyYW4gOiBicmFuMSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gIFxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIndhbGxldENyZWF0aW9uIFN1Y2Nlc3NmdWxsXCIpO1xuICAgICAgICAgIG5hdmlnYXRlLnB1c2goXCIvY2xpZW50SG9tZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwid2FsbGV0IGNvdWxkIG5vdCBiZSBjcmVhdGVkLiB0cnkgYWdhaW5cIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCB3aGlsZSBtYWtpbmcgQVBJIGNhbGw6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgfTtcbiAgXG5cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgc3R5bGU9e3t3aWR0aDogXCI1MCVcIiwgbWFyZ2luVG9wOiBcIjEwMHB4XCJ9fT5cbiAgICAgIDxGb3JtPlxuICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUJhc2ljTmFtZVwiPlxuICAgICAgICAgIDxGb3JtLkxhYmVsPkVudGVyIFdhbGxldCBOYW1lPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWUgaGVyZVwiIC8+XG4gICAgICAgICAgPEZvcm0uVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICBXYWxsZXQgd2lsbCBiZSBjcmVhdGVkIHVuZGVyIHRoaXMgbmFtZVxuICAgICAgICAgIDwvRm9ybS5UZXh0PlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDcmVhdGluZ1dhbGxldH0+Y3JlYXRlIHdhbGxldDwvQnV0dG9uPlxuXG4gICAgICA8L0Zvcm0+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlV2FsbGV0OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkZvcm0iLCJDb250YWluZXIiLCJ1c2VFbWFpbCIsInVzZVNldEFpZCIsInVzZVNldE5hbWUiLCJ1c2VTZXRDbGllbnQiLCJ1c2VTZXRCcmFuIiwic2lnbmlmeSIsInJlc29sdmVFbnZpcm9ubWVudCIsInVzZVJvdXRlciIsInVybCIsImJvb3RVcmwiLCJDcmVhdGVXYWxsZXQiLCJuYXZpZ2F0ZSIsIkVtYWlsIiwic2V0TmFtZSIsInNldEFpZCIsInNldEJyYW4iLCJzZXRDbGllbnQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ3JlYXRpbmdXYWxsZXQiLCJuYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwicmVhZHkiLCJicmFuMSIsInJhbmRvbVBhc3Njb2RlIiwiY2xpZW50MSIsIlNpZ25pZnlDbGllbnQiLCJUaWVyIiwibG93IiwiYm9vdCIsImNvbm5lY3QiLCJzdGF0ZTEiLCJzdGF0ZSIsImNvbnRyb2xsZXIiLCJpIiwiYWdlbnQiLCJvb2JpcyIsImNsaWVudCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsImNvbnRyb2xsZXJBaWQiLCJhZ2VudEFpZCIsImJyYW4iLCJvayIsInB1c2giLCJlcnJvciIsInN0eWxlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJHcm91cCIsImNsYXNzTmFtZSIsImNvbnRyb2xJZCIsIkxhYmVsIiwiQ29udHJvbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIlRleHQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/createWallet/page.tsx\n"));

/***/ })

});