import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { memo, FC } from "react";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

export const Home: FC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      {/* <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          User Management App
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="User ID" />
          <PrimaryButton>Login</PrimaryButton>
        </Stack>
      </Box> */}
    </Flex>
  );
});
