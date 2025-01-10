// database/connection.js
const mysql = require('mysql2');

// Tạo kết nối tới MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Linh@1909', // Nếu có mật khẩu, thay vào đây
    database: 'cozynest'
});

// Kết nối và kiểm tra
connection.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối: ' + err.stack);
        return;
    }
    console.log('Kết nối thành công với MySQL');
});

// Đóng kết nối
connection.end();
