import { useRouter } from "next/router";
import Link from "next/link";
import {
  Navbar,
  Group,
  Avatar,
  Title,
  Button,
  Stack,
  Text,
  ActionIcon,
} from "@mantine/core";
import {
  Home,
  ListDetails,
  CalendarEvent,
  Notebook,
  Wallet,
  Logout,
} from "tabler-icons-react";

import useNavbarStyles from "./Navbar.styles";

const StyledNavbar = () => {
  const router = useRouter();
  const { classes } = useNavbarStyles();

  const navigation = [
    {
      name: "Dashboard",
      href: "/",
      icon: Home,
      isActive: router.pathname === "/",
    },
    {
      name: "Task Board",
      href: "/task-board",
      icon: ListDetails,
      isActive: router.pathname === "/task-board",
    },
    {
      name: "Calendar & Events",
      href: "/calendar",
      icon: CalendarEvent,
      isActive: router.pathname === "/calendar",
    },
    {
      name: "Kanban",
      href: "/kanban",
      icon: Notebook,
      isActive: router.pathname === "/kanban",
    },
    {
      name: "Budget",
      href: "/budget",
      icon: Wallet,
      isActive: router.pathname === "/budget",
    },
  ];

  return (
    <Navbar className={classes.navbar} width={{ base: 300 }} p="md">
      <Navbar.Section className={classes.header} px={20} pb={20}>
        <Group align="center">
          <Avatar src="/logo.png" alt="Todoistly Logo" radius="xl" />
          <Title className={classes.logoTitle} order={1}>
            Todoistly
          </Title>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow>
        <Stack mt={20}>
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button
                size="md"
                component="a"
                color="indigo"
                classNames={{ inner: classes.linkButtonInner }}
              >
                <item.icon className={classes.linkButtonIcon} />
                {item.name}
              </Button>
            </Link>
          ))}
        </Stack>
      </Navbar.Section>

      <Navbar.Section className={classes.footer} py={20} px="md">
        <Group align="center" position="apart">
          <Group align="center">
            <Avatar
              className={classes.avatar}
              src="avatar.svg"
              alt="Avatar"
              radius="md"
            />
            <Stack spacing={0}>
              <Text className={classes.user} size="md">
                John Doe
              </Text>
              <Text className={classes.email} size="xs">
                john@doe.com
              </Text>
            </Stack>
          </Group>

          <ActionIcon
            className={classes.logoutActionButton}
            color="indigo"
            variant="light"
          >
            <Logout />
          </ActionIcon>
        </Group>
      </Navbar.Section>
    </Navbar>
  );
};

export default StyledNavbar;
