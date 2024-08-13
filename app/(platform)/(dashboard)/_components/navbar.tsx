import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { FormPopover } from "@/components/form/form-popover";

import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <MobileSidebar />

      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>

        <FormPopover align="start" side="bottom" sideOffset={18}>
          <Button
            size="sm"
            variant="primary"
            className="rounded-sm hidden md:block h-auto py-1.5 px-2"
          >
            Create
          </Button>
        </FormPopover>

        <FormPopover>
          <Button
            size="sm"
            variant="primary"
            className="rounded-sm block md:hidden h-auto py-1.5 px-2"
          >
            <Plus className="size-4" />
          </Button>
        </FormPopover>
      </div>

      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          afterCreateOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            },
          }}
        />
        <UserButton
          appearance={{ elements: { avatarBox: { width: 30, height: 30 } } }}
        />
      </div>
    </nav>
  );
};
