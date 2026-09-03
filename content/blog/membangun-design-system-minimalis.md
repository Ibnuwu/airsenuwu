---
title: "Membangun Design System Minimalis dengan CSS Custom Properties"
slug: "membangun-design-system-minimalis"
category: "Tutorial"
date: "2026-05-20T00:00:00.000Z"
excerpt: "Panduan praktis merancang warna, tipografi, dan grid tokens yang tangguh, clean, dan mudah dipelihara menggunakan native CSS."
tags: "CSS, Web Design, System"
read_time: "5 min read"
---

### Membangun Design System Minimalis dengan CSS Custom Properties

Dalam pengembangan web modern, banyak developer langsung memilih Tailwind CSS atau framework UI lainnya. Namun, untuk proyek berukuran kecil hingga menengah, kita bisa membangun **design system** yang sangat ringan, performan, dan mudah dipelihara hanya dengan native CSS Custom Properties.

#### 1. Mengapa Native CSS?

- **Zero Overhead**: Tidak memerlukan build-step atau pemrosesan compiler tambahan.
- **Dynamic**: Nilai variabel bisa diubah langsung via JavaScript secara real-time.
- **Clean HTML**: Kode HTML bersih dari class utilitas yang menumpuk.

#### 2. Mendefinisikan Tokens di `:root`

Langkah pertama adalah membuat file `variables.css` dan menaruh semua nilai dasar di sana:

```css
:root {
  /* Colors */
  --bg-primary: #0a0a0a;
  --bg-card: #171717;
  --border: #262626;
  --text-primary: #f5f5f5;
  --text-secondary: #a3a3a3;
}
```

Dengan pendekatan ini, Anda akan memiliki kontrol penuh atas visual situs Anda tanpa ketergantungan library luar!
