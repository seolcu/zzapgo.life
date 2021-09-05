<script>
  const dormInfo = {
    // 오후 사감이 기준 !!!!
    "2021/9": {
      odd: {
        male: "이만수",
        female: "이순덕",
      },
      even: {
        male: "정진기",
        female: "장정숙",
      },
    },
  };
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1; //getMonth는 0부터 11
  const date = new Date().getDate();
  const hours = new Date().getHours();
  const yearPlusMonth = year + "/" + month;
  const getCurrentDormManager = (gender) => {
    if (date % 2 == 1) {
      // 홀수일
      if (hours <= 12) {
        // 오전: 반대로
        return dormInfo[yearPlusMonth].even[gender];
      } else {
        // 오후
        return dormInfo[yearPlusMonth].odd[gender];
      }
    } else {
      // 짝수일
      if (hours <= 12) {
        //오전: 반대로
        return dormInfo[yearPlusMonth].odd[gender];
      } else {
        // 오후
        return dormInfo[yearPlusMonth].even[gender];
      }
    }
  };
</script>

<div class="dormManagerWrapper">
  <h2>지금의 사감</h2>
  <h3>
    {getCurrentDormManager("female")} 사감, {getCurrentDormManager("male")} 사감
  </h3>
</div>

<style>
  .dormManagerWrapper {
    margin: 10px;
    background: #333333;
    color: #eeeeee;
    padding: 10px;
    border-radius: 20px;
  }
  .dormManagerWrapper h2 {
    margin: 10px;
  }
  .dormManagerWrapper h3 {
    text-align: center;
    margin: 10px;
  }
</style>
