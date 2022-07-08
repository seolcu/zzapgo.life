import {
  Alert,
  AlertIcon,
  Badge,
  Container,
  Divider,
  Heading,
  HStack,
  ListItem,
  SkeletonText,
  Box,
  UnorderedList,
  useColorModeValue,
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
      <Alert status="error" mt="1">
        <AlertIcon />
        급식을 불러오는 중 에러가 발생했습니다.
      </Alert>
    );
  }

  let mealArray: Array<Array<string>> = [];
  if (data) {
    data.mealServiceDietInfo[1].row.forEach((singleMealData: any) => {
      const singleMealString: string = singleMealData.DDISH_NM;
      const singleMealArray = singleMealString.split("<br/>");
      mealArray.push(singleMealArray);
    });
  }
  return (
    <Box
      m="2"
      p="2"
      borderRadius="10"
      bg={useColorModeValue("gray.50", "gray.700")}
    >
      <HStack m="2">
        <Heading size="md">아침 급식</Heading>
        {new Date().getHours() < 8 ? (
          <Badge colorScheme="yellow">지금</Badge>
        ) : null}
      </HStack>
      {data ? (
        singleMealList(mealArray[0])
      ) : (
        <SkeletonText noOfLines={7} spacing="5" />
      )}

      <Divider />

      <HStack m="2">
        <Heading size="md">점심 급식</Heading>
        {new Date().getHours() >= 8 && new Date().getHours() < 14 ? (
          <Badge colorScheme="yellow">지금</Badge>
        ) : null}
      </HStack>
      {data ? (
        singleMealList(mealArray[1])
      ) : (
        <SkeletonText noOfLines={7} spacing="5" />
      )}

      <Divider />

      <HStack m="2">
        <Heading size="md">저녁 급식</Heading>
        {new Date().getHours() >= 14 ? (
          <Badge colorScheme="yellow">지금</Badge>
        ) : null}
      </HStack>
      {data ? (
        singleMealList(mealArray[2])
      ) : (
        <SkeletonText noOfLines={7} spacing="5" />
      )}
    </Box>
  );
}

function singleMealList(array: Array<string>) {
  return (
    <UnorderedList m="2" textAlign="start">
      {array.map((arrayItem, index) => (
        <ListItem key={index} ms="4">
          {arrayItem}
        </ListItem>
      ))}
    </UnorderedList>
  );
}

export default MealCard;
