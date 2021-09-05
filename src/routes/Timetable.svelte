<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
</script>

<Header content="시간표" />

<div class="timetableContainer" style="display: none;" />
<Footer currentURL="/timetable" />

<style>
  .timetableContainer {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
</style>
