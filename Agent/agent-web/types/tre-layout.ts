 {/* ---- Types for TRE Layout ---- */}

// User menu button types
export type UserMenuProps = {
  username: string;
  onAccount?: () => void;
  onHelpdesk?: () => void;
  onLogout?: () => void;
};

// Navbar logo types
export type NavLogoProps = {
  appName?: string;
  adminName?: string;
  href?: string;
};


// Navbar navigation item types
export type MenubarItems = {
  label: string;
  href: string;
};