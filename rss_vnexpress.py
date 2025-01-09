import json
import feedparser

# URL của RSS Feed VnExpress
rss_url = "https://vnexpress.net/rss/gia-dinh.rss"

# Phân tích RSS Feed
feed = feedparser.parse(rss_url)

# In ra thông tin về các bài viết trong RSS Feed
print("Danh sách bài viết từ RSS Feed VnExpress:")
for entry in feed.entries:
    title = entry.title
    link = entry.link
    published = entry.published
    description = entry.description

    # In thông tin bài viết
    print(f"Title: {title}")
    print(f"Link: {link}")
    print(f"Published: {published}")
    print(f"Description: {description}")
    print("-" * 40)

# Lưu kết quả vào file JSON
with open('rss_vnexpress.json', 'w', encoding='utf-8') as f:
    json.dump(feed.entries, f, ensure_ascii=False, indent=4)