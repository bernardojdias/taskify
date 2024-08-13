import { startCase } from "lodash";
import { auth } from "@clerk/nextjs/server";

import { OrgControl } from "./_components/org-control";

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "organization"),
  };
}

export default function OrganizationIdLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}
