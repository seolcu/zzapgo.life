<script>
  import { link } from "svelte-spa-router";
  export let selected;
  export let name;
  export let url;
  export let iconName;
</script>

<a href={url} use:link>
  {#if selected == name}
    <img src="./images/{iconName}.svg" alt={name} />
  {:else}
    <img src="./images/{iconName}_gray.svg" alt={name} />
  {/if}
</a>
