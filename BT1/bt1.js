function Chuyendoinhietdo() {
    // Lấy giá trị nhập vào từ input
    const celsius = document.getElementById("celsius").value;

    // Kiểm tra xem người dùng đã nhập giá trị chưa
    if (celsius === "") {
        alert("Vui lòng nhập nhiệt độ C");
        return;
    }

    // Chuyển đổi sang F
    const fahrenheit = (celsius * 9/5) + 32;

    // Hiển thị kết quả
    document.getElementById("result").textContent = celsius + "°C tương đương " + fahrenheit.toFixed(2) + "°F";
}
