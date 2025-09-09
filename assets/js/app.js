/**
 * RFCE - Senior Living Community JavaScript
 */

const RFCEApp = {
  // Data
  galleryImages: [
    { id: 1, src: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&q=80', alt: 'Elegant community dining room', tags: ['dining', 'people'] },
    { id: 2, src: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&q=80', alt: 'Beautiful garden courtyard', tags: ['places', 'wellness'] },
    { id: 3, src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', alt: 'Modern senior living apartment', tags: ['places'] },
    { id: 4, src: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80', alt: 'Group fitness activities', tags: ['wellness', 'people'] },
    { id: 5, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', alt: 'Comfortable common area', tags: ['places'] },
    { id: 6, src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80', alt: 'Chef preparing fresh meals', tags: ['dining'] },
    { id: 7, src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80', alt: 'Social activities together', tags: ['people'] },
    { id: 8, src: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80', alt: 'Peaceful library space', tags: ['places'] },
    { id: 9, src: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&q=80', alt: 'Wellness center equipment', tags: ['wellness'] },
    { id: 10, src: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&q=80', alt: 'Outdoor terrace views', tags: ['places'] },
    { id: 11, src: './assets/img/fallback.jpg', alt: 'Community event space', tags: ['people', 'places'] },
    { id: 12, src: './assets/img/fallback.jpg', alt: 'Spa wellness facilities', tags: ['wellness'] }
  ],

  blogPosts: [
    {
      id: 1, title: 'The Benefits of Active Senior Living', 
      excerpt: 'Discover how staying active improves physical and mental well-being.',
      image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80',
      date: '2024-03-15', tags: ['wellness', 'lifestyle'],
      content: '<h2>Embracing Active Living</h2><p>Active senior living enhances independence, builds connections, and improves quality of life. Regular physical activity maintains strength, balance, and flexibility while reducing fall risks.</p><h3>Physical Benefits</h3><ul><li>Improved cardiovascular health</li><li>Better balance and coordination</li><li>Increased bone density</li><li>Enhanced mood and mental clarity</li></ul><p>At RFCE, we provide diverse opportunities for residents to stay active and engaged.</p>'
    },
    {
      id: 2, title: 'Creating a Welcoming Community',
      excerpt: 'Key elements that make senior living feel like home.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
      date: '2024-03-10', tags: ['community', 'lifestyle'],
      content: '<h2>What Makes Home</h2><p>Creating welcoming environments requires thoughtful design, caring staff, and celebrating each resident\'s unique story.</p><h3>Design for Comfort</h3><p>Well-lit walkways, comfortable common areas, and accessible features create a sense of home.</p><p>Community events and lifelong learning opportunities foster true belonging.</p>'
    },
    {
      id: 3, title: 'Nutrition and Wellness',
      excerpt: 'How proper nutrition enhances quality of life.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80',
      date: '2024-03-05', tags: ['wellness', 'nutrition'],
      content: '<h2>Healthy Aging Foundation</h2><p>Proper nutrition is fundamental to healthy aging. Our culinary team sources fresh, local ingredients for nutritious and delicious meals.</p><ul><li>Heart-healthy options</li><li>Diabetic-friendly choices</li><li>Cultural cuisine</li></ul>'
    },
    {
      id: 4, title: 'Technology and Modern Living',
      excerpt: 'How technology enhances safety and communication.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
      date: '2024-02-28', tags: ['technology', 'safety'],
      content: '<h2>Embracing Innovation</h2><p>Modern communities embrace technology for enhanced safety, communication, and quality of life.</p><h3>Safety Systems</h3><p>Advanced security and health monitoring provide peace of mind while maintaining independence.</p>'
    },
    {
      id: 5, title: 'Lifelong Learning',
      excerpt: 'Continued education benefits seniors.',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80',
      date: '2024-02-20', tags: ['education', 'lifestyle'],
      content: '<h2>Never Stop Learning</h2><p>Lifelong learning maintains cognitive function and provides purpose. Our community offers lectures, book clubs, and creative workshops.</p><blockquote>"Learning is a lifelong journey that enriches every stage."</blockquote>'
    },
    {
      id: 6, title: 'Family Involvement',
      excerpt: 'How families stay connected in senior living.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
      date: '2024-02-15', tags: ['family', 'community'],
      content: '<h2>Strengthening Bonds</h2><p>Family involvement is essential. We encourage participation through regular communication, family events, and virtual visits.</p><p>Strong family connections contribute to residents\' happiness and well-being.</p>'
    }
  ],

  currentImageIndex: 0,
  currentImages: [],

  // Initialize
  init() {
    this.initTheme();
    this.initNavigation();
    this.initScrollReveal();
    this.initImageErrors();
    
    const path = window.location.pathname;
    if (path.includes('gallery')) { this.initGallery(); this.initLightbox(); }
    else if (path.includes('blog')) { this.initBlog(); this.initModal(); this.initLightbox(); }
    else if (path.includes('contact')) { this.initContact(); }
    else { this.initHome(); }
  },

  // Theme
  initTheme() {
    const saved = localStorage.getItem('rfce-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('rfce-theme', next);
      });
    }
  },

  // Navigation
  initNavigation() {
    const path = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (path.includes(href) || (path === '/' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  },

  // Scroll reveal
  initScrollReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('revealed');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el));
  },

  // Image error handling
  initImageErrors() {
    document.addEventListener('error', e => {
      if (e.target.tagName === 'IMG') {
        e.target.src = './assets/img/fallback.jpg';
      }
    }, true);
  },

  // Home page
  initHome() {
    this.renderLifestyle();
    this.renderBlogPreview();
  },

  renderLifestyle() {
    const container = document.querySelector('.lifestyle-grid');
    if (!container) return;

    container.innerHTML = this.galleryImages.slice(0, 6).map(img => `
      <div class="lifestyle-item reveal-stagger">
        <img src="${img.src}" alt="${img.alt}" loading="lazy" onerror="this.src='./assets/img/fallback.jpg'">
        <div class="lifestyle-overlay">${img.alt.split(' ').slice(0, 3).join(' ')}</div>
      </div>
    `).join('');

    container.addEventListener('click', () => window.location.href = './gallery.html');
  },

  renderBlogPreview() {
    const container = document.querySelector('.blog-grid');
    if (!container) return;

    container.innerHTML = this.blogPosts.slice(0, 3).map(post => `
      <article class="blog-card reveal-stagger">
        <div class="blog-image">
          <img src="${post.image}" alt="${post.title}" loading="lazy" onerror="this.src='./assets/img/fallback.jpg'">
        </div>
        <div class="blog-content">
          <div class="blog-meta">
            <time>${this.formatDate(post.date)}</time>
            ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
          </div>
          <h3 class="blog-title">${post.title}</h3>
          <p>${post.excerpt}</p>
        </div>
      </article>
    `).join('');

    container.addEventListener('click', () => window.location.href = './blog.html');
  },

  // Gallery
  initGallery() {
    const container = document.querySelector('.gallery-grid');
    if (!container) return;

    container.innerHTML = this.galleryImages.map(img => `
      <div class="gallery-item reveal-stagger" data-tags="${img.tags.join(' ')}" data-id="${img.id}">
        <img src="${img.src}" alt="${img.alt}" loading="lazy" onerror="this.src='./assets/img/fallback.jpg'">
      </div>
    `).join('');

    container.addEventListener('click', e => {
      const item = e.target.closest('.gallery-item');
      if (item) this.openLightbox(parseInt(item.dataset.id));
    });

    // Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        document.querySelectorAll('.gallery-item').forEach(item => {
          if (filter === 'all' || item.dataset.tags.includes(filter)) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  },

  // Lightbox
  initLightbox() {
    if (document.querySelector('.lightbox')) return;

    document.body.insertAdjacentHTML('beforeend', `
      <div class="lightbox">
        <div class="lightbox-content">
          <button class="lightbox-close">&times;</button>
          <button class="lightbox-nav lightbox-prev">&#8249;</button>
          <img class="lightbox-image" src="" alt="">
          <button class="lightbox-nav lightbox-next">&#8250;</button>
          <div class="lightbox-caption"></div>
        </div>
      </div>
    `);

    const lightbox = document.querySelector('.lightbox');
    
    // Events
    document.querySelector('.lightbox-close').addEventListener('click', () => this.closeLightbox());
    document.querySelector('.lightbox-prev').addEventListener('click', () => this.showPrevImage());
    document.querySelector('.lightbox-next').addEventListener('click', () => this.showNextImage());
    
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) this.closeLightbox();
    });

    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowLeft') this.showPrevImage();
      if (e.key === 'ArrowRight') this.showNextImage();
    });

    // Modal images
    document.addEventListener('click', e => {
      if (e.target.classList.contains('modal-image')) {
        this.currentImages = [{ src: e.target.src, alt: e.target.alt }];
        this.currentImageIndex = 0;
        this.showLightboxImage();
        lightbox.classList.add('active');
      }
    });
  },

  openLightbox(imageId) {
    const image = this.galleryImages.find(img => img.id === imageId);
    if (!image) return;

    this.currentImages = this.galleryImages;
    this.currentImageIndex = this.galleryImages.findIndex(img => img.id === imageId);
    this.showLightboxImage();
    document.querySelector('.lightbox').classList.add('active');
  },

  showLightboxImage() {
    const img = document.querySelector('.lightbox-image');
    const caption = document.querySelector('.lightbox-caption');
    const current = this.currentImages[this.currentImageIndex];
    
    img.src = current.src;
    img.alt = current.alt;
    caption.textContent = current.alt;
  },

  showPrevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.currentImages.length) % this.currentImages.length;
    this.showLightboxImage();
  },

  showNextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.currentImages.length;
    this.showLightboxImage();
  },

  closeLightbox() {
    document.querySelector('.lightbox').classList.remove('active');
  },

  // Blog
  initBlog() {
    const container = document.querySelector('.blog-grid');
    if (!container) return;

    container.innerHTML = this.blogPosts.map(post => `
      <article class="blog-card reveal-stagger" data-id="${post.id}" data-tags="${post.tags.join(' ')}">
        <div class="blog-image">
          <img src="${post.image}" alt="${post.title}" loading="lazy" onerror="this.src='./assets/img/fallback.jpg'">
        </div>
        <div class="blog-content">
          <div class="blog-meta">
            <time>${this.formatDate(post.date)}</time>
            ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
          </div>
          <h3 class="blog-title">${post.title}</h3>
          <p>${post.excerpt}</p>
        </div>
      </article>
    `).join('');

    container.addEventListener('click', e => {
      const card = e.target.closest('.blog-card');
      if (card) this.openModal(parseInt(card.dataset.id));
    });

    // Search
    const search = document.querySelector('.search-input');
    if (search) {
      search.addEventListener('input', e => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.blog-card').forEach(card => {
          const title = card.querySelector('.blog-title').textContent.toLowerCase();
          const excerpt = card.querySelector('p').textContent.toLowerCase();
          card.style.display = title.includes(term) || excerpt.includes(term) ? 'block' : 'none';
        });
      });
    }

    // Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        document.querySelectorAll('.blog-card').forEach(card => {
          card.style.display = filter === 'all' || card.dataset.tags.includes(filter) ? 'block' : 'none';
        });
      });
    });
  },

  // Modal
  initModal() {
    if (document.querySelector('.modal')) return;

    document.body.insertAdjacentHTML('beforeend', `
      <div class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <button class="modal-close">&times;</button>
            <h1 class="modal-title"></h1>
            <div class="modal-meta"></div>
          </div>
          <div class="modal-body">
            <img class="modal-image" src="" alt="">
            <div class="modal-text"></div>
          </div>
        </div>
      </div>
    `);

    const modal = document.querySelector('.modal');
    document.querySelector('.modal-close').addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.classList.remove('active'); });
  },

  openModal(postId) {
    const post = this.blogPosts.find(p => p.id === postId);
    if (!post) return;

    document.querySelector('.modal-title').textContent = post.title;
    document.querySelector('.modal-meta').innerHTML = `
      <time>${this.formatDate(post.date)}</time>
      ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
    `;
    document.querySelector('.modal-image').src = post.image;
    document.querySelector('.modal-image').alt = post.title;
    document.querySelector('.modal-text').innerHTML = post.content;
    document.querySelector('.modal').classList.add('active');
  },

  // Contact
  initContact() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      
      const inputs = form.querySelectorAll('.form-input, .form-textarea');
      let valid = true;

      inputs.forEach(input => {
        const group = input.closest('.form-group');
        const error = group.querySelector('.form-error');
        
        if (!input.value.trim()) {
          group.classList.add('error');
          error.textContent = `${input.name} is required`;
          error.style.display = 'block';
          valid = false;
        } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
          group.classList.add('error');
          error.textContent = 'Please enter a valid email';
          error.style.display = 'block';
          valid = false;
        } else {
          group.classList.remove('error');
          error.style.display = 'none';
        }
      });

      if (valid) {
        this.showToast('Message sent successfully! We\'ll get back to you soon.');
        form.reset();
      }
    });

    // Clear errors on input
    form.querySelectorAll('.form-input, .form-textarea').forEach(input => {
      input.addEventListener('input', () => {
        input.closest('.form-group').classList.remove('error');
      });
    });
  },

  // Utilities
  formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  },

  showToast(message, isError = false) {
    const toast = document.createElement('div');
    toast.className = `toast ${isError ? 'error' : ''}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 250);
    }, 3000);
  }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => RFCEApp.init());