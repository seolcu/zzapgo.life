<script lang="ts">
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import TimetableComponent from "../components/TimetableComponent.svelte";
</script>

<Header content="시간표" />
<TimetableComponent />
<Footer currentURL="/timetable" />

<style>
</style>
