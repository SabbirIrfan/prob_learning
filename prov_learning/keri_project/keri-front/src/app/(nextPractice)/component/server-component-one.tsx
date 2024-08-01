import fs from "fs";
import { ServerComponentTwo } from "./server-component-two";
import ClientComponentOne from "./client-component-one";

export const ServerComponentOne = () => {
    fs.readFileSync("src/app/(nextPractice)/component/server-component-one.tsx","utf-8");
  return (
    <>
    <div>server-component-one</div>
    <ServerComponentTwo/>
    {/* <ClientComponentOne /> */}
    </>
    
  )
}
