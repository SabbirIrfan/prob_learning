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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _store_zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/zustand */ \"(app-pages-browser)/./src/app/store/zustand.js\");\n/* harmony import */ var _helper_clientUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/clientUtil */ \"(app-pages-browser)/./src/app/helper/clientUtil.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst get32Bytes = (r)=>{\n    const originalString = r;\n    const originalUint8Array = new TextEncoder().encode(originalString);\n    const paddedUint8Array = new Uint8Array(32);\n    paddedUint8Array.set(originalUint8Array, 0);\n    paddedUint8Array.fill(0, originalUint8Array.length, 32);\n    return paddedUint8Array;\n};\nconst createAid = ()=>{\n    _s();\n    const navigate = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const setIds = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_1__.useSetIds)();\n    const client = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_1__.useClient)();\n    const email = (0,_store_zustand__WEBPACK_IMPORTED_MODULE_1__.useEmail)();\n    let alias;\n    const handleCreateAid = (event)=>{\n        event.preventDefault();\n        alias = document.getElementById(\"formBasicName\").value;\n        client.identifiers().create(alias, {\n            toad: 3,\n            wits: [\n                \"BBilc4-L3tFUnfM_wJr4S4OJanAv_VmF_dJNN6vkf2Ha\",\n                \"BLskRTInXnMxWaGqcpSyMgo0nYbalW99cGZESrz3zapM\",\n                \"BIKKuvBwpmDVA4Ds-EpL5bt9OqPzWPja2LigFYZN2YfX\"\n            ]\n        }).then(async (icpResult1)=>{\n            console.log(\"step 2\");\n            const { response: aid1 } = await (0,_helper_clientUtil__WEBPACK_IMPORTED_MODULE_2__.waitOperation)(client, await icpResult1.op());\n            let rpyResult1 = await client.identifiers().addEndRole(alias, \"agent\", client.agent.pre);\n            await (0,_helper_clientUtil__WEBPACK_IMPORTED_MODULE_2__.waitOperation)(client, await rpyResult1.op());\n            const oobi1 = await client.oobis().get(alias, \"agent\");\n            const Identifiers = await client.identifiers().list();\n            setIds(Identifiers.aids);\n            console.log(Identifiers, icpResult1, \"OOBI: \", oobi1.oobis[0]);\n            handlePost(alias, email, await aid1.i, oobi1.oobis[0]);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    const handlePost = async (alias, email, aid, oobi)=>{\n        console.log(\"step 4\", email, alias, oobi);\n        const keystate = await client.keyStates().get(aid);\n        console.log(\"Key state\", keystate[0].k[0]);\n        //     await libsodium.ready;\n        //     let unit8arr = get32Bytes(await keystate[0].k[0]);\n        // const signer = new Signer({raw: unit8arr });\n        // const sttring = get32Bytes(\"tello world\");\n        // const signature = signer.sign(sttring);\n        // console.log(signature);\n        // const verfer = new Verfer({raw: unit8arr });\n        // const isValid = verfer.verify(signature.qb64, sttring);\n        // if (isValid) {\n        //     console.log('Signature is valid');\n        // } else {\n        //     console.log('Signature is invalid');\n        // }\n        // \n        try {\n            const response = await fetch(\"http://localhost:8081/create-aid\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email: email,\n                    alias: alias,\n                    aid: aid,\n                    oobiUrl: oobi\n                })\n            });\n            if (response.ok) {\n                console.log(\"AID created successfully\");\n                navigate.push(\"/clientDetails\");\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            style: {\n                width: \"50%\",\n                marginTop: \"100px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Group, {\n                        className: \"mb-3\",\n                        controlId: \"formBasicName\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Label, {\n                                children: \"Alias name\"\n                            }, void 0, false, {\n                                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Control, {\n                                type: \"text\",\n                                placeholder: \"Enter alias\"\n                            }, void 0, false, {\n                                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Text, {\n                                className: \"text-muted\",\n                                children: \"AID will be created under this alias\"\n                            }, void 0, false, {\n                                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        onClick: handleCreateAid,\n                        variant: \"primary\",\n                        type: \"submit\",\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n                lineNumber: 117,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/john_doe/Desktop/provenance/learning/prov_learning/keri_project/keri-front/src/app/createAid/page.tsx\",\n            lineNumber: 116,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false);\n};\n_s(createAid, \"CqA6m2QmwoEOVKtu0kvvjxth1Ms=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_1__.useSetIds,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_1__.useClient,\n        _store_zustand__WEBPACK_IMPORTED_MODULE_1__.useEmail\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (createAid);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3JlYXRlQWlkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFMEQ7QUFDUTtBQUNOO0FBRWhCO0FBSTVDLE1BQU1RLGFBQWEsQ0FBQ0M7SUFDaEIsTUFBTUMsaUJBQWlCRDtJQUN2QixNQUFNRSxxQkFBcUIsSUFBSUMsY0FBY0MsTUFBTSxDQUFDSDtJQUNwRCxNQUFNSSxtQkFBbUIsSUFBSUMsV0FBVztJQUV4Q0QsaUJBQWlCRSxHQUFHLENBQUNMLG9CQUFvQjtJQUN6Q0csaUJBQWlCRyxJQUFJLENBQUMsR0FBR04sbUJBQW1CTyxNQUFNLEVBQUU7SUFDcEQsT0FBT0o7QUFDWDtBQUNBLE1BQU1LLFlBQVk7O0lBQ2QsTUFBTUMsV0FBV2IsMERBQVNBO0lBQzFCLE1BQU1jLFNBQVNoQix5REFBU0E7SUFDeEIsTUFBTWlCLFNBQXdCbkIseURBQVNBO0lBQ3ZDLE1BQU1vQixRQUFRbkIsd0RBQVFBO0lBQ3RCLElBQUlvQjtJQUtKLE1BQU1DLGtCQUFrQixDQUFDQztRQUNyQkEsTUFBTUMsY0FBYztRQUNwQkgsUUFBUUksU0FBU0MsY0FBYyxDQUFDLGlCQUFrQkMsS0FBSztRQUV2RFIsT0FBT1MsV0FBVyxHQUFHQyxNQUFNLENBQUNSLE9BQU87WUFDL0JTLE1BQU07WUFDTkMsTUFBTTtnQkFDRjtnQkFDQTtnQkFDQTthQUNIO1FBR0wsR0FDRUMsSUFBSSxDQUFDLE9BQU9DO1lBRVZDLFFBQVFDLEdBQUcsQ0FBQztZQUNSLE1BQU0sRUFBRUMsVUFBVUMsSUFBSSxFQUFFLEdBQUcsTUFBTWxDLGlFQUFhQSxDQUFDZ0IsUUFBUSxNQUFNYyxXQUFXSyxFQUFFO1lBRTFFLElBQUlDLGFBQWEsTUFBTXBCLE9BQU9TLFdBQVcsR0FBR1ksVUFBVSxDQUFDbkIsT0FBTyxTQUFTRixPQUFRc0IsS0FBSyxDQUFFQyxHQUFHO1lBQ3pGLE1BQU12QyxpRUFBYUEsQ0FBQ2dCLFFBQVEsTUFBTW9CLFdBQVdELEVBQUU7WUFFL0MsTUFBTUssUUFBUSxNQUFNeEIsT0FBT3lCLEtBQUssR0FBR0MsR0FBRyxDQUFDeEIsT0FBTztZQUM5QyxNQUFNeUIsY0FBYyxNQUFNM0IsT0FBT1MsV0FBVyxHQUFHbUIsSUFBSTtZQUNuRDdCLE9BQU80QixZQUFZRSxJQUFJO1lBRXZCZCxRQUFRQyxHQUFHLENBQ1BXLGFBQ0FiLFlBQ0EsVUFDQVUsTUFBTUMsS0FBSyxDQUFDLEVBQUU7WUFDbEJLLFdBQVc1QixPQUFPRCxPQUFNLE1BQU1pQixLQUFLYSxDQUFDLEVBQUVQLE1BQU1DLEtBQUssQ0FBQyxFQUFFO1FBSXhELEdBQ0NPLEtBQUssQ0FBQyxDQUFDQztZQUNKbEIsUUFBUWtCLEtBQUssQ0FBQ0E7UUFDbEI7SUFHUjtJQUVBLE1BQU1ILGFBQWEsT0FBTzVCLE9BQWVELE9BQWVpQyxLQUFVQztRQUM5RHBCLFFBQVFDLEdBQUcsQ0FBQyxVQUFVZixPQUFPQyxPQUFRaUM7UUFDckMsTUFBTUMsV0FBVyxNQUFNcEMsT0FBT3FDLFNBQVMsR0FBR1gsR0FBRyxDQUFDUTtRQUM5Q25CLFFBQVFDLEdBQUcsQ0FBQyxhQUFZb0IsUUFBUSxDQUFDLEVBQUUsQ0FBQ0UsQ0FBQyxDQUFDLEVBQUU7UUFDNUMsNkJBQTZCO1FBQzdCLHlEQUF5RDtRQUV6RCwrQ0FBK0M7UUFDL0MsNkNBQTZDO1FBQzdDLDBDQUEwQztRQUMxQywwQkFBMEI7UUFDMUIsK0NBQStDO1FBRS9DLDBEQUEwRDtRQUMxRCxpQkFBaUI7UUFDakIseUNBQXlDO1FBQ3pDLFdBQVc7UUFDWCwyQ0FBMkM7UUFDM0MsSUFBSTtRQUVBLEdBQUc7UUFFSCxJQUFJO1lBRUEsTUFBTXJCLFdBQVcsTUFBTXNCLE1BQU0sb0NBQW9DO2dCQUM3REMsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUUzQyxPQUFPQTtvQkFBT0MsT0FBT0E7b0JBQU9nQyxLQUFLQTtvQkFBS1csU0FBU1Y7Z0JBQUs7WUFDL0U7WUFFQSxJQUFJbEIsU0FBUzZCLEVBQUUsRUFBRTtnQkFDYi9CLFFBQVFDLEdBQUcsQ0FBQztnQkFDWmxCLFNBQVNpRCxJQUFJLENBQUM7WUFDbEI7UUFDSixFQUFFLE9BQU9kLE9BQU87WUFDWmxCLFFBQVFrQixLQUFLLENBQUNBO1FBQ2xCO0lBQ0o7SUFDSSxxQkFDSTtrQkFFSSw0RUFBQ3RELG9HQUFTQTtZQUFDcUUsT0FBTztnQkFBRUMsT0FBTztnQkFBT0MsV0FBVztZQUFRO3NCQUNqRCw0RUFBQ3RFLG9HQUFJQTs7a0NBQ0QsOERBQUNBLG9HQUFJQSxDQUFDdUUsS0FBSzt3QkFBQ0MsV0FBVTt3QkFBT0MsV0FBVTs7MENBQ25DLDhEQUFDekUsb0dBQUlBLENBQUMwRSxLQUFLOzBDQUFDOzs7Ozs7MENBQ1osOERBQUMxRSxvR0FBSUEsQ0FBQzJFLE9BQU87Z0NBQUNDLE1BQUs7Z0NBQU9DLGFBQVk7Ozs7OzswQ0FDdEMsOERBQUM3RSxvR0FBSUEsQ0FBQzhFLElBQUk7Z0NBQUNOLFdBQVU7MENBQWE7Ozs7Ozs7Ozs7OztrQ0FJdEMsOERBQUMxRSxvR0FBTUE7d0JBQUNpRixTQUFTeEQ7d0JBQWlCeUQsU0FBUTt3QkFBVUosTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3RGO0dBaEhFM0Q7O1FBQ2VaLHNEQUFTQTtRQUNYRixxREFBU0E7UUFDTUYscURBQVNBO1FBQ3pCQyxvREFBUUE7OztBQThHdEIsK0RBQWVlLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jcmVhdGVBaWQvcGFnZS50c3g/NzEyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgRm9ybSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyB1c2VDbGllbnQsIHVzZUVtYWlsLCB1c2VTZXRJZHMgfSBmcm9tICcuLi9zdG9yZS96dXN0YW5kJztcbmltcG9ydCB7IHNsZWVwLCB3YWl0T3BlcmF0aW9uIH0gZnJvbSAnLi4vaGVscGVyL2NsaWVudFV0aWwnO1xuaW1wb3J0IEtlcmlOYXYgZnJvbSAnLi4vY29tcG9uZW50L05hdmJhcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgTWF0dGVyLCBNdHJEZXgsIE9wZXJhdGlvbiwgU2lnZXIsIFNpZ25lciwgU2lnbmlmeUNsaWVudCwgVmVyZmVyLCBiLCBjb25jYXQsIHNpZ25hdHVyZSB9IGZyb20gJ3NpZ25pZnktdHMnO1xuaW1wb3J0IGxpYnNvZGl1bSBmcm9tICdsaWJzb2RpdW0td3JhcHBlcnMtc3Vtbyc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5jb25zdCBnZXQzMkJ5dGVzID0gKHI6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsU3RyaW5nID0gcjtcbiAgICBjb25zdCBvcmlnaW5hbFVpbnQ4QXJyYXkgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUob3JpZ2luYWxTdHJpbmcpO1xuICAgIGNvbnN0IHBhZGRlZFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheSgzMik7XG4gICAgXG4gICAgcGFkZGVkVWludDhBcnJheS5zZXQob3JpZ2luYWxVaW50OEFycmF5LCAwKTtcbiAgICBwYWRkZWRVaW50OEFycmF5LmZpbGwoMCwgb3JpZ2luYWxVaW50OEFycmF5Lmxlbmd0aCwgMzIpO1xuICAgIHJldHVybiBwYWRkZWRVaW50OEFycmF5O1xufVxuY29uc3QgY3JlYXRlQWlkID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3Qgc2V0SWRzID0gdXNlU2V0SWRzKCk7XG4gICAgY29uc3QgY2xpZW50OiBTaWduaWZ5Q2xpZW50ID0gdXNlQ2xpZW50KCk7XG4gICAgY29uc3QgZW1haWwgPSB1c2VFbWFpbCgpO1xuICAgIGxldCBhbGlhczogc3RyaW5nO1xuXG4gICAgXG5cblxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZUFpZCA9IChldmVudDogeyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZDsgfSkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhbGlhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybUJhc2ljTmFtZVwiKSEudmFsdWU7XG4gICAgXG4gICAgICAgIGNsaWVudC5pZGVudGlmaWVycygpLmNyZWF0ZShhbGlhcywge1xuICAgICAgICAgICAgdG9hZDogMyxcbiAgICAgICAgICAgIHdpdHM6IFtcbiAgICAgICAgICAgICAgICAnQkJpbGM0LUwzdEZVbmZNX3dKcjRTNE9KYW5Bdl9WbUZfZEpOTjZ2a2YySGEnLFxuICAgICAgICAgICAgICAgICdCTHNrUlRJblhuTXhXYUdxY3BTeU1nbzBuWWJhbFc5OWNHWkVTcnozemFwTScsXG4gICAgICAgICAgICAgICAgJ0JJS0t1dkJ3cG1EVkE0RHMtRXBMNWJ0OU9xUHpXUGphMkxpZ0ZZWk4yWWZYJyxcbiAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgKS50aGVuKGFzeW5jIChpY3BSZXN1bHQxOiB7IG9wOiAoKSA9PiBzdHJpbmcgfCBPcGVyYXRpb248YW55PiB8IFByb21pc2VMaWtlPHN0cmluZyB8IE9wZXJhdGlvbjxhbnk+PjsgfSkgPT4ge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0ZXAgMlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHJlc3BvbnNlOiBhaWQxIH0gPSBhd2FpdCB3YWl0T3BlcmF0aW9uKGNsaWVudCwgYXdhaXQgaWNwUmVzdWx0MS5vcCgpKTtcbiAgICBcbiAgICAgICAgICAgICAgICBsZXQgcnB5UmVzdWx0MSA9IGF3YWl0IGNsaWVudC5pZGVudGlmaWVycygpLmFkZEVuZFJvbGUoYWxpYXMsICdhZ2VudCcsIGNsaWVudCEuYWdlbnQhLnByZSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgd2FpdE9wZXJhdGlvbihjbGllbnQsIGF3YWl0IHJweVJlc3VsdDEub3AoKSk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgb29iaTEgPSBhd2FpdCBjbGllbnQub29iaXMoKS5nZXQoYWxpYXMsICdhZ2VudCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IElkZW50aWZpZXJzID0gYXdhaXQgY2xpZW50LmlkZW50aWZpZXJzKCkubGlzdCgpO1xuICAgICAgICAgICAgICAgIHNldElkcyhJZGVudGlmaWVycy5haWRzKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgSWRlbnRpZmllcnMsXG4gICAgICAgICAgICAgICAgICAgIGljcFJlc3VsdDEsXG4gICAgICAgICAgICAgICAgICAgIFwiT09CSTogXCIsXG4gICAgICAgICAgICAgICAgICAgIG9vYmkxLm9vYmlzWzBdKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVQb3N0KGFsaWFzLCBlbWFpbCxhd2FpdCBhaWQxLmksIG9vYmkxLm9vYmlzWzBdKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgIH07XG4gICAgXG4gICAgY29uc3QgaGFuZGxlUG9zdCA9IGFzeW5jIChhbGlhczogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBhaWQ6IGFueSwgb29iaTogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RlcCA0XCIsIGVtYWlsLCBhbGlhcywgIG9vYmkpO1xuICAgICAgICBjb25zdCBrZXlzdGF0ZSA9IGF3YWl0IGNsaWVudC5rZXlTdGF0ZXMoKS5nZXQoYWlkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJLZXkgc3RhdGVcIixrZXlzdGF0ZVswXS5rWzBdKTtcbiAgICAvLyAgICAgYXdhaXQgbGlic29kaXVtLnJlYWR5O1xuICAgIC8vICAgICBsZXQgdW5pdDhhcnIgPSBnZXQzMkJ5dGVzKGF3YWl0IGtleXN0YXRlWzBdLmtbMF0pO1xuICAgIFxuICAgIC8vIGNvbnN0IHNpZ25lciA9IG5ldyBTaWduZXIoe3JhdzogdW5pdDhhcnIgfSk7XG4gICAgLy8gY29uc3Qgc3R0cmluZyA9IGdldDMyQnl0ZXMoXCJ0ZWxsbyB3b3JsZFwiKTtcbiAgICAvLyBjb25zdCBzaWduYXR1cmUgPSBzaWduZXIuc2lnbihzdHRyaW5nKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzaWduYXR1cmUpO1xuICAgIC8vIGNvbnN0IHZlcmZlciA9IG5ldyBWZXJmZXIoe3JhdzogdW5pdDhhcnIgfSk7XG5cbiAgICAvLyBjb25zdCBpc1ZhbGlkID0gdmVyZmVyLnZlcmlmeShzaWduYXR1cmUucWI2NCwgc3R0cmluZyk7XG4gICAgLy8gaWYgKGlzVmFsaWQpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ1NpZ25hdHVyZSBpcyB2YWxpZCcpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdTaWduYXR1cmUgaXMgaW52YWxpZCcpO1xuICAgIC8vIH1cblxuICAgICAgICAvLyBcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODEvY3JlYXRlLWFpZCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IGVtYWlsLCBhbGlhczogYWxpYXMsIGFpZDogYWlkLCBvb2JpVXJsOiBvb2JpIH0pXG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBSUQgY3JlYXRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZS5wdXNoKCcvY2xpZW50RGV0YWlscycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7LyogPEtlcmlOYXYgLz4gKi99XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgbWFyZ2luVG9wOiBcIjEwMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY05hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5BbGlhcyBuYW1lPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGFsaWFzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5UZXh0IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUlEIHdpbGwgYmUgY3JlYXRlZCB1bmRlciB0aGlzIGFsaWFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZUFpZH0gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFpZDsiXSwibmFtZXMiOlsiQnV0dG9uIiwiQ29udGFpbmVyIiwiRm9ybSIsInVzZUNsaWVudCIsInVzZUVtYWlsIiwidXNlU2V0SWRzIiwid2FpdE9wZXJhdGlvbiIsInVzZVJvdXRlciIsImdldDMyQnl0ZXMiLCJyIiwib3JpZ2luYWxTdHJpbmciLCJvcmlnaW5hbFVpbnQ4QXJyYXkiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsInBhZGRlZFVpbnQ4QXJyYXkiLCJVaW50OEFycmF5Iiwic2V0IiwiZmlsbCIsImxlbmd0aCIsImNyZWF0ZUFpZCIsIm5hdmlnYXRlIiwic2V0SWRzIiwiY2xpZW50IiwiZW1haWwiLCJhbGlhcyIsImhhbmRsZUNyZWF0ZUFpZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJpZGVudGlmaWVycyIsImNyZWF0ZSIsInRvYWQiLCJ3aXRzIiwidGhlbiIsImljcFJlc3VsdDEiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJhaWQxIiwib3AiLCJycHlSZXN1bHQxIiwiYWRkRW5kUm9sZSIsImFnZW50IiwicHJlIiwib29iaTEiLCJvb2JpcyIsImdldCIsIklkZW50aWZpZXJzIiwibGlzdCIsImFpZHMiLCJoYW5kbGVQb3N0IiwiaSIsImNhdGNoIiwiZXJyb3IiLCJhaWQiLCJvb2JpIiwia2V5c3RhdGUiLCJrZXlTdGF0ZXMiLCJrIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvb2JpVXJsIiwib2siLCJwdXNoIiwic3R5bGUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIkdyb3VwIiwiY2xhc3NOYW1lIiwiY29udHJvbElkIiwiTGFiZWwiLCJDb250cm9sIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiVGV4dCIsIm9uQ2xpY2siLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/createAid/page.tsx\n"));

/***/ })

});