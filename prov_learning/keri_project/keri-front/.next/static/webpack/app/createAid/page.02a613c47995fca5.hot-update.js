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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _store_zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/zustand */ \"(app-pages-browser)/./src/app/store/zustand.js\");\n/* harmony import */ var _helper_clientUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/clientUtil */ \"(app-pages-browser)/./src/app/helper/clientUtil.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var signify_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! signify-ts */ \"(app-pages-browser)/./node_modules/signify-ts/dist/signify-ts.mjs\");\n/* harmony import */ var libsodium_wrappers_sumo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! libsodium-wrappers-sumo */ \"(app-pages-browser)/./node_modules/libsodium-wrappers-sumo/dist/modules-sumo/libsodium-wrappers.js\");\n/* harmony import */ var libsodium_wrappers_sumo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(libsodium_wrappers_sumo__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst get32Bytes = (r)=>{\n    const originalString = r;\n    const originalUint8Array = new TextEncoder().encode(originalString);\n    const paddedUint8Array = new Uint8Array(32);\n    paddedUint8Array.set(originalUint8Array, 0);\n    console.log(originalUint8Array);\n    if (originalUint8Array.length < 32) {\n        paddedUint8Array.fill(0, originalUint8Array.length, 32);\n    }\n    return paddedUint8Array;\n};\nconst createAid = ()=>{\n    _s();\n    const navigate = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const setIds = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_1__.useSetIds)();\n    const client = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_1__.useClient)();\n    const email = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_1__.useEmail)();\n    let alias;\n    const handleCreateAid = (event)=>{\n        event.preventDefault();\n        alias = document.getElementById(\"formBasicName\").value;\n        client.identifiers().create(alias, {\n            toad: 3,\n            wits: [\n                \"BBilc4-L3tFUnfM_wJr4S4OJanAv_VmF_dJNN6vkf2Ha\",\n                \"BLskRTInXnMxWaGqcpSyMgo0nYbalW99cGZESrz3zapM\",\n                \"BIKKuvBwpmDVA4Ds-EpL5bt9OqPzWPja2LigFYZN2YfX\"\n            ]\n        }).then(async (icpResult1)=>{\n            console.log(\"step 2\");\n            const { response: aid1 } = await (0,_helper_clientUtil__WEBPACK_IMPORTED_MODULE_2__.waitOperation)(client, await icpResult1.op());\n            let rpyResult1 = await client.identifiers().addEndRole(alias, \"agent\", client.agent.pre);\n            await (0,_helper_clientUtil__WEBPACK_IMPORTED_MODULE_2__.waitOperation)(client, await rpyResult1.op());\n            const oobi1 = await client.oobis().get(alias, \"agent\");\n            const Identifiers = await client.identifiers().list();\n            setIds(Identifiers.aids);\n            console.log(Identifiers, icpResult1, \"OOBI: \", oobi1.oobis[0]);\n            handlePost(alias, email, await aid1.i, oobi1.oobis[0]);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    const handlePost = async (alias, email, aid, oobi)=>{\n        console.log(\"step 4\", email, alias, oobi);\n        const keystate = await client.keyStates().get(aid);\n        console.log(\"Key state\", keystate[0].k[0]);\n        await (libsodium_wrappers_sumo__WEBPACK_IMPORTED_MODULE_5___default().ready);\n        signify_ts__WEBPACK_IMPORTED_MODULE_4__[\"default\"].siginput;\n        console.log(signify_ts__WEBPACK_IMPORTED_MODULE_4__[\"default\"].b(keystate[0].k[0]));\n        const signer = new signify_ts__WEBPACK_IMPORTED_MODULE_4__.Signer({\n            raw: signify_ts__WEBPACK_IMPORTED_MODULE_4__[\"default\"].b(keystate[0].k[0])\n        });\n        const sttring = \"hello world\";\n        const signature = signer.sign(signify_ts__WEBPACK_IMPORTED_MODULE_4__[\"default\"].b(sttring));\n        console.log(signature);\n        // const verfer = new Verfer({raw: signify.b(aid) });\n        // console.log(verfer.verify(signature.qb64, sttring));\n        // const isValid = verfer.verify(signature.qb64, sttring);\n        // if (isValid) {\n        //     console.log('Signature is valid');\n        // } else {\n        //     console.log('Signature is invalid');\n        // }\n        // \n        try {\n            const response = await fetch(\"http://localhost:8081/create-aid\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email: email,\n                    alias: alias,\n                    aid: aid,\n                    oobiUrl: oobi\n                })\n            });\n            if (response.ok) {\n                console.log(\"AID created successfully\");\n                navigate.push(\"/clientDetails\");\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            style: {\n                width: \"50%\",\n                marginTop: \"100px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, {\n                        className: \"mb-3\",\n                        controlId: \"formBasicName\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n                                children: \"Alias name\"\n                            }, void 0, false, {\n                                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n                                type: \"text\",\n                                placeholder: \"Enter alias\"\n                            }, void 0, false, {\n                                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Text, {\n                                className: \"text-muted\",\n                                children: \"AID will be created under this alias\"\n                            }, void 0, false, {\n                                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        onClick: handleCreateAid,\n                        variant: \"primary\",\n                        type: \"submit\",\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                lineNumber: 125,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n            lineNumber: 124,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false);\n};\n_s(createAid, \"CqA6m2QmwoEOVKtu0kvvjxth1Ms=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_1__.useSetIds,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_1__.useClient,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_1__.useEmail\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (createAid);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3JlYXRlQWlkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFMEQ7QUFDUTtBQUNOO0FBRWhCO0FBQ3lCO0FBQ3BDO0FBQ2U7QUFFaEQsTUFBTVcsYUFBYSxDQUFDQztJQUNoQixNQUFNQyxpQkFBaUJEO0lBQ3ZCLE1BQU1FLHFCQUFxQixJQUFJQyxjQUFjQyxNQUFNLENBQUNIO0lBQ3BELE1BQU1JLG1CQUFtQixJQUFJQyxXQUFXO0lBRXhDRCxpQkFBaUJFLEdBQUcsQ0FBQ0wsb0JBQW9CO0lBQ3pDTSxRQUFRQyxHQUFHLENBQUNQO0lBQ1osSUFBSUEsbUJBQW1CUSxNQUFNLEdBQUcsSUFBSTtRQUNsQ0wsaUJBQWlCTSxJQUFJLENBQUMsR0FBR1QsbUJBQW1CUSxNQUFNLEVBQUU7SUFDdEQ7SUFDQSxPQUFPTDtBQUNUO0FBQ0YsTUFBTU8sWUFBWTs7SUFDZCxNQUFNQyxXQUFXbEIsMERBQVNBO0lBQzFCLE1BQU1tQixTQUFTckIseURBQVNBO0lBQ3hCLE1BQU1zQixTQUF3QnhCLHlEQUFTQTtJQUN2QyxNQUFNeUIsUUFBUXhCLHdEQUFRQTtJQUN0QixJQUFJeUI7SUFLSixNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDckJBLE1BQU1DLGNBQWM7UUFDcEJILFFBQVFJLFNBQVNDLGNBQWMsQ0FBQyxpQkFBa0JDLEtBQUs7UUFFdkRSLE9BQU9TLFdBQVcsR0FBR0MsTUFBTSxDQUFDUixPQUFPO1lBQy9CUyxNQUFNO1lBQ05DLE1BQU07Z0JBQ0Y7Z0JBQ0E7Z0JBQ0E7YUFDSDtRQUdMLEdBQ0VDLElBQUksQ0FBQyxPQUFPQztZQUVWckIsUUFBUUMsR0FBRyxDQUFDO1lBQ1IsTUFBTSxFQUFFcUIsVUFBVUMsSUFBSSxFQUFFLEdBQUcsTUFBTXJDLGlFQUFhQSxDQUFDcUIsUUFBUSxNQUFNYyxXQUFXRyxFQUFFO1lBRTFFLElBQUlDLGFBQWEsTUFBTWxCLE9BQU9TLFdBQVcsR0FBR1UsVUFBVSxDQUFD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Q1hGLHFEQUFTQTtRQUNNRixxREFBU0E7UUFDekJDLG9EQUFRQTs7O0FBa0h0QiwrREFBZW9CLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jcmVhdGVBaWQvcGFnZS50c3g/NzEyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgRm9ybSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyB1c2VDbGllbnQsIHVzZUVtYWlsLCB1c2VTZXRJZHMgfSBmcm9tICcuLi9zdG9yZS96dXN0YW5kJztcbmltcG9ydCB7IHNsZWVwLCB3YWl0T3BlcmF0aW9uIH0gZnJvbSAnLi4vaGVscGVyL2NsaWVudFV0aWwnO1xuaW1wb3J0IEtlcmlOYXYgZnJvbSAnLi4vY29tcG9uZW50L05hdmJhcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgT3BlcmF0aW9uLCBTaWduZXIsIFNpZ25pZnlDbGllbnQsIFZlcmZlcn0gZnJvbSAnc2lnbmlmeS10cyc7XG5pbXBvcnQgc2lnbmlmeSBmcm9tICdzaWduaWZ5LXRzJztcbmltcG9ydCBsaWJzb2RpdW0gZnJvbSAnbGlic29kaXVtLXdyYXBwZXJzLXN1bW8nO1xuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuY29uc3QgZ2V0MzJCeXRlcyA9IChyOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHsgIFxuICAgIGNvbnN0IG9yaWdpbmFsU3RyaW5nID0gcjsgIFxuICAgIGNvbnN0IG9yaWdpbmFsVWludDhBcnJheSA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShvcmlnaW5hbFN0cmluZyk7ICBcbiAgICBjb25zdCBwYWRkZWRVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoMzIpOyAgXG4gIFxuICAgIHBhZGRlZFVpbnQ4QXJyYXkuc2V0KG9yaWdpbmFsVWludDhBcnJheSwgMCk7ICBcbiAgICBjb25zb2xlLmxvZyhvcmlnaW5hbFVpbnQ4QXJyYXkpO1xuICAgIGlmIChvcmlnaW5hbFVpbnQ4QXJyYXkubGVuZ3RoIDwgMzIpIHsgIFxuICAgICAgcGFkZGVkVWludDhBcnJheS5maWxsKDAsIG9yaWdpbmFsVWludDhBcnJheS5sZW5ndGgsIDMyKTsgIFxuICAgIH0gIFxuICAgIHJldHVybiBwYWRkZWRVaW50OEFycmF5OyAgXG4gIH1cbmNvbnN0IGNyZWF0ZUFpZCA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHNldElkcyA9IHVzZVNldElkcygpO1xuICAgIGNvbnN0IGNsaWVudDogU2lnbmlmeUNsaWVudCA9IHVzZUNsaWVudCgpO1xuICAgIGNvbnN0IGVtYWlsID0gdXNlRW1haWwoKTtcbiAgICBsZXQgYWxpYXM6IHN0cmluZztcblxuICAgIFxuXG5cbiAgICBjb25zdCBoYW5kbGVDcmVhdGVBaWQgPSAoZXZlbnQ6IHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7IH0pID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYWxpYXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1CYXNpY05hbWVcIikhLnZhbHVlO1xuICAgIFxuICAgICAgICBjbGllbnQuaWRlbnRpZmllcnMoKS5jcmVhdGUoYWxpYXMsIHtcbiAgICAgICAgICAgIHRvYWQ6IDMsXG4gICAgICAgICAgICB3aXRzOiBbXG4gICAgICAgICAgICAgICAgJ0JCaWxjNC1MM3RGVW5mTV93SnI0UzRPSmFuQXZfVm1GX2RKTk42dmtmMkhhJyxcbiAgICAgICAgICAgICAgICAnQkxza1JUSW5Ybk14V2FHcWNwU3lNZ28wblliYWxXOTljR1pFU3J6M3phcE0nLFxuICAgICAgICAgICAgICAgICdCSUtLdXZCd3BtRFZBNERzLUVwTDVidDlPcVB6V1BqYTJMaWdGWVpOMllmWCcsXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICkudGhlbihhc3luYyAoaWNwUmVzdWx0MTogeyBvcDogKCkgPT4gc3RyaW5nIHwgT3BlcmF0aW9uPGFueT4gfCBQcm9taXNlTGlrZTxzdHJpbmcgfCBPcGVyYXRpb248YW55Pj47IH0pID0+IHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGVwIDJcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXNwb25zZTogYWlkMSB9ID0gYXdhaXQgd2FpdE9wZXJhdGlvbihjbGllbnQsIGF3YWl0IGljcFJlc3VsdDEub3AoKSk7XG4gICAgXG4gICAgICAgICAgICAgICAgbGV0IHJweVJlc3VsdDEgPSBhd2FpdCBjbGllbnQuaWRlbnRpZmllcnMoKS5hZGRFbmRSb2xlKGFsaWFzLCAnYWdlbnQnLCBjbGllbnQhLmFnZW50IS5wcmUpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHdhaXRPcGVyYXRpb24oY2xpZW50LCBhd2FpdCBycHlSZXN1bHQxLm9wKCkpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG9vYmkxID0gYXdhaXQgY2xpZW50Lm9vYmlzKCkuZ2V0KGFsaWFzLCAnYWdlbnQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBJZGVudGlmaWVycyA9IGF3YWl0IGNsaWVudC5pZGVudGlmaWVycygpLmxpc3QoKTtcbiAgICAgICAgICAgICAgICBzZXRJZHMoSWRlbnRpZmllcnMuYWlkcyk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgIElkZW50aWZpZXJzLFxuICAgICAgICAgICAgICAgICAgICBpY3BSZXN1bHQxLFxuICAgICAgICAgICAgICAgICAgICBcIk9PQkk6IFwiLFxuICAgICAgICAgICAgICAgICAgICBvb2JpMS5vb2Jpc1swXSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlUG9zdChhbGlhcywgZW1haWwsYXdhaXQgYWlkMS5pLCBvb2JpMS5vb2Jpc1swXSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGhhbmRsZVBvc3QgPSBhc3luYyAoYWxpYXM6IHN0cmluZywgZW1haWw6IHN0cmluZywgYWlkOiBhbnksIG9vYmk6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0ZXAgNFwiLCBlbWFpbCwgYWxpYXMsICBvb2JpKTtcbiAgICAgICAgY29uc3Qga2V5c3RhdGUgPSBhd2FpdCBjbGllbnQua2V5U3RhdGVzKCkuZ2V0KGFpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiS2V5IHN0YXRlXCIsa2V5c3RhdGVbMF0ua1swXSk7XG4gICAgICAgIGF3YWl0IGxpYnNvZGl1bS5yZWFkeTtcblxuICAgICAgICBzaWduaWZ5LnNpZ2lucHV0O1xuICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhzaWduaWZ5LmIoa2V5c3RhdGVbMF0ua1swXSkpO1xuICAgIGNvbnN0IHNpZ25lciA9IG5ldyBTaWduZXIoe3Jhdzogc2lnbmlmeS5iKGtleXN0YXRlWzBdLmtbMF0pIH0pO1xuICAgIGNvbnN0IHN0dHJpbmcgPVwiaGVsbG8gd29ybGRcIjtcbiAgICBjb25zdCBzaWduYXR1cmUgPSBzaWduZXIuc2lnbihzaWduaWZ5LmIoc3R0cmluZykpO1xuICAgIGNvbnNvbGUubG9nKHNpZ25hdHVyZSk7XG4gICAgLy8gY29uc3QgdmVyZmVyID0gbmV3IFZlcmZlcih7cmF3OiBzaWduaWZ5LmIoYWlkKSB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHZlcmZlci52ZXJpZnkoc2lnbmF0dXJlLnFiNjQsIHN0dHJpbmcpKTtcblxuICAgIC8vIGNvbnN0IGlzVmFsaWQgPSB2ZXJmZXIudmVyaWZ5KHNpZ25hdHVyZS5xYjY0LCBzdHRyaW5nKTtcbiAgICAvLyBpZiAoaXNWYWxpZCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnU2lnbmF0dXJlIGlzIHZhbGlkJyk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ1NpZ25hdHVyZSBpcyBpbnZhbGlkJyk7XG4gICAgLy8gfVxuXG4gICAgICAgIC8vIFxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9jcmVhdGUtYWlkJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbDogZW1haWwsIGFsaWFzOiBhbGlhcywgYWlkOiBhaWQsIG9vYmlVcmw6IG9vYmkgfSlcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FJRCBjcmVhdGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlLnB1c2goJy9jbGllbnREZXRhaWxzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHsvKiA8S2VyaU5hdiAvPiAqL31cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiLCBtYXJnaW5Ub3A6IFwiMTAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUJhc2ljTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkFsaWFzIG5hbWU8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgYWxpYXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBSUQgd2lsbCBiZSBjcmVhdGVkIHVuZGVyIHRoaXMgYWxpYXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRlQWlkfSB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWlkOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJDb250YWluZXIiLCJGb3JtIiwidXNlQ2xpZW50IiwidXNlRW1haWwiLCJ1c2VTZXRJZHMiLCJ3YWl0T3BlcmF0aW9uIiwidXNlUm91dGVyIiwiU2lnbmVyIiwic2lnbmlmeSIsImxpYnNvZGl1bSIsImdldDMyQnl0ZXMiLCJyIiwib3JpZ2luYWxTdHJpbmciLCJvcmlnaW5hbFVpbnQ4QXJyYXkiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsInBhZGRlZFVpbnQ4QXJyYXkiLCJVaW50OEFycmF5Iiwic2V0IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImZpbGwiLCJjcmVhdGVBaWQiLCJuYXZpZ2F0ZSIsInNldElkcyIsImNsaWVudCIsImVtYWlsIiwiYWxpYXMiLCJoYW5kbGVDcmVhdGVBaWQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiaWRlbnRpZmllcnMiLCJjcmVhdGUiLCJ0b2FkIiwid2l0cyIsInRoZW4iLCJpY3BSZXN1bHQxIiwicmVzcG9uc2UiLCJhaWQxIiwib3AiLCJycHlSZXN1bHQxIiwiYWRkRW5kUm9sZSIsImFnZW50IiwicHJlIiwib29iaTEiLCJvb2JpcyIsImdldCIsIklkZW50aWZpZXJzIiwibGlzdCIsImFpZHMiLCJoYW5kbGVQb3N0IiwiaSIsImNhdGNoIiwiZXJyb3IiLCJhaWQiLCJvb2JpIiwia2V5c3RhdGUiLCJrZXlTdGF0ZXMiLCJrIiwicmVhZHkiLCJzaWdpbnB1dCIsImIiLCJzaWduZXIiLCJyYXciLCJzdHRyaW5nIiwic2lnbmF0dXJlIiwic2lnbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib29iaVVybCIsIm9rIiwicHVzaCIsInN0eWxlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJHcm91cCIsImNsYXNzTmFtZSIsImNvbnRyb2xJZCIsIkxhYmVsIiwiQ29udHJvbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIlRleHQiLCJvbkNsaWNrIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/createAid/page.tsx\n"));

/***/ })

});