<script>
  import FooterIconLink from "./FooterIconLink.svelte";
  let selected = "home";
  const linkInfo = [
    {
      name: "home",
      url: "/",
      icon: "home",
    },
    {
      name: "diet",
      url: "/diet",
      icon: "calendar",
    },
    {
      name: "shortcut",
      url: "/shortcut",
      icon: "bookmark",
    },
    {
      name: "timetable",
      url: "/timetable",
      icon: "timetable",
    },
    {
      name: "about",
      url: "/about",
      icon: "menu",
    },
  ];
</script>

<footer>
  {#each linkInfo as oneLink}
    <div on:click={() => (selected = oneLink.name)}>
      <FooterIconLink
        name={oneLink.name}
        url={oneLink.url}
        iconName={oneLink.icon}
        {selected}
      />
    </div>
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
