<script>
  const dormInfo = {
    "2021/9": {
      odd: {
        male: "이만수",
        female: "",
      },
      even: {
        male: "정진기",
        female: "",
      },
    },
  };
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const date = new Date().getDate();
</script>

<div class="dormManagerWrapper">
  <p>
    남 - {date % 2 == 1} 사감
  </p>
  <p>
    여 - {date % 2 == 1
      ? dormInfo.yearPlusMonth.odd.female
      : dormInfo.yearPlusMonth.even.female} 사감
  </p>
</div>
