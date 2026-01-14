// ✅ 匯入 Firebase 模組
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ✅ 你的 Firebase 設定（改成自己的）
const firebaseConfig = {
  apiKey: "AIzaSyD9LY_TmhTJjEbtWkYLX9OsqTCZKYafjPg",
  authDomain: "math-quiz-a0fcf.firebaseapp.com",
  projectId: "math-quiz-a0fcf",
  storageBucket: "math-quiz-a0fcf.firebasestorage.app",
  messagingSenderId: "137657638927",
  appId: "1:137657638927:web:b6c450f8cec9978620c37a"
};

// ✅ 初始化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ 主功能
async function submitQuiz() {
  const startTime = window.startTime || Date.now();
  const data = {
    class: document.getElementById("classSelect").value,
    studentId: document.getElementById("studentId").value,
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
    timeSpent: ((Date.now() - startTime) / 1000).toFixed(2),
    timestamp: serverTimestamp()
  };

  try {
    await addDoc(collection(db, "quizResults"), data);
    document.getElementById("result").innerHTML =
      `<strong>✅ 已送出！</strong><br>答對：${data.score}/9 題<br>作答時間：${data.timeSpent} 秒`;
  } catch (err) {
    alert("❌ 錯誤：" + err.message);
  }
}

function calculateScore() {
  const correct = [38, 456, 792, 12, 115, 2, 255, 189, 4];
  let score = 0;
  for (let i = 1; i <= 9; i++) {
    if (parseInt(document.getElementById(`Q${i}`).value) === correct[i - 1]) score++;
  }
  return score;
}

window.onload = () => window.startTime = Date.now();
