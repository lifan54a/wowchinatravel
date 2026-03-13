# WOW CHINA 独立站

三语（中/英/俄）文旅独立站，Next.js + Tailwind CSS 静态导出。

## 本地开发
```bash
npm install
npm run dev
```

## 构建
```bash
npm run build
# 静态文件输出到 out/ 目录
```

## 环境变量（`.env.local`）
```
NEXT_PUBLIC_TG_BOT_TOKEN=你的Telegram Bot Token
NEXT_PUBLIC_TG_CHAT_ID=-1003812171518
```
> 咨询表单提交后会通过 Telegram Bot 发送到频道

## 部署到 Cloudflare Pages

1. 登录 [Cloudflare Pages](https://pages.cloudflare.com)
2. 连接 GitHub 仓库（或直接上传 `out/` 目录）
3. 构建设置：
   - Build command: `npm run build`
   - Output directory: `out`
4. 添加环境变量（NEXT_PUBLIC_TG_BOT_TOKEN、NEXT_PUBLIC_TG_CHAT_ID）
5. 部署完成后绑定自定义域名

## 部署到自己服务器（Nginx）
```nginx
server {
    listen 80;
    server_name wowchinatravel.com;
    root /var/www/wowchinatravel/out;
    index index.html;
    location / {
        try_files $uri $uri.html $uri/ =404;
    }
}
```
上传 `out/` 目录到服务器即可。

## 页面结构
- `/ru` - 俄语首页（默认）
- `/en` - 英语首页
- `/zh` - 中文首页

## 修改内容
- 三语文案：`messages/zh.json` / `messages/en.json` / `messages/ru.json`
- 页面样式：`components/HomeClient.tsx`
- 导航：`components/Navbar.tsx`
