import AuthContextProvider from "./auth-context";

const ContextWrapper = ({ children}: {children: React.ReactNode}) => {
    return (
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    )
}

export default ContextWrapper;