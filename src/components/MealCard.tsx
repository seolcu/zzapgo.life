import {
  Alert,
  AlertIcon,
  Badge,
  Heading,
  HStack,
  ListItem,
  SkeletonText,
  Box,
  UnorderedList,
  useColorModeValue,
  Spinner,
  Center,
  Divider,
} from "@chakra-ui/react";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

interface MealCardProps {
  date: Date;
}

function MealCard({ date }: MealCardProps) {
  const url = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=015f0705bbe0482589da35f787d46817&Type=json&pIndex=1&pSize=3&ATPT_OFCDC_SC_CODE=Q10&SD_SCHUL_CODE=8490078&MLSV_YMD=${date.getFullYear()}${(
    "0" +
    (date.getMonth() + 1)
  ).slice(-2)}${("0" + date.getDate()).slice(-2)}`;

  const { data, error } = useSWR(url, fetcher);

  if (error) {
    return (
      <Alert status="error" my="4" rounded="md">
        <AlertIcon />
        급식을 불러오는 중 에러가 발생했습니다.
      </Alert>
    );
  }

  if (!data) {
    return (
      <Center>
        <Spinner color="yellow" size="xl" m="4" />
      </Center>
    );
  }

  try {
    const mealDataArray: Array<object> = data.mealServiceDietInfo[1].row;
    return (
      <Box
        my="4"
        p="4"
        rounded="md"
        bg={useColorModeValue("gray.50", "gray.700")}
      >
        {mealDataArray.map((singleMealData: any, index: number) => {
          const mealType = singleMealData.MMEAL_SC_CODE;
          const hours = new Date().getHours();
          const menuString: string = singleMealData.DDISH_NM;
          const menuArray = menuString.split("<br/>");
          const isSameDate = date.toDateString() === new Date().toDateString();
          const isNowAvailable =
            (mealType == 1 && hours < 9) ||
            (mealType == 2 && hours >= 9 && hours < 14) ||
            (mealType == 3 && hours >= 14);
          return (
            <Box key={index}>
              <HStack key={index}>
                {/* 조식: 1, 중식: 2, 석식: 3 */}
                <Heading size="md">
                  {mealType == 1
                    ? "아침 급식"
                    : mealType == 2
                    ? "점심 급식"
                    : mealType == 3
                    ? "저녁 급식"
                    : "에러"}
                </Heading>
                <Badge
                  colorScheme="yellow"
                  display={isSameDate && isNowAvailable ? "inline" : "none"}
                >
                  지금
                </Badge>
              </HStack>

              <SingleMealList array={menuArray} />

              {index + 1 < mealDataArray.length ? <Divider my="2" /> : null}
            </Box>
          );
        })}
      </Box>
    );
  } catch (e) {
    // 급식 없을때
    console.log(e);
    console.log(data);
    console.log(data);
    return (
      <Alert status="warning" my="4" rounded="md">
        <AlertIcon />
        급식이 없습니다.
      </Alert>
    );
  }
}

interface SingleMealListProps {
  array: Array<string>;
}

function SingleMealList({ array }: SingleMealListProps) {
  return (
    <UnorderedList>
      {array.map((arrayItem, index) => (
        <ListItem key={index} ms="2">
          {arrayItem}
        </ListItem>
      ))}
    </UnorderedList>
  );
}

export default MealCard;
