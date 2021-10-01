import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
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
import MealCard from "./components/MealCard";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <Container centerContent>
        {/* <Heading size="lg">
          {selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월{" "}
          {selectedDate.getDate()}일
        </Heading> */}
        <Container
          centerContent
          bg={useColorModeValue("gray.50", "gray.700")}
          borderRadius="10"
          p="2"
          m="2"
          mt="4"
        >
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            calendarType="US"
            locale="ko-KR"
            formatDay={(locale: string, date: Date) =>
              date.getDate().toString()
            }
            next2Label={null}
            prev2Label={null}
            minDetail="month"
          />

          <Button
            m="2"
            colorScheme="yellow"
            onClick={() => setSelectedDate(new Date())}
            size="sm"
          >
            오늘
          </Button>
        </Container>

        <MealCard date={selectedDate} />

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
