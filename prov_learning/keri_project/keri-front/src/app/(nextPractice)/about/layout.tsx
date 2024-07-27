export default function nestedLayout(
    {children,}:{children: React.ReactNode}) {

        return (
            <>
            <h2>This is nested layout</h2>
                {children}
            </>
        )
    }