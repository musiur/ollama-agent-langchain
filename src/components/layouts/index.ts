import { Container } from "./container"
import { Section } from "./section";
import { LayoutProps } from "@/interfaces";

const Layout: Record<string, ({ children, ...props }: LayoutProps) => React.ReactNode> = {}

Layout.Container = Container
Layout.Section = Section

export default Layout