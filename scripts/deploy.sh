#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git remote add origin https://github.com/East333/vue-components-docs.git
git add -A
git commit -m 'deploy'
git branch pages
git checkout pages

git push -f git@github.com:East333/vue-components-docs.git pages:pages
