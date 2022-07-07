import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Center, Container, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";
import { useState } from "react";
import "./App.css";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Container>
        <Flex>
          <Text>다크 모드</Text>
          <Spacer />
          <Switch
            isChecked={colorMode === "dark" ? true : false}
            onChange={toggleColorMode}
            colorScheme="teal"
          />
        </Flex>
      </Container>
    </div>
  );
}

export default App;
