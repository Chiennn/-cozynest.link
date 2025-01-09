document.getElementById("designForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn hành động gửi form mặc định

    // Lấy dữ liệu từ form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const houseType = document.getElementById("houseType").value;
    const message = document.getElementById("message").value;

    // Xác nhận gửi thông tin
    alert(`Cảm ơn ${name}! Chúng tôi sẽ liên hệ với bạn qua email ${email} hoặc số điện thoại ${phone}.\n\nLoại nhà mong muốn: ${houseType}\nÝ tưởng: ${message}`);
    
    // Xóa thông tin đã nhập sau khi gửi
    document.getElementById("designForm").reset();
});
