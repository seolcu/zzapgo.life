<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Calendar from "./routes/Calendar.svelte";
  import Shortcut from "./routes/Shortcut.svelte";
  import Timetable from "./routes/Timetable.svelte";

  import themeList from "./data/themeList";
  import { selectedThemeName } from "./data/stores";
  const selectedTheme = themeList[$selectedThemeName];

  const routes = {
    "/": Home,
    "/calendar": Calendar,
    "/shortcut": Shortcut,
    "/timetable": Timetable,
    "/about": About,
  };
</script>

<div class="background" style="background: {selectedTheme.BGColor};">
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
