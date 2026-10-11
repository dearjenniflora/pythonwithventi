# 旅人账号服务

前端仍部署在自己的 GitHub Pages。此目录部署到自己的 Cloudflare Workers + D1，服务地址为 `api-pythonwithventi.dearjenniflora.com`。

## 本机开发

```sh
npm ci
npm run server:migrate:local
npm run server:dev
# 另开终端
npm run dev
```

开发页面使用 `http://127.0.0.1:5173`，Vite 将 `/api` 转发到本机 Worker。开发专用 cookie 不会用于生产。

```sh
npm run server:check
node scripts/test-accounts.mjs
npm run build
```

账号集成测试只写本机测试数据库，验证注册、用户名唯一性、错误密码、会话撤销、存档隔离、并发修订冲突与 CORS/CSRF。测试账号不会写进生产数据库。

## 部署

1. 使用官方 `npx wrangler login` 登录自己的 Cloudflare 账号。
2. `npx wrangler d1 create pythonwithventi-accounts --config server/wrangler.jsonc`，将返回的数据库 ID 写入配置。
3. `npx wrangler d1 migrations apply pythonwithventi-accounts --config server/wrangler.jsonc --remote`。
4. `npm run server:deploy`。Worker 自定义域名配置会创建对应 DNS 与证书。
5. 前端沿用已有 GitHub Pages 工作流。仅推送 `main` 才会更新正式游戏。

账号密码用带随机盐的 scrypt（N=16384,r=8,p=5）保存，数据库不存明文密码。随机会话令牌只经 HttpOnly、Secure、SameSite=Lax、host-only cookie 传输，数据库只存令牌 SHA-256 摘要。退出时撤销服务端会话。写请求校验精确 Origin 和专用请求头；注册、登录及存档写入有数据库限流。定时清理过期会话和限流记录。请求/响应与密码不写入应用日志。

用户名不要求邮箱，当前没有密码找回、改密与邮箱验证。请保存好密码。Cloudflare 数据库包含私人账号数据，不能导出到公开仓库。`.wrangler`、`.dev.vars`、`.env` 已忽略。

游客与各账号的本机存档分别保存。登录不会静默覆盖游客进度。账号页可确认复制游客存档；可手动寄出或取回云端存档。云端更新使用修订号检测冲突，不会静默覆盖另一台设备的新进度。遇到冲突先导出本机备份，再取回云端内容。
