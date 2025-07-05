document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quizForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let score = 0;
      const q1 = form.q1.value;
      const q2 = form.q2.value;
      if (q1 === "b") score++;
      if (q2 === "c") score++;

      document.getElementById("result").textContent = "Skor Anda: " + score + "/2";
    });
  }
});
