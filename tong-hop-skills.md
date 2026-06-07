# TỔNG HỢP TẤT CẢ SKILLS — CÁCH GỌI & SỬ DỤNG

> **Cách gọi skill:** Trong chat với Hermes Agent, chỉ cần nhắc tên skill hoặc nói rõ việc cần làm. Agent sẽ tự động load skill phù hợp.  
> **Ví dụ:** "anh ơi SEO" → tự load `google-seo-guide` | "kiểm tra Search Console" → tự load `google-search-console`  
> **Gọi trực tiếp:** `/skill ten-skill` để xem nội dung skill bất cứ lúc nào.

---

## CÁCH DÙNG NHANH

```
┌─────────────────────────────────────────────────────────┐
│  3 CÁCH ĐỂ KÍCH HOẠT SKILL                               │
│                                                          │
│  1. Nói tự nhiên ── "anh ơi SEO website quán cafe"       │
│     → Agent tự load google-seo-guide                     │
│                                                          │
│  2. Gọi lệnh ── /skill google-seo-guide                  │
│     → Xem toàn bộ nội dung skill                         │
│                                                          │
│  3. Gọi tên ── "dùng skill google-search-console"        │
│     → Agent load skill đó để làm việc                    │
└─────────────────────────────────────────────────────────┘
```

---

## DANH MỤC: SOFTWARE DEVELOPMENT (Quan trọng nhất cho em)

Đây là những skill em dùng hàng ngày để thiết kế web.

| # | Skill | Cách gọi (nói gì với anh) | Dùng khi |
|---|---|---|---|
| 1 | `google-seo-guide` | "SEO", "cẩm nang SEO", "tối ưu Google" | Thiết kế web, audit SEO, thêm meta tags |
| 2 | `google-search-console` | "Search Console", "GSC", "theo dõi Google" | Xác minh domain, kiểm tra index, xem traffic |
| 3 | `static-website-small-business` | "web quán cafe", "web shop", "web spa" | Thiết kế web tĩnh cho cửa hàng nhỏ |
| 4 | `static-website-builder` | "build web tĩnh", "landing page" | Dựng web HTML/CSS/JS từ đầu |
| 5 | `static-website-github-pages` | "deploy GitHub Pages", "đưa web lên mạng" | Deploy web lên GitHub Pages |
| 6 | `static-vietnamese-website` | "web tiếng Việt", "web cho khách Việt" | Web tiếng Việt chuẩn font, chuẩn SEO |
| 7 | `vietnamese-web` | "font tiếng Việt", "lỗi tách chữ" | Sửa lỗi font, chọn font Việt hóa |
| 8 | `vietnamese-web-typography` | "Be Vietnam Pro", "font chữ" | Thiết lập font, antialiasing |
| 9 | `vietnamese-web-development` | "web tiếng Việt chuẩn" | Pattern liên hệ, nội dung tiếng Việt |
| 10 | `blogger-template` | "blog Blogger", "template XML" | Tạo blog trên Blogger/Blogspot |
| 11 | `plan` | "lên kế hoạch", "plan mode" | Lập kế hoạch chi tiết trước khi làm |
| 12 | `spike` | "thử nghiệm", "spike" | Test ý tưởng nhanh trước khi build |
| 13 | `requesting-code-review` | "review code", "kiểm tra code" | Review code trước khi commit |
| 14 | `systematic-debugging` | "sửa lỗi", "debug" | Tìm và sửa lỗi có hệ thống |
| 15 | `test-driven-development` | "TDD", "viết test" | Viết test trước khi code |
| 16 | `karpathy-guidelines` | "code sạch", "best practice" | Viết code đúng chuẩn, không overcomplicate |
| 17 | `claude-mem-patterns` | "nhớ việc cũ", "session cũ" | Tìm lại việc đã làm, quản lý context |
| 18 | `hermes-agent-skill-authoring` | "tạo skill mới" | Tạo skill mới cho Hermes |
| 19 | `hermes-tool-patterns` | "sửa nhiều file", "batch edit" | Sửa hàng loạt file, domain migration |
| 20 | `node-inspect-debugger` | "debug Node.js" | Debug ứng dụng Node.js |

### Ví dụ thực tế:

```
Em: "Anh ơi thiết kế web quán cà phê mới"
→ Anh load: static-website-small-business + google-seo-guide + vietnamese-web

Em: "Kiểm tra SEO web Duyên Lành"
→ Anh load: google-seo-guide + google-search-console

Em: "Tạo blog mới trên Blogger"
→ Anh load: blogger-template + google-seo-guide

Em: "Sửa lỗi font tiếng Việt bị tách chữ"
→ Anh load: vietnamese-web-typography
```

---

## DANH MỤC: CREATIVE (Thiết kế & sáng tạo)

Dùng khi cần thiết kế đồ họa, video, âm nhạc, typography.

| # | Skill | Cách gọi | Dùng khi |
|---|---|---|---|
| 1 | `sketch` | "mockup", "phác thảo" | Tạo 2-3 bản mockup HTML để so sánh |
| 2 | `claude-design` | "design HTML", "landing page đẹp" | Thiết kế landing/trang đơn |
| 3 | `popular-web-designs` | "design system", "theme Stripe" | Sao chép style từ 54 design system nổi tiếng |
| 4 | `design-system-merge` | "merge design", "trộn theme" | Trộn 2-3 design system thành một |
| 5 | `architecture-diagram` | "sơ đồ", "kiến trúc" | Vẽ sơ đồ kiến trúc/cloud SVG |
| 6 | `excalidraw` | "vẽ tay", "excalidraw" | Vẽ diagram kiểu vẽ tay |
| 7 | `ascii-art` | "ASCII art", "chữ nghệ thuật" | Tạo ASCII art, chữ lớn |
| 8 | `ascii-video` | "video ASCII", "video chữ" | Chuyển video thành ASCII art |
| 9 | `p5js` | "p5js", "nghệ thuật sinh" | Generative art, shader, 3D |
| 10 | `manim-video` | "video toán", "3Blue1Brown" | Tạo video animation toán học |
| 11 | `baoyu-infographic` | "infographic", "信息图" | Infographic 21 layout x 21 style |
| 12 | `pretext` | "typography sáng tạo" | Text layout sáng tạo, text-as-geometry |
| 13 | `humanizer` | "viết tự nhiên hơn", "bỏ AI-isms" | Làm văn bản tự nhiên, bỏ giọng AI |
| 14 | `songwriting-and-ai-music` | "sáng tác nhạc", "Suno AI" | Sáng tác nhạc, prompt Suno |
| 15 | `comfyui` | "tạo ảnh AI", "ComfyUI" | Tạo ảnh/video/audio bằng AI |
| 16 | `vietnamese-website` | "web tiếng Việt sáng tạo" | Web tiếng Việt với thiết kế sáng tạo |
| 17 | `design-md` | "DESIGN.md", "token spec" | Tạo file DESIGN.md chuẩn Google |
| 18 | `touchdesigner-mcp` | "TouchDesigner", "realtime visual" | Điều khiển TouchDesigner |

---

## DANH MỤC: GITHUB (Quản lý code)

| # | Skill | Cách gọi | Dùng khi |
|---|---|---|---|
| 1 | `github-auth` | "đăng nhập GitHub", "gh auth" | Setup token, SSH, gh CLI |
| 2 | `github-repo-management` | "tạo repo", "clone repo" | Tạo/clone/fork repository |
| 3 | `github-pr-workflow` | "tạo PR", "pull request" | Tạo branch → commit → PR → merge |
| 4 | `github-code-review` | "review PR", "review code" | Review pull request |
| 5 | `github-issues` | "tạo issue", "gán issue" | Quản lý issues |
| 6 | `codebase-inspection` | "kiểm tra code", "LOC" | Đếm dòng code, phân tích ngôn ngữ |

---

## DANH MỤC: PRODUCTIVITY (Công cụ văn phòng)

| # | Skill | Cách gọi | Dùng khi |
|---|---|---|---|
| 1 | `google-workspace` | "Gmail", "Calendar", "Drive" | Email, lịch, tài liệu Google |
| 2 | `notion` | "Notion", "database Notion" | Làm việc với Notion |
| 3 | `airtable` | "Airtable", "bảng tính" | CRUD records trên Airtable |
| 4 | `powerpoint` | "PowerPoint", "slide" | Tạo/sửa file .pptx |
| 5 | `nano-pdf` | "sửa PDF", "PDF" | Sửa lỗi trong PDF |
| 6 | `ocr-and-documents` | "đọc PDF", "quét tài liệu" | Trích xuất text từ PDF/ảnh |
| 7 | `maps` | "bản đồ", "tìm địa điểm" | Geocode, tìm POI, tính đường đi |
| 8 | `teams-meeting-pipeline` | "Teams meeting", "họp Teams" | Tóm tắt cuộc họp Teams |

---

## DANH MỤC: AUTONOMOUS AI AGENTS

| # | Skill | Cách gọi | Dùng khi |
|---|---|---|---|
| 1 | `claude-code` | "Claude Code", "code bằng Claude" | Giao việc code cho Claude Code CLI |
| 2 | `codex` | "Codex", "OpenAI Codex" | Giao việc code cho OpenAI Codex |
| 3 | `opencode` | "OpenCode", "review PR" | Giao việc cho OpenCode CLI |
| 4 | `hermes-agent` | "cấu hình Hermes", "sửa Hermes" | Cấu hình/sửa chính Hermes Agent |

---

## DANH MỤC: NGHIÊN CỨU & DỮ LIỆU

| # | Skill | Cách gọi | Dùng khi |
|---|---|---|---|
| 1 | `arxiv` | "tìm paper", "arXiv" | Tìm paper khoa học |
| 2 | `llm-wiki` | "LLM wiki", "Karpathy" | Tra cứu kiến thức LLM |
| 3 | `polymarket` | "Polymarket", "dự đoán" | Xem thị trường dự đoán |
| 4 | `blogwatcher` | "theo dõi blog", "RSS" | Theo dõi blog/RSS feed |

---

## DANH MỤC: KHÁC

| Danh mục | Skill | Cách gọi | Dùng khi |
|---|---|---|---|
| **Email** | `himalaya` | "gửi email", "check mail" | Đọc/gửi email từ terminal |
| **Media** | `youtube-content` | "YouTube", "video transcript" | Lấy transcript, tóm tắt video |
| **Media** | `gif-search` | "tìm GIF", "GIF" | Tìm GIF từ Tenor |
| **Media** | `songsee` | "phân tích âm thanh" | Spectrogram, audio features |
| **Media** | `heartmula` | "tạo nhạc", "HeartMuLa" | Tạo nhạc từ lyrics |
| **MLOps** | `llama-cpp` | "LLM local", "GGUF" | Chạy LLM local với llama.cpp |
| **MLOps** | `huggingface-hub` | "HuggingFace", "tải model" | Tải/upload model, dataset |
| **MLOps** | `segment-anything-model` | "SAM", "cắt ảnh" | Image segmentation |
| **MLOps** | `weights-and-biases` | "W&B", "track experiment" | Log thí nghiệm ML |
| **Data Science** | `jupyter-live-kernel` | "Jupyter", "Python notebook" | Chạy Python trong notebook |
| **DevOps** | `kanban-orchestrator` | "kanban", "phân việc" | Điều phối multi-agent |
| **Note-taking** | `obsidian` | "Obsidian", "ghi chú" | Đọc/ghi note trong Obsidian |
| **Smart Home** | `openhue` | "đèn Philips Hue" | Điều khiển đèn thông minh |
| **Red Teaming** | `godmode` | "jailbreak", "test bảo mật" | Kiểm tra bảo mật LLM |
| **Other** | `yuanbao` | "Yuanbao", "元宝" | @mention trong nhóm Yuanbao |
| **Other** | `dogfood` | "test web app", "QA" | Test ứng dụng web |
| **Other** | `multica-integration` | "Multica", "agent platform" | Tích hợp Multica |

---

## BẢNG TRA NHANH — KHI CẦN LÀM GÌ THÌ NÓI GÌ

| Tôi muốn... | Nói với anh |
|---|---|
| Thiết kế web quán cafe mới | "Thiết kế web quán cafe" |
| Tối ưu SEO cho web | "Làm SEO", "Kiểm tra SEO" |
| Kiểm tra Google Search Console | "Search Console", "GSC" |
| Đưa web lên mạng | "Deploy web", "GitHub Pages" |
| Sửa font tiếng Việt | "Sửa lỗi font", "chữ bị tách" |
| Tạo blog Blogger | "Tạo blog", "Blogger" |
| Tạo landing page đẹp | "Thiết kế landing page" |
| Vẽ sơ đồ | "Vẽ sơ đồ", "diagram" |
| Gửi email | "Gửi email" |
| Tạo bài viết chuẩn SEO | "Viết bài SEO" |
| Tìm bug trên web | "Test web", "tìm lỗi" |
| Code Python/Jupyter | "Chạy Python", "Jupyter" |
| Tạo ảnh AI | "Tạo ảnh", "ComfyUI" |
| Sửa PDF | "Sửa file PDF" |
| Làm PowerPoint | "Tạo slide", "PowerPoint" |
| Quản lý GitHub | "Tạo repo", "PR", "issue" |
| Tìm paper khoa học | "Tìm paper", "arXiv" |

---

## SKILLS CỦA DUYÊN LÀNH WEB (Dùng nhiều nhất)

```
┌────────────────────────────────────────────┐
│  TOP 5 SKILL DÙNG HÀNG NGÀY               │
│                                            │
│  1. google-seo-guide                       │
│     → SEO cơ bản & nâng cao                │
│     → Gọi: "SEO", "cẩm nang SEO"           │
│                                            │
│  2. google-search-console                  │
│     → Theo dõi Google Search Console       │
│     → Gọi: "Search Console", "GSC"         │
│                                            │
│  3. static-website-small-business           │
│     → Web tĩnh cho cửa hàng nhỏ            │
│     → Gọi: "web quán cafe", "web shop"     │
│                                            │
│  4. vietnamese-web-typography               │
│     → Font tiếng Việt, Be Vietnam Pro      │
│     → Gọi: "font tiếng Việt"              │
│                                            │
│  5. static-website-github-pages            │
│     → Deploy lên GitHub Pages              │
│     → Gọi: "deploy web", "đưa lên mạng"    │
└────────────────────────────────────────────┘
```

---

*Tổng số: 80 skills | 14 danh mục | Cập nhật: 07/06/2026*
*File này lưu tại: D:\projects\duye-lanh-web\tong-hop-skills.md*
*Dùng `/skill ten-skill` để xem chi tiết từng skill.*
