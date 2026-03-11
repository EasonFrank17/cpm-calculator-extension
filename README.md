# CPM Calculator - Chrome 扩展

一个简单实用的 CPM（Cost Per Mille，每千次展示成本）计算器 Chrome 浏览器扩展。

## 功能特点

- 📊 快速计算 CPM 值
- 💡 简洁直观的用户界面
- ✅ 输入验证和错误提示
- ⌨️ 支持 Enter 键快速计算
- 🎨 现代化的渐变设计

## 计算公式

```
CPM = (总花费 / 总展示量) × 1000
```

## 安装方法

1. 打开 Chrome 浏览器
2. 在地址栏输入 `chrome://extensions/` 并回车
3. 打开右上角的"开发者模式"开关
4. 点击"加载已解压的扩展程序"按钮
5. 选择本扩展所在的文件夹
6. 安装完成！

## 使用方法

1. 点击浏览器工具栏中的 CPM Calculator 图标
2. 输入总花费金额（美元）
3. 输入总展示量
4. 点击"计算 CPM"按钮或按 Enter 键
5. 查看计算结果

## 文件结构

```
cpm calculator extension/
├── manifest.json      # 扩展配置文件
├── popup.html        # 弹出窗口界面
├── popup.js          # 计算逻辑
├── styles.css        # 样式文件
├── icon16.png        # 16x16 图标
├── icon48.png        # 48x48 图标
├── icon128.png       # 128x128 图标
└── README.md         # 说明文档
```

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- Chrome Extension Manifest V3

## 特性说明

### 输入验证
- 确保所有字段都已填写
- 验证输入为有效数字
- 检查数值不为负数
- 防止除零错误

### 用户体验
- 实时错误提示
- 动画效果
- 响应式布局
- 快捷键支持

## 版本信息

**版本**: 1.0.0
**更新日期**: 2026-03-11

## 许可证

MIT License

## 作者

Zhuanz
