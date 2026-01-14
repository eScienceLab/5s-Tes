import { BRANDING } from "@/constants";
import { NavLogoProps } from "@/types/tre-layout";
import Link from "next/link";

// Creates Navigation Logo Component in the Navbar

export default function NavbarLogo({
  appName = BRANDING.appName,
  adminName = BRANDING.adminName,
  href = BRANDING.homeHref,
}: NavLogoProps) {
  return (
    <Link href={href} aria-label={`${appName} ${adminName}`}>
      <div className="inline-flex items-center gap-2 whitespace-nowrap text-xl font-semibold">
        <span className="font-semibold tracking-tight">{appName}</span>
        <span className="font-normal">|</span>
        <span className="font-normal">{adminName}</span>
      </div>
    </Link>
  );
}
