async function submitQuiz() {
  const startTime = window.startTime || Date.now();

  const data = {
    class: "A班",
    studentId: document.getElementById("studentId")?.value || "",
    Q1: document.getElementById("Q1").value,
    Q2: document.getElementById("Q2").value,
    Q3: document.getElementById("Q3").value,
    Q4: document.getElementById("Q4").value,
    Q5: document.getElementById("Q5").value,
    Q6: document.getElementById("Q6").value,
    Q7: document.getElementById("Q7").value,
    Q8: document.getElementById("Q8").value,
    Q9: document.getElementById("Q9").value,
    score: calculateScore(),
    timeSpent: (Date.now() - startTime) / 1000 + " 秒"
  };

  const url = "🔹這裡貼上你的 Google Apps Script 網址🔹";

  await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    mode: "no-cors"
  });

  alert("測驗完成！資料已送出！");
}

function calculateScore() {
  let correctAnswers = [38, 456, 792, 12, 115, 2, 255, 189, 4];
  let score = 0;
  for (let i = 1; i <= 9; i++) {
    if (parseInt(document.getElementById(`Q${i}`).value) === correctAnswers[i - 1]) score++;
  }
  return score;
}

window.onload = () => window.startTime = Date.now();


