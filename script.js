
// Hàm để lấy dữ liệu từ RSS Feed và hiển thị bài viết
    function fetchRSS() {
        var url = "https://rss2json.com/api.json?rss_url=https://vnexpress.net/rss/gia-dinh.rss";
        
        // Gửi yêu cầu HTTP GET tới RSS feed
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Lấy các bài viết từ RSS feed
                var posts = data.items;
                var postsList = document.getElementById("posts-list");
                
                // Duyệt qua các bài viết và thêm vào danh sách
                posts.forEach(post => {
                    var listItem = document.createElement("li");
                    listItem.innerHTML = `
                        <a href="${post.link}" target="_blank">${post.title}</a>
                        <p>${post.description}</p>
                    `;
                    postsList.appendChild(listItem);
                });
            })
            .catch(error => console.error("Error fetching RSS:", error));
    }

// Gọi hàm khi trang được tải
    window.onload = fetchRSS;

// API URL với từ khóa tìm kiếm 'house'
 const apiUrl = "https://api.unsplash.com/photos/?query=house&client_id=YjmIM3teXV0YtFawSEev4RWxO9ue98s5yAZxZHrW_AU";

 // Hàm để lấy ảnh và hiển thị
 function fetchImages() {
     fetch(apiUrl)
         .then(response => response.json())
         .then(data => {
             const gallery = document.querySelector(".gallery-container");
             
             data.forEach(image => {
                 const imgElement = document.createElement("img");
                 imgElement.src = image.urls.small;
                 imgElement.alt = image.alt_description;
                 gallery.appendChild(imgElement);
             });
         })
         .catch(error => console.error('Error fetching images:', error));
 }

 window.onload = fetchImages;
