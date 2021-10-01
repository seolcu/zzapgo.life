<script lang="ts">
  import axios from "axios";
  import themeList from "../data/themeList";
  import { selectedThemeName } from "../data/stores";

  export let year;
  export let month;
  export let date;
  export let mealType; //조식 0 중식 1 석식 2

  $: mealData = axios
    .get(
      `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=015f0705bbe0482589da35f787d46817&Type=json&pIndex=1&pSize=3&ATPT_OFCDC_SC_CODE=Q10&SD_SCHUL_CODE=8490078&MLSV_YMD=${year}${month}${date}`
    )
    .then((response) => response.data.mealServiceDietInfo[1].row);

  const parseDataStringIntoList = (dataString) => {
    return dataString.replace(/\./gi, "").replace(/[0-9]/g, "").split("<br/>"); //removing tags
  };
</script>

<div
  class="mealWrapper"
  style="background: {themeList[$selectedThemeName]
    .subBGColor}; color: {themeList[$selectedThemeName].innerFontColor};"
>
  <h3>
    오늘
    {mealType == 0
      ? "아침"
      : mealType == 1
      ? "점심"
      : mealType == 2
      ? "저녁"
      : "???"}
  </h3>
  {#await mealData}
    <ul>
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
    </ul>
  {:then mealData}
    <ul>
      {#each parseDataStringIntoList(mealData[mealType].DDISH_NM) as oneMenu}
        <li>{oneMenu}</li>
      {/each}
    </ul>
  {/await}
</div>

<style>
  .mealWrapper {
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
  }
  h3 {
    margin: 10px;
  }
  ul li {
    padding: 3px;
  }
</style>
