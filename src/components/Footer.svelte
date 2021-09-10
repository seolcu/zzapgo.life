<script lang="ts">
  import { link } from "svelte-spa-router";
  import pageInfo from "../data/pageInfo";

  export let currentURL;
</script>

<div class="free-space" />
<footer>
  {#each pageInfo as oneLink}
    <a href={oneLink.url} use:link on:click={() => (currentURL = oneLink.url)}>
      <svelte:component
        this={oneLink.icon}
        color={currentURL == oneLink.url ? "#FFFFFF" : "#888888"}
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
    padding: 10px 0px 15px 0px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
  .free-space {
    height: 70px;
  }
</style>
