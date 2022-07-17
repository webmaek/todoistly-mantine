import Head from "next/head";
import { Box, Button } from "@mantine/core";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Box>
        <Button color="indigo">Hello World</Button>
      </Box>
    </>
  );
};

export default HomePage;
