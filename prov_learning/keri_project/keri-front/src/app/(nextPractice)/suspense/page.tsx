import { Suspense } from "react";
import Login from "../complex-dashboard/@login/page";

export default function Page() {
    return (
        <div>
            <h1>Suspense</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <Login />
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
                <Login />
            </Suspense>
        </div>
    );
}