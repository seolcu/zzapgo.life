import {
  Alert,
  AlertIcon,
  Container,
  Divider,
  Heading,
  ListItem,
  SkeletonText,
  Text,
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
    <Container
      m="2"
      p="2"
      borderRadius="10"
      bg={useColorModeValue("gray.50", "gray.700")}
    >
      <Heading size="md" m="2">
        아침 급식
      </Heading>
      {data ? (
        singleMealList(mealArray[0])
      ) : (
        <SkeletonText noOfLines={7} spacing="5" />
      )}

      <Divider />

      <Heading size="md" m="2">
        점심 급식
      </Heading>
      {data ? (
        singleMealList(mealArray[1])
      ) : (
        <SkeletonText noOfLines={7} spacing="5" />
      )}

      <Divider />

      <Heading size="md" m="2">
        저녁 급식
      </Heading>
      {data ? (
        singleMealList(mealArray[2])
      ) : (
        <SkeletonText noOfLines={7} spacing="5" />
      )}
    </Container>
  );
}

function singleMealList(array: Array<string>) {
  return (
    <UnorderedList m="2">
      {array.map((arrayItem, index) => (
        <ListItem key={index} ms="4">
          {arrayItem}
        </ListItem>
      ))}
    </UnorderedList>
  );
}

export default MealCard;
