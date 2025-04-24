import DynamicSheet from "@/components/dynamics/d-sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const NavMobileNav = () => {
  return (
    <DynamicSheet
      title="Menu"
      description="Menu"
      trigger={
        <Button size="icon" variant="outline">
          <Menu />
        </Button>
      }
      className="md:hidden"
    >
      <div>Menu</div>
    </DynamicSheet>
  );
};

export default NavMobileNav;
