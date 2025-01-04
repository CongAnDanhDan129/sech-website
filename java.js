const showHiddenPass = (inputPass, inputIcon) => {
    const input = document.getElementById(inputPass);
    const iconEye = document.getElementById(inputIcon);

    iconEye.addEventListener('click', () => {
        if (input.type === 'password') {
            input.type = 'text';
            iconEye.classList.add('ri-eye-line');
            iconEye.classList.remove('ri-eye-off-line');
        } else {
            input.type = 'password';
            iconEye.classList.remove('ri-eye-line');
            iconEye.classList.add('ri-eye-off-line');
        }
    });
};
if (email === "test@example.com" && password === "123456") {
    // Chuyển hướng đến YouTube
    window.location.href = "https://www.youtube.com";
} else {
    alert("Sai email hoặc mật khẩu!");
}
