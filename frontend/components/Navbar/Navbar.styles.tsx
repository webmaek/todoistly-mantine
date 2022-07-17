import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.gray[9],
    color: theme.white,
  },

  header: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  logoTitle: {
    fontSize: theme.fontSizes.xl,
  },

  linkButtonRoot: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  linkButtonInner: {
    alignItems: "center",
    justifyContent: "flex-start",
  },

  linkButtonIcon: {
    marginRight: theme.spacing.sm,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  avatar: {
    backgroundColor: theme.colors.yellow[5],
  },

  user: {
    color: theme.colors.gray[3],
  },

  email: {
    color: theme.colors.gray[5],
  },

  logoutActionButton: {
    backgroundColor: theme.fn.rgba(theme.colors.indigo[5], 0.1),

    "&:hover": {
      backgroundColor: theme.fn.rgba(theme.colors.indigo[5], 0.25),
    },
  },
}));

export default useStyles;
