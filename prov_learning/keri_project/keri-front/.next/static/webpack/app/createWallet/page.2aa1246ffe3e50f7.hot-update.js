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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _store_zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/zustand */ \"(app-pages-browser)/./src/app/store/zustand.js\");\n/* harmony import */ var signify_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! signify-ts */ \"(app-pages-browser)/./node_modules/signify-ts/dist/signify-ts.mjs\");\n/* harmony import */ var _component_helper_resolve_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/helper/resolve-env */ \"(app-pages-browser)/./src/app/component/helper/resolve-env.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst { url, bootUrl } = (0,_component_helper_resolve_env__WEBPACK_IMPORTED_MODULE_4__.resolveEnvironment)();\nconst CreateWallet = ()=>{\n    _s();\n    const navigate = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const Email = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useEmail)();\n    const setName = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetName)();\n    const setAid = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetAid)();\n    const setBran = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetBran)();\n    const setClient = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetClient)();\n    console.log(Email);\n    signify_ts__WEBPACK_IMPORTED_MODULE_3__.MatterCodex;\n    //   function stringToUint8Array(str: string): Uint8Array {\n    //     return new TextEncoder().encode(str);\n    // }\n    const handleCreatingWallet = async ()=>{\n        // signAndVerifyExample();\n        const r = (0,signify_ts__WEBPACK_IMPORTED_MODULE_3__.b)(\"your_private_key_here\");\n        const uint8Array = new Uint8Array(r);\n        const dataView = new DataView(uint8Array.buffer);\n        const uint32Array = new Uint32Array(uint8Array.length / 4);\n        for(let i = 0; i < uint32Array.length; i++){\n            uint32Array[i] = dataView.getUint32(i * 4);\n        }\n        console.log(uint32Array);\n        // const signer = new Signer({raw: r });\n        // const y = atob('your_public_key_here');\n        // const signature = signer.sign(base64ToUint8Array(y));\n        // console.log(\"signature = \",signature);\n        // const ser = b('hello world');\n        // const cigar = signer.sign(ser);\n        // co\n        // console.log(\"whattt ciger\",cigar,\"what ciger code\", cigar.code, \"mtrdex edd\",MtrDex.Ed25519_Sig);\n        // // console.log(\"whattt ciger raw\",cigar.raw.length, Matter._rawSize(cigar.code));\n        // const result = signer.verfer.verify(cigar.raw, ser);\n        // console.log(\"whattt\",result);\n        const name = document.getElementById(\"formBasicName\").value;\n        await signify_ts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ready();\n        const bran1 = signify_ts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].randomPasscode();\n        const client1 = new signify_ts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SignifyClient(url, bran1, signify_ts__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Tier.low, bootUrl);\n        await client1.boot();\n        await client1.connect();\n        setClient(client1);\n        setName(name);\n        setBran(bran1);\n        const state1 = await client1.state();\n        setAid(state1.controller.state.i);\n        console.log(\"Client 1 connected. Client AID:\", state1.controller.state.i, \"Agent AID: \", state1.agent.i, client1.oobis().client.url);\n        // const client: signify.SignifyClient = await getOrCreateClient(bran1);\n        // console.log(client.identifiers.length);\n        // getOrCreateIdentifier(client, name);\n        try {\n            const response = await fetch(\"http://localhost:8081/createWallet\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name: name,\n                    email: Email,\n                    controllerAid: state1.controller.state.i,\n                    agentAid: state1.agent.i,\n                    bran: bran1\n                })\n            });\n            if (response.ok) {\n                console.log(\"walletCreation Successfull\");\n                navigate.push(\"/clientHome\");\n            } else {\n                console.error(\"wallet could not be created. try again\");\n            }\n        } catch (error) {\n            console.error(\"Error occurred while making API call:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        style: {\n            width: \"50%\",\n            marginTop: \"100px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, {\n                    className: \"mb-3\",\n                    controlId: \"formBasicName\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n                            children: \"Enter Wallet Name\"\n                        }, void 0, false, {\n                            fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n                            lineNumber: 123,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n                            type: \"text\",\n                            placeholder: \"Name here\"\n                        }, void 0, false, {\n                            fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Text, {\n                            className: \"text-muted\",\n                            children: \"Wallet will be created under this name\"\n                        }, void 0, false, {\n                            fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    onClick: handleCreatingWallet,\n                    children: \"create wallet\"\n                }, void 0, false, {\n                    fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n                    lineNumber: 130,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n            lineNumber: 121,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createWallet/page.tsx\",\n        lineNumber: 120,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreateWallet, \"AX7tQLQLPvQuueb8mbU1NTivlS4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useEmail,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetName,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetAid,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetBran,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetClient\n    ];\n});\n_c = CreateWallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateWallet);\nvar _c;\n$RefreshReg$(_c, \"CreateWallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3JlYXRlV2FsbGV0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFDZ0M7QUFPaEM7QUFDMkM7QUFDQTtBQUN6QjtBQUs1QyxNQUFNLEVBQUVjLEdBQUcsRUFBRUMsT0FBTyxFQUFFLEdBQUdILGlGQUFrQkE7QUFFM0MsTUFBTUksZUFBZTs7SUFDbkIsTUFBTUMsV0FBV0osMERBQVNBO0lBQzFCLE1BQU1LLFFBQVFkLHdEQUFRQTtJQUN0QixNQUFNZSxVQUFVYiwwREFBVUE7SUFDMUIsTUFBTWMsU0FBU2YseURBQVNBO0lBQ3hCLE1BQU1nQixVQUFVYiwwREFBVUE7SUFDMUIsTUFBTWMsWUFBWWYsNERBQVlBO0lBQzlCZ0IsUUFBUUMsR0FBRyxDQUFDTjtJQUNaUixtREFBV0E7SUFDWCwyREFBMkQ7SUFDM0QsNENBQTRDO0lBQzVDLElBQUk7SUFFSixNQUFNZSx1QkFBdUI7UUFDM0IsMEJBQTBCO1FBQzFCLE1BQU1DLElBQUlmLDZDQUFDQSxDQUFDO1FBRVosTUFBTWdCLGFBQXlCLElBQUlDLFdBQVdGO1FBQzlDLE1BQU1HLFdBQVcsSUFBSUMsU0FBU0gsV0FBV0ksTUFBTTtRQUMvQyxNQUFNQyxjQUFjLElBQUlDLFlBQVlOLFdBQVdPLE1BQU0sR0FBRztRQUN4RCxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUgsWUFBWUUsTUFBTSxFQUFFQyxJQUFLO1lBQzNDSCxXQUFXLENBQUNHLEVBQUUsR0FBR04sU0FBU08sU0FBUyxDQUFDRCxJQUFJO1FBRTFDO1FBQ0FaLFFBQVFDLEdBQUcsQ0FBQ1E7UUFHWix3Q0FBd0M7UUFFeEMsMENBQTBDO1FBQzFDLHdEQUF3RDtRQUN4RCx5Q0FBeUM7UUFFekMsZ0NBQWdDO1FBRWhDLGtDQUFrQztRQUNsQyxLQUFLO1FBQ0wsb0dBQW9HO1FBQ3BHLG9GQUFvRjtRQUNwRix1REFBdUQ7UUFDdkQsZ0NBQWdDO1FBQ2hDLE1BQU1LLE9BQU9DLFNBQVNDLGNBQWMsQ0FBQyxpQkFBa0JDLEtBQUs7UUFDNUQsTUFBTS9CLHdEQUFhO1FBQ25CLE1BQU1pQyxRQUFRakMsaUVBQXNCO1FBQ3BDLE1BQU1tQyxVQUFVLElBQUluQyxnRUFBcUIsQ0FDdkNLLEtBQ0E0QixPQUNBakMsdURBQVksQ0FBQ3NDLEdBQUcsRUFDaEJoQztRQUdGLE1BQU02QixRQUFRSSxJQUFJO1FBQ2xCLE1BQU1KLFFBQVFLLE9BQU87UUFFckIzQixVQUFVc0I7UUFDVnpCLFFBQVFrQjtRQUNSaEIsUUFBUXFCO1FBRVIsTUFBTVEsU0FBUyxNQUFNTixRQUFRTyxLQUFLO1FBQ2xDL0IsT0FBTzhCLE9BQU9FLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDaEIsQ0FBQztRQUVoQ1osUUFBUUMsR0FBRyxDQUNULG1DQUNBMEIsT0FBT0UsVUFBVSxDQUFDRCxLQUFLLENBQUNoQixDQUFDLEVBQ3pCLGVBQ0FlLE9BQU9HLEtBQUssQ0FBQ2xCLENBQUMsRUFDZFMsUUFBUVUsS0FBSyxHQUFHQyxNQUFNLENBQUN6QyxHQUFHO1FBRTVCLHdFQUF3RTtRQUN4RSwwQ0FBMEM7UUFDMUMsdUNBQXVDO1FBRXZDLElBQUk7WUFDRixNQUFNMEMsV0FBVyxNQUFNQyxNQUFNLHNDQUFzQztnQkFDakVDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUNuQnpCLE1BQU1BO29CQUNOMEIsT0FBTzdDO29CQUNQOEMsZUFBZWQsT0FBT0UsVUFBVSxDQUFDRCxLQUFLLENBQUNoQixDQUFDO29CQUN4QzhCLFVBQVVmLE9BQU9HLEtBQUssQ0FBQ2xCLENBQUM7b0JBQ3hCK0IsTUFBTXhCO2dCQUNSO1lBQ0Y7WUFFQSxJQUFJYyxTQUFTVyxFQUFFLEVBQUU7Z0JBQ2Y1QyxRQUFRQyxHQUFHLENBQUM7Z0JBQ1pQLFNBQVNtRCxJQUFJLENBQUM7WUFDaEIsT0FBTztnQkFDTDdDLFFBQVE4QyxLQUFLLENBQUM7WUFDaEI7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZDlDLFFBQVE4QyxLQUFLLENBQUMseUNBQXlDQTtRQUN6RDtJQUNGO0lBRUEscUJBQ0UsOERBQUNsRSxvR0FBU0E7UUFBQ21FLE9BQU87WUFBRUMsT0FBTztZQUFPQyxXQUFXO1FBQVE7a0JBQ25ELDRFQUFDdEUsb0dBQUlBOzs4QkFDSCw4REFBQ0Esb0dBQUlBLENBQUN1RSxLQUFLO29CQUFDQyxXQUFVO29CQUFPQyxXQUFVOztzQ0FDckMsOERBQUN6RSxvR0FBSUEsQ0FBQzBFLEtBQUs7c0NBQUM7Ozs7OztzQ0FDWiw4REFBQzFFLG9HQUFJQSxDQUFDMkUsT0FBTzs0QkFBQ0MsTUFBSzs0QkFBT0MsYUFBWTs7Ozs7O3NDQUN0Qyw4REFBQzdFLG9HQUFJQSxDQUFDOEUsSUFBSTs0QkFBQ04sV0FBVTtzQ0FBYTs7Ozs7Ozs7Ozs7OzhCQUtwQyw4REFBQ3pFLG9HQUFNQTtvQkFBQ2dGLFNBQVN4RDs4QkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9DO0dBakhNVDs7UUFDYUgsc0RBQVNBO1FBQ1pULG9EQUFRQTtRQUNORSxzREFBVUE7UUFDWEQscURBQVNBO1FBQ1JHLHNEQUFVQTtRQUNSRCx3REFBWUE7OztLQU4xQlM7QUFrSE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jcmVhdGVXYWxsZXQvcGFnZS50c3g/YTI4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQge1xuICB1c2VFbWFpbCxcbiAgdXNlU2V0QWlkLFxuICB1c2VTZXROYW1lLFxuICB1c2VTZXRDbGllbnQsXG4gIHVzZVNldEJyYW4sXG59IGZyb20gXCIuLi9zdG9yZS96dXN0YW5kXCI7XG5pbXBvcnQgc2lnbmlmeSwgeyBNYXR0ZXIsIE1hdHRlckNvZGV4LCBTaWduZXIsIGIgfSBmcm9tIFwic2lnbmlmeS10c1wiO1xuaW1wb3J0IHsgcmVzb2x2ZUVudmlyb25tZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudC9oZWxwZXIvcmVzb2x2ZS1lbnZcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBzaWduQW5kVmVyaWZ5RXhhbXBsZSBmcm9tIFwiLi4vY29tcG9uZW50L3NpbmdWZXJmZXJcIjtcbmltcG9ydCB7IGZyb21fYmFzZTY0LCB0b19iYXNlNjQgfSBmcm9tIFwibGlic29kaXVtLXdyYXBwZXJzLXN1bW9cIjtcbmltcG9ydCB7IHVpbnQ4VG9VaW50MzIgfSBmcm9tIFwidHlwZWQtYXJyYXktY29uc3RzXCI7XG5cbmNvbnN0IHsgdXJsLCBib290VXJsIH0gPSByZXNvbHZlRW52aXJvbm1lbnQoKTtcblxuY29uc3QgQ3JlYXRlV2FsbGV0ID0gKCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBFbWFpbCA9IHVzZUVtYWlsKCk7XG4gIGNvbnN0IHNldE5hbWUgPSB1c2VTZXROYW1lKCk7XG4gIGNvbnN0IHNldEFpZCA9IHVzZVNldEFpZCgpO1xuICBjb25zdCBzZXRCcmFuID0gdXNlU2V0QnJhbigpO1xuICBjb25zdCBzZXRDbGllbnQgPSB1c2VTZXRDbGllbnQoKTtcbiAgY29uc29sZS5sb2coRW1haWwpO1xuICBNYXR0ZXJDb2RleDtcbiAgLy8gICBmdW5jdGlvbiBzdHJpbmdUb1VpbnQ4QXJyYXkoc3RyOiBzdHJpbmcpOiBVaW50OEFycmF5IHtcbiAgLy8gICAgIHJldHVybiBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoc3RyKTtcbiAgLy8gfVxuXG4gIGNvbnN0IGhhbmRsZUNyZWF0aW5nV2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIHNpZ25BbmRWZXJpZnlFeGFtcGxlKCk7XG4gICAgY29uc3QgciA9IGIoXCJ5b3VyX3ByaXZhdGVfa2V5X2hlcmVcIik7XG5cbiAgICBjb25zdCB1aW50OEFycmF5OiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkocik7XG4gICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcodWludDhBcnJheS5idWZmZXIpO1xuICAgIGNvbnN0IHVpbnQzMkFycmF5ID0gbmV3IFVpbnQzMkFycmF5KHVpbnQ4QXJyYXkubGVuZ3RoIC8gNCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1aW50MzJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgdWludDMyQXJyYXlbaV0gPSBkYXRhVmlldy5nZXRVaW50MzIoaSAqIDQpO1xuXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHVpbnQzMkFycmF5KTtcblxuXG4gICAgLy8gY29uc3Qgc2lnbmVyID0gbmV3IFNpZ25lcih7cmF3OiByIH0pO1xuXG4gICAgLy8gY29uc3QgeSA9IGF0b2IoJ3lvdXJfcHVibGljX2tleV9oZXJlJyk7XG4gICAgLy8gY29uc3Qgc2lnbmF0dXJlID0gc2lnbmVyLnNpZ24oYmFzZTY0VG9VaW50OEFycmF5KHkpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNpZ25hdHVyZSA9IFwiLHNpZ25hdHVyZSk7XG5cbiAgICAvLyBjb25zdCBzZXIgPSBiKCdoZWxsbyB3b3JsZCcpO1xuXG4gICAgLy8gY29uc3QgY2lnYXIgPSBzaWduZXIuc2lnbihzZXIpO1xuICAgIC8vIGNvXG4gICAgLy8gY29uc29sZS5sb2coXCJ3aGF0dHQgY2lnZXJcIixjaWdhcixcIndoYXQgY2lnZXIgY29kZVwiLCBjaWdhci5jb2RlLCBcIm10cmRleCBlZGRcIixNdHJEZXguRWQyNTUxOV9TaWcpO1xuICAgIC8vIC8vIGNvbnNvbGUubG9nKFwid2hhdHR0IGNpZ2VyIHJhd1wiLGNpZ2FyLnJhdy5sZW5ndGgsIE1hdHRlci5fcmF3U2l6ZShjaWdhci5jb2RlKSk7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0gc2lnbmVyLnZlcmZlci52ZXJpZnkoY2lnYXIucmF3LCBzZXIpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwid2hhdHR0XCIscmVzdWx0KTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtQmFzaWNOYW1lXCIpIS52YWx1ZTtcbiAgICBhd2FpdCBzaWduaWZ5LnJlYWR5KCk7XG4gICAgY29uc3QgYnJhbjEgPSBzaWduaWZ5LnJhbmRvbVBhc3Njb2RlKCk7XG4gICAgY29uc3QgY2xpZW50MSA9IG5ldyBzaWduaWZ5LlNpZ25pZnlDbGllbnQoXG4gICAgICB1cmwsXG4gICAgICBicmFuMSxcbiAgICAgIHNpZ25pZnkuVGllci5sb3csXG4gICAgICBib290VXJsXG4gICAgKTtcblxuICAgIGF3YWl0IGNsaWVudDEuYm9vdCgpO1xuICAgIGF3YWl0IGNsaWVudDEuY29ubmVjdCgpO1xuXG4gICAgc2V0Q2xpZW50KGNsaWVudDEpO1xuICAgIHNldE5hbWUobmFtZSk7XG4gICAgc2V0QnJhbihicmFuMSk7XG5cbiAgICBjb25zdCBzdGF0ZTEgPSBhd2FpdCBjbGllbnQxLnN0YXRlKCk7XG4gICAgc2V0QWlkKHN0YXRlMS5jb250cm9sbGVyLnN0YXRlLmkpO1xuXG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIkNsaWVudCAxIGNvbm5lY3RlZC4gQ2xpZW50IEFJRDpcIixcbiAgICAgIHN0YXRlMS5jb250cm9sbGVyLnN0YXRlLmksXG4gICAgICBcIkFnZW50IEFJRDogXCIsXG4gICAgICBzdGF0ZTEuYWdlbnQuaSxcbiAgICAgIGNsaWVudDEub29iaXMoKS5jbGllbnQudXJsXG4gICAgKTtcbiAgICAvLyBjb25zdCBjbGllbnQ6IHNpZ25pZnkuU2lnbmlmeUNsaWVudCA9IGF3YWl0IGdldE9yQ3JlYXRlQ2xpZW50KGJyYW4xKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjbGllbnQuaWRlbnRpZmllcnMubGVuZ3RoKTtcbiAgICAvLyBnZXRPckNyZWF0ZUlkZW50aWZpZXIoY2xpZW50LCBuYW1lKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgxL2NyZWF0ZVdhbGxldFwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgZW1haWw6IEVtYWlsLFxuICAgICAgICAgIGNvbnRyb2xsZXJBaWQ6IHN0YXRlMS5jb250cm9sbGVyLnN0YXRlLmksXG4gICAgICAgICAgYWdlbnRBaWQ6IHN0YXRlMS5hZ2VudC5pLFxuICAgICAgICAgIGJyYW46IGJyYW4xLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3YWxsZXRDcmVhdGlvbiBTdWNjZXNzZnVsbFwiKTtcbiAgICAgICAgbmF2aWdhdGUucHVzaChcIi9jbGllbnRIb21lXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIndhbGxldCBjb3VsZCBub3QgYmUgY3JlYXRlZC4gdHJ5IGFnYWluXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igb2NjdXJyZWQgd2hpbGUgbWFraW5nIEFQSSBjYWxsOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgbWFyZ2luVG9wOiBcIjEwMHB4XCIgfX0+XG4gICAgICA8Rm9ybT5cbiAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY05hbWVcIj5cbiAgICAgICAgICA8Rm9ybS5MYWJlbD5FbnRlciBXYWxsZXQgTmFtZTwvRm9ybS5MYWJlbD5cbiAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lIGhlcmVcIiAvPlxuICAgICAgICAgIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgV2FsbGV0IHdpbGwgYmUgY3JlYXRlZCB1bmRlciB0aGlzIG5hbWVcbiAgICAgICAgICA8L0Zvcm0uVGV4dD5cbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxuXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRpbmdXYWxsZXR9PmNyZWF0ZSB3YWxsZXQ8L0J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDcmVhdGVXYWxsZXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJGb3JtIiwiQ29udGFpbmVyIiwidXNlRW1haWwiLCJ1c2VTZXRBaWQiLCJ1c2VTZXROYW1lIiwidXNlU2V0Q2xpZW50IiwidXNlU2V0QnJhbiIsInNpZ25pZnkiLCJNYXR0ZXJDb2RleCIsImIiLCJyZXNvbHZlRW52aXJvbm1lbnQiLCJ1c2VSb3V0ZXIiLCJ1cmwiLCJib290VXJsIiwiQ3JlYXRlV2FsbGV0IiwibmF2aWdhdGUiLCJFbWFpbCIsInNldE5hbWUiLCJzZXRBaWQiLCJzZXRCcmFuIiwic2V0Q2xpZW50IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNyZWF0aW5nV2FsbGV0IiwiciIsInVpbnQ4QXJyYXkiLCJVaW50OEFycmF5IiwiZGF0YVZpZXciLCJEYXRhVmlldyIsImJ1ZmZlciIsInVpbnQzMkFycmF5IiwiVWludDMyQXJyYXkiLCJsZW5ndGgiLCJpIiwiZ2V0VWludDMyIiwibmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInJlYWR5IiwiYnJhbjEiLCJyYW5kb21QYXNzY29kZSIsImNsaWVudDEiLCJTaWduaWZ5Q2xpZW50IiwiVGllciIsImxvdyIsImJvb3QiLCJjb25uZWN0Iiwic3RhdGUxIiwic3RhdGUiLCJjb250cm9sbGVyIiwiYWdlbnQiLCJvb2JpcyIsImNsaWVudCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsImNvbnRyb2xsZXJBaWQiLCJhZ2VudEFpZCIsImJyYW4iLCJvayIsInB1c2giLCJlcnJvciIsInN0eWxlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJHcm91cCIsImNsYXNzTmFtZSIsImNvbnRyb2xJZCIsIkxhYmVsIiwiQ29udHJvbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIlRleHQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/createWallet/page.tsx\n"));

/***/ })

});