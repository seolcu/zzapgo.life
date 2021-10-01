<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Calendar from "./routes/Calendar.svelte";
  import Shortcut from "./routes/Shortcut.svelte";
  import Timetable from "./routes/Timetable.svelte";

  const routes = {
    "/": Home,
    "/calendar": Calendar,
    "/shortcut": Shortcut,
    "/timetable": Timetable,
    "/about": About,
  };
</script>

<Router {routes} />
