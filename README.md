# 千风书简 · Letters of a Thousand Winds

以蒙德、温迪、风与诗为主题的 Python 学习 RPG。React 19 + TypeScript + Tailwind CSS 4 + Vite，浏览器内 Pyodide（Python WebAssembly），无需后端。

## 本地运行

也可以双击项目目录中的 `启动千风书简.command`，再打开终端显示的 Local 地址。

```sh
npm ci
npm run dev
```

打开终端输出的地址（默认 http://127.0.0.1:5173）。生产构建：`npm run build`；预览构建：`npm run preview`。

## 可玩范围

L2 共六封书简、18 个挑战：编程语言与解释器、输出与语句、注释与运行方式、赋值与重新绑定、命名与关键字、对象与可变性、数据类型、内置类型概览、布尔值、字符串与转义、print 分隔符、纠错、函数参数与缩进、print/return、文档字符串与断言、类型转换、输入、综合修改。

剧情 → 小知识点 → 选择/预测输出/填空/纠错 → 反馈 → 通关来信 → 下一封。答错自动展开提示与步骤图，并进入薄弱知识列表；重复错误时预先提供提示。完成针对性复习后移除该薄弱知识。无扣分、倒计时或连续签到。

L3–L5 保留根据提供课件建立的知识目录；当前不提供这些章节的教学挑战。L0、L1 未收到材料，明确标记待补充。课件中的软件安装与学校平台操作作为背景，不会自动执行。课件中不严谨的表述未直接照搬：例如三引号属于字符串/文档字符串，而不是真正的多行注释。

## 扩展课程

`src/course.ts` 的 `Letter` 与 `Challenge` 是数据接口，包含剧情、题型、说明、初始代码、提示、步骤图、答案、Python 测试以及课件页码。代码挑战在独立 Worker 的真实 Python 中执行，并通过 `test` 的 Python 断言验证结果。编程题支持等价写法。

`public/python/` 保存 Pyodide 的运行依赖。依赖已经包含在构建产物里，部署后不需要从公共 CDN 加载 Python。首次进入代码挑战才初始化运行环境。初始化超时 60 秒；运行超时 8 秒后终止 Worker，允许重试。控制台输出限制为 12,000 字符。页面加载过后，学习交互与执行不需要后端服务；并未实现完整离线 PWA 安装。

## 自动存档

当前浏览器 localStorage（`thousand-winds-save-v1`）保存答题进度、错误知识点、尝试次数、当前书简位置、答案/代码草稿和设置。设置内支持 JSON 导出与导入，导入会替换当前进度。不同浏览器、设备和网站来源不共享存档。存储失败时提示导出备份。无登录、个人资料收集或服务器学习记录。

## 验证

- TypeScript 严格检查及 Vite 生产构建。
- 浏览器完整通关六封书简、全部 18 题。
- 答错提示与步骤图、重试成功、顺序解锁。
- 退出、刷新、恢复到原题，保留答案草稿。
- 存档导出下载与导入恢复，复习后薄弱知识数量从 2 变为 0。
- 本地 Python 加载，真实 SyntaxError 与成功执行、函数多参数测试。
- 桌面横屏及手机窄屏视觉检查。

## 素材

`public/assets/mondstadt.png` 通过内置 image_gen 生成，完整提示词保存在 `ASSET-PROMPT.md`。为非官方同人学习项目，角色与世界观灵感来自《原神》，不代表官方。

## 发布

目标地址：`https://pythonwithventi.dearjenniflora.com`。按照现有 branches 网站的结构，使用用户自己的 GitHub Pages 托管，Cloudflare 仅管理 DNS。不再向 OpenAI Sites 发布。

完整源码、素材和 Python 运行依赖均保留在本地项目文件夹。`.github/workflows/pages.yml` 在 main 分支推送后运行构建并部署 dist。仓库 Settings → Pages 的构建来源需选择 GitHub Actions，自定义域名设为 `pythonwithventi.dearjenniflora.com`；Cloudflare 添加 CNAME，名称 `pythonwithventi`，目标 `dearjenniflora.github.io`（仅 DNS）。`public/CNAME` 随构建保存域名配置。

切换域名后，浏览器存档不会自动迁移；可在旧地址导出 JSON，再到新地址导入。

## 自由探索与旅人账号

所有已制作的 L2 书简与 18 个挑战均可直接进入，地图卡片下方可自由选题。顶部左侧的统一返回按钮可返回上一页或关闭弹窗。L3–L5 仍是待制作的课程目录，不会因为通关而解锁。

登录入口在顶部。注册后，每个账号有独立的本机进度，可以选择复制游客存档，并在账号页手动寄出 / 取回云端存档。账号服务使用自己 Cloudflare 账户内的 Worker 与 D1，见 [server/README.md](server/README.md)。
