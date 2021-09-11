<script lang="ts">
  import themeList from "../data/themeList";
  import { selectedThemeName } from "../data/stores";

  export let content: string;
</script>

<h1 style="color: {themeList[$selectedThemeName].outerFontColor};">
  {content}
</h1>

<style>
  h1 {
    margin: 50px 0px 10px 10px;
    /* 탈모아이폰 지원: 위쪽 마진 50px로 공간 만들기 */
  }
</style>
