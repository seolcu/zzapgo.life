<script lang="ts">
  import Header from "../components/Header.svelte";
  import MealSwiper from "../components/MealSwiper.svelte";
  import { currentDate, currentMonth } from "../data/currentTime";
</script>

<!-- 헤더는 한자리 숫자로 표시 -->
<!-- getMonth는 0~11 이라 1 추가 -->
<Header content="{currentMonth}월 {currentDate}일" />

<MealSwiper />

<style>
</style>
