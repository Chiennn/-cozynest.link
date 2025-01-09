// document.getElementById("designForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Ngăn chặn hành động gửi form mặc định

//     // Lấy dữ liệu từ form
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const phone = document.getElementById("phone").value;
//     const houseType = document.getElementById("houseType").value;
//     const message = document.getElementById("message").value;

//     // Xác nhận gửi thông tin
//     alert(`Cảm ơn ${name}! Chúng tôi sẽ liên hệ với bạn qua email ${email} hoặc số điện thoại ${phone}.\n\nLoại nhà mong muốn: ${houseType}\nÝ tưởng: ${message}`);
    
//     // Xóa thông tin đã nhập sau khi gửi
//     document.getElementById("designForm").reset();
// });

// Example of form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simple form validation
    if (name && email && message) {
      alert('Cảm ơn bạn đã gửi yêu cầu!');
      // Here you would typically send the form data to your server
    } else {
      alert('Vui lòng điền đầy đủ thông tin!');
    }
  });

    // Đọc dữ liệu từ file vnexpress_articles.json
    fetch('vnexpress_articles.json')
    .then(response => response.json())
    .then(data => {
        const articlesContainer = document.getElementById('articles-container');
        
        data.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article');
            
            const title = document.createElement('h2');
            title.textContent = article.title;
            articleDiv.appendChild(title);

            const link = document.createElement('a');
            link.href = article.link;
            link.textContent = 'Đọc thêm';
            articleDiv.appendChild(link);

            const description = document.createElement('p');
            description.textContent = article.description;
            articleDiv.appendChild(description);

            articlesContainer.appendChild(articleDiv);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));
  