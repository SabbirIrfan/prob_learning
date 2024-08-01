import fs from "fs";

export const ServerComponentTwo = () => {
    fs.readFileSync("src/app/(nextPractice)/component/server-component-one.tsx","utf-8");
  return (
    <div>server-component-two</div>
  )
}
