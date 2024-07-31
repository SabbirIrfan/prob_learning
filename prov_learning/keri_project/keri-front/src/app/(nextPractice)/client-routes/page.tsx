"use client";

import { useTheme } from "../component/theme-provider";

// import ServerUtilFunction from "../utils/server-utils";

export default function ClientRoutePage() {
    console.log("Client routes rendered with a server component");
//   const result = ServerUtilFunction();
    const theme = useTheme();
    const setting = {
        dots:true,
        
    }

  return (
    <>
      <div style={{color: theme.colors.secondary}}>Client Routes</div>
      {/* <p>{result}</p> */}
    </>
  );
}
