<script>
  import axios from "axios";

  const year = new Date().getFullYear();
  const month = ("0" + (new Date().getMonth() + 1)).slice(-2);
  const date = ("0" + new Date().getDate()).slice(-2);

  $: mealData = axios
    .get(
      `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=015f0705bbe0482589da35f787d46817&Type=json&pIndex=1&pSize=3&ATPT_OFCDC_SC_CODE=Q10&SD_SCHUL_CODE=8490078&MLSV_YMD=${year}${month}${date}`
    )
    .then((response) => response.data.mealServiceDietInfo[1].row);
</script>

<h1>{month}월 {date}일</h1>

{#await mealData}
  <p>로딩중...</p>
{:then mealData}
  <h2>아침 급식</h2>
  {@html mealData[0].DDISH_NM}
  <h2>점심 급식</h2>
  {@html mealData[1].DDISH_NM}
  <h2>저녁 급식</h2>
  {@html mealData[2].DDISH_NM}
{/await}

<style>
  h1 {
    margin: 10px;
  }
</style>
