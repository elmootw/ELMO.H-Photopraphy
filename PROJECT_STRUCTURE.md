# ELMO.H Photography 作品集網站 - 專案架構

## 📋 專案概述

基於 React + Vite + Tailwind CSS 的攝影作品集網站，部署於 GitHub Pages。
支持動態內容管理、Lazy Loading、Modal 圖片展示、右鍵禁用等功能。

## 🗂️ 目錄結構

```
ELMO.H-Photopraphy/
├── public/
│   └── images/
│       ├── personal/              # 個人作品相簿（相簿結構）
│       ├── couple/                # 情侶作品相簿（相簿結構）
│       ├── wedding/               # 婚禮作品相簿（相簿結構）
│       ├── event/                 # 活動作品相簿（相簿結構）
│       ├── lifestyle/             # 生活作品相簿（相簿結構）
│       ├── street/                # 街拍照片（直接放置，無相簿）
│       ├── landscape/             # 風景照片（直接放置，無相簿）
│       └── covers/                # 類別封面圖片
│           ├── personal.jpg
│           ├── couple.jpg
│           ├── wedding.jpg
│           ├── event.jpg
│           ├── lifestyle.jpg
│           ├── street.jpg
│           ├── landscape.jpg
│           └── motion.jpg
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # 導航列
│   │   ├── AlbumGrid.jsx          # 相簿網格（相簿結構）
│   │   ├── PhotoGallery.jsx       # 照片網格（直接照片）
│   │   └── PhotoModal.jsx         # 照片放大 Modal
│   │
│   ├── pages/
│   │   ├── Home.jsx               # 首頁
│   │   ├── About.jsx              # 關於我頁面
│   │   ├── Portfolio.jsx          # 作品集分類首頁
│   │   │
│   │   └── portfolio/
│   │       ├── CategoryPage.jsx   # 通用類別頁面元件
│   │       ├── Personal.jsx       # 個人作品頁面
│   │       ├── Couple.jsx         # 情侶作品頁面
│   │       ├── Wedding.jsx        # 婚禮作品頁面
│   │       ├── Event.jsx          # 活動作品頁面
│   │       ├── Lifestyle.jsx      # 生活作品頁面
│   │       ├── Street.jsx         # 街拍作品頁面
│   │       ├── Landscape.jsx      # 風景作品頁面
│   │       ├── Motion.jsx         # 動態作品頁面（YouTube）
│   │       └── AlbumDetail.jsx    # 相簿詳情頁面
│   │
│   ├── data/
│   │   └── imageManifest.json     # 動態生成的相簿/照片索引
│   │
│   ├── index.css                  # 全局樣式
│   ├── main.jsx                   # React 入口
│   └── App.jsx                    # 主應用與路由
│
├── build-manifest.js              # 自動掃描 public/images 並生成 manifest
├── vite.config.js                 # Vite 構建配置
├── tailwind.config.js             # Tailwind CSS 配置
├── postcss.config.js              # PostCSS 配置
├── package.json                   # 項目依賴與腳本
└── .github/workflows/
    └── deploy.yml                 # GitHub Actions 自動部署配置
```

## 📸 內容組織方式

### 相簿結構（album-based）
用於 `personal`、`couple`、`wedding`、`event`、`lifestyle`

```
public/images/wedding/
└── 相簿資料夾名稱/               # 相簿資料夾（會自動生成 ID）
    ├── cover.jpg                 # 相簿封面（必須，正方形）
    ├── photo-1.jpg
    ├── photo-2.jpg
    └── ... 更多照片
```

**特點：**
- 每個相簿是獨立資料夾
- `cover.jpg` 作為相簿封面縮圖（必須是正方形）
- 照片數量可變
- 類別封面自動使用第一個相簿的 cover.jpg

### 直接照片結構（photo-based）
用於 `street`、`landscape`

```
public/images/landscape/
├── photo-1.jpg
├── photo-2.jpg
└── ... 更多照片
```

**特點：**
- 照片直接放在分類資料夾下
- 無相簿/子層級結構
- 適合不需分組的作品
- 類別封面自動使用第一張照片

### 類別封面圖片
統一放在 `public/images/covers/` 下，命名為 `{分類名}.jpg`

```
public/images/covers/
├── personal.jpg
├── couple.jpg
├── wedding.jpg
├── event.jpg
├── lifestyle.jpg
├── street.jpg
├── landscape.jpg
└── motion.jpg
```

### 動態作品
`motion` 分類使用 YouTube 影片嵌入，無需本地圖片

## 🔄 動態內容工作流程

### 新增相簿/照片

1. **新增相簿**（例如新的婚禮作品）
   ```bash
   mkdir -p "public/images/wedding/相簿名稱"
   # 將照片放入，確保有 cover.jpg
   cp cover.jpg photo-*.jpg "public/images/wedding/相簿名稱/"
   ```

2. **新增街拍/風景照片**
   ```bash
   cp photo.jpg "public/images/landscape/"
   ```

3. **更新類別封面**（可選）
   ```bash
   cp my-cover.jpg "public/images/covers/landscape.jpg"
   ```

4. **重新生成 manifest**
   ```bash
   node build-manifest.js
   ```

5. **部署到 GitHub Pages**
   ```bash
   npm run build
   # 或推送到 GitHub，自動觸發 Actions
   ```

## 🛠️ 技術棧

| 技術 | 版本 | 用途 |
|------|------|------|
| React | 18.2+ | 前端框架 |
| Vite | 5.0+ | 構建工具 |
| Tailwind CSS | 3.4+ | 樣式框架 |
| React Router | 6.0+ | 路由管理 |
| GitHub Pages | - | 部署平台 |

## 🎨 設計系統

### 色彩主題
- **主色（背景）**：象牙白 `#F5F1EE` (cream)
- **輔助色（文字/標題）**：酒紅色 `#722C2C` (wine-red)
- **強調色（點綴）**：玫瑰金 `#B76E79` (rose-gold)

### 字體
- **主字體**：Playfair Display（襯線字體）
- **備選**：Georgia

### 互動效果
- **懸停效果**：圖片放大 10%（scale-110）+ 陰影增強
- **過渡時間**：300ms
- **Modal**：點擊照片放大展示，支持點擊外部關閉

## 📦 重要文件說明

### `imageManifest.json`
動態生成的索引文件，結構：

```json
{
  "categories": {
    "personal": "/ELMO.H-Photopraphy/images/covers/personal.jpg",
    "couple": "/ELMO.H-Photopraphy/images/covers/couple.jpg",
    ...
  },
  "personal": [],            // 相簿陣列（相簿結構）
  "landscape": ["/images/..."],  // 照片陣列（直接照片）
  ...
}
```

### `build-manifest.js`
自動掃描腳本，執行流程：

1. 掃描 `public/images/` 所有分類
2. 判斷是相簿結構或直接照片
3. 提取所有照片路徑與元數據
4. 自動設定各分類的第一張圖作為類別封面
5. 讀取 `public/images/covers/` 下的封面圖片作為備選
6. 生成 `src/data/imageManifest.json`

## 🚀 部署流程

### 本地開發
```bash
npm install
npm run dev              # 開發伺服器 http://localhost:5173/ELMO.H-Photopraphy/
```

### 構建生產版本
```bash
npm run build           # 生成 dist/
npm run preview         # 預覽生產構建
```

### GitHub Actions 自動部署
推送到 GitHub 後自動觸發：
1. 安裝依賴
2. 執行 `npm run build`
3. 部署到 GitHub Pages
4. 發布至 `https://elmootw.github.io/ELMO.H-Photopraphy/`

## 🔒 安全功能

- ✅ 右鍵禁用（防止下載）
- ✅ Lazy Loading（圖片懶加載）
- ✅ Modal 預防複製
- ✅ URL 自動編碼（支持特殊字符）

## 📝 路由對應表

| 路徑 | 組件 | 內容類型 |
|------|------|---------|
| `/` | Home | 首頁 |
| `/about` | About | 關於我 |
| `/portfolio` | Portfolio | 分類首頁 |
| `/portfolio/personal` | Personal | 個人相簿 |
| `/portfolio/couple` | Couple | 情侶相簿 |
| `/portfolio/wedding` | Wedding | 婚禮相簿 |
| `/portfolio/event` | Event | 活動相簿 |
| `/portfolio/lifestyle` | Lifestyle | 生活相簿 |
| `/portfolio/street` | Street | 街拍照片 |
| `/portfolio/landscape` | Landscape | 風景照片 |
| `/portfolio/motion` | Motion | YouTube 影片 |
| `/portfolio/{category}/{albumId}` | AlbumDetail | 相簿詳情 |

## ✨ 核心功能清單

- [x] 響應式設計 (RWD)
- [x] 動態內容加載
- [x] 懶加載 (Lazy Loading)
- [x] 照片 Modal 放大
- [x] 右鍵禁用保護
- [x] 8 個作品集分類
- [x] 相簿與直接照片混合支持
- [x] Hashtag 篩選（Lifestyle）
- [x] YouTube 影片嵌入
- [x] 自動部署 CI/CD
- [x] 特殊字符路徑支持
- [x] 統一類別封面管理
