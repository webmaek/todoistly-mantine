import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    borderBottom: "1px solid",
    borderColor: theme.fn.rgba(theme.colors.gray[6], 0.1),
  },
}));

export default useStyles;
