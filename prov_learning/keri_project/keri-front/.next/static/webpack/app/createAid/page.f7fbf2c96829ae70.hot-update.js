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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _store_zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/zustand */ \"(app-pages-browser)/./src/app/store/zustand.js\");\n/* harmony import */ var _helper_clientUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/clientUtil */ \"(app-pages-browser)/./src/app/helper/clientUtil.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var signify_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! signify-ts */ \"(app-pages-browser)/./node_modules/signify-ts/dist/signify-ts.mjs\");\n/* harmony import */ var libsodium_wrappers_sumo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! libsodium-wrappers-sumo */ \"(app-pages-browser)/./node_modules/libsodium-wrappers-sumo/dist/modules-sumo/libsodium-wrappers.js\");\n/* harmony import */ var libsodium_wrappers_sumo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(libsodium_wrappers_sumo__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst get32Bytes = (r)=>{\n    const originalString = r;\n    const originalUint8Array = new TextEncoder().encode(originalString);\n    const paddedUint8Array = new Uint8Array(32);\n    paddedUint8Array.set(originalUint8Array, 0);\n    console.log(originalUint8Array);\n    if (originalUint8Array.length < 32) {\n        paddedUint8Array.fill(0, originalUint8Array.length, 32);\n    }\n    return paddedUint8Array;\n};\nconst createAid = ()=>{\n    _s();\n    const navigate = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const setIds = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_1__.useSetIds)();\n    const client = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_1__.useClient)();\n    const email = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_1__.useEmail)();\n    let alias;\n    const handleCreateAid = (event)=>{\n        event.preventDefault();\n        alias = document.getElementById(\"formBasicName\").value;\n        client.identifiers().create(alias, {\n            toad: 3,\n            wits: [\n                \"BBilc4-L3tFUnfM_wJr4S4OJanAv_VmF_dJNN6vkf2Ha\",\n                \"BLskRTInXnMxWaGqcpSyMgo0nYbalW99cGZESrz3zapM\",\n                \"BIKKuvBwpmDVA4Ds-EpL5bt9OqPzWPja2LigFYZN2YfX\"\n            ]\n        }).then(async (icpResult1)=>{\n            console.log(\"step 2\");\n            const { response: aid1 } = await (0,_helper_clientUtil__WEBPACK_IMPORTED_MODULE_2__.waitOperation)(client, await icpResult1.op());\n            let rpyResult1 = await client.identifiers().addEndRole(alias, \"agent\", client.agent.pre);\n            await (0,_helper_clientUtil__WEBPACK_IMPORTED_MODULE_2__.waitOperation)(client, await rpyResult1.op());\n            const oobi1 = await client.oobis().get(alias, \"agent\");\n            const Identifiers = await client.identifiers().list();\n            setIds(Identifiers.aids);\n            console.log(Identifiers, icpResult1, \"OOBI: \", oobi1.oobis[0]);\n            handlePost(alias, email, await aid1.i, oobi1.oobis[0]);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    const handlePost = async (alias, email, aid, oobi)=>{\n        var _signature_verfer;\n        console.log(\"step 4\", email, alias, oobi);\n        const keystate = await client.keyStates().get(aid);\n        console.log(\"Key state\", keystate[0].k[0]);\n        await (libsodium_wrappers_sumo__WEBPACK_IMPORTED_MODULE_5___default().ready);\n        signify_ts__WEBPACK_IMPORTED_MODULE_4__[\"default\"].siginput;\n        console.log(signify_ts__WEBPACK_IMPORTED_MODULE_4__[\"default\"].b(keystate[0].k[0]));\n        const signer = new signify_ts__WEBPACK_IMPORTED_MODULE_4__.Signer({\n            raw: signify_ts__WEBPACK_IMPORTED_MODULE_4__[\"default\"].b(keystate[0].k[0])\n        });\n        const sttring = \"hello world\";\n        const signature = signer.sign(signify_ts__WEBPACK_IMPORTED_MODULE_4__[\"default\"].b(sttring));\n        console.log(signature);\n        const verfer = new signify_ts__WEBPACK_IMPORTED_MODULE_4__.Verfer({\n            raw: signify_ts__WEBPACK_IMPORTED_MODULE_4__[\"default\"].b(aid)\n        });\n        console.log(\"signature\", (_signature_verfer = signature.verfer) === null || _signature_verfer === void 0 ? void 0 : _signature_verfer._ed25519);\n        console.log(verfer.verify(signature.qb64b, sttring));\n        // const isValid = verfer.verify(signature.qb64, sttring);\n        // if (isValid) {\n        //     console.log('Signature is valid');\n        // } else {\n        //     console.log('Signature is invalid');\n        // }\n        // \n        try {\n            const response = await fetch(\"http://localhost:8081/create-aid\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email: email,\n                    alias: alias,\n                    aid: aid,\n                    oobiUrl: oobi\n                })\n            });\n            if (response.ok) {\n                console.log(\"AID created successfully\");\n                navigate.push(\"/clientDetails\");\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            style: {\n                width: \"50%\",\n                marginTop: \"100px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, {\n                        className: \"mb-3\",\n                        controlId: \"formBasicName\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n                                children: \"Alias name\"\n                            }, void 0, false, {\n                                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n                                type: \"text\",\n                                placeholder: \"Enter alias\"\n                            }, void 0, false, {\n                                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Text, {\n                                className: \"text-muted\",\n                                children: \"AID will be created under this alias\"\n                            }, void 0, false, {\n                                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        onClick: handleCreateAid,\n                        variant: \"primary\",\n                        type: \"submit\",\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                lineNumber: 125,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n            lineNumber: 124,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false);\n};\n_s(createAid, \"CqA6m2QmwoEOVKtu0kvvjxth1Ms=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_1__.useSetIds,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_1__.useClient,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_1__.useEmail\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (createAid);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3JlYXRlQWlkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFMEQ7QUFDUTtBQUNOO0FBRWhCO0FBQ3lCO0FBQ3BDO0FBQ2U7QUFFaEQsTUFBTVksYUFBYSxDQUFDQztJQUNoQixNQUFNQyxpQkFBaUJEO0lBQ3ZCLE1BQU1FLHFCQUFxQixJQUFJQyxjQUFjQyxNQUFNLENBQUNIO0lBQ3BELE1BQU1JLG1CQUFtQixJQUFJQyxXQUFXO0lBRXhDRCxpQkFBaUJFLEdBQUcsQ0FBQ0wsb0JBQW9CO0lBQ3pDTSxRQUFRQyxHQUFHLENBQUNQO0lBQ1osSUFBSUEsbUJBQW1CUSxNQUFNLEdBQUcsSUFBSTtRQUNsQ0wsaUJBQWlCTSxJQUFJLENBQUMsR0FBR1QsbUJBQW1CUSxNQUFNLEVBQUU7SUFDdEQ7SUFDQSxPQUFPTDtBQUNUO0FBQ0YsTUFBTU8sWUFBWTs7SUFDZCxNQUFNQyxXQUFXbkIsMERBQVNBO0lBQzFCLE1BQU1vQixTQUFTdEIseURBQVNBO0lBQ3hCLE1BQU11QixTQUF3QnpCLHlEQUFTQTtJQUN2QyxNQUFNMEIsUUFBUXpCLHdEQUFRQTtJQUN0QixJQUFJMEI7SUFLSixNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDckJBLE1BQU1DLGNBQWM7UUFDcEJILFFBQVFJLFNBQVNDLGNBQWMsQ0FBQyxpQkFBa0JDLEtBQUs7UUFFdkRSLE9BQU9TLFdBQVcsR0FBR0MsTUFBTSxDQUFDUixPQUFPO1lBQy9CUyxNQUFNO1lBQ05DLE1BQU07Z0JBQ0Y7Z0JBQ0E7Z0JBQ0E7YUFDSDtRQUdMLEdBQ0VDLElBQUksQ0FBQyxPQUFPQztZQUVWckIsUUFBUUMsR0FBRyxDQUFDO1lBQ1IsTUFBTSxFQUFFcUIsVUFBVUMsSUFBSSxFQUFFLEdBQUcsTUFBTXRDLGlFQUFhQSxDQUFDc0IsUUFBUSxNQUFNYyxXQUFXRyxFQUFFO1lBRTFFLElBQUlDLGFBQWEsTUFBTWxCLE9BQU9TLFdBQVcsR0FBR1UsVUFBVSxDQUFD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Ozs7OzswQ0FDdEMsOERBQUM3RixvR0FBSUEsQ0FBQzhGLElBQUk7Z0NBQUNOLFdBQVU7MENBQWE7Ozs7Ozs7Ozs7OztrQ0FJdEMsOERBQUMxRixvR0FBTUE7d0JBQUNpRyxTQUFTbEU7d0JBQWlCbUUsU0FBUTt3QkFBVUosTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3RGO0dBcEhFckU7O1FBQ2VsQixzREFBU0E7UUFDWEYscURBQVNBO1FBQ01GLHFEQUFTQTtRQUN6QkMsb0RBQVFBOzs7QUFrSHRCLCtEQUFlcUIsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NyZWF0ZUFpZC9wYWdlLnRzeD83MTI4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IGN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IHVzZUNsaWVudCwgdXNlRW1haWwsIHVzZVNldElkcyB9IGZyb20gJy4uL3N0b3JlL3p1c3RhbmQnO1xuaW1wb3J0IHsgc2xlZXAsIHdhaXRPcGVyYXRpb24gfSBmcm9tICcuLi9oZWxwZXIvY2xpZW50VXRpbCc7XG5pbXBvcnQgS2VyaU5hdiBmcm9tICcuLi9jb21wb25lbnQvTmF2YmFyJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBPcGVyYXRpb24sIFNpZ25lciwgU2lnbmlmeUNsaWVudCwgVmVyZmVyfSBmcm9tICdzaWduaWZ5LXRzJztcbmltcG9ydCBzaWduaWZ5IGZyb20gJ3NpZ25pZnktdHMnO1xuaW1wb3J0IGxpYnNvZGl1bSBmcm9tICdsaWJzb2RpdW0td3JhcHBlcnMtc3Vtbyc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5jb25zdCBnZXQzMkJ5dGVzID0gKHI6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4geyAgXG4gICAgY29uc3Qgb3JpZ2luYWxTdHJpbmcgPSByOyAgXG4gICAgY29uc3Qgb3JpZ2luYWxVaW50OEFycmF5ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKG9yaWdpbmFsU3RyaW5nKTsgIFxuICAgIGNvbnN0IHBhZGRlZFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheSgzMik7ICBcbiAgXG4gICAgcGFkZGVkVWludDhBcnJheS5zZXQob3JpZ2luYWxVaW50OEFycmF5LCAwKTsgIFxuICAgIGNvbnNvbGUubG9nKG9yaWdpbmFsVWludDhBcnJheSk7XG4gICAgaWYgKG9yaWdpbmFsVWludDhBcnJheS5sZW5ndGggPCAzMikgeyAgXG4gICAgICBwYWRkZWRVaW50OEFycmF5LmZpbGwoMCwgb3JpZ2luYWxVaW50OEFycmF5Lmxlbmd0aCwgMzIpOyAgXG4gICAgfSAgXG4gICAgcmV0dXJuIHBhZGRlZFVpbnQ4QXJyYXk7ICBcbiAgfVxuY29uc3QgY3JlYXRlQWlkID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3Qgc2V0SWRzID0gdXNlU2V0SWRzKCk7XG4gICAgY29uc3QgY2xpZW50OiBTaWduaWZ5Q2xpZW50ID0gdXNlQ2xpZW50KCk7XG4gICAgY29uc3QgZW1haWwgPSB1c2VFbWFpbCgpO1xuICAgIGxldCBhbGlhczogc3RyaW5nO1xuXG4gICAgXG5cblxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZUFpZCA9IChldmVudDogeyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZDsgfSkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhbGlhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybUJhc2ljTmFtZVwiKSEudmFsdWU7XG4gICAgXG4gICAgICAgIGNsaWVudC5pZGVudGlmaWVycygpLmNyZWF0ZShhbGlhcywge1xuICAgICAgICAgICAgdG9hZDogMyxcbiAgICAgICAgICAgIHdpdHM6IFtcbiAgICAgICAgICAgICAgICAnQkJpbGM0LUwzdEZVbmZNX3dKcjRTNE9KYW5Bdl9WbUZfZEpOTjZ2a2YySGEnLFxuICAgICAgICAgICAgICAgICdCTHNrUlRJblhuTXhXYUdxY3BTeU1nbzBuWWJhbFc5OWNHWkVTcnozemFwTScsXG4gICAgICAgICAgICAgICAgJ0JJS0t1dkJ3cG1EVkE0RHMtRXBMNWJ0OU9xUHpXUGphMkxpZ0ZZWk4yWWZYJyxcbiAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgKS50aGVuKGFzeW5jIChpY3BSZXN1bHQxOiB7IG9wOiAoKSA9PiBzdHJpbmcgfCBPcGVyYXRpb248YW55PiB8IFByb21pc2VMaWtlPHN0cmluZyB8IE9wZXJhdGlvbjxhbnk+PjsgfSkgPT4ge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0ZXAgMlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHJlc3BvbnNlOiBhaWQxIH0gPSBhd2FpdCB3YWl0T3BlcmF0aW9uKGNsaWVudCwgYXdhaXQgaWNwUmVzdWx0MS5vcCgpKTtcbiAgICBcbiAgICAgICAgICAgICAgICBsZXQgcnB5UmVzdWx0MSA9IGF3YWl0IGNsaWVudC5pZGVudGlmaWVycygpLmFkZEVuZFJvbGUoYWxpYXMsICdhZ2VudCcsIGNsaWVudCEuYWdlbnQhLnByZSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgd2FpdE9wZXJhdGlvbihjbGllbnQsIGF3YWl0IHJweVJlc3VsdDEub3AoKSk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgb29iaTEgPSBhd2FpdCBjbGllbnQub29iaXMoKS5nZXQoYWxpYXMsICdhZ2VudCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IElkZW50aWZpZXJzID0gYXdhaXQgY2xpZW50LmlkZW50aWZpZXJzKCkubGlzdCgpO1xuICAgICAgICAgICAgICAgIHNldElkcyhJZGVudGlmaWVycy5haWRzKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgSWRlbnRpZmllcnMsXG4gICAgICAgICAgICAgICAgICAgIGljcFJlc3VsdDEsXG4gICAgICAgICAgICAgICAgICAgIFwiT09CSTogXCIsXG4gICAgICAgICAgICAgICAgICAgIG9vYmkxLm9vYmlzWzBdKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVQb3N0KGFsaWFzLCBlbWFpbCxhd2FpdCBhaWQxLmksIG9vYmkxLm9vYmlzWzBdKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgIH07XG4gICAgXG4gICAgY29uc3QgaGFuZGxlUG9zdCA9IGFzeW5jIChhbGlhczogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBhaWQ6IGFueSwgb29iaTogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RlcCA0XCIsIGVtYWlsLCBhbGlhcywgIG9vYmkpO1xuICAgICAgICBjb25zdCBrZXlzdGF0ZSA9IGF3YWl0IGNsaWVudC5rZXlTdGF0ZXMoKS5nZXQoYWlkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJLZXkgc3RhdGVcIixrZXlzdGF0ZVswXS5rWzBdKTtcbiAgICAgICAgYXdhaXQgbGlic29kaXVtLnJlYWR5O1xuXG4gICAgICAgIHNpZ25pZnkuc2lnaW5wdXQ7XG4gICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHNpZ25pZnkuYihrZXlzdGF0ZVswXS5rWzBdKSk7XG4gICAgY29uc3Qgc2lnbmVyID0gbmV3IFNpZ25lcih7cmF3OiBzaWduaWZ5LmIoa2V5c3RhdGVbMF0ua1swXSkgfSk7XG4gICAgY29uc3Qgc3R0cmluZyA9XCJoZWxsbyB3b3JsZFwiO1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHNpZ25lci5zaWduKHNpZ25pZnkuYihzdHRyaW5nKSk7XG4gICAgY29uc29sZS5sb2coc2lnbmF0dXJlKTtcbiAgICBjb25zdCB2ZXJmZXIgPSBuZXcgVmVyZmVyKHtyYXc6IHNpZ25pZnkuYihhaWQpIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNpZ25hdHVyZVwiLHNpZ25hdHVyZS52ZXJmZXI/Ll9lZDI1NTE5KTtcbiAgICBjb25zb2xlLmxvZyh2ZXJmZXIudmVyaWZ5KHNpZ25hdHVyZS5xYjY0Yiwgc3R0cmluZykpO1xuXG4gICAgLy8gY29uc3QgaXNWYWxpZCA9IHZlcmZlci52ZXJpZnkoc2lnbmF0dXJlLnFiNjQsIHN0dHJpbmcpO1xuICAgIC8vIGlmIChpc1ZhbGlkKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdTaWduYXR1cmUgaXMgdmFsaWQnKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnU2lnbmF0dXJlIGlzIGludmFsaWQnKTtcbiAgICAvLyB9XG5cbiAgICAgICAgLy8gXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgxL2NyZWF0ZS1haWQnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsOiBlbWFpbCwgYWxpYXM6IGFsaWFzLCBhaWQ6IGFpZCwgb29iaVVybDogb29iaSB9KVxuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQUlEIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGUucHVzaCgnL2NsaWVudERldGFpbHMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgey8qIDxLZXJpTmF2IC8+ICovfVxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIsIG1hcmdpblRvcDogXCIxMDBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtQmFzaWNOYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+QWxpYXMgbmFtZTwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBhbGlhc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFJRCB3aWxsIGJlIGNyZWF0ZWQgdW5kZXIgdGhpcyBhbGlhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDcmVhdGVBaWR9IHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBleHBvcnQgZGVmYXVsdCBjcmVhdGVBaWQ7Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkZvcm0iLCJ1c2VDbGllbnQiLCJ1c2VFbWFpbCIsInVzZVNldElkcyIsIndhaXRPcGVyYXRpb24iLCJ1c2VSb3V0ZXIiLCJTaWduZXIiLCJWZXJmZXIiLCJzaWduaWZ5IiwibGlic29kaXVtIiwiZ2V0MzJCeXRlcyIsInIiLCJvcmlnaW5hbFN0cmluZyIsIm9yaWdpbmFsVWludDhBcnJheSIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwicGFkZGVkVWludDhBcnJheSIsIlVpbnQ4QXJyYXkiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZmlsbCIsImNyZWF0ZUFpZCIsIm5hdmlnYXRlIiwic2V0SWRzIiwiY2xpZW50IiwiZW1haWwiLCJhbGlhcyIsImhhbmRsZUNyZWF0ZUFpZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJpZGVudGlmaWVycyIsImNyZWF0ZSIsInRvYWQiLCJ3aXRzIiwidGhlbiIsImljcFJlc3VsdDEiLCJyZXNwb25zZSIsImFpZDEiLCJvcCIsInJweVJlc3VsdDEiLCJhZGRFbmRSb2xlIiwiYWdlbnQiLCJwcmUiLCJvb2JpMSIsIm9vYmlzIiwiZ2V0IiwiSWRlbnRpZmllcnMiLCJsaXN0IiwiYWlkcyIsImhhbmRsZVBvc3QiLCJpIiwiY2F0Y2giLCJlcnJvciIsImFpZCIsIm9vYmkiLCJzaWduYXR1cmUiLCJrZXlzdGF0ZSIsImtleVN0YXRlcyIsImsiLCJyZWFkeSIsInNpZ2lucHV0IiwiYiIsInNpZ25lciIsInJhdyIsInN0dHJpbmciLCJzaWduIiwidmVyZmVyIiwiX2VkMjU1MTkiLCJ2ZXJpZnkiLCJxYjY0YiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib29iaVVybCIsIm9rIiwicHVzaCIsInN0eWxlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJHcm91cCIsImNsYXNzTmFtZSIsImNvbnRyb2xJZCIsIkxhYmVsIiwiQ29udHJvbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIlRleHQiLCJvbkNsaWNrIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/createAid/page.tsx\n"));

/***/ })

});