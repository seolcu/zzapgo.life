<div class="timetableContainer">
  <!-- 0열: 요일 지정 -->
  <div class="frame" />
  <div class="frame">월요일</div>
  <div class="frame">화요일</div>
  <div class="frame">수요일</div>
  <div class="frame">목요일</div>
  <div class="frame">금요일</div>
  <!-- 1교시 -->
  <div class="time">1교시</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <!-- 2교시 -->
  <div class="time">2교시</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <!-- 3교시 -->
  <div class="time">3교시</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <!-- 4교시 -->
  <div class="time">4교시</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <!-- 5교시 -->
  <div class="time">5교시</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <!-- 6교시 -->
  <div class="time">6교시</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <!-- 7교시 -->
  <div class="time">7교시</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
  <div class="subject">...</div>
</div>

<style>
  .timetableContainer {
    margin: 10px;
    display: none;
    gap: 2px;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
  .subject {
    color: "#eeeeee";
    background: "#333333";
  }
</style>
