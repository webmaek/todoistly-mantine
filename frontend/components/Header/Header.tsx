import { Box, Group, Title } from "@mantine/core";

import useHeaderStyles from "./Header.styles";

type HeaderProps = {
  title: string;
  buttons?: React.ReactNode;
};

const Header = ({ title, buttons }: HeaderProps) => {
  const { classes } = useHeaderStyles();

  return (
    <Box p="md" className={classes.wrapper}>
      <Group align="center" position="apart">
        <Title order={2}>{title}</Title>

        {buttons && <>{buttons}</>}
      </Group>
    </Box>
  );
};

export default Header;
