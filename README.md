# 待辦清單 (To-Do List)

這是一個使用 React 和 Vite 開發的待辦清單應用程式，提供簡單直觀的界面來管理日常任務。

## 功能特色 ✨

- **新增任務**：快速添加新的待辦事項。
- **刪除任務**：輕鬆移除已完成或不需要的任務。
- **編輯任務**：可以隨時修改任務內容。
- **完成狀態切換**：勾選任務以標記為已完成或取消完成。
- **資料持久化**：透過 `localStorage` 儲存任務資料，重新整理頁面後資料不會遺失。
- **響應式設計**：適配桌面和行動裝置，使用 SCSS 提供美觀的使用者介面。

---

## 使用技術 🛠️

- **React**：負責 UI 架構與互動設計。
- **SCSS**：用於樣式設計，提供高度可定制化的介面。
- **Vite**：用於快速打包與開發環境設定。
- **JavaScript (ES6)**：實作應用邏輯與功能。
- **HTML5**：結構化網頁內容。
- **LocalStorage**：保存使用者的任務資料。

---

## 專案預覽 🚀

你可以在以下連結查看應用程式的線上預覽：
👉 [專案 Demo](https://lai-jian-chen.github.io/To-do-List/)

---

## 專案結構 📂

```
To-do-List/
│
├── src/
│   ├── components/       # React 元件
│   │   ├── CreateForm.jsx
│   │   ├── EditForm.jsx
│   │   ├── TodoList.jsx
│   │   └── todoWrapper.jsx
│   ├── App.scss          # 全域樣式
│   ├── App.jsx           # 主應用程式
│   └── index.jsx         # 入口檔案
│
├── public/               # 靜態資源
│
├── package.json          # 專案依賴與腳本
├── vite.config.js        # Vite 設定檔
└── README.md             # 項目說明文件
```

---

## 未來改進 🔧

- 添加任務分類功能。
- 支援拖放排序。
- 增加單元測試以提升程式碼品質。

---
