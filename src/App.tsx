import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";
import { useState } from "react";
import "./App.css";
import Calendar from "react-calendar";
import "./Calendar.css";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <Container centerContent>
        <Heading>
          {selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월{" "}
          {selectedDate.getDate()}일
        </Heading>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          calendarType="US"
          locale="ko-KR"
          formatDay={(locale: string, date: Date) => date.getDate().toString()}
          next2Label={null}
          prev2Label={null}
          minDetail="month"
        />
        <Button
          colorScheme="yellow"
          onClick={() => setSelectedDate(new Date())}
          size="sm"
        >
          오늘
        </Button>
        <HStack>
          <Text>다크 모드</Text>
          <Switch
            isChecked={colorMode === "dark" ? true : false}
            onChange={toggleColorMode}
            colorScheme="yellow"
          />
        </HStack>
      </Container>
    </div>
  );
}

export default App;
