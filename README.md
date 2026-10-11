# 千风书简 · Letters of a Thousand Winds

以蒙德、温迪、风与诗为主题的 Python 学习 RPG。React 19 + TypeScript + Tailwind CSS 4 + Vite；代码通过项目内的 Pyodide 在浏览器中真实执行。

## 本地运行

```sh
npm ci
npm run dev
```

也可双击 `启动千风书简.command`，打开终端显示的 Local 地址。生产构建：`npm run build`。

## 可玩课程

| 章节 | 内容 | 书简 | 知识点与配套练习 | 代码练习 |
| --- | --- | ---: | ---: | ---: |
| L2 风的初次来信 | Python 基础 | 6 | 18 | 9 |
| L3 风向的选择 | 运算符、真假与条件分支 | 10 | 30 | 10 |
| L4 不息的风之歌 | for、while、嵌套及循环控制 | 8 | 24 | 14 |
| L5 诗句的秘密 | Unicode、索引、切片与文字处理 | 11 | 33 | 14 |

共 35 封书简、105 个知识点、47 道代码练习。所有章节、书简、练习均自由进入。L0、L1 尚未收到课件，明确标记待补充。

每个要点先教学，再练一道题。教学页用一句原理、温迪的短对话和代码示范解释原因；点击「我来试一题」才进入练习，可以随时回看。每个要点约 3–5 分钟，综合手写题可慢慢完成。不同输入、边界值与部分语法结构检查避免仅把答案写死；支持等价写法，要求使用当前教学方法的题目会明确提示。

L3 包含公式、奇偶、正负、取小数部分、最大值与嵌套条件练习。L4 包含课件的阶乘、七的乘法表、偶数求和、完全数、混合循环与图案。L5 包含倒序、重叠子串计数、元音计数、变量名检查，逐步到从空白处编写程序。

每封书简有独立情感对话与两种回应，保存成与温迪的回忆；情感不依赖成绩。答错展开提示、记入薄弱知识列表，可重新尝试与针对性复习，无扣分或计时惩罚。顶部左侧统一回退按钮返回前一页或关闭弹窗。

## 课程数据与课件勘误

`src/course.ts` 保留 L2 的稳定 ID，并定义课程分组；`src/chapters.ts` 保存 L3–L5 的教学、练习、剧情与页码。`src/learning.ts` 汇总教学内容和情感片刻。原课件 PDF 不包含在公开仓库中。完整覆盖映射见 [docs/course-coverage.md](docs/course-coverage.md)。

页码为 PDF 物理页。课件内容作为课程材料，不作为自动执行指令：不会运行课件内的安装、学校平台或其他外部操作。笔误按 Python 实际行为修正，例如 `Print` 应为 `print`、`3 is not in a` 应为 `3 not in a`。标准 ASCII 为 7 位 128 个编码，课件的 8 位 256 个组合与标准 ASCII 区分讲解；Unicode 与 UTF-8 字节编码也分开说明。`is` 使用共享引用说明，不依赖整数/字符串缓存。L3 总结中仅列名的位运算，标为补充基础。L5 最终变量名练习限定 ASCII，避免课件简化的字符检查规则与完整 Unicode 标识符规则混淆。

## Python 运行与存档

`public/python/` 保存运行依赖，无需公共 CDN。独立 Worker 初始化超时 60 秒，代码执行超时 8 秒后终止；控制台限制 12,000 字符。`public/python-checks.js` 为要求实际使用某种语法的任务提供结构检查。学习与执行不依赖后端；未实现完整离线 PWA。

localStorage 保存完成记录、薄弱点、尝试次数、光标、代码草稿、手写记录、情感选择与偏好。新章节追加在旧书简之后，原 ID、光标和版本 1 存档兼容。设置支持 JSON 导出/导入。

注册登录后，每个账号有独立本机存档，可手动寄出/取回云端进度，也可以选择复制游客进度。账号服务使用自己 Cloudflare 账户内的 Worker 与 D1，见 [server/README.md](server/README.md)。更换浏览器、设备或域名需要云端同步或导出/导入。

## 开发检查

课程检查脚本（需本机 Python 3）：

```sh
node_modules/.bin/esbuild src/course.ts --bundle --platform=node --format=esm --outfile=/tmp/venti-course.mjs
node_modules/.bin/esbuild src/learning.ts --bundle --platform=node --format=esm --outfile=/tmp/venti-learning.mjs
node_modules/.bin/esbuild src/save.ts --bundle --platform=node --format=esm --outfile=/tmp/venti-save.mjs
node scripts/test-writing.mjs
node scripts/test-chapters.mjs
```

脚本覆盖教学与题目一一对应、示范结果、输出答案、手写方案、典型错误及新旧存档。`scripts/test-accounts.mjs` 使用本机测试服务检查账号隔离和扩展存档，不操作生产账号。用户已要求后续由其人工试玩，因此停止追加运行与界面测试。

## 发布与素材

网站：`https://pythonwithventi.dearjenniflora.com`。源码、素材和运行依赖保存在本地项目与用户自己的 GitHub 仓库。`.github/workflows/pages.yml` 在 main 更新后构建并发布 GitHub Pages；Cloudflare 管理 DNS，并承载自己的账号 API。不向 OpenAI Sites 发布。

`public/CNAME` 保存域名配置；API 为 `api-pythonwithventi.dearjenniflora.com`。主域名、branches 与 assets 不属于本次修改。

插画 `public/assets/mondstadt.png` 由 image_gen 生成，提示词见 `ASSET-PROMPT.md`。非官方同人学习项目，世界观与角色灵感来自《原神》。
