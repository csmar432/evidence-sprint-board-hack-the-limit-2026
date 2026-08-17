# Hack The Limit 2026

## 项目题目

**Evidence Sprint Board**

## 定位

一个不依赖特定 AI 服务的研究协作看板：把学生团队从研究问题、来源登记、证据核验推进到可分享 brief，减少“搜到很多资料但无法交付”的摩擦。

## 比赛约束

- 资格：每位参赛者都必须同时是高中或大学学生、达到居住国法定成年年龄，并以个人/学生团队而非公司或专业组织参赛。Overview 当前列出的排除地区为 Brazil、Crimea、Cuba、Iran、North Korea、Quebec、Russia。允许 solo，团队最多 5 人；每位成员仍需自行确认个人情况。
- 时间表存在多处冲突：Overview 页头、Schedule 和 Rules 页头显示 2026-08-29 23:45 PDT（北京时间约 8 月 30 日 14:45），但 Rules 页的 Dates 正文标注 “Subject to Change” 并显示 2026-07-29 21:00 PDT。Rules 正文还称评审与公布结果在截止后一周，而 Schedule 单列 8 月 30 日至 9 月 6 日评审、9 月 8 日公布；提交前需向主办方确认。
- 主题开放，适合 productivity 或 social good 方向。
- 需要项目标题、故事、问题、解决方案、功能、工具、用户和 proof of work；仓库/演示链接按当前规则提供。
- 官方评分：Execution & Build Quality 30%、Originality 25%、Value & Impact 20%、User Experience 15%、Presentation Quality 10%。

官方入口：[Hack The Limit Devpost](https://hack-the-limit-1.devpost.com/?ref_feature=challenge&ref_medium=discover) · [Rules](https://hack-the-limit-1.devpost.com/rules)

## MVP

做一个单页看板：4 个状态列、来源登记表、一个核验清单和一份可导出的 brief。允许使用本地静态数据，不做账号、数据库和复杂协作功能。

## 当前实现

`src/index.html` 已是可独立演示的单文件 MVP：

- 四阶段证据看板：Question → Sources → Verify → Brief；支持筛选、新增、编辑、阶段变更和删除卡片。
- 来源登记：标题、发布者、URL、访问日期、度量单位和用途说明；支持编辑/删除，只接受 `http(s)` 链接。
- 核验清单：问题、来源、单位、因果表述和边界说明；进度会实时反映到看板指标。
- Brief 编辑与交付：编辑标题、takeaway 和 caveat，支持下载 Markdown、完整 board JSON 备份/恢复与打印/PDF。
- 本地优先：使用浏览器 `localStorage` 保存当前演示数据；存储不可用时会提示并提供备份，无账号、后端或 AI 服务依赖。
- 当前内置的是一个可复核的 World Bank 公共数据研究案例：China、2022、93,735,700 pupils。它是真实来源与真实单位的演示，不声称是已经完成的真人学生项目；真实学生反馈必须单独采集并如实披露。

本地预览：

```bash
python3 -m http.server 4175 --directory src
```

然后打开 `http://127.0.0.1:4175/`。

## 项目目录

- `src/`：看板页面和最小交互
- `data/`：预留的演示数据目录（当前演示数据内置于单文件 MVP）
- `submission/`：Devpost 文案、演示脚本、QA 报告、示例导出、内容哈希清单和最终截图；视频按最终提交策略加入
- `.github/workflows/pages.yml`：将 `src/` 自动部署到 GitHub Pages 的 HTTPS Demo

## 当前状态

- [x] 先做静态看板，不接后端
- [x] 加入来源链接和核验状态
- [x] 做一个从问题到 brief 的完整演示样例
- [x] 已核对当前规则页面并记录日期/披露冲突；最终主办方确认仍属外部事项
- [x] 已准备本地演示、内容哈希清单和 Devpost 草稿；账号、团队资料、公开链接与媒体素材仍需在提交时补齐
- [x] 已用临时 Playwright Chromium 完成桌面、手机、平板、打印、导出和 CSP/runtime 检查；结果见 `submission/QA_REPORT.md`

## 投稿须知

最终提交以 Devpost 当前页面为准，并据实披露代码来源、AI 辅助情况、团队信息和演示链接。
