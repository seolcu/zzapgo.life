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
  Link,
} from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";
import { useState } from "react";
import "./App.css";
import Calendar from "react-calendar";
import "./Calendar.css";
import MealCard from "./components/MealCard";
import {
  Alert,
  AlertIcon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
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
              <Heading my="4">홈</Heading>

              <Alert status="warning" rounded="md" my="4">
                <AlertIcon />
                <LinkBox>
                  <LinkOverlay href="https://zzapgo-life.vercel.app" isExternal>
                    <Heading size="md">도메인 이전 안내</Heading>
                  </LinkOverlay>
                  짭고라이프의 1주년, 9월 2일을 기념해...
                  <br />
                  기존 주소(zzapgo.life)가 만료돼요.
                  <br />
                  짭고라이프를 계속 이용하시려면{" "}
                  <Text as="a" fontWeight="bold">
                    새 주소(zzapgo-life.vercel.app)
                  </Text>
                  로 접속해 다시 설치하세요.
                </LinkBox>
              </Alert>

              <LinkBox my="4">
                <Alert status="info" rounded="md">
                  <AlertIcon />
                  <LinkOverlay
                    href="https://combaboguide.tistory.com/"
                    isExternal
                  >
                    IT 블로그{" "}
                    <Text as="a" fontWeight="bold" decoration="underline">
                      "컴맹가이드"
                    </Text>{" "}
                    오픈🥳
                  </LinkOverlay>
                </Alert>
              </LinkBox>

              <Box
                bg={useColorModeValue("gray.50", "gray.700")}
                rounded="md"
                p="4"
                my="4"
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
              <Heading my="4">북마크</Heading>
              {bookMarkInfo.map((singleBookMarkInfo, index) => {
                return (
                  <LinkBox
                    key={index}
                    rounded="md"
                    my="4"
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
              <Heading my="4">설정</Heading>
              <Box
                bg={useColorModeValue("gray.50", "gray.700")}
                rounded="md"
                p="4"
                my="4"
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
