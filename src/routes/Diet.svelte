<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import OneMeal from "../components/OneMeal.svelte";

  const year = new Date().getFullYear();
  const month = ("0" + (new Date().getMonth() + 1)).slice(-2); // 두자리
  const date = ("0" + new Date().getDate()).slice(-2); // 두자리
</script>

<!-- 헤더는 한자리 숫자로 표시 -->
<!-- getMonth는 0~11 이라 1 추가 -->
<Header content="{new Date().getMonth() + 1}월 {new Date().getDate()}일" />

{#each [0, 1, 2] as mealType}
  <OneMeal {mealType} {year} {month} {date} />
{/each}
<Footer currentURL="/diet" />

<style>
</style>
