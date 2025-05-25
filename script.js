// Text chạy kiểu typewriter
function typeText(id, text, speed = 50) {
  let i = 0;
  const el = document.getElementById(id);
  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  el.innerHTML = "";
  typing();
}

// Thư viết tay (dòng dài)
const letterContent = `Anh yêu à,

Hôm nay là kỉ niệm 4 năm bên nhau rồi đó. Em muốn làm điều gì đó khác biệt một chút, nên đã tạo trang web nhỏ này cho anh... 🥺

(viết thêm tiếp nội dung thư ở đây)

Yêu anh rất nhiều 💌
`;

// Sau 10s, chuyển sang giao diện đọc thư
setTimeout(() => {
  document.querySelector(".screen-1").style.display = "none";
  document.querySelector(".screen-2").style.display = "block";
  typeText("letterText", letterContent, 40);
}, 10000);

// Chạy chữ lúc đầu
typeText("fromText", "From: Em yêu", 70);
typeText("footerText", "Đây là món quà kỷ niệm 4 năm bên nhau dành cho anh…", 50);
