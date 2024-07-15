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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _store_zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/zustand */ \"(app-pages-browser)/./src/app/store/zustand.js\");\n/* harmony import */ var _helper_clientUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/clientUtil */ \"(app-pages-browser)/./src/app/helper/clientUtil.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var signify_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! signify-ts */ \"(app-pages-browser)/./node_modules/signify-ts/dist/signify-ts.mjs\");\n/* harmony import */ var libsodium_wrappers_sumo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! libsodium-wrappers-sumo */ \"(app-pages-browser)/./node_modules/libsodium-wrappers-sumo/dist/modules-sumo/libsodium-wrappers.js\");\n/* harmony import */ var libsodium_wrappers_sumo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(libsodium_wrappers_sumo__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst createAid = ()=>{\n    _s();\n    const navigate = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const setIds = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_1__.useSetIds)();\n    const client = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_1__.useClient)();\n    const email = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_1__.useEmail)();\n    let alias;\n    const handleCreateAid = (event)=>{\n        event.preventDefault();\n        alias = document.getElementById(\"formBasicName\").value;\n        client.identifiers().create(alias, {\n            toad: 3,\n            wits: [\n                \"BBilc4-L3tFUnfM_wJr4S4OJanAv_VmF_dJNN6vkf2Ha\",\n                \"BLskRTInXnMxWaGqcpSyMgo0nYbalW99cGZESrz3zapM\",\n                \"BIKKuvBwpmDVA4Ds-EpL5bt9OqPzWPja2LigFYZN2YfX\"\n            ]\n        }).then(async (icpResult1)=>{\n            console.log(\"step 2\");\n            const { response: aid1 } = await (0,_helper_clientUtil__WEBPACK_IMPORTED_MODULE_2__.waitOperation)(client, await icpResult1.op());\n            let rpyResult1 = await client.identifiers().addEndRole(alias, \"agent\", client.agent.pre);\n            await (0,_helper_clientUtil__WEBPACK_IMPORTED_MODULE_2__.waitOperation)(client, await rpyResult1.op());\n            const oobi1 = await client.oobis().get(alias, \"agent\");\n            const Identifiers = await client.identifiers().list();\n            setIds(Identifiers.aids);\n            console.log(Identifiers, icpResult1, aid1, \"OOBI: \", oobi1.oobis[0]);\n            handlePost(alias, email, await aid1.i, oobi1.oobis[0]);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    const handlePost = async (alias, email, aid, oobi)=>{\n        console.log(\"step 4\", email, alias, oobi);\n        const keystate = await client.keyStates().get(aid);\n        console.log(\"Key state\", keystate[0].k[0]);\n        await (libsodium_wrappers_sumo__WEBPACK_IMPORTED_MODULE_5___default().ready);\n        signify_ts__WEBPACK_IMPORTED_MODULE_4__[\"default\"].siginput;\n        // console.log(signify.b(keystate[0].k[0]));\n        console.lod(keystate[0].k[0]);\n        const signer = new signify_ts__WEBPACK_IMPORTED_MODULE_4__.Signer({\n            raw: signify_ts__WEBPACK_IMPORTED_MODULE_4__[\"default\"].b(keystate[0].k[0])\n        });\n        const sttring = \"hello world\";\n        const signature = signer.sign(signify_ts__WEBPACK_IMPORTED_MODULE_4__[\"default\"].b(sttring));\n        const verfer = new signify_ts__WEBPACK_IMPORTED_MODULE_4__.Verfer({\n            raw: signify_ts__WEBPACK_IMPORTED_MODULE_4__[\"default\"].b(aid)\n        });\n        console.log(verfer.verify(signature.raw, sttring));\n        // const isValid = verfer.verify(signature.qb64, sttring);\n        // if (isValid) {\n        //     console.log('Signature is valid');\n        // } else {\n        //     console.log('Signature is invalid');\n        // }\n        // \n        try {\n            const response = await fetch(\"http://localhost:8081/create-aid\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email: email,\n                    alias: alias,\n                    aid: aid,\n                    oobiUrl: oobi\n                })\n            });\n            if (response.ok) {\n                console.log(\"AID created successfully\");\n                navigate.push(\"/clientDetails\");\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            style: {\n                width: \"50%\",\n                marginTop: \"100px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, {\n                        className: \"mb-3\",\n                        controlId: \"formBasicName\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n                                children: \"Alias name\"\n                            }, void 0, false, {\n                                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n                                type: \"text\",\n                                placeholder: \"Enter alias\"\n                            }, void 0, false, {\n                                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Text, {\n                                className: \"text-muted\",\n                                children: \"AID will be created under this alias\"\n                            }, void 0, false, {\n                                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        onClick: handleCreateAid,\n                        variant: \"primary\",\n                        type: \"submit\",\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                lineNumber: 113,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n            lineNumber: 112,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false);\n};\n_s(createAid, \"CqA6m2QmwoEOVKtu0kvvjxth1Ms=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_1__.useSetIds,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_1__.useClient,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_1__.useEmail\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (createAid);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3JlYXRlQWlkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFMEQ7QUFDUTtBQUNOO0FBRWhCO0FBQ3lCO0FBQ3BDO0FBQ2U7QUFFaEQsTUFBTVksWUFBWTs7SUFDZCxNQUFNQyxXQUFXTiwwREFBU0E7SUFDMUIsTUFBTU8sU0FBU1QseURBQVNBO0lBQ3hCLE1BQU1VLFNBQXdCWix5REFBU0E7SUFDdkMsTUFBTWEsUUFBUVosd0RBQVFBO0lBQ3RCLElBQUlhO0lBS0osTUFBTUMsa0JBQWtCLENBQUNDO1FBQ3JCQSxNQUFNQyxjQUFjO1FBQ3BCSCxRQUFRSSxTQUFTQyxjQUFjLENBQUMsaUJBQWtCQyxLQUFLO1FBRXZEUixPQUFPUyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ1IsT0FBTztZQUMvQlMsTUFBTTtZQUNOQyxNQUFNO2dCQUNGO2dCQUNBO2dCQUNBO2FBQ0g7UUFHTCxHQUNFQyxJQUFJLENBQUMsT0FBT0M7WUFFVkMsUUFBUUMsR0FBRyxDQUFDO1lBQ1IsTUFBTSxFQUFFQyxVQUFVQyxJQUFJLEVBQUUsR0FBRyxNQUFNM0IsaUVBQWFBLENBQUNTLFFBQVEsTUFBTWMsV0FBV0ssRUFBRTtZQUUxRSxJQUFJQyxhQUFhLE1BQU1wQixPQUFPUyxXQUFXLEdBQUdZLFVBQVUsQ0FBQ25CLE9BQU8sU0FBU0YsT0FBUXNCLEtBQUssQ0FBRUMsR0FBRztZQUN6RixNQUFNaEMsaUVBQWFBLENBQUNTLFFBQVEsTUFBTW9CLFdBQVdELEVBQUU7WUFFL0MsTUFBTUssUUFBUSxNQUFNeEIsT0FBT3lCLEtBQUssR0FBR0MsR0FBRyxDQUFDeEIsT0FBTztZQUM5QyxNQUFNeUIsY0FBYyxNQUFNM0IsT0FBT1MsV0FBVyxHQUFHbUIsSUFBSTtZQUNuRDdCLE9BQU80QixZQUFZRSxJQUFJO1lBRXZCZCxRQUFRQyxHQUFHLENBQ1BXLGFBQ0FiLFlBQ0FJLE1BQ0EsVUFDQU0sTUFBTUMsS0FBSyxDQUFDLEVBQUU7WUFDbEJLLFdBQVc1QixPQUFPRCxPQUFNLE1BQU1pQixLQUFLYSxDQUFDLEVBQUVQLE1BQU1DLEtBQUssQ0FBQyxFQUFFO1FBSXhELEdBQ0NPLEtBQUssQ0FBQyxDQUFDQztZQUNKbEIsUUFBUWtCLEtBQUssQ0FBQ0E7UUFDbEI7SUFHUjtJQUVBLE1BQU1ILGFBQWEsT0FBTzVCLE9BQWVELE9BQWVpQyxLQUFVQztRQUM5RHBCLFFBQVFDLEdBQUcsQ0FBQyxVQUFVZixPQUFPQyxPQUFRaUM7UUFDckMsTUFBTUMsV0FBVyxNQUFNcEMsT0FBT3FDLFNBQVMsR0FBR1gsR0FBRyxDQUFDUTtRQUM5Q25CLFFBQVFDLEdBQUcsQ0FBQyxhQUFZb0IsUUFBUSxDQUFDLEVBQUUsQ0FBQ0UsQ0FBQyxDQUFDLEVBQUU7UUFDeEMsTUFBTTFDLHNFQUFlO1FBRXJCRCwyREFBZ0I7UUFFaEIsNENBQTRDO1FBQzVDb0IsUUFBUTBCLEdBQUcsQ0FBQ0wsUUFBUSxDQUFDLEVBQUUsQ0FBQ0UsQ0FBQyxDQUFDLEVBQUU7UUFDaEMsTUFBTUksU0FBUyxJQUFJakQsOENBQU1BLENBQUM7WUFBQ2tELEtBQUtoRCxvREFBUyxDQUFDeUMsUUFBUSxDQUFDLEVBQUUsQ0FBQ0UsQ0FBQyxDQUFDLEVBQUU7UUFBRTtRQUM1RCxNQUFNTyxVQUFTO1FBQ2YsTUFBTUMsWUFBWUosT0FBT0ssSUFBSSxDQUFDcEQsb0RBQVMsQ0FBQ2tEO1FBQ3hDLE1BQU1HLFNBQVMsSUFBSXRELDhDQUFNQSxDQUFDO1lBQUNpRCxLQUFLaEQsb0RBQVMsQ0FBQ3VDO1FBQUs7UUFDL0NuQixRQUFRQyxHQUFHLENBQUNnQyxPQUFPQyxNQUFNLENBQUNILFVBQVVILEdBQUcsRUFBRUU7UUFFekMsMERBQTBEO1FBQzFELGlCQUFpQjtRQUNqQix5Q0FBeUM7UUFDekMsV0FBVztRQUNYLDJDQUEyQztRQUMzQyxJQUFJO1FBRUEsR0FBRztRQUVILElBQUk7WUFFQSxNQUFNNUIsV0FBVyxNQUFNaUMsTUFBTSxvQ0FBb0M7Z0JBQzdEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRXRELE9BQU9BO29CQUFPQyxPQUFPQTtvQkFBT2dDLEtBQUtBO29CQUFLc0IsU0FBU3JCO2dCQUFLO1lBQy9FO1lBRUEsSUFBSWxCLFNBQVN3QyxFQUFFLEVBQUU7Z0JBQ2IxQyxRQUFRQyxHQUFHLENBQUM7Z0JBQ1psQixTQUFTNEQsSUFBSSxDQUFDO1lBQ2xCO1FBQ0osRUFBRSxPQUFPekIsT0FBTztZQUNabEIsUUFBUWtCLEtBQUssQ0FBQ0E7UUFDbEI7SUFDSjtJQUNJLHFCQUNJO2tCQUVJLDRFQUFDL0Msb0dBQVNBO1lBQUN5RSxPQUFPO2dCQUFFQyxPQUFPO2dCQUFPQyxXQUFXO1lBQVE7c0JBQ2pELDRFQUFDMUUsb0dBQUlBOztrQ0FDRCw4REFBQ0Esb0dBQUlBLENBQUMyRSxLQUFLO3dCQUFDQyxXQUFVO3dCQUFPQyxXQUFVOzswQ0FDbkMsOERBQUM3RSxvR0FBSUEsQ0FBQzhFLEtBQUs7MENBQUM7Ozs7OzswQ0FDWiw4REFBQzlFLG9HQUFJQSxDQUFDK0UsT0FBTztnQ0FBQ0MsTUFBSztnQ0FBT0MsYUFBWTs7Ozs7OzBDQUN0Qyw4REFBQ2pGLG9HQUFJQSxDQUFDa0YsSUFBSTtnQ0FBQ04sV0FBVTswQ0FBYTs7Ozs7Ozs7Ozs7O2tDQUl0Qyw4REFBQzlFLG9HQUFNQTt3QkFBQ3FGLFNBQVNuRTt3QkFBaUJvRSxTQUFRO3dCQUFVSixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdEY7R0FwSEV0RTs7UUFDZUwsc0RBQVNBO1FBQ1hGLHFEQUFTQTtRQUNNRixxREFBU0E7UUFDekJDLG9EQUFRQTs7O0FBa0h0QiwrREFBZVEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NyZWF0ZUFpZC9wYWdlLnRzeD83MTI4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IGN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IHVzZUNsaWVudCwgdXNlRW1haWwsIHVzZVNldElkcyB9IGZyb20gJy4uL3N0b3JlL3p1c3RhbmQnO1xuaW1wb3J0IHsgc2xlZXAsIHdhaXRPcGVyYXRpb24gfSBmcm9tICcuLi9oZWxwZXIvY2xpZW50VXRpbCc7XG5pbXBvcnQgS2VyaU5hdiBmcm9tICcuLi9jb21wb25lbnQvTmF2YmFyJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBPcGVyYXRpb24sIFNpZ25lciwgU2lnbmlmeUNsaWVudCwgVmVyZmVyfSBmcm9tICdzaWduaWZ5LXRzJztcbmltcG9ydCBzaWduaWZ5IGZyb20gJ3NpZ25pZnktdHMnO1xuaW1wb3J0IGxpYnNvZGl1bSBmcm9tICdsaWJzb2RpdW0td3JhcHBlcnMtc3Vtbyc7XG5cbmNvbnN0IGNyZWF0ZUFpZCA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHNldElkcyA9IHVzZVNldElkcygpO1xuICAgIGNvbnN0IGNsaWVudDogU2lnbmlmeUNsaWVudCA9IHVzZUNsaWVudCgpO1xuICAgIGNvbnN0IGVtYWlsID0gdXNlRW1haWwoKTtcbiAgICBsZXQgYWxpYXM6IHN0cmluZztcblxuICAgIFxuXG5cbiAgICBjb25zdCBoYW5kbGVDcmVhdGVBaWQgPSAoZXZlbnQ6IHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7IH0pID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYWxpYXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1CYXNpY05hbWVcIikhLnZhbHVlO1xuICAgIFxuICAgICAgICBjbGllbnQuaWRlbnRpZmllcnMoKS5jcmVhdGUoYWxpYXMsIHtcbiAgICAgICAgICAgIHRvYWQ6IDMsXG4gICAgICAgICAgICB3aXRzOiBbXG4gICAgICAgICAgICAgICAgJ0JCaWxjNC1MM3RGVW5mTV93SnI0UzRPSmFuQXZfVm1GX2RKTk42dmtmMkhhJyxcbiAgICAgICAgICAgICAgICAnQkxza1JUSW5Ybk14V2FHcWNwU3lNZ28wblliYWxXOTljR1pFU3J6M3phcE0nLFxuICAgICAgICAgICAgICAgICdCSUtLdXZCd3BtRFZBNERzLUVwTDVidDlPcVB6V1BqYTJMaWdGWVpOMllmWCcsXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICkudGhlbihhc3luYyAoaWNwUmVzdWx0MTogeyBvcDogKCkgPT4gc3RyaW5nIHwgT3BlcmF0aW9uPGFueT4gfCBQcm9taXNlTGlrZTxzdHJpbmcgfCBPcGVyYXRpb248YW55Pj47IH0pID0+IHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGVwIDJcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXNwb25zZTogYWlkMSB9ID0gYXdhaXQgd2FpdE9wZXJhdGlvbihjbGllbnQsIGF3YWl0IGljcFJlc3VsdDEub3AoKSk7XG4gICAgXG4gICAgICAgICAgICAgICAgbGV0IHJweVJlc3VsdDEgPSBhd2FpdCBjbGllbnQuaWRlbnRpZmllcnMoKS5hZGRFbmRSb2xlKGFsaWFzLCAnYWdlbnQnLCBjbGllbnQhLmFnZW50IS5wcmUpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHdhaXRPcGVyYXRpb24oY2xpZW50LCBhd2FpdCBycHlSZXN1bHQxLm9wKCkpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG9vYmkxID0gYXdhaXQgY2xpZW50Lm9vYmlzKCkuZ2V0KGFsaWFzLCAnYWdlbnQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBJZGVudGlmaWVycyA9IGF3YWl0IGNsaWVudC5pZGVudGlmaWVycygpLmxpc3QoKTtcbiAgICAgICAgICAgICAgICBzZXRJZHMoSWRlbnRpZmllcnMuYWlkcyk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgIElkZW50aWZpZXJzLFxuICAgICAgICAgICAgICAgICAgICBpY3BSZXN1bHQxLFxuICAgICAgICAgICAgICAgICAgICBhaWQxLFxuICAgICAgICAgICAgICAgICAgICBcIk9PQkk6IFwiLFxuICAgICAgICAgICAgICAgICAgICBvb2JpMS5vb2Jpc1swXSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlUG9zdChhbGlhcywgZW1haWwsYXdhaXQgYWlkMS5pLCBvb2JpMS5vb2Jpc1swXSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGhhbmRsZVBvc3QgPSBhc3luYyAoYWxpYXM6IHN0cmluZywgZW1haWw6IHN0cmluZywgYWlkOiBhbnksIG9vYmk6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0ZXAgNFwiLCBlbWFpbCwgYWxpYXMsICBvb2JpKTtcbiAgICAgICAgY29uc3Qga2V5c3RhdGUgPSBhd2FpdCBjbGllbnQua2V5U3RhdGVzKCkuZ2V0KGFpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiS2V5IHN0YXRlXCIsa2V5c3RhdGVbMF0ua1swXSk7XG4gICAgICAgIGF3YWl0IGxpYnNvZGl1bS5yZWFkeTtcblxuICAgICAgICBzaWduaWZ5LnNpZ2lucHV0O1xuICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzaWduaWZ5LmIoa2V5c3RhdGVbMF0ua1swXSkpO1xuICAgICAgICBjb25zb2xlLmxvZChrZXlzdGF0ZVswXS5rWzBdKTtcbiAgICBjb25zdCBzaWduZXIgPSBuZXcgU2lnbmVyKHtyYXc6IHNpZ25pZnkuYihrZXlzdGF0ZVswXS5rWzBdKSB9KTtcbiAgICBjb25zdCBzdHRyaW5nID1cImhlbGxvIHdvcmxkXCI7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gc2lnbmVyLnNpZ24oc2lnbmlmeS5iKHN0dHJpbmcpKTtcbiAgICBjb25zdCB2ZXJmZXIgPSBuZXcgVmVyZmVyKHtyYXc6IHNpZ25pZnkuYihhaWQpIH0pO1xuICAgIGNvbnNvbGUubG9nKHZlcmZlci52ZXJpZnkoc2lnbmF0dXJlLnJhdywgc3R0cmluZykpO1xuXG4gICAgLy8gY29uc3QgaXNWYWxpZCA9IHZlcmZlci52ZXJpZnkoc2lnbmF0dXJlLnFiNjQsIHN0dHJpbmcpO1xuICAgIC8vIGlmIChpc1ZhbGlkKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdTaWduYXR1cmUgaXMgdmFsaWQnKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnU2lnbmF0dXJlIGlzIGludmFsaWQnKTtcbiAgICAvLyB9XG5cbiAgICAgICAgLy8gXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgxL2NyZWF0ZS1haWQnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsOiBlbWFpbCwgYWxpYXM6IGFsaWFzLCBhaWQ6IGFpZCwgb29iaVVybDogb29iaSB9KVxuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQUlEIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGUucHVzaCgnL2NsaWVudERldGFpbHMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgey8qIDxLZXJpTmF2IC8+ICovfVxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIsIG1hcmdpblRvcDogXCIxMDBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtQmFzaWNOYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+QWxpYXMgbmFtZTwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBhbGlhc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFJRCB3aWxsIGJlIGNyZWF0ZWQgdW5kZXIgdGhpcyBhbGlhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDcmVhdGVBaWR9IHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBleHBvcnQgZGVmYXVsdCBjcmVhdGVBaWQ7Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkZvcm0iLCJ1c2VDbGllbnQiLCJ1c2VFbWFpbCIsInVzZVNldElkcyIsIndhaXRPcGVyYXRpb24iLCJ1c2VSb3V0ZXIiLCJTaWduZXIiLCJWZXJmZXIiLCJzaWduaWZ5IiwibGlic29kaXVtIiwiY3JlYXRlQWlkIiwibmF2aWdhdGUiLCJzZXRJZHMiLCJjbGllbnQiLCJlbWFpbCIsImFsaWFzIiwiaGFuZGxlQ3JlYXRlQWlkIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImlkZW50aWZpZXJzIiwiY3JlYXRlIiwidG9hZCIsIndpdHMiLCJ0aGVuIiwiaWNwUmVzdWx0MSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImFpZDEiLCJvcCIsInJweVJlc3VsdDEiLCJhZGRFbmRSb2xlIiwiYWdlbnQiLCJwcmUiLCJvb2JpMSIsIm9vYmlzIiwiZ2V0IiwiSWRlbnRpZmllcnMiLCJsaXN0IiwiYWlkcyIsImhhbmRsZVBvc3QiLCJpIiwiY2F0Y2giLCJlcnJvciIsImFpZCIsIm9vYmkiLCJrZXlzdGF0ZSIsImtleVN0YXRlcyIsImsiLCJyZWFkeSIsInNpZ2lucHV0IiwibG9kIiwic2lnbmVyIiwicmF3IiwiYiIsInN0dHJpbmciLCJzaWduYXR1cmUiLCJzaWduIiwidmVyZmVyIiwidmVyaWZ5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvb2JpVXJsIiwib2siLCJwdXNoIiwic3R5bGUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIkdyb3VwIiwiY2xhc3NOYW1lIiwiY29udHJvbElkIiwiTGFiZWwiLCJDb250cm9sIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiVGV4dCIsIm9uQ2xpY2siLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/createAid/page.tsx\n"));

/***/ })

});