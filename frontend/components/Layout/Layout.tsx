import { AppShell } from "@mantine/core";

import StyledNavbar from "@/components/Navbar";
import { useMantineTheme } from "@mantine/core";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useMantineTheme();

  return (
    <AppShell padding={0} navbar={<StyledNavbar />}>
      {children}
    </AppShell>
  );
};

export default Layout;
