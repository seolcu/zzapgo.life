<script>
  import Developing from "../components/Developing.svelte";
  import DormManager from "../components/DormManager.svelte";

  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import OneMeal from "../components/OneMeal.svelte";
  const year = new Date().getFullYear();
  const month = ("0" + (new Date().getMonth() + 1)).slice(-2);
  const date = ("0" + new Date().getDate()).slice(-2);
  const hours = new Date().getHours();
</script>

<Header content="홈" />
<Developing content="공지" />
<Developing content="날씨" />
<OneMeal
  {year}
  {month}
  {date}
  mealType={hours <= 8 ? 0 : hours <= 14 ? 1 : hours <= 19 ? 2 : 2}
/>
<!-- mealType: 0 조식 1 중식 2 석식 -->
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br
/><br /><br /><br /><br /><br /><br /><br />
<DormManager {year} {month} {date} {hours} />

<Footer currentURL="/" />

<style>
</style>
