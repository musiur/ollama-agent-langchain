"use client";

import ThemeToggle from "@/components/common/theme-toggle";
import DynamicAvatar from "@/components/dynamics/d-avatar/d-avatar";
import DynamicPopover from "@/components/dynamics/d-popover/d-popover";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers/context/auth-context";
import Link from "next/link";
import { HTMLAttributes } from "react";
import Flex from "../flex-layout";
import NavActionPopoverContents from "./nav-action-popover-contents";
import NavMobileNav from "./nav-mobile-menu";

/**
 * NavActions component
 * @param {Object} props - The component props
 * @param {boolean} props.isDashboard - Whether the component is used in the dashboard
 * @returns {JSX.Element} The rendered component
 */
const NavActions = (
  props: HTMLAttributes<HTMLDivElement> & { isDashboard?: boolean }
): React.ReactNode => {
  const { isDashboard = false } = props;
  const { user } = useAuth();

  const trigger = (
    <button>
      <DynamicAvatar />
    </button>
  );

  return (
    <Flex className="w-auto items-center gap-4">
      <ThemeToggle />

      {user ? (
        <DynamicPopover
          trigger={trigger}
          content={<NavActionPopoverContents />}
        />
      ) : (
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      )}
      {!isDashboard && <NavMobileNav />}
    </Flex>
  );
};

export default NavActions;
