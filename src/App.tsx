import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import {
  Container,
  Flex,
  Heading,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
  Center,
  HStack,
} from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";
import { useState } from "react";
import "./App.css";
import Calendar from "react-calendar";
import "./Calendar.css";
import MealCard from "./components/MealCard";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import {
  CalendarIcon,
  ExternalLinkIcon,
  LinkIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import bookMarkInfo from "./data/bookMarkInfo";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <Tabs align="start" variant="line" colorScheme="yellow" isFitted>
        <TabPanels>
          <TabPanel p="0">
            {/* ------------------------------메인 페이지-------------------------- */}
            <Container>
              <Heading m="4">홈</Heading>
              <Box
                bg={useColorModeValue("gray.50", "gray.700")}
                rounded="md"
                p="4"
                m="4"
              >
                <Center>
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
                </Center>
                <br />
                <Center>
                  <Button
                    colorScheme="yellow"
                    onClick={() => setSelectedDate(new Date())}
                    size="sm"
                  >
                    오늘
                  </Button>
                </Center>
              </Box>

              <MealCard date={selectedDate} />
            </Container>
          </TabPanel>

          <TabPanel p="0">
            {/* --------------------------------------북마크 페이지-------------------------------------------- */}
            <Container>
              <Heading m="4">북마크</Heading>
              {bookMarkInfo.map((singleBookMarkInfo, index) => {
                return (
                  <LinkBox
                    key={index}
                    rounded="md"
                    m="4"
                    p="4"
                    bgColor={useColorModeValue("gray.50", "gray.700")}
                  >
                    <HStack>
                      <Heading size="md">
                        <LinkOverlay href={singleBookMarkInfo.url} isExternal>
                          {singleBookMarkInfo.title}
                        </LinkOverlay>
                      </Heading>
                      <ExternalLinkIcon />
                    </HStack>
                    <Text
                      as="a"
                      color={useColorModeValue("yellow.400", "yellow.200")}
                      fontWeight="bold"
                    >
                      {singleBookMarkInfo.url}
                    </Text>
                  </LinkBox>
                );
              })}
            </Container>
          </TabPanel>

          <TabPanel p="0">
            {/* --------------------------------설정 페이지-------------------------------- */}
            <Container>
              <Heading m="4">설정</Heading>
              <Box
                bg={useColorModeValue("gray.50", "gray.700")}
                rounded="md"
                p="4"
                m="4"
              >
                <Flex align="center" justify="space-between">
                  <Text>다크 모드</Text>
                  <Switch
                    isChecked={colorMode === "dark" ? true : false}
                    onChange={toggleColorMode}
                    colorScheme="yellow"
                  />
                </Flex>
              </Box>
            </Container>
          </TabPanel>
        </TabPanels>

        <TabList
          position="fixed"
          bottom="0"
          left="0"
          right="0"
          bg={useColorModeValue("gray.50", "gray.700")}
        >
          <Tab>
            <CalendarIcon boxSize="6" m="4" />
          </Tab>
          <Tab>
            <LinkIcon boxSize="6" m="4" />
          </Tab>
          <Tab>
            <SettingsIcon boxSize="6" m="4" />
          </Tab>
        </TabList>
      </Tabs>
      <Box h="28" />
    </div>
  );
}

export default App;
