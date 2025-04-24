import ContextWrapper from "./context/wrapper"

const RootProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <ContextWrapper>
            {children}
        </ContextWrapper>
    )
}

export default RootProvider