<script>
  import TMI from "../data/TMI";
  const randomInt = Math.floor(Math.random() * TMI.length); // 0 ~ 리스트 길이-1
  const sentence = TMI[randomInt];
</script>

<div class="didYouKnowThatWrapper">
  <h4>알고 계셨나요?</h4>
  <p>{@html sentence}</p>
</div>

<style>
  .didYouKnowThatWrapper {
    background: #333333;
    color: #eeeeee;
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
  }
  h4 {
    margin: 5px;
  }
  p {
    margin: 5px;
  }
</style>
