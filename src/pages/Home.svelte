<script lang="ts">
  import Header from "../components/Header.svelte";
  import MealSwiper from "../components/MealSwiper.svelte";
  import { selectedThemeName } from "../data/stores";

  const themeList = [
    { id: 1, themeName: "클래식" },
    { id: 2, themeName: "라이트" },
    { id: 3, themeName: "다크" },
  ];

  let selectedTheme = "";
  $: {
    selectedThemeName.set(selectedTheme);
    document.cookie = `selectedTheme=${selectedTheme}`;
  }

  if (
    document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("selectedTheme="))
  ) {
    selectedTheme = document.cookie
      .split("; ")
      .find((row) => row.startsWith("selectedTheme"))
      .split("=")[1];
    console.log("cookie loaded");
  } else {
    selectedTheme = "클래식";
  }
</script>

<Header content="홈" />

<MealSwiper />

<select bind:value={selectedTheme}>
  {#each themeList as oneTheme}
    <option value={oneTheme.themeName}>
      {oneTheme.themeName}
    </option>
  {/each}
</select>

<style>
</style>
