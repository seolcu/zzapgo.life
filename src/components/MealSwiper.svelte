<script>
  // Import Swiper Svelte components
  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";
  import OneMeal from "../components/OneMeal.svelte";
  import {
    currentYear,
    currentMealType,
    currentMonthString,
    currentDateString,
  } from "../data/currentTime";
</script>

<Swiper
  initialSlide={currentMealType()}
  slidesPerView={1}
  on:slideChange={() => console.log("slide change")}
  on:swiper={(e) => console.log(e.detail[0])}
>
  <SwiperSlide
    ><OneMeal
      year={currentYear}
      month={currentMonthString}
      date={currentDateString}
      mealType="0"
    /></SwiperSlide
  >
  <SwiperSlide
    ><OneMeal
      year={currentYear}
      month={currentMonthString}
      date={currentDateString}
      mealType="1"
    /></SwiperSlide
  >
  <SwiperSlide
    ><OneMeal
      year={currentYear}
      month={currentMonthString}
      date={currentDateString}
      mealType="2"
    /></SwiperSlide
  >
</Swiper>
