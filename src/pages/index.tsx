import { Button, Container, createStyles, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: "relative",
    paddingTop: 200,
    paddingBottom: 120,
  },

  title: {
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      height: 42,
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

const Home = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={1280} className={classes.inner}>
        <Title order={1} className={classes.title}>
          A Next.js Typescript Mantine Starter Template
        </Title>

        <div className={classes.controls}>
          <Link
            href="https://github.com/sebasyii/nextjs-typescript-mantine-starter"
            passHref
          >
            <Button component="a" className={classes.control} size="lg">
              Visit Github Page
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
