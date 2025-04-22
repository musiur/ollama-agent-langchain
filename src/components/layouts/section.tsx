import { LayoutProps } from "@/interfaces/layout"
import { cn } from "@/lib/utils"

export const Section = ({ children, ...props }: LayoutProps) => {
    return (
        <section className={cn(props.className, "py-20 md:py-32")} {...props}>
            {children}
        </section>
    )
}