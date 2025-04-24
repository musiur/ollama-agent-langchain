import Link from "next/link";
import NavActions from "./nav-actions";
import NavMenu from "./nav-menu";
import { Container } from "../container";
import BrandLogo from "@/components/assets/brand-logo";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/60 backdrop-blur-xl">
      <Container>
        <nav className="py-4 w-full flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold inline-flex items-center gap-2"
          >
            <BrandLogo /> ActionBoard
          </Link>
          <NavMenu />

          <NavActions />
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
