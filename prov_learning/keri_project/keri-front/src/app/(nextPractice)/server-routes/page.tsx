import React from "react";
import ServerUtilFunction from "../utils/server-utils";

export default function ServerRoutePage() {

    const result = ServerUtilFunction();
   
    return (
        <>
        <h1>Server Routes</h1>
        <p>{result}</p>
        </>
    )
}