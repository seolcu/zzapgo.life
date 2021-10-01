<script lang="ts">
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import "swiper/css";
  import Home from "../pages/Home.svelte";
  import Calendar from "../pages/Calendar.svelte";
</script>

<Swiper
  style="height: 100%;"
  initialSlide={0}
  slidesPerView={1}
  spaceBetween={300}
  centeredSlides={true}
  on:slideChange={() => console.log("slide change")}
  on:swiper={(e) => console.log(e.detail[0])}
>
  <SwiperSlide><Home /></SwiperSlide>
  <SwiperSlide><Calendar /></SwiperSlide>
</Swiper>
