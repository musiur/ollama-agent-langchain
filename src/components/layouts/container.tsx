import { LayoutProps } from "@/interfaces"
import { cn } from "@/lib/utils"


export const Container = ({children, ...props}: LayoutProps): React.ReactNode => {
    return(
        <div className={cn(props.className, "max-w-2xl mx-auto px-4 md:px-0")} {...props}>
            {children}
        </div>
    )
}