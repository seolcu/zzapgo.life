<script>
  import { link } from "svelte-spa-router";
</script>

<footer>
  <a href="/" use:link><img src="./images/home.svg" alt="홈" /></a>
  <a href="/diet" use:link><img src="./images/calendar.svg" alt="급식" /></a>
  <a href="/shortcut" use:link
    ><img src="./images/bookmark.svg" alt="바로가기" /></a
  >
  <a href="/timetable" use:link
    ><img src="./images/timetable.svg" alt="시간표" /></a
  >
  <a href="/about" use:link><img src="./images/menu.svg" alt="기타" /></a>
</footer>

<style>
  footer {
    background: rgb(1, 1, 1, 0.7);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
</style>
