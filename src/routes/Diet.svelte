<script>
  import Footer from "../components/Footer.svelte";
  import OneMeal from "../components/OneMeal.svelte";

  const year = new Date().getFullYear();
  const month = ("0" + (new Date().getMonth() + 1)).slice(-2);
  const date = ("0" + new Date().getDate()).slice(-2);
</script>

<h1>{month}월 {date}일</h1>

{#each [0, 1, 2] as mealType}
  <OneMeal {mealType} {year} {month} {date} />
{/each}

<Footer currentURL="/diet" />

<style>
  h1 {
    margin: 10px;
  }
</style>
