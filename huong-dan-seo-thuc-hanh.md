# HƯỚNG DẪN SEO THỰC HÀNH
## Dành cho Duyên Lành Web — Website tĩnh HTML/CSS/JS

> Tài liệu này hướng dẫn từng bước cụ thể để tối ưu SEO cho website tĩnh.  
> Dựa trên tài liệu chính thức từ Google Search Central (2026).  
> Không cần kiến thức kỹ thuật cao.

---

## MỤC LỤC
1. [Hiểu đúng về SEO](#1-hiểu-đúng-về-seo)
2. [Checklist SEO cho mỗi trang mới](#2-checklist-seo-cho-mỗi-trang-mới)
3. [Các file kỹ thuật cần có](#3-các-file-kỹ-thuật-cần-có)
4. [Cách viết nội dung chuẩn SEO](#4-cách-viết-nội-dung-chuẩn-seo)
5. [Tối ưu hình ảnh](#5-tối-ưu-hình-ảnh)
6. [Schema JSON-LD cho từng loại trang](#6-schema-json-ld-cho-từng-loại-trang)
7. [Kết nối Google Search Console](#7-kết-nối-google-search-console)
8. [Theo dõi và duy trì SEO](#8-theo-dõi-và-duy-trì-seo)
9. [Những điều KHÔNG cần lo](#9-những-điều-không-cần-lo)

---

## 1. HIỂU ĐÚNG VỀ SEO

### SEO là gì? (theo Google)
> "SEO là giúp công cụ tìm kiếm hiểu nội dung của bạn, đồng thời giúp người dùng tìm thấy trang web của bạn và quyết định có nên truy cập hay không."

### 3 sự thật quan trọng:
1. **Không có bí quyết xếp hạng #1** — Google nói thẳng điều này
2. **SEO là tích lũy** — kết quả đến sau vài tuần đến vài tháng, không phải ngày mai
3. **Nội dung là vua** — Google nói: "Tạo nội dung hấp dẫn và hữu ích ảnh hưởng đến sự hiện diện trên Google nhiều hơn bất kỳ đề xuất kỹ thuật nào"

### 3 nguyên tắc vàng:
1. **Viết cho người đọc trước, Google sau** — nội dung tự nhiên, dễ hiểu
2. **Làm cho Google dễ dàng** — URL rõ ràng, có sitemap, không chặn Googlebot
3. **Kiên nhẫn** — đừng nản nếu không thấy kết quả ngay

---

## 2. CHECKLIST SEO CHO MỖI TRANG MỚI

Khi tạo một trang HTML mới, kiểm tra đủ 15 mục sau:

### Trong thẻ `<head>`:
```
[ ] <title> — duy nhất, 50-60 ký tự, có từ khóa chính ở đầu
[ ] <meta name="description"> — duy nhất, 150-160 ký tự
[ ] <meta name="robots" content="index, follow, max-snippet:160, max-image-preview:large">
[ ] <link rel="canonical" href="URL_TUYỆT_ĐỐI">
[ ] <meta property="og:title"> — giống title hoặc ngắn hơn
[ ] <meta property="og:description"> — giống meta description
[ ] <meta property="og:image"> — ảnh đại diện khi chia sẻ
[ ] <meta property="og:url"> — URL tuyệt đối của trang
[ ] <meta property="og:type"> — "website" hoặc "article"
```

### Trong thẻ `<body>`:
```
[ ] 1 thẻ <h1> duy nhất — chứa từ khóa chính
[ ] Các <h2>, <h3> theo thứ tự hợp lý
[ ] Tất cả <img> có thuộc tính alt mô tả
[ ] Ít nhất 1 internal link với anchor text mô tả
[ ] Có liên kết đến trang liên hệ / Zalo
```

### Structured Data:
```
[ ] JSON-LD phù hợp với loại trang (xem Mục 6)
```

---

## 3. CÁC FILE KỸ THUẬT CẦN CÓ

### 3.1 robots.txt (đặt ở thư mục gốc)

```txt
User-agent: *
Allow: /
Sitemap: https://duyenlanhweb.com/sitemap.xml
```

**Mục đích:** Nói với Googlebot được phép thu thập dữ liệu toàn bộ trang.

**Lưu ý quan trọng từ Google:**
- Dùng robots.txt để CHẶN THU THẬP DỮ LIỆU, không phải chặn lập chỉ mục
- Muốn chặn trang xuất hiện trên Google → dùng `<meta name="robots" content="noindex">`
- Chặn các URL thay đổi trạng thái nếu có: giỏ hàng, đăng nhập, bình luận

### 3.2 sitemap.xml (đặt ở thư mục gốc)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://duyenlanhweb.com/</loc>
    <lastmod>2026-06-07</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Thêm từng URL vào đây -->
</urlset>
```

**Quy tắc đặt priority:**
- 1.0 = Trang chủ
- 0.9 = Trang dịch vụ chính
- 0.8 = Trang dịch vụ phụ, bảng giá
- 0.7 = Trang đích theo ngành
- 0.5 = Bài viết
- 0.3 = Trang liên hệ
- 0.1 = Privacy, điều khoản

**Quy tắc đặt changefreq:**
- `weekly` = Trang chủ (nếu cập nhật thường xuyên)
- `monthly` = Trang dịch vụ, trang đích
- `yearly` = Bài viết (ít thay đổi sau khi đăng)
- `never` = Trang privacy (không bao giờ đổi)

**Khi nào cập nhật sitemap:**
- Thêm trang mới → thêm URL vào sitemap
- Sửa nội dung quan trọng → cập nhật `<lastmod>`

---

## 4. CÁCH VIẾT NỘI DUNG CHUẨN SEO

### 4.1 Công thức viết title

```
[Từ khóa chính] — [Tên thương hiệu]

Ví dụ:
✅ Thiết kế website quán cà phê chuyên nghiệp — Duyên Lành Web
✅ Bảng giá thiết kế website 2026 — Duyên Lành Web
❌ Duyên Lành Web — Trang chủ (quá chung chung)
```

### 4.2 Công thức viết meta description

```
[Mô tả dịch vụ/sản phẩm] + [giá trị khác biệt] + [lời kêu gọi hành động]

Ví dụ:
✅ Thiết kế website quán cà phê đẹp, chuẩn mobile, giá từ 3 triệu. 
   Tặng tên miền .com, hỗ trợ SEO. Liên hệ Zalo 09210.6666.1 ngay.

✅ Dịch vụ quản trị website hàng tháng: cập nhật nội dung, backup, 
   bảo mật, báo cáo. Chỉ từ 500k/tháng. Gọi ngay để được tư vấn miễn phí.
```

### 4.3 Cấu trúc nội dung trang

```
H1: Tiêu đề chính (chứa từ khóa chính)
  |
  ├── Đoạn mở đầu: 2-3 câu giới thiệu, có từ khóa
  |
  ├── H2: Phần 1 — Vấn đề khách hàng gặp phải
  │   └── Mô tả vấn đề, tại sao cần giải quyết
  |
  ├── H2: Phần 2 — Giải pháp của Duyên Lành Web
  │   ├── H3: Điểm mạnh 1
  │   ├── H3: Điểm mạnh 2
  │   └── H3: Điểm mạnh 3
  |
  ├── H2: Phần 3 — Bảng giá / Gói dịch vụ
  │
  ├── H2: Phần 4 — Câu hỏi thường gặp (FAQ)
  │   ├── H3: Câu hỏi 1?
  │   └── H3: Câu hỏi 2?
  |
  └── Kết thúc: Lời kêu gọi hành động + thông tin liên hệ
```

### 4.4 Cách viết nội dung tự nhiên

**Theo Google: "Viết nội dung sao cho tự nhiên, dễ đọc, không lỗi chính tả và ngữ pháp."**

✅ NÊN:
- Viết như đang nói chuyện với khách hàng
- Chia đoạn ngắn (3-4 câu/đoạn)
- Dùng bullet points cho danh sách
- Đặt câu hỏi rồi trả lời (FAQ tự nhiên)
- Dùng từ ngữ người dùng thực sự tìm kiếm

❌ KHÔNG NÊN:
- Nhồi nhét từ khóa (vi phạm chính sách spam của Google)
- Sao chép nội dung từ trang khác
- Viết dài dòng không cần thiết
- Dùng quá nhiều thuật ngữ kỹ thuật

### 4.5 Dự đoán từ khóa người dùng tìm

Google khuyên: "Suy nghĩ xem người dùng có khả năng sẽ dùng từ nào để tìm kiếm."

Ví dụ cho Duyên Lành Web:
- Người mới: "làm website giá rẻ", "thiết kế web quán cafe"
- Người quen: "web tĩnh", "web HTML CSS", "web GitHub Pages"
- Địa phương: "thiết kế web Gò Vấp", "làm web Hồ Chí Minh"

→ Viết nội dung bao phủ nhiều cách gọi khác nhau của cùng một thứ.

---

## 5. TỐI ƯU HÌNH ẢNH

### 5.1 Quy tắc từ Google (4 quy tắc vàng):

1. **Hình ảnh chất lượng cao** — sắc nét, rõ ràng
2. **Đặt gần văn bản liên quan** — Google dùng văn bản xung quanh để hiểu ảnh
3. **Alt text mô tả** — bắt buộc
4. **Định dạng hiện đại** — WebP > JPEG > PNG

### 5.2 Cách viết alt text

```html
<!-- TỐT: mô tả cụ thể nội dung ảnh -->
<img src="web-quan-cafe.jpg" 
     alt="Mẫu website quán cà phê Khôi Coffee với menu đồ uống và đặt bàn online">

<!-- KHÁ: có mô tả nhưng chung chung -->
<img src="web-quan-cafe.jpg" alt="Mẫu website quán cà phê">

<!-- TỆ: không có alt hoặc alt vô nghĩa -->
<img src="web-quan-cafe.jpg" alt="">
<img src="web-quan-cafe.jpg" alt="ảnh">
```

**Quy tắc alt text:**
- Mô tả nội dung ảnh (không phải "hình ảnh của...")
- Dưới 125 ký tự
- KHÔNG nhồi nhét từ khóa
- Nếu ảnh chỉ để trang trí: dùng `alt=""` (để trống)

### 5.3 Tối ưu kích thước ảnh

```
Trước khi up lên web:
1. Resize ảnh về đúng kích thước hiển thị (không up ảnh 4000px để hiển thị 400px)
2. Nén ảnh: dùng TinyPNG hoặc Squoosh
3. Chuyển sang WebP nếu có thể (dung lượng nhỏ hơn 25-35% so với JPEG)
4. Thêm width và height để tránh layout shift
```

```html
<img src="web-quan-cafe.webp" 
     alt="Mẫu website quán cà phê" 
     width="800" 
     height="600" 
     loading="lazy">
```

---

## 6. SCHEMA JSON-LD CHO TỪNG LOẠI TRANG

Schema (dữ liệu có cấu trúc) giúp Google hiểu nội dung và hiển thị rich results (sao đánh giá, breadcrumb, FAQ...).

### 6.1 Trang chủ: LocalBusiness + WebSite

```html
<!-- LocalBusiness -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Duyên Lành Web",
  "description": "Thiết kế website tử tế cho cửa hàng nhỏ",
  "url": "https://duyenlanhweb.com",
  "telephone": "+84...",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "404 Thống Nhất, P.16",
    "addressLocality": "Gò Vấp",
    "addressRegion": "TP. Hồ Chí Minh",
    "addressCountry": "VN"
  },
  "priceRange": "3.000.000đ - 8.000.000đ",
  "sameAs": ["https://facebook.com/Thietkewebsiteho"]
}
</script>
```

### 6.2 Trang dịch vụ: Service + BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Thiết kế website quán cà phê",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Duyên Lành Web"
  },
  "description": "Thiết kế website đẹp, chuẩn mobile cho quán cà phê",
  "offers": {
    "@type": "Offer",
    "price": "3000000",
    "priceCurrency": "VND"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Trang chủ", "item": "https://duyenlanhweb.com/"},
    {"@type": "ListItem", "position": 2, "name": "Thiết kế website quán cà phê", "item": "https://duyenlanhweb.com/thiet-ke-website-quan-cafe.html"}
  ]
}
</script>
```

### 6.3 Bài viết: Article + BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Website tĩnh có SEO được không?",
  "datePublished": "2026-05-15",
  "dateModified": "2026-06-01",
  "author": {"@type": "Person", "name": "Duyên Lành Web"}
}
</script>
```

### 6.4 Trang FAQ: FAQPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Thiết kế website mất bao lâu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Thời gian thiết kế từ 3-7 ngày tùy độ phức tạp."
      }
    }
  ]
}
</script>
```

### 6.5 Kiểm tra schema

Sau khi thêm schema, kiểm tra tại: https://search.google.com/test/rich-results

---

## 7. KẾT NỐI GOOGLE SEARCH CONSOLE

Search Console là công cụ MIỄN PHÍ quan trọng nhất để theo dõi SEO.

### Bước 1: Thêm property
1. Vào https://search.google.com/search-console
2. Chọn "Thêm property"
3. Nhập: `https://duyenlanhweb.com/`
4. Chọn phương pháp xác minh (khuyến nghị: DNS TXT record)

### Bước 2: Xác minh (chọn 1 trong 3 cách)

**Cách 1: DNS TXT record (Khuyến nghị)**
- Search Console sẽ cung cấp một chuỗi TXT
- Vào trang quản lý DNS của tên miền
- Thêm bản ghi TXT với giá trị Google cung cấp
- Chờ 5-30 phút cho DNS cập nhật

**Cách 2: HTML file**
- Tải file HTML từ Search Console
- Upload vào thư mục gốc của website

**Cách 3: Google Analytics**
- Nếu đã có GA4, có thể xác minh qua GA

### Bước 3: Gửi sitemap
1. Vào mục "Sơ đồ trang web" (Sitemaps)
2. Nhập: `sitemap.xml`
3. Nhấn "Gửi"

### Bước 4: Kiểm tra URL Inspection
1. Vào URL Inspection
2. Nhập: `https://duyenlanhweb.com/`
3. Nhấn "Kiểm tra URL trực tiếp"
4. Nếu có lỗi → sửa và yêu cầu lập chỉ mục lại

---

## 8. THEO DÕI VÀ DUY TRÌ SEO

### Hàng tuần (5 phút):
- Mở Search Console → kiểm tra có lỗi mới không
- Xem Page Indexing report

### Hàng tháng (15 phút):
- Kiểm tra Core Web Vitals
- Kiểm tra Mobile Usability
- Xem từ khóa nào đang mang lại traffic (Performance report)
- Cập nhật sitemap nếu có trang mới

### Hàng quý (30 phút):
- Chạy PageSpeed Insights cho 3 trang chính
- Kiểm tra broken links
- Cập nhật nội dung bài viết cũ
- Xem Google Search Central Blog có gì mới

### Khi thêm trang mới:
- [ ] Check đủ 15 mục trong checklist
- [ ] Thêm URL vào sitemap.xml
- [ ] Cập nhật `<lastmod>` trong sitemap
- [ ] Dùng URL Inspection yêu cầu lập chỉ mục

### Khi sửa trang cũ:
- [ ] Cập nhật `<lastmod>` trong sitemap
- [ ] Cập nhật `dateModified` trong Article schema

---

## 9. NHỮNG ĐIỀU KHÔNG CẦN LO

Google đã xác nhận những thứ sau **KHÔNG QUAN TRỌNG**. Đừng tốn thời gian:

| Điều không cần lo | Google nói gì |
|---|---|
| Meta keywords | "Google Tìm kiếm không sử dụng thẻ meta từ khoá" |
| Nhồi nhét từ khóa | "Vi phạm chính sách spam của Google" |
| Từ khóa trong tên miền | "Hầu như không có tác dụng nào" |
| Đuôi tên miền (.com vs .net) | "Google không quan tâm" |
| Độ dài bài viết | "Không có con số kỳ diệu nào" |
| Số lượng H2, H3 | "Không có con số lý tưởng" |
| E-E-A-T là yếu tố xếp hạng | "Không phải đâu" (Google nói thẳng) |
| Lo lắng về trùng lặp nội dung | "Không sao, đừng lo lắng" (trừ khi sao chép của người khác) |

### Điều THỰC SỰ quan trọng:
1. **Nội dung hữu ích cho người đọc**
2. **Google có thể truy cập được trang**
3. **Tiêu đề và mô tả rõ ràng**
4. **Tốc độ trang và mobile**
5. **Kiên nhẫn chờ đợi**

---

## TÓM TẮT: SEO CHO WEBSITE TĨNH

```
SEO website tĩnh = 3 việc chính:

1. LÀM CHO GOOGLE ĐỌC ĐƯỢC
   ├── robots.txt cho phép crawl
   ├── sitemap.xml liệt kê URL
   └── Không chặn CSS/JS quan trọng

2. LÀM CHO GOOGLE HIỂU ĐƯỢC
   ├── Title + meta description rõ ràng
   ├── Cấu trúc heading hợp lý (H1 → H2 → H3)
   ├── Alt text cho ảnh
   ├── Schema JSON-LD (LocalBusiness, Article...)
   └── URL mô tả, không có tham số lạ

3. LÀM CHO NGƯỜI DÙNG MUỐN CLICK
   ├── Tiêu đề hấp dẫn, đúng nhu cầu
   ├── Meta description có lời kêu gọi
   ├── Tốc độ tải nhanh
   └── Hiển thị tốt trên mobile

Không có bước 4. Đơn giản vậy thôi.
```

---

*Hướng dẫn dựa trên tài liệu chính thức từ Google Search Central.*
*Skill `google-seo-guide` (v2.0.0) chứa cẩm nang SEO đầy đủ.*
*Dùng lệnh: /skill google-seo-guide để xem bất cứ lúc nào.*
