<?php
$email = $_POST['email'];
$password = $_POST['password'];

// Kiểm tra thông tin đăng nhập
if ($email == "test@example.com" && $password == "123456") {
    header("Location: web2.html"); // Chuyển hướng sang trang thứ hai
    exit();
} else {
    echo "Sai email hoặc mật khẩu!";
}
?>
