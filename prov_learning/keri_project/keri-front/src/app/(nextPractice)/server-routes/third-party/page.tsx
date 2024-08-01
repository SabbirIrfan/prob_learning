import "server-only"
import ImageSlider from "../../component/image-slider";
import { clientSideFunction } from "../../component/client-utils";
export default function ThirdPartyPage() {
    
    return (
    <>
        <h1>Third Party</h1>
        {/* <p>{clientSideFunction()}</p> */}
        <ImageSlider/>
    </>
    )

}

