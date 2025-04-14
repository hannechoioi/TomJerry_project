// Đợi trang web tải xong
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("actionButton");

    // Tạo phần tử hiển thị tên nhóm (chưa có trong HTML)
    const nameDisplay = document.createElement("p");
    nameDisplay.id = "teamNames";
    nameDisplay.style.marginTop = "20px";
    nameDisplay.style.fontWeight = "bold";
    nameDisplay.style.fontSize = "18px";
    nameDisplay.style.color = "#2c3e50";

    // Gắn vào dưới nút
    button.parentNode.appendChild(nameDisplay);

    button.addEventListener("click", function () {
        nameDisplay.textContent = "Thành viên nhóm: Tom, Jerry, Spike 🐱🐭🐶";
    });
});
