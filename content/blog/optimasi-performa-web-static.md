---
title: "Optimasi Performa Web Static di GitHub Pages"
slug: "optimasi-performa-web-static"
category: "Technical Note"
date: "2026-03-01T00:00:00.000Z"
excerpt: "Teknik optimasi asset, zero-dependency scripting, dan caching strategi untuk mencapai skor Lighthouse 95+."
tags: "Performance, GitHub Pages, Web Performance"
read_time: "3 min read"
---

### Optimasi Performa Web Static di GitHub Pages

Merancang website berkecepatan tinggi pada GitHub Pages membutuhkan disiplin dalam penyajian asset dan eksekusi script.

#### Strategi Utama

1. **Lightweight HTML & Vanilla JS**: Menghindari framework JavaScript berat agar initial parse time tetap di bawah 50ms.
2. **SVG & WebP Images**: Menggunakan format vektor SVG atau WebP terkompresi.
3. **Decap CMS Direct Fetching**: Mengambil data konten markdown secara asynchronous via GitHub Content API dengan caching local storage.
