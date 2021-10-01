<script lang="ts">
  import Header from "../components/Header.svelte";
  import MealSwiper from "../components/MealSwiper.svelte";
  import { selectedThemeName } from "../data/stores";

  const themeList = [
    { id: 1, themeName: "클래식" },
    { id: 2, themeName: "라이트" },
    { id: 3, themeName: "다크" },
  ];
</script>

<Header content="홈" />

<MealSwiper />

<select bind:value={$selectedThemeName}>
  {#each themeList as oneTheme}
    <option value={oneTheme.themeName}>
      {oneTheme.themeName}
    </option>
  {/each}
</select>

<style>
</style>
