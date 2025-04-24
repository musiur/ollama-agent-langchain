import DynamicAvatar from "@/components/dynamics/d-avatar/d-avatar";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import NavActionLogout from "./nav-action-logout";

/**
 * NavActionPopoverContents
 * @returns {React.ReactNode}
 * @description This is the contents for the nav action popover
 */
const NavActionPopoverContents: React.FC = (): React.ReactNode => {
  return (
    <div className="w-64  rounded-md overflow-hidden flex flex-col">
      <Link href="/musiur" className="p-3  flex items-center gap-2">
        <DynamicAvatar />
        <span className="font-medium">Musiur Alam Opu</span>
      </Link>
      <Link href="/dashboard" className="p-3 ">
        <span>Dashboard</span>
      </Link>

      <Separator />
      <Link href="/create" className="p-3  flex items-center gap-2">
        <PlusIcon size={16} />
        <span>New Knowledge Base</span>
      </Link>
      <Link href="/new-collection" className="p-3  flex items-center gap-2">
        <PlusIcon size={16} />
        <span>New Collection</span>
      </Link>

      <Separator />

      <Link href="/create-organization" className="p-3 ">
        <span>Create organization</span>
      </Link>

      <Link href="/dashboard/profile" className="p-3 ">
        <span>Settings</span>
      </Link>

      <NavActionLogout />
    </div>
  );
};

export default NavActionPopoverContents;
