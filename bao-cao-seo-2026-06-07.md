# BÁO CÁO SEO — DUYÊN LÀNH WEB
> Dựa trên Google SEO Starter Guide + Maintaining your site's SEO  
> Ngày kiểm tra: 07/06/2026  
> Domain: https://duyenlanhweb.com/

---

## 1. TỔNG QUAN HIỆN TRẠNG

### SEO đã làm tốt ✅

| Hạng mục | Trạng thái | Ghi chú |
|---|---|---|
| GA4 (Google Analytics) | ✅ Có | G-WP18EH87NS |
| Title tag | ✅ Tốt | 63 ký tự, có từ khóa chính |
| Meta description | ✅ Tốt | Có đủ, có từ khóa |
| Open Graph tags | ✅ Tốt | og:title, og:description, og:image, og:locale |
| Canonical URL | ✅ Có | Trang chủ |
| Structured Data - LocalBusiness | ✅ Có | JSON-LD đầy đủ: tên, địa chỉ, SĐT, giờ mở cửa, sameAs |
| Structured Data - WebSite | ✅ Có | SearchAction schema |
| Favicon | ✅ Có | Dùng logo |
| lang="vi" | ✅ Có | Đúng |
| HTTPS | ✅ Có | GitHub Pages custom domain |

### Còn thiếu / Cần làm ❌

| Hạng mục | Mức độ | Mô tả |
|---|---|---|
| robots.txt | 🔴 GẤP | Chưa có file robots.txt |
| sitemap.xml | 🔴 GẤP | Chưa có sitemap |
| Google Search Console | 🔴 GẤP | Cần xác minh và gửi sitemap |
| robots meta tag | 🟡 NÊN | Thêm max-snippet, max-image-preview |
| BreadcrumbList schema | 🟡 NÊN | Cho các trang dịch vụ và bài viết |
| Article schema | 🟡 NÊN | Cho các bài viết trong /bai-viet/ |
| FAQ schema | 🟡 NÊN | Cho trang bảng giá và dịch vụ |
| Ảnh trong sitemap | 🟢 TỐI ƯU | Thêm ảnh vào sitemap |
| Core Web Vitals | 🟡 NÊN | Chưa kiểm tra điểm PageSpeed |
| Mobile Usability | 🟡 NÊN | Cần kiểm tra trong Search Console |

---

## 2. PHÂN TÍCH CHI TIẾT TỪNG TRANG

### 2.1 Trang chủ (index.html)
**Điểm SEO: 8/10**

Mạnh:
- Title 63 ký tự, meta description đầy đủ
- 2 JSON-LD schema: LocalBusiness + WebSite
- OG tags đầy đủ
- Canonical URL

Cần cải thiện:
- Thêm robots meta tag
- Alt text trên logo hơi chung chung ("Logo Duyên Lành Web")
- Thiếu BreadcrumbList schema

### 2.2 Trang dịch vụ (dich-vu/*.html)
Cần kiểm tra từng trang:
- Có title + description riêng?
- Có canonical?
- Có breadcrumb schema?

### 2.3 Trang bài viết (bai-viet/*.html)
Cần kiểm tra:
- Có Article schema?
- Có ngày đăng (datePublished)?
- Có tên tác giả?

---

## 3. DANH SÁCH VIỆC CẦN LÀM (THEO THỨ TỰ ƯU TIÊN)

### 🔴 Cấp bách (làm ngay, 1-2h)

1. **Tạo robots.txt**
   ```
   User-agent: *
   Allow: /
   Sitemap: https://duyenlanhweb.com/sitemap.xml
   ```

2. **Tạo sitemap.xml**
   - Liệt kê TẤT CẢ 20 file HTML
   - Có `<lastmod>`, `<changefreq>`, `<priority>`

3. **Google Search Console**
   - Thêm property: https://duyenlanhweb.com
   - Xác minh qua HTML file hoặc DNS TXT record
   - Gửi sitemap.xml
   - Kiểm tra URL Inspection cho trang chủ

### 🟡 Nên làm (tuần này, 3-4h)

4. **Thêm robots meta tag** vào tất cả các trang:
   ```html
   <meta name="robots" content="index, follow, max-snippet:160, max-image-preview:large">
   ```

5. **Thêm BreadcrumbList schema** cho các trang con

6. **Thêm Article schema** cho các bài viết

7. **Kiểm tra PageSpeed Insights** cho 3 trang chính:
   - Trang chủ
   - Trang dịch vụ
   - Một bài viết

8. **Thêm FAQ schema** cho trang bảng giá

### 🟢 Tối ưu thêm (dài hạn)

9. **Thêm ảnh vào sitemap** (image:image)
10. **Alt text chi tiết hơn** cho các ảnh quan trọng
11. **Internal links audit** — đảm bảo anchor text mô tả, không "bấm vào đây"
12. **Cập nhật nội dung** các bài viết có ngày đăng cũ
13. **Theo dõi Search Console** hàng tuần: Page Indexing, Core Web Vitals, Mobile Usability

---

## 4. CODE MẪU CẦN THÊM VÀO

### 4.1 robots.txt (tạo file mới ở thư mục gốc)
```
User-agent: *
Allow: /
Sitemap: https://duyenlanhweb.com/sitemap.xml
```

### 4.2 sitemap.xml (tạo file mới ở thư mục gốc)
Xem file riêng: `sitemap.xml` (được tạo kèm báo cáo này)

### 4.3 Meta robots (thêm vào <head> mỗi trang)
```html
<meta name="robots" content="index, follow, max-snippet:160, max-image-preview:large">
```

### 4.4 BreadcrumbList schema (thêm vào các trang con)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Trang chủ",
      "item": "https://duyenlanhweb.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Dịch vụ",
      "item": "https://duyenlanhweb.com/dich-vu/thiet-ke-website.html"
    }
  ]
}
</script>
```

### 4.5 Article schema (thêm vào các bài viết)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Website tĩnh có SEO được không?",
  "datePublished": "2026-05-15",
  "dateModified": "2026-06-01",
  "author": {
    "@type": "Person",
    "name": "Duyên Lành Web"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Duyên Lành Web",
    "logo": {
      "@type": "ImageObject",
      "url": "https://duyenlanhweb.com/images/duyen-lanh-web-logo.png"
    }
  }
}
</script>
```

---

## 5. KIẾN THỨC TỪ GOOGLE ÁP DỤNG VÀO DUYÊN LÀNH WEB

### 5.1 Từ "Cẩm nang SEO" (SEO Starter Guide):

| Bài học từ Google | Áp dụng cho DLW |
|---|---|
| SEO = giúp Google hiểu nội dung + người dùng tìm thấy | Mỗi trang dịch vụ cần mô tả RÕ dịch vụ đó làm gì, cho ai |
| Google tìm trang qua liên kết | Cần internal links giữa các trang với anchor text mô tả |
| Mất vài tuần đến vài tháng mới thấy tác động | Đừng nản nếu không thấy kết quả ngay sau khi làm SEO |
| URL mô tả tốt hơn URL có ID | DLW đã làm tốt: /dich-vu/thiet-ke-website.html |
| Nhóm trang cùng chủ đề vào thư mục | DLW đã làm: /dich-vu/, /bai-viet/ |
| Nội dung trùng lặp: dùng canonical | DLW có canonical trên trang chủ, cần thêm cho trang con |
| Viết cho con người trước, Google sau | Nội dung DLW viết tự nhiên, đúng người đọc |
| Alt text quan trọng | Cần cải thiện alt text chi tiết hơn |
| Quảng bá = mạng xã hội + cộng đồng | DLW có Facebook, Zalo → tốt! |
| KHÔNG lo: meta keywords, nhồi nhét từ khóa | DLW không mắc lỗi này |

### 5.2 Từ "Duy trì SEO" (Maintaining):

| Bài học từ Google | Áp dụng cho DLW |
|---|---|
| Tất cả tài nguyên phải Google truy cập được | CSS, JS, ảnh không bị chặn |
| Robots.txt để chặn crawl, KHÔNG để chặn index | DLW cần robots.txt cơ bản |
| Sitemap ưu tiên cho Google biết trang quan trọng | Tạo sitemap liệt kê 20 trang |
| Mobile-first indexing | DLW cần kiểm tra mobile responsiveness |
| HTTPS là bắt buộc | DLW đã có (GitHub Pages) |
| Core Web Vitals ảnh hưởng xếp hạng | Cần đo điểm PageSpeed |
| Search Console là công cụ quan trọng nhất | Cần xác minh ngay |

---

## 6. LỘ TRÌNH 30 NGÀY

### Tuần 1: Nền tảng
- [ ] Tạo robots.txt và sitemap.xml
- [ ] Xác minh Google Search Console
- [ ] Gửi sitemap lên GSC
- [ ] Kiểm tra URL Inspection cho 5 trang chính

### Tuần 2: On-page SEO
- [ ] Thêm meta robots cho tất cả trang
- [ ] Thêm BreadcrumbList schema cho trang con
- [ ] Thêm Article schema cho 7 bài viết
- [ ] Cải thiện alt text cho ảnh quan trọng

### Tuần 3: Tối ưu
- [ ] Chạy PageSpeed Insights, sửa lỗi hiệu suất
- [ ] Kiểm tra Mobile Usability trong GSC
- [ ] Internal links audit
- [ ] Kiểm tra không có broken links (404)

### Tuần 4: Theo dõi & Điều chỉnh
- [ ] Kiểm tra Page Indexing report trong GSC
- [ ] Xem có lỗi gì không, sửa ngay
- [ ] Cập nhật nội dung bài viết cũ
- [ ] Lên kế hoạch nội dung mới

---

## 7. KẾT LUẬN

**Điểm SEO tổng thể hiện tại: 6.5/10**

Duyên Lành Web đã làm tốt phần SEO on-page cơ bản (title, description, schema, canonical, OG tags). Điểm yếu chính là thiếu các file kỹ thuật (robots.txt, sitemap.xml) và chưa kết nối với Google Search Console.

**Sau khi hoàn thành các việc cấp bách: dự kiến đạt 8/10**
**Sau khi hoàn thành toàn bộ: dự kiến đạt 9/10**

---

*Báo cáo dựa trên tài liệu chính thức từ Google Search Central, cập nhật tháng 6/2026.*
*Cẩm nang SEO đầy đủ đã được lưu vào skill `google-seo-guide` (v2.0.0).*
