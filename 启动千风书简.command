#!/bin/zsh
cd -- "${0:A:h}"
export PATH="/Users/jennifer/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH"
if ! command -v npm >/dev/null 2>&1; then
  print '请先安装 Node.js，再运行此文件。'
  read '?按回车关闭…'
  exit 1
fi
if [[ ! -d node_modules ]]; then
  npm ci || exit 1
fi
print '千风书简正在启动。请打开下方 Local 地址开始游戏。'
print '关闭此窗口或按 Ctrl+C 可以停止游戏服务器。'
npm run dev
