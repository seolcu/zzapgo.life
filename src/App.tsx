import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import {
  Container,
  HStack,
  Heading,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
  Center,
} from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";
import { useState } from "react";
import "./App.css";
import Calendar from "react-calendar";
import "./Calendar.css";
import MealCard from "./components/MealCard";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { CalendarIcon, LinkIcon, SettingsIcon } from "@chakra-ui/icons";

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
              <Heading m="2">홈</Heading>
              <Box
                bg={useColorModeValue("gray.50", "gray.700")}
                rounded="md"
                p="2"
                m="2"
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

                <Center>
                  <Button
                    m="2"
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
              <Heading m="2">북마크</Heading>
              <LinkBox
                rounded="md"
                m="2"
                p="2"
                bgColor={useColorModeValue("gray.50", "gray.700")}
              >
                <Heading size="md" m="2">
                  <LinkOverlay
                    href="https://gwangcheol.hs.jne.kr/user/indexMain.action?siteId=gwangcheol_hs"
                    isExternal
                  >
                    광양제철고등학교 홈페이지
                  </LinkOverlay>
                </Heading>
                <Text>
                  Catch up on what’s been cookin’ at Smashing and explore some
                  of the most popular community resources.
                </Text>
              </LinkBox>
            </Container>
          </TabPanel>

          <TabPanel p="0">
            <Container>
              <Heading m="2">설정</Heading>
              <HStack>
                <Text>다크 모드</Text>
                <Switch
                  isChecked={colorMode === "dark" ? true : false}
                  onChange={toggleColorMode}
                  colorScheme="yellow"
                />
              </HStack>
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
            <CalendarIcon boxSize="6" m="2" />
          </Tab>
          <Tab>
            <LinkIcon boxSize="6" m="2" />
          </Tab>
          <Tab>
            <SettingsIcon boxSize="6" m="2" />
          </Tab>
        </TabList>
      </Tabs>
      <Box h="28" />
    </div>
  );
}

export default App;
