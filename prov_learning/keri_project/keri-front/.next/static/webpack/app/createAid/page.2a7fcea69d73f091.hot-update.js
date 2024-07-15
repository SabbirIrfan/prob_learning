"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/createAid/page",{

/***/ "(app-pages-browser)/./src/app/createAid/page.tsx":
/*!************************************!*\
  !*** ./src/app/createAid/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _store_zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/zustand */ \"(app-pages-browser)/./src/app/store/zustand.js\");\n/* harmony import */ var _helper_clientUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/clientUtil */ \"(app-pages-browser)/./src/app/helper/clientUtil.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var signify_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! signify-ts */ \"(app-pages-browser)/./node_modules/signify-ts/dist/signify-ts.mjs\");\n/* harmony import */ var libsodium_wrappers_sumo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! libsodium-wrappers-sumo */ \"(app-pages-browser)/./node_modules/libsodium-wrappers-sumo/dist/modules-sumo/libsodium-wrappers.js\");\n/* harmony import */ var libsodium_wrappers_sumo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(libsodium_wrappers_sumo__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst get32Bytes = (r)=>{\n    const originalString = r;\n    const originalUint8Array = new TextEncoder().encode(originalString);\n    const paddedUint8Array = new Uint8Array(32);\n    paddedUint8Array.set(originalUint8Array, 0);\n    paddedUint8Array.fill(0, originalUint8Array.length, 32);\n    return paddedUint8Array;\n};\nconst createAid = ()=>{\n    _s();\n    const navigate = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const setIds = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetIds)();\n    const client = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useClient)();\n    const email = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_2__.useEmail)();\n    let alias;\n    let unit8arr = get32Bytes(\"hello world\");\n    const signer = new signify_ts__WEBPACK_IMPORTED_MODULE_5__.Signer({\n        raw: unit8arr\n    });\n    const sttring = get32Bytes(\"tello world\");\n    const signature = signer.sign(sttring);\n    console.log(signature);\n    const verfer = new signify_ts__WEBPACK_IMPORTED_MODULE_5__.Verfer({\n        raw: unit8arr\n    });\n    const isValid = verfer.verify(signature.qb64, sttring);\n    if (isValid) {\n        console.log(\"Signature is valid\");\n    } else {\n        console.log(\"Signature is invalid\");\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{});\n    const handleCreateAid = (event)=>{\n        event.preventDefault();\n        alias = document.getElementById(\"formBasicName\").value;\n        client.identifiers().create(alias, {\n            toad: 3,\n            wits: [\n                \"BBilc4-L3tFUnfM_wJr4S4OJanAv_VmF_dJNN6vkf2Ha\",\n                \"BLskRTInXnMxWaGqcpSyMgo0nYbalW99cGZESrz3zapM\",\n                \"BIKKuvBwpmDVA4Ds-EpL5bt9OqPzWPja2LigFYZN2YfX\"\n            ]\n        }).then(async (icpResult1)=>{\n            console.log(\"step 2\");\n            const { response: aid1 } = await (0,_helper_clientUtil__WEBPACK_IMPORTED_MODULE_3__.waitOperation)(client, await icpResult1.op());\n            let rpyResult1 = await client.identifiers().addEndRole(alias, \"agent\", client.agent.pre);\n            await (0,_helper_clientUtil__WEBPACK_IMPORTED_MODULE_3__.waitOperation)(client, await rpyResult1.op());\n            const oobi1 = await client.oobis().get(alias, \"agent\");\n            const Identifiers = await client.identifiers().list();\n            setIds(Identifiers.aids);\n            console.log(Identifiers, icpResult1, \"OOBI: \", oobi1.oobis[0]);\n            handlePost(alias, email, await aid1.i, oobi1.oobis[0]);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    const handlePost = async (alias, email, aid, oobi)=>{\n        console.log(\"step 4\", email, alias, oobi);\n        console.log(\"Key state\", await client.keyStates().get(alias));\n        await (libsodium_wrappers_sumo__WEBPACK_IMPORTED_MODULE_6___default().ready);\n        // \n        try {\n            const response = await fetch(\"http://localhost:8081/create-aid\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email: email,\n                    alias: alias,\n                    aid: aid,\n                    oobiUrl: oobi\n                })\n            });\n            if (response.ok) {\n                console.log(\"AID created successfully\");\n                navigate.push(\"/clientDetails\");\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            style: {\n                width: \"50%\",\n                marginTop: \"100px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Group, {\n                        className: \"mb-3\",\n                        controlId: \"formBasicName\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Label, {\n                                children: \"Alias name\"\n                            }, void 0, false, {\n                                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Control, {\n                                type: \"text\",\n                                placeholder: \"Enter alias\"\n                            }, void 0, false, {\n                                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Text, {\n                                className: \"text-muted\",\n                                children: \"AID will be created under this alias\"\n                            }, void 0, false, {\n                                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        onClick: handleCreateAid,\n                        variant: \"primary\",\n                        type: \"submit\",\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                lineNumber: 115,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n            lineNumber: 114,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false);\n};\n_s(createAid, \"ph2Jule+SvvqicmYs6RLOeP11CI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useSetIds,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useClient,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_2__.useEmail\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (createAid);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3JlYXRlQWlkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUMrQztBQUNXO0FBQ1E7QUFDTjtBQUVoQjtBQUN1RTtBQUNuRTtBQUVoRCxNQUFNWSxhQUFhLENBQUNDO0lBQ2hCLE1BQU1DLGlCQUFpQkQ7SUFDdkIsTUFBTUUscUJBQXFCLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ0g7SUFDcEQsTUFBTUksbUJBQW1CLElBQUlDLFdBQVc7SUFFeENELGlCQUFpQkUsR0FBRyxDQUFDTCxvQkFBb0I7SUFDekNHLGlCQUFpQkcsSUFBSSxDQUFDLEdBQUdOLG1CQUFtQk8sTUFBTSxFQUFFO0lBQ3BELE9BQU9KO0FBQ1g7QUFDQSxNQUFNSyxZQUFZOztJQUNkLE1BQU1DLFdBQVdoQiwwREFBU0E7SUFDMUIsTUFBTWlCLFNBQVNuQix5REFBU0E7SUFDeEIsTUFBTW9CLFNBQXdCdEIseURBQVNBO0lBQ3ZDLE1BQU11QixRQUFRdEIsd0RBQVFBO0lBQ3RCLElBQUl1QjtJQUVKLElBQUlDLFdBQVdqQixXQUFXO0lBRTFCLE1BQU1rQixTQUFTLElBQUlyQiw4Q0FBTUEsQ0FBQztRQUFDc0IsS0FBS0Y7SUFBUztJQUN6QyxNQUFNRyxVQUFVcEIsV0FBVztJQUMzQixNQUFNcUIsWUFBWUgsT0FBT0ksSUFBSSxDQUFDRjtJQUM5QkcsUUFBUUMsR0FBRyxDQUFDSDtJQUNaLE1BQU1JLFNBQVMsSUFBSTNCLDhDQUFNQSxDQUFDO1FBQUNxQixLQUFLRjtJQUFTO0lBQ3pDLE1BQU1TLFVBQVVELE9BQU9FLE1BQU0sQ0FBQ04sVUFBVU8sSUFBSSxFQUFFUjtJQUM5QyxJQUFJTSxTQUFTO1FBQ1RILFFBQVFDLEdBQUcsQ0FBQztJQUNoQixPQUFPO1FBQ0hELFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUVBcEMsZ0RBQVNBLENBQUMsS0FDVjtJQUNBLE1BQU15QyxrQkFBa0IsQ0FBQ0M7UUFDckJBLE1BQU1DLGNBQWM7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c3g/NzEyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgRm9ybSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyB1c2VDbGllbnQsIHVzZUVtYWlsLCB1c2VTZXRJZHMgfSBmcm9tICcuLi9zdG9yZS96dXN0YW5kJztcbmltcG9ydCB7IHNsZWVwLCB3YWl0T3BlcmF0aW9uIH0gZnJvbSAnLi4vaGVscGVyL2NsaWVudFV0aWwnO1xuaW1wb3J0IEtlcmlOYXYgZnJvbSAnLi4vY29tcG9uZW50L05hdmJhcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgTWF0dGVyLCBNdHJEZXgsIE9wZXJhdGlvbiwgU2lnZXIsIFNpZ25lciwgU2lnbmlmeUNsaWVudCwgVmVyZmVyLCBiLCBjb25jYXQsIHNpZ25hdHVyZSB9IGZyb20gJ3NpZ25pZnktdHMnO1xuaW1wb3J0IGxpYnNvZGl1bSBmcm9tICdsaWJzb2RpdW0td3JhcHBlcnMtc3Vtbyc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5jb25zdCBnZXQzMkJ5dGVzID0gKHI6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsU3RyaW5nID0gcjtcbiAgICBjb25zdCBvcmlnaW5hbFVpbnQ4QXJyYXkgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUob3JpZ2luYWxTdHJpbmcpO1xuICAgIGNvbnN0IHBhZGRlZFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheSgzMik7XG4gICAgXG4gICAgcGFkZGVkVWludDhBcnJheS5zZXQob3JpZ2luYWxVaW50OEFycmF5LCAwKTtcbiAgICBwYWRkZWRVaW50OEFycmF5LmZpbGwoMCwgb3JpZ2luYWxVaW50OEFycmF5Lmxlbmd0aCwgMzIpO1xuICAgIHJldHVybiBwYWRkZWRVaW50OEFycmF5O1xufVxuY29uc3QgY3JlYXRlQWlkID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3Qgc2V0SWRzID0gdXNlU2V0SWRzKCk7XG4gICAgY29uc3QgY2xpZW50OiBTaWduaWZ5Q2xpZW50ID0gdXNlQ2xpZW50KCk7XG4gICAgY29uc3QgZW1haWwgPSB1c2VFbWFpbCgpO1xuICAgIGxldCBhbGlhczogc3RyaW5nO1xuXG4gICAgbGV0IHVuaXQ4YXJyID0gZ2V0MzJCeXRlcyhcImhlbGxvIHdvcmxkXCIpOztcbiAgICBcbiAgICBjb25zdCBzaWduZXIgPSBuZXcgU2lnbmVyKHtyYXc6IHVuaXQ4YXJyIH0pO1xuICAgIGNvbnN0IHN0dHJpbmcgPSBnZXQzMkJ5dGVzKFwidGVsbG8gd29ybGRcIik7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gc2lnbmVyLnNpZ24oc3R0cmluZyk7XG4gICAgY29uc29sZS5sb2coc2lnbmF0dXJlKTtcbiAgICBjb25zdCB2ZXJmZXIgPSBuZXcgVmVyZmVyKHtyYXc6IHVuaXQ4YXJyIH0pO1xuICAgIGNvbnN0IGlzVmFsaWQgPSB2ZXJmZXIudmVyaWZ5KHNpZ25hdHVyZS5xYjY0LCBzdHRyaW5nKTtcbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU2lnbmF0dXJlIGlzIHZhbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NpZ25hdHVyZSBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB9KTtcbiAgICBjb25zdCBoYW5kbGVDcmVhdGVBaWQgPSAoZXZlbnQ6IHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7IH0pID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYWxpYXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1CYXNpY05hbWVcIikhLnZhbHVlO1xuICAgIFxuICAgICAgICBjbGllbnQuaWRlbnRpZmllcnMoKS5jcmVhdGUoYWxpYXMsIHtcbiAgICAgICAgICAgIHRvYWQ6IDMsXG4gICAgICAgICAgICB3aXRzOiBbXG4gICAgICAgICAgICAgICAgJ0JCaWxjNC1MM3RGVW5mTV93SnI0UzRPSmFuQXZfVm1GX2RKTk42dmtmMkhhJyxcbiAgICAgICAgICAgICAgICAnQkxza1JUSW5Ybk14V2FHcWNwU3lNZ28wblliYWxXOTljR1pFU3J6M3phcE0nLFxuICAgICAgICAgICAgICAgICdCSUtLdXZCd3BtRFZBNERzLUVwTDVidDlPcVB6V1BqYTJMaWdGWVpOMllmWCcsXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICkudGhlbihhc3luYyAoaWNwUmVzdWx0MTogeyBvcDogKCkgPT4gc3RyaW5nIHwgT3BlcmF0aW9uPGFueT4gfCBQcm9taXNlTGlrZTxzdHJpbmcgfCBPcGVyYXRpb248YW55Pj47IH0pID0+IHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGVwIDJcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXNwb25zZTogYWlkMSB9ID0gYXdhaXQgd2FpdE9wZXJhdGlvbihjbGllbnQsIGF3YWl0IGljcFJlc3VsdDEub3AoKSk7XG4gICAgXG4gICAgICAgICAgICAgICAgbGV0IHJweVJlc3VsdDEgPSBhd2FpdCBjbGllbnQuaWRlbnRpZmllcnMoKS5hZGRFbmRSb2xlKGFsaWFzLCAnYWdlbnQnLCBjbGllbnQhLmFnZW50IS5wcmUpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHdhaXRPcGVyYXRpb24oY2xpZW50LCBhd2FpdCBycHlSZXN1bHQxLm9wKCkpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG9vYmkxID0gYXdhaXQgY2xpZW50Lm9vYmlzKCkuZ2V0KGFsaWFzLCAnYWdlbnQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBJZGVudGlmaWVycyA9IGF3YWl0IGNsaWVudC5pZGVudGlmaWVycygpLmxpc3QoKTtcbiAgICAgICAgICAgICAgICBzZXRJZHMoSWRlbnRpZmllcnMuYWlkcyk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgIElkZW50aWZpZXJzLFxuICAgICAgICAgICAgICAgICAgICBpY3BSZXN1bHQxLFxuICAgICAgICAgICAgICAgICAgICBcIk9PQkk6IFwiLFxuICAgICAgICAgICAgICAgICAgICBvb2JpMS5vb2Jpc1swXSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlUG9zdChhbGlhcywgZW1haWwsYXdhaXQgYWlkMS5pLCBvb2JpMS5vb2Jpc1swXSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGhhbmRsZVBvc3QgPSBhc3luYyAoYWxpYXM6IHN0cmluZywgZW1haWw6IHN0cmluZywgYWlkOiBhbnksIG9vYmk6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0ZXAgNFwiLCBlbWFpbCwgYWxpYXMsICBvb2JpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJLZXkgc3RhdGVcIixhd2FpdCBjbGllbnQua2V5U3RhdGVzKCkuZ2V0KGFsaWFzKSk7XG4gICAgICAgIGF3YWl0IGxpYnNvZGl1bS5yZWFkeTtcblxuICAgICAgICAvLyBcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODEvY3JlYXRlLWFpZCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IGVtYWlsLCBhbGlhczogYWxpYXMsIGFpZDogYWlkLCBvb2JpVXJsOiBvb2JpIH0pXG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBSUQgY3JlYXRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZS5wdXNoKCcvY2xpZW50RGV0YWlscycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7LyogPEtlcmlOYXYgLz4gKi99XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgbWFyZ2luVG9wOiBcIjEwMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY05hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5BbGlhcyBuYW1lPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGFsaWFzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5UZXh0IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUlEIHdpbGwgYmUgY3JlYXRlZCB1bmRlciB0aGlzIGFsaWFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZUFpZH0gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFpZDsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiRm9ybSIsInVzZUNsaWVudCIsInVzZUVtYWlsIiwidXNlU2V0SWRzIiwid2FpdE9wZXJhdGlvbiIsInVzZVJvdXRlciIsIlNpZ25lciIsIlZlcmZlciIsImxpYnNvZGl1bSIsImdldDMyQnl0ZXMiLCJyIiwib3JpZ2luYWxTdHJpbmciLCJvcmlnaW5hbFVpbnQ4QXJyYXkiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsInBhZGRlZFVpbnQ4QXJyYXkiLCJVaW50OEFycmF5Iiwic2V0IiwiZmlsbCIsImxlbmd0aCIsImNyZWF0ZUFpZCIsIm5hdmlnYXRlIiwic2V0SWRzIiwiY2xpZW50IiwiZW1haWwiLCJhbGlhcyIsInVuaXQ4YXJyIiwic2lnbmVyIiwicmF3Iiwic3R0cmluZyIsInNpZ25hdHVyZSIsInNpZ24iLCJjb25zb2xlIiwibG9nIiwidmVyZmVyIiwiaXNWYWxpZCIsInZlcmlmeSIsInFiNjQiLCJoYW5kbGVDcmVhdGVBaWQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiaWRlbnRpZmllcnMiLCJjcmVhdGUiLCJ0b2FkIiwid2l0cyIsInRoZW4iLCJpY3BSZXN1bHQxIiwicmVzcG9uc2UiLCJhaWQxIiwib3AiLCJycHlSZXN1bHQxIiwiYWRkRW5kUm9sZSIsImFnZW50IiwicHJlIiwib29iaTEiLCJvb2JpcyIsImdldCIsIklkZW50aWZpZXJzIiwibGlzdCIsImFpZHMiLCJoYW5kbGVQb3N0IiwiaSIsImNhdGNoIiwiZXJyb3IiLCJhaWQiLCJvb2JpIiwia2V5U3RhdGVzIiwicmVhZHkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9vYmlVcmwiLCJvayIsInB1c2giLCJzdHlsZSIsIndpZHRoIiwibWFyZ2luVG9wIiwiR3JvdXAiLCJjbGFzc05hbWUiLCJjb250cm9sSWQiLCJMYWJlbCIsIkNvbnRyb2wiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJUZXh0Iiwib25DbGljayIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/createAid/page.tsx\n"));

/***/ })

});