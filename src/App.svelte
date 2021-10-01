<script>
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Diet from "./routes/Diet.svelte";
  import Shortcut from "./routes/Shortcut.svelte";
  import Timetable from "./routes/Timetable.svelte";

  const routes = {
    "/": Home,
    "/diet": Diet,
    "/shortcut": Shortcut,
    "/timetable": Timetable,
    "/about": About,
  };
</script>

<Router {routes} />
