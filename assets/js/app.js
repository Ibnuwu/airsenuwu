/**
 * app.js — Main Application Logic
 * airseen1 Portfolio
 */

'use strict';

// --- Fallback & Seed Content Data ---
const FALLBACK_DATA = {
  projects: [
    {
      slug: 'airsenuwu-portfolio',
      title: 'Airsenuwu Portfolio',
      thumbnail: 'assets/images/projects/project-featured.svg',
      category: 'Portfolio Web',
      description: 'Website portfolio pribadi modern, minimalis, dan sangat cepat yang dibangun dengan pendekatan mobile-first dan pure HTML/CSS/JS. Terintegrasi dengan Decap CMS untuk kemudahan pemeliharaan konten.',
      status: 'Featured',
      tech: 'HTML5, CSS3, JavaScript, Decap CMS',
      repo: 'https://github.com/Ibnuwu/airsenuwu',
      demo: 'https://ibnuwu.github.io/airsenuwu/',
      body: `### Deskripsi Proyek

Website ini merupakan portofolio personal yang dirancang dengan estetika modern, performa tinggi, dan struktur kode yang sangat bersih. Memanfaatkan CSS Custom Properties untuk membangun design system yang konsisten dan modular.

### Fitur Utama

1. **Akses Admin Mudah**: Mengintegrasikan Decap CMS (sebelumnya Netlify CMS) untuk pengelolaan konten projects, blog, dan karya kreatif tanpa memerlukan database backend.
2. **Dynamic Client Loader**: Mengambil data markdown secara dinamis langsung dari GitHub API dengan sistem caching \`localStorage\` untuk performa instan dan pencegahan rate-limit.
3. **Visual Premium**: Efek mouse-glow interaktif, glassmorphism card, dan animasi mikro responsif.
4. **Fallback Handal**: Jika GitHub API limit tercapai atau perangkat sedang offline, sistem secara otomatis beralih menggunakan data lokal instan.`
    },
    {
      slug: 'gitjournal',
      title: 'GitJournal',
      thumbnail: 'assets/images/projects/project-1.svg',
      category: 'Mobile App',
      status: 'Active',
      description: 'Aplikasi pencatatan berbasis markdown minimalis yang tersinkronisasi otomatis dengan repository Git. Didesain untuk keamanan data pribadi penuh.',
      tech: 'Flutter, Rust, Git',
      repo: 'https://github.com/Ibnuwu',
      demo: '#',
      body: `### Deskripsi Proyek

GitJournal adalah editor markdown mobile-first yang kuat, terintegrasi langsung dengan Git hosting (GitHub, GitLab, custom server). Semua catatan Anda disimpan dalam format markdown standar terbuka.

### Kelebihan Utama

- **Privasi Penuh**: Anda yang memegang kendali atas server Git Anda tanpa perantara pihak ketiga.
- **Sinkronisasi Otomatis**: Menyinkronkan catatan secara real-time pada setiap perubahan dokumen.
- **Tampilan Minimalis**: Antarmuka terfokus dengan mode distorsi minimal untuk kenyamanan menulis.`
    },
    {
      slug: 'zenreader',
      title: 'ZenReader',
      thumbnail: 'assets/images/projects/project-2.svg',
      category: 'Web App',
      status: 'In Progress',
      description: 'Minimalist RSS aggregator and reader with zero algorithm bloat, local-first caching, and absolute content focus.',
      tech: 'React, Go, SQLite',
      repo: 'https://github.com/Ibnuwu',
      demo: 'https://ibnuwu.github.io/',
      body: `### Description

ZenReader is an RSS client designed to remove the noise of the modern internet. It does not contain any recommendation algorithms, trackers, or social features.

### Key Architectural Highlights

- **Local-First Design**: Powered by a local-first architecture with SQLite replication for extreme performance.
- **Instant Offline Mode**: Pre-caches feeds and content for continuous, offline-first reading.
- **Customizable Typography**: Elegant fonts and fluid line-widths to reduce eye strain.`
    }
  ],
  blog: [
    {
      slug: 'misteri-jam-dinding-tua',
      title: 'Misteri Jam Dinding Tua',
      category: 'Cerpen',
      date: '2026-06-14T00:00:00.000Z',
      excerpt: 'Setiap malam jam itu berdentang tepat pada pukul 12, membawa kenangan aneh dari masa lalu yang tak pernah terjadi...',
      body: `### Misteri Jam Dinding Tua

Suara detak jam itu bagaikan ketukan jemari tipis di atas kaca meja belajar. Setiap pukul dua belas malam, ia selalu berdentang dengan nada yang serak dan berat, seperti orang tua yang menghela napas panjang.

Rendra baru menempati paviliun tua ini selama seminggu. Jam kuno berbahan kayu jati hitam itu sudah tergantung di sana sejak ia pertama kali masuk. Pemilik paviliun, seorang wanita paruh baya dengan tatapan sayu, hanya berpesan singkat: *"Jangan pernah memutar jarum jam itu ke belakang."*

Malam ini, hawa dingin terasa menusuk kulit lebih tajam dari biasanya. Ketika jarum jam berhimpit tegak lurus di angka dua belas, dentang pertama menggema. Nada bergetar aneh. Rendra meletakkan cangkir kopinya. Di luar jendela yang buram, kabut melayang lambat.

Pada dentang ketiga, Rendra mendengar sesuatu yang mustahil. Bukan suara roda gigi, melainkan bisikan lembut. Bisikan seorang anak kecil yang mengeja nama ibunya. Di dinding, bayangan jam itu memanjang, meliuk seperti jemari yang meraih cermin di dekatnya.

Ia mendekati jam itu. Kayunya terasa hangat saat disentuh. Saat ia menatap jarum emasnya yang berkarat, ia melihat pemandangan aneh terpantul di kaca pelindungnya. Bukan kamar kosnya yang berantakan, melainkan sebuah ruang tamu bergaya kolonial, lengkap dengan lampu gantung kristal dan seorang wanita bergaun putih yang menatapnya balik dengan senyum membeku.

Detik berikutnya, jam berhenti berdetak. Hening total. Dan wanita di dalam cermin itu berbisik, *"Kamu akhirnya pulang..."*`
    },
    {
      slug: 'membangun-design-system-minimalis',
      title: 'Membangun Design System Minimalis dengan CSS Custom Properties',
      category: 'Tutorial',
      date: '2026-05-20T00:00:00.000Z',
      excerpt: 'Panduan praktis merancang warna, tipografi, dan grid tokens yang tangguh, clean, dan mudah dipelihara menggunakan native CSS.',
      body: `### Membangun Design System Minimalis dengan CSS Custom Properties

Dalam pengembangan web modern, banyak developer langsung memilih Tailwind CSS atau framework UI lainnya. Namun, untuk proyek berukuran kecil hingga menengah, kita bisa membangun **design system** yang sangat ringan, performan, dan mudah dipelihara hanya dengan native CSS Custom Properties (Variabel CSS).

#### 1. Mengapa Native CSS?

- **Zero Overhead**: Tidak memerlukan build-step atau pemrosesan compiler tambahan.
- **Dynamic**: Nilai variabel bisa diubah langsung via JavaScript secara real-time (sangat berguna untuk fitur Dark Mode).
- **Clean HTML**: Kode HTML bersih dari class utilitas yang menumpuk.

#### 2. Mendefinisikan Tokens di \`:root\`

Langkah pertama adalah membuat file \`variables.css\` dan menaruh semua nilai dasar di sana:

\`\`\`css
:root {
  /* Colors */
  --bg-primary: #0a0a0a;
  --text-primary: #ffffff;
  --accent: #6366f1;

  /* Typography */
  --font-sans: "Inter", sans-serif;
  --fs-base: 1rem;
  --fs-lg: 1.25rem;
  
  /* Spacing */
  --space-sm: 0.5rem;
  --space-md: 1rem;
}
\`\`\`

#### 3. Membuat Utility Classes Sederhana

Setelah mendefinisikan variabel dasar, buatlah class utilitas sederhana untuk tata letak umum seperti Flexbox dan spacing:

\`\`\`css
.flex { display: flex; }
.flex-col { flex-direction: column; }
.gap-md { gap: var(--space-md); }
.p-md { padding: var(--space-md); }
\`\`\`

Dengan pendekatan ini, Anda akan memiliki kontrol penuh atas visual situs Anda dengan ukuran file CSS kurang dari 10KB!`
    },
    {
      slug: 'review-buku-quiet',
      title: 'Review Buku: Quiet — Kekuatan Introvert di Dunia yang Berisik',
      category: 'Review',
      date: '2026-04-12T00:00:00.000Z',
      excerpt: 'Catatan kritis dan ulasan mendalam mengenai karya Susan Cain tentang bagaimana kontribusi kaum tenang sering kali diremehkan.',
      body: `### Review Buku: Quiet — Kekuatan Introvert di Dunia yang Berisik

Dalam buku *Quiet: The Power of Introverts in a World That Can't Stop Talking*, Susan Cain menyoroti bias kultural masyarakat modern yang sangat memuja kepribadian ekstrovert—apa yang ia sebut sebagai *"Extrovert Ideal"*.

#### Inti Argumen Buku

Cain menjelaskan bagaimana struktur sosial kita, mulai dari ruang kelas yang didesain berkelompok hingga kantor berkonsep *open-plan*, dirancang untuk menguntungkan mereka yang bersuara lantang. Padahal, banyak penemuan terbesar umat manusia lahir dari kesendirian dan perenungan mendalam.

#### Analisis Karakteristik Introvert

Buku ini didukung oleh penelitian ilmiah di bidang neurosains dan psikologi sosial:

1. **Sensitivitas Stimulus**: Introvert memiliki sistem saraf yang lebih responsif terhadap stimulasi luar, sehingga mereka membutuhkan waktu tenang (*recharge*) setelah bersosialisasi.
2. **Gaya Kepemimpinan**: Pemimpin introvert cenderung mendengarkan ide karyawan dengan lebih baik dan membiarkan anggota tim yang proaktif untuk berkembang secara mandiri.

#### Kesimpulan

*Quiet* bukan sekadar pembelaan bagi kaum introvert, melainkan sebuah seruan penting agar dunia menciptakan ruang yang lebih seimbang. Buku yang sangat direkomendasikan bagi siapa saja yang ingin memahami dinamika kepribadian manusia secara lebih inklusif.`
    }
  ],
  creative: [
    {
      title: 'Silence of the Mist',
      image: 'assets/images/creative/creative-1.svg',
      category: 'photography',
      description: 'Foto lanskap pagi berkabut tebal di lereng pegunungan Jawa Tengah.'
    },
    {
      title: 'Neon Cyberpunk Sphere',
      image: 'assets/images/creative/creative-2.svg',
      category: 'artwork',
      description: 'Ilustrasi 3D bola neon futuristik dengan gaya cyberpunk retro.'
    },
    {
      title: 'Minimal Web Layout Concept',
      image: 'assets/images/creative/creative-3.svg',
      category: 'design',
      description: 'Konsep desain antarmuka web minimalis dengan fokus grid asimetris.'
    },
    {
      title: 'Generative Canvas Wireframe',
      image: 'assets/images/creative/creative-4.svg',
      category: 'experiment',
      description: 'Eksperimen kode JavaScript Canvas untuk menghasilkan seni geometris acak.'
    }
  ]
};

// --- Configurations & State ---
const GITHUB_REPO = 'Ibnuwu/airsenuwu';
const CACHE_KEY_PREFIX = 'airsenuwu_cache_';
const CACHE_EXPIRY_MS = 10 * 60 * 1000; // 10 minutes (TTL)

let loadedProjects = [];
let loadedBlogs = [];

// --- Helper: Client-Side Regex Frontmatter Parser ---
function parseMarkdownFile(text) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = text.match(frontmatterRegex);
  
  let attributes = {};
  let body = text;

  if (match) {
    const yaml = match[1];
    body = match[2];
    
    // Parse YAML lines (key: value)
    yaml.split('\n').forEach(line => {
      const idx = line.indexOf(':');
      if (idx > -1) {
        const key = line.substring(0, idx).trim();
        let val = line.substring(idx + 1).trim();
        
        // Strip surrounding quotes
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.substring(1, val.length - 1);
        }
        attributes[key] = val;
      }
    });
  }
  
  return { attributes, body };
}

// --- API Client: Fetch content from GitHub API with caching ---
async function fetchFromGitHub(endpoint) {
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${endpoint}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`GitHub API returned status ${response.status}`);
  }
  return await response.json();
}

async function loadSectionData(sectionName) {
  // 1. Try Cache First
  const cached = localStorage.getItem(CACHE_KEY_PREFIX + sectionName);
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_EXPIRY_MS) {
        console.log(`Using cached data for ${sectionName}`);
        return parsed.data;
      }
    } catch (e) {
      console.warn('Failed to parse cache', e);
    }
  }

  // 2. Fetch from GitHub API
  console.log(`Fetching dynamic content from repo directory: content/${sectionName}...`);
  const files = await fetchFromGitHub(`content/${sectionName}`);
  
  // Filter out .gitkeep and keep only markdown files
  const mdFiles = files.filter(f => f.name.endsWith('.md') && f.name !== '.gitkeep');
  
  // If the directory has no markdown files, return an empty array (it will trigger mock data fallback)
  if (mdFiles.length === 0) {
    return [];
  }

  const contentPromises = mdFiles.map(async (file) => {
    const rawResponse = await fetch(file.download_url);
    if (!rawResponse.ok) {
      throw new Error(`Failed to fetch raw file: ${file.name}`);
    }
    const text = await rawResponse.text();
    const slug = file.name.replace(/\.md$/, '');
    const { attributes, body } = parseMarkdownFile(text);
    return {
      slug,
      ...attributes,
      body
    };
  });

  const data = await Promise.all(contentPromises);

  // Sorting
  if (sectionName === 'projects') {
    data.sort((a, b) => {
      // Featured status takes precedence
      const isAFeatured = a.status === 'Featured' || a.featured === 'true' || a.featured === true;
      const isBFeatured = b.status === 'Featured' || b.featured === 'true' || b.featured === true;
      if (isAFeatured && !isBFeatured) return -1;
      if (!isAFeatured && isBFeatured) return 1;
      return a.title.localeCompare(b.title);
    });
  } else if (sectionName === 'blog') {
    data.sort((a, b) => {
      const dateA = new Date(a.date || 0);
      const dateB = new Date(b.date || 0);
      return dateB - dateA;
    });
  }

  // 3. Update Cache
  try {
    localStorage.setItem(CACHE_KEY_PREFIX + sectionName, JSON.stringify({
      timestamp: Date.now(),
      data: data
    }));
  } catch (e) {
    console.warn('Failed to store cache', e);
  }

  return data;
}

// --- Render Loading Skeleton Screens ---
function showSkeletons() {
  const projContainer = document.getElementById('projects-container');
  const blogContainer = document.getElementById('blog-container');
  const creativeContainer = document.getElementById('creative-container');

  if (projContainer) {
    projContainer.innerHTML = `
      <div class="skeleton-card skeleton-featured skeleton-animate card flex flex-col md:flex-row">
        <div class="skeleton-thumbnail skeleton-animate"></div>
        <div class="skeleton-content flex flex-col gap-3 flex-grow">
          <div class="skeleton-line skeleton-animate w-1/4"></div>
          <div class="skeleton-line skeleton-animate w-3/4"></div>
          <div class="skeleton-line skeleton-animate w-full"></div>
          <div class="skeleton-line skeleton-animate w-1/2"></div>
        </div>
      </div>
      <div class="projects-grid">
        <div class="skeleton-card card flex flex-col">
          <div class="skeleton-thumbnail skeleton-animate"></div>
          <div class="skeleton-content flex flex-col gap-3 p-5">
            <div class="skeleton-line skeleton-animate w-1/3"></div>
            <div class="skeleton-line skeleton-animate w-full"></div>
            <div class="skeleton-line skeleton-animate w-1/2"></div>
          </div>
        </div>
        <div class="skeleton-card card flex flex-col">
          <div class="skeleton-thumbnail skeleton-animate"></div>
          <div class="skeleton-content flex flex-col gap-3 p-5">
            <div class="skeleton-line skeleton-animate w-1/3"></div>
            <div class="skeleton-line skeleton-animate w-full"></div>
            <div class="skeleton-line skeleton-animate w-1/2"></div>
          </div>
        </div>
      </div>
    `;
  }

  if (blogContainer) {
    blogContainer.innerHTML = `
      <div class="skeleton-blog-item skeleton-animate card p-6 flex flex-col gap-3">
        <div class="skeleton-line skeleton-animate w-1/4"></div>
        <div class="skeleton-line skeleton-animate w-3/4"></div>
        <div class="skeleton-line skeleton-animate w-1/2"></div>
      </div>
      <div class="skeleton-blog-item skeleton-animate card p-6 flex flex-col gap-3">
        <div class="skeleton-line skeleton-animate w-1/4"></div>
        <div class="skeleton-line skeleton-animate w-3/4"></div>
        <div class="skeleton-line skeleton-animate w-1/2"></div>
      </div>
    `;
  }

  if (creativeContainer) {
    creativeContainer.innerHTML = `
      <div class="skeleton-card card p-0 flex flex-col">
        <div class="skeleton-thumbnail skeleton-animate" style="aspect-ratio: 1/1; border-bottom: none;"></div>
      </div>
      <div class="skeleton-card card p-0 flex flex-col">
        <div class="skeleton-thumbnail skeleton-animate" style="aspect-ratio: 1/1; border-bottom: none;"></div>
      </div>
    `;
  }
}

// --- Render Functions ---
function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = '';

  const featuredList = projects.filter(p => p.status === 'Featured' || p.featured === 'true' || p.featured === true);
  const normalList = projects.filter(p => !(p.status === 'Featured' || p.featured === 'true' || p.featured === true));

  // Determine featured card and normal list
  let featured = featuredList[0] || projects[0];
  let normals = featuredList[0] ? normalList : projects.slice(1);

  if (featured) {
    const techTags = (featured.tech || '')
      .split(',')
      .map(t => t.trim())
      .filter(t => t)
      .map(t => `<span class="pill">${t}</span>`)
      .join('');

    const featuredHtml = `
      <div class="project-card featured-card card flex flex-col" data-slug="${featured.slug}">
        <div class="project-thumbnail-wrapper">
          <img src="${featured.thumbnail || 'assets/images/projects/project-featured.svg'}" alt="${featured.title}" class="project-thumbnail" width="400" height="220" loading="lazy" decoding="async">
          <span class="project-status badge-completed">${featured.status || 'Featured'}</span>
        </div>
        <div class="project-content flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="project-category text-xs fw-semibold text-tertiary">${featured.category || 'Portfolio Web'}</span>
              <span class="pill">Featured</span>
            </div>
            <h3 class="project-title text-xl fw-bold text-primary mb-2">${featured.title}</h3>
            <p class="project-description text-sm text-secondary mb-4">${featured.description}</p>
            <div class="project-tech-stack flex flex-wrap gap-2 mb-6">
              ${techTags}
            </div>
          </div>
          <div class="project-links flex gap-4">
            <a href="${featured.repo || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm-action">
              <i data-lucide="github" class="icon-sm"></i>
              <span>Repository</span>
            </a>
            <a href="${featured.demo || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm-action ${(!featured.demo || featured.demo === '#') ? 'disabled' : ''}">
              <i data-lucide="external-link" class="icon-sm"></i>
              <span>Live Demo</span>
            </a>
            <button class="btn btn-outline btn-sm-action btn-read-more" style="margin-left: auto;" aria-label="Baca selengkapnya tentang ${featured.title}">
              <span>Detail</span>
              <i data-lucide="book-open" class="icon-sm"></i>
            </button>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += featuredHtml;
  }

  if (normals.length > 0) {
    const grid = document.createElement('div');
    grid.className = 'projects-grid';

    normals.forEach(proj => {
      const techTags = (proj.tech || '')
        .split(',')
        .map(t => t.trim())
        .filter(t => t)
        .map(t => `<span class="pill">${t}</span>`)
        .join('');

      const projHtml = `
        <div class="project-card card flex flex-col" data-slug="${proj.slug}">
          <div class="project-thumbnail-wrapper">
            <img src="${proj.thumbnail || 'assets/images/projects/project-1.svg'}" alt="${proj.title}" class="project-thumbnail" width="400" height="220" loading="lazy" decoding="async">
          </div>
          <div class="project-content flex flex-col justify-between flex-grow">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="project-category text-xs fw-semibold text-tertiary">${proj.category || 'Project'}</span>
                <span class="pill status-${(proj.status || 'Active').toLowerCase().replace(' ', '-')}">${proj.status || 'Active'}</span>
              </div>
              <h3 class="project-title text-md fw-bold text-primary mb-2">${proj.title}</h3>
              <p class="project-description text-xs text-secondary mb-4">${proj.description}</p>
              <div class="project-tech-stack flex flex-wrap gap-2 mb-6">
                ${techTags}
              </div>
            </div>
            <div class="project-links flex gap-3">
              <a href="${proj.repo || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm-action">
                <i data-lucide="github" class="icon-sm"></i>
                <span>Repo</span>
              </a>
              <a href="${proj.demo || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm-action ${(!proj.demo || proj.demo === '#') ? 'disabled' : ''}">
                <i data-lucide="external-link" class="icon-sm"></i>
                <span>Demo</span>
              </a>
              <button class="btn btn-outline btn-sm-action btn-read-more" style="margin-left: auto; padding-inline: var(--space-3);" title="Detail Proyek" aria-label="Detail ${proj.title}">
                <i data-lucide="book-open" class="icon-sm"></i>
              </button>
            </div>
          </div>
        </div>
      `;
      grid.innerHTML += projHtml;
    });

    container.appendChild(grid);
  }

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function renderBlog(posts) {
  const container = document.getElementById('blog-container');
  if (!container) return;

  container.innerHTML = '';

  posts.forEach(post => {
    let dateFormatted = '';
    const dateRaw = post.date || '';
    if (dateRaw) {
      const d = new Date(dateRaw);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
      dateFormatted = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    }

    const postHtml = `
      <article class="blog-item card" data-slug="${post.slug}">
        <a href="#" class="blog-link flex flex-col justify-between h-full p-6 btn-read-blog" aria-label="Baca cerpen ${post.title}">
          <div>
            <div class="flex items-center gap-3 mb-3">
              <span class="pill">${post.category || 'Cerpen'}</span>
              <time class="blog-date text-xs text-tertiary" datetime="${dateRaw}">${dateFormatted}</time>
            </div>
            <h3 class="blog-title text-md fw-bold text-primary mb-2">${post.title}</h3>
            <p class="blog-excerpt text-xs text-secondary mb-4">${post.excerpt || post.description || ''}</p>
          </div>
          <div class="blog-footer flex items-center justify-between mt-2 pt-2 border-t border-solid border-border-hover">
            <span class="text-xs fw-medium text-accent">Baca Selengkapnya</span>
            <i data-lucide="arrow-up-right" class="icon-sm text-tertiary"></i>
          </div>
        </a>
      </article>
    `;
    container.innerHTML += postHtml;
  });

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function renderCreative(items) {
  const container = document.getElementById('creative-container');
  if (!container) return;

  container.innerHTML = '';

  items.forEach(item => {
    const itemHtml = `
      <div class="creative-item card" data-category="${item.category || 'photography'}">
        <button class="gallery-trigger" aria-label="Lihat ${item.title}">
          <div class="creative-img-wrapper">
            <img src="${item.image}" alt="${item.title}" class="creative-img" width="300" height="300" loading="lazy" decoding="async">
          </div>
          <div class="creative-meta p-4 flex justify-between items-center">
            <div>
              <span class="creative-category text-xs fw-semibold text-tertiary">${item.category || 'photography'}</span>
              <h4 class="creative-title text-sm fw-medium text-primary">${item.title}</h4>
            </div>
            <i data-lucide="maximize-2" class="icon-sm text-tertiary" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    `;
    container.innerHTML += itemHtml;
  });

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// --- Filters Setup (for Creative Works tab) ---
function setupCreativeFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  if (filterButtons.length) {
    filterButtons.forEach(button => {
      // Re-bind click event to prevent duplicates
      const newButton = button.cloneNode(true);
      button.parentNode.replaceChild(newButton, button);
      
      newButton.addEventListener('click', () => {
        const filter = newButton.getAttribute('data-filter');
        const creativeItems = document.querySelectorAll('.creative-item');

        // Update active class
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        newButton.classList.add('active');

        // Show/Hide cards
        creativeItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.classList.remove('hidden');
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          } else {
            item.classList.add('hidden');
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
          }
        });
      });
    });
  }
}

// --- Detail Reader Modal Logic ---
function setupReaderModal() {
  const modal = document.getElementById('reader-modal');
  const closeBtn = document.querySelector('.reader-modal-close');
  const overlay = document.querySelector('.reader-modal-overlay');

  if (!modal) return;

  const closeModal = () => {
    modal.classList.add('modal-hidden');
    document.body.style.overflow = '';
    // Clean up
    document.getElementById('reader-img').src = '';
    document.getElementById('reader-category').textContent = '';
    document.getElementById('reader-date').textContent = '';
    document.getElementById('reader-title').textContent = '';
    document.getElementById('reader-content').innerHTML = '';
  };

  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('modal-hidden')) {
      closeModal();
    }
  });

  // Handle Delegated Clicks to trigger the Reader Modal
  document.addEventListener('click', (e) => {
    // 1. Projects read detail click
    const projectCard = e.target.closest('.project-card');
    const readMoreBtn = e.target.closest('.btn-read-more');
    const thumbClick = e.target.closest('.project-thumbnail-wrapper');

    if (projectCard && (readMoreBtn || thumbClick) && !e.target.closest('.project-links a')) {
      e.preventDefault();
      const slug = projectCard.getAttribute('data-slug');
      const project = loadedProjects.find(p => p.slug === slug);
      if (project) {
        openReaderModal(project, 'project');
      }
    }

    // 2. Blog read click
    const blogItem = e.target.closest('.blog-item');
    if (blogItem && !e.target.closest('.blog-item a.disabled')) {
      e.preventDefault();
      const slug = blogItem.getAttribute('data-slug');
      const post = loadedBlogs.find(b => b.slug === slug);
      if (post) {
        openReaderModal(post, 'blog');
      }
    }
  });
}

function openReaderModal(item, type) {
  const modal = document.getElementById('reader-modal');
  const img = document.getElementById('reader-img');
  const heroWrapper = document.getElementById('reader-hero-wrapper');
  const category = document.getElementById('reader-category');
  const date = document.getElementById('reader-date');
  const title = document.getElementById('reader-title');
  const content = document.getElementById('reader-content');

  if (!modal) return;

  if (type === 'project') {
    if (item.thumbnail) {
      img.src = item.thumbnail;
      heroWrapper.style.display = 'block';
    } else {
      heroWrapper.style.display = 'none';
    }
    category.textContent = item.category || 'Portfolio';
    date.textContent = item.status || 'Completed';
    date.className = 'reader-date-text pill status-' + (item.status || 'Active').toLowerCase().replace(' ', '-');
  } else if (type === 'blog') {
    heroWrapper.style.display = 'none';
    category.textContent = item.category || 'Cerpen';
    
    let dateFormatted = '';
    if (item.date) {
      const d = new Date(item.date);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
      dateFormatted = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    }
    date.textContent = dateFormatted;
    date.className = 'reader-date-text';
  }

  title.textContent = item.title;

  // Compile markdown with marked.js
  if (typeof marked !== 'undefined' && item.body) {
    content.innerHTML = marked.parse(item.body);
  } else {
    content.innerHTML = `<p>${(item.body || item.description || '').replace(/\n/g, '<br>')}</p>`;
  }

  modal.classList.remove('modal-hidden');
  document.body.style.overflow = 'hidden';

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// --- Lightbox Modal (for Creative Works tab) ---
function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (!lightbox || !lightboxImg || !lightboxCaption) return;

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.gallery-trigger');
    if (trigger) {
      e.preventDefault();
      const img = trigger.querySelector('.creative-img');
      const title = trigger.querySelector('.creative-title').textContent;
      const category = trigger.querySelector('.creative-category').textContent;

      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = `${category.toUpperCase()} — ${title}`;
        lightbox.classList.remove('modal-hidden');
        document.body.style.overflow = 'hidden';
      }
    }
  });

  const closeLightbox = () => {
    lightbox.classList.add('modal-hidden');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  };

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('modal-hidden')) {
      closeLightbox();
    }
  });
}

// --- Premium Ambient Background Glow ---
function setupCursorGlow() {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  document.addEventListener('mousemove', (e) => {
    window.requestAnimationFrame(() => {
      glow.style.transform = `translate3d(${e.clientX - 150}px, ${e.clientY - 150}px, 0)`;
    });
  });
}

// --- Core Initializer ---
async function initContent() {
  showSkeletons();
  
  // 1. Load Projects
  try {
    const data = await loadSectionData('projects');
    loadedProjects = data.length > 0 ? data : FALLBACK_DATA.projects;
  } catch (e) {
    console.error('Failed to load projects, loading fallback data', e);
    loadedProjects = FALLBACK_DATA.projects;
  }
  renderProjects(loadedProjects);

  // 2. Load Blog
  try {
    const data = await loadSectionData('blog');
    loadedBlogs = data.length > 0 ? data : FALLBACK_DATA.blog;
  } catch (e) {
    console.error('Failed to load blog, loading fallback data', e);
    loadedBlogs = FALLBACK_DATA.blog;
  }
  renderBlog(loadedBlogs);

  // 3. Load Creative Works
  let loadedCreative = [];
  try {
    const data = await loadSectionData('creative');
    loadedCreative = data.length > 0 ? data : FALLBACK_DATA.creative;
  } catch (e) {
    console.error('Failed to load creative gallery, loading fallback data', e);
    loadedCreative = FALLBACK_DATA.creative;
  }
  renderCreative(loadedCreative);

  // Bind filter actions on newly rendered items
  setupCreativeFilters();
}

// --- Load Profile Settings from CMS ---
async function loadProfileSettings() {
  const PROFILE_CACHE_KEY = CACHE_KEY_PREFIX + 'profile';
  
  // Try cache first
  const cached = localStorage.getItem(PROFILE_CACHE_KEY);
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_EXPIRY_MS) {
        applyProfileSettings(parsed.data);
        return;
      }
    } catch (e) {
      console.warn('Failed to parse profile cache', e);
    }
  }

  // Fetch from GitHub
  try {
    const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/content/settings/profile.json`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Profile fetch: ${response.status}`);
    const fileData = await response.json();
    
    // Decode base64 content
    const content = JSON.parse(atob(fileData.content));
    
    // Cache it
    try {
      localStorage.setItem(PROFILE_CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        data: content
      }));
    } catch (e) {
      console.warn('Failed to cache profile', e);
    }
    
    applyProfileSettings(content);
  } catch (e) {
    console.log('Using default profile settings (API unavailable)', e);
    // Apply defaults (already in HTML, so no action needed)
  }
}

function applyProfileSettings(profile) {
  if (!profile) return;
  
  const avatarEl = document.getElementById('profile-avatar');
  const nameEl = document.getElementById('profile-name');
  const nicknameEl = document.getElementById('profile-nickname');
  const quoteEl = document.getElementById('profile-quote');
  const quoteSourceEl = document.getElementById('profile-quote-source');
  
  if (avatarEl && profile.avatar) {
    // Handle both absolute and relative paths
    const avatarSrc = profile.avatar.startsWith('/') 
      ? profile.avatar.substring(1) 
      : profile.avatar;
    avatarEl.src = avatarSrc;
  }
  if (nameEl && profile.name) nameEl.textContent = profile.name;
  if (nicknameEl && profile.nickname) nicknameEl.textContent = profile.nickname;
  if (quoteEl && profile.quote) quoteEl.textContent = `"${profile.quote}"`;
  if (quoteSourceEl && profile.quote_source) quoteSourceEl.textContent = `— ${profile.quote_source}`;
}

// --- Run Application ---
document.addEventListener('DOMContentLoaded', () => {
  console.log('ibnuwu portfolio initialized');
  
  // Lucide SVG Icons initial compile
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Setup cursor glow background light
  setupCursorGlow();

  // Load Profile from CMS settings
  loadProfileSettings();

  // Load Content from Git/Local
  initContent();

  // Setup modals
  setupReaderModal();
  setupLightbox();
});

