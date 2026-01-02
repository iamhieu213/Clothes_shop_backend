FROM node:20-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json trước để tận dụng cache layer của Docker
COPY package*.json ./

# Cài đặt dependencies
RUN npm install --production

# Copy toàn bộ mã nguồn vào container
COPY . .

# Expose cổng mà ứng dụng sẽ chạy (mặc định là 4000, có thể thay đổi qua biến môi trường)
EXPOSE 4000

# Tạo thư mục tạm cho upload file (vì bị gitignore)
RUN mkdir -p tmp

# Lệnh khởi chạy ứng dụng
CMD ["npm", "start"]
