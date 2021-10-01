<script lang="ts">
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import ShortcutLink from "../components/ShortcutLink.svelte";
  import shortcutList from "../data/shortcutList";
</script>

<Header content="바로가기" />
{#each shortcutList as oneShortcut}
  <ShortcutLink
    title={oneShortcut.title}
    textColor={oneShortcut.textColor}
    backGroundColor={oneShortcut.backGroundColor}
    URL={oneShortcut.URL}
  />
{/each}
<Footer currentURL="/shortcut" />

<style>
</style>
