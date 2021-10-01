<script>
  import { link } from "svelte-spa-router";
  import BookmarkIcon from "../icons/BookmarkIcon.svelte";
  import CalendarIcon from "../icons/CalendarIcon.svelte";
  import HomeIcon from "../icons/HomeIcon.svelte";
  import MenuIcon from "../icons/MenuIcon.svelte";
  import TimetableIcon from "../icons/TimetableIcon.svelte";

  const linkInfo = [
    {
      name: "home",
      url: "/",
      icon: HomeIcon,
    },
    {
      name: "diet",
      url: "/diet",
      icon: CalendarIcon,
    },
    {
      name: "shortcut",
      url: "/shortcut",
      icon: BookmarkIcon,
    },
    {
      name: "timetable",
      url: "/timetable",
      icon: TimetableIcon,
    },
    {
      name: "about",
      url: "/about",
      icon: MenuIcon,
    },
  ];

  let selected = "home";
</script>

<footer>
  {#each linkInfo as oneLink}
    <a href={oneLink.url} use:link on:click={() => (selected = oneLink.name)}>
      <svelte:component
        this={oneLink.icon}
        color={selected == oneLink.name ? "#FFFFFF" : "#888888"}
      />
    </a>
  {/each}
</footer>

<style>
  footer {
    background: rgb(1, 1, 1, 0.7);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-evenly;
    padding: 5px 0px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
</style>
