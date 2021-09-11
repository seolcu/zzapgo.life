<script lang="ts">
  import Router from "svelte-spa-router";
  import Main from "./routes/Main.svelte";

  import themeList from "./data/themeList";
  import { selectedThemeName } from "./data/stores";

  const routes = {
    "/": Main,
  };
</script>

<div
  class="background"
  style="background: {themeList[$selectedThemeName].BGColor};"
>
  <Router {routes} />
</div>

<style>
  .background {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
