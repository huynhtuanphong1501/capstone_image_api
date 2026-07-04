# Capstone Image API

RESTful API xây dựng bằng NodeJS, ExpressJS, Prisma ORM và MySQL.

## Công nghệ sử dụng

- NodeJS
- ExpressJS
- Prisma ORM
- MySQL
- JWT Authentication
- Cookie Parser
- Multer
- Cloudinary
- Bcrypt

---

## Cài đặt

### Clone project

```bash
git clone <repository-url>
cd capstone_image_api
```

### Cài package

```bash
npm install
```

### Tạo file .env

```env
PORT=3069

DATABASE_URL=mysql://root:password@localhost:3306/capstone_express

ACCESS_TOKEN_SECRET=your_access_secret

REFRESH_TOKEN_SECRET=your_refresh_secret

CLOUDINARY_URL=your_cloudinary_url
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Chạy migration

```bash
npx prisma migrate dev
```

### Khởi động server

```bash
npm run dev
```

Server chạy tại:

```txt
http://localhost:3069
```

---

# Authentication

Sử dụng JWT Access Token.

Sau khi đăng nhập thành công:

```json
{
  "accessToken": "...",
  "refreshToken": "..."
}
```

Token được gửi qua Cookie để xác thực người dùng.

---

# API Documentation

## Auth

Base URL:

```txt
/api/auth
```

### Register

```http
POST /register
```

Body:

```json
{
  "email": "user@gmail.com",
  "mat_khau": "123456",
  "ho_ten": "Nguyen Van A",
  "tuoi": 25
}
```

### Login

```http
POST /login
```

Body:

```json
{
  "email": "user@gmail.com",
  "mat_khau": "123456"
}
```

---

## Home

Base URL:

```txt
/api/home
```

### Lấy danh sách hình ảnh

```http
GET /
```

Hỗ trợ phân trang và filter.

### Tìm kiếm hình ảnh theo tên

```http
GET /:ten_hinh
```

Ví dụ:

```http
GET /api/home/cat
```

Tìm kiếm bằng contains.
---

## Detail Page

Base URL:

```txt
/api/detail
```

### Lấy thông tin ảnh theo ID

```http
GET /:id
```

Trả về thông tin ảnh và người đăng ảnh.

### Lấy danh sách bình luận theo ID ảnh

```http
GET /comments/:hinh_id
```

Trả về danh sách comment và thông tin người bình luận. 

### Kiểm tra người dùng đã lưu ảnh chưa

```http
GET /checkSaved/:hinh_id
```

Response:

```json
true
```

hoặc

```json
false
```

:contentReference[oaicite:5]{index=5}

### Thêm bình luận

```http
POST /comments/:hinh_id
```

Body:

```json
{
  "noi_dung": "Ảnh đẹp"
}
```

:contentReference[oaicite:6]{index=6}

---

## Upload Image

Base URL:

```txt
/api/add-img
```

### Upload ảnh mới

```http
POST /themAnh
```

Form Data:

```txt
image      (file)
ten_hinh   (text)
mo_ta      (text)
```

Ảnh được upload lên Cloudinary và lưu URL vào database.

---
## Image Management

Base URL:

```txt
/api/img-manage
```

### Thông tin người dùng hiện tại

```http
GET /
```

---

### Danh sách ảnh đã lưu của user

```http
GET /saved/:id
```

---

### Danh sách ảnh đã tạo của user

```http
GET /created/:id
```

---

### Xóa mềm ảnh (Soft Delete)

```http
PUT /images/:id
```

Mô tả:

- Không xóa vật lý dữ liệu khỏi database.
- Cập nhật cột `isDelete = true`.
- Các API lấy danh sách ảnh chỉ hiển thị ảnh có `isDelete = false`.

Response:

```json
{
  "message": "Image deleted successfully"
}
```

---

## User

Base URL:

```txt
/api/user
```

### Cập nhật thông tin cá nhân

```http
PUT /
```

Body:

```json
{
  "ho_ten": "Nguyen Van A",
  "tuoi": 25,
  "anh_dai_dien": "avatar.jpg"
}
```


---

# Cấu trúc thư mục

```txt
src
├── common
│   ├── helpers
│   ├── middleware
│   ├── multer
│   └── prisma
│
├── controllers
│
├── routers
│
├── services
│
├── server.js
│
└── prisma
    └── schema.prisma
```

---

# Các tính năng

- Đăng ký tài khoản
- Đăng nhập JWT
- Upload ảnh lên Cloudinary
- Tìm kiếm ảnh theo tên
- Xem chi tiết ảnh
- Bình luận ảnh
- Kiểm tra ảnh đã lưu
- Quản lý ảnh đã tạo
- Quản lý ảnh đã lưu
- Cập nhật thông tin cá nhân
- Prisma ORM + MySQL

---

# Tác giả

Tuan Phong Huynh

Capstone Image API - NodeJS + ExpressJS + Prisma + MySQL