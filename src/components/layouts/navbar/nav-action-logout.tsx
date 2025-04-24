"use client";

import { postLogout } from "@/actions/auth/post-logout";
import { DynamicForm } from "@/components/dynamics/d-form";
import { useAuth } from "@/providers/context/auth-context";
import { LogOutIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { startTransition, useTransition } from "react";

/**
 * NavActionLogout
 * @returns {React.ReactNode}
 * @description This is the logout button for the navbar
 */
const NavActionLogout: React.FC = (): React.ReactNode => {
  const { setUser } = useAuth();
  const [pending, setTransition] = useTransition();

  const HandleSignOut = async () => {
    setTransition(async () => {
      const result = await postLogout();

      startTransition(() => {
        if (result.success) {
          setUser(null);
          redirect("/login");
        }
      });
    });
  };

  return (
    <DynamicForm.Submit
      pending={pending}
      text="Logout"
      variant="outline"
      icon={<LogOutIcon size={16} />}
      onClick={HandleSignOut}
    />
  );
};

export default NavActionLogout;
