function dientichhcn() {
    // Lấy giá trị chiều dài và chiều rộng từ ô nhập liệu
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);

    // Kiểm tra giá trị nhập vào hợp lệ
    if (isNaN(length) || isNaN(width)) {
        document.getElementById("rectangleResult").innerText = "Vui lòng nhập cả chiều dài và chiều rộng hợp lệ!";
    } else {
        var area = length * width;
        document.getElementById("rectangleResult").innerText = "Diện tích Hình Chữ Nhật: " + area + " m²";
    }
}
function dientichtamgiac() {
    // Lấy giá trị cơ sở và chiều cao từ ô nhập liệu
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(base) || isNaN(height)) {
        document.getElementById("triangleResult").innerText = "Vui lòng nhập cả cơ sở và chiều cao hợp lệ!";
    } else {
        var area = (base * height) / 2;
        document.getElementById("triangleResult").innerText = "Diện tích Hình Tam Giác: " + area + " m²";
    }
}
function dientichhv() {
    // Lấy giá trị cạnh từ ô nhập liệu
    var side = parseFloat(document.getElementById("side").value);

    if (isNaN(side)) {
        document.getElementById("squareResult").innerText = "Vui lòng nhập độ dài cạnh hợp lệ!";
    } else {
        var area = side * side;
        document.getElementById("squareResult").innerText = "Diện tích Hình Vuông: " + area + " m²";
    }
}
