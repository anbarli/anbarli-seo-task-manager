/**
 * SEO Görev Yöneticisi - Otomatik Kayıt Sistemi
 * Veriler localStorage'da saklanır
 */

class SEOTaskManager {
  constructor() {
    this.currentProject = null;
    this.STORAGE_PREFIX = 'seoProject:';
    
    // DOM elemanları
    this.domainInput = document.getElementById('domainInput');
    this.loadDomainBtn = document.getElementById('loadDomainBtn');
    this.projectSelect = document.getElementById('projectSelect');
    this.deleteProjectBtn = document.getElementById('deleteProjectBtn');
    this.tasksBody = document.getElementById('tasksBody');
    this.jsonPreview = document.getElementById('jsonPreview');
    
    // Görev template'i
    this.TASKS_TEMPLATE = [
      { id: "hosting", title: "Hosting kontrolü", category: "Teknik SEO", subcategory: "Site Altyapısı", description: "Hosting hızını optimize et", priority: "Yüksek", status: "Bekliyor", done: false },
      { id: "ssl", title: "SSL kurulumu", category: "Teknik SEO", subcategory: "Güvenlik", description: "HTTPS/SSL sertifikasını doğrula", priority: "Yüksek", status: "Bekliyor", done: false },
      { id: "mobile", title: "Mobil uyumluluk testi", category: "Teknik SEO", subcategory: "Mobil SEO", description: "Google Mobile-Friendly Test çalıştır", priority: "Orta", status: "Bekliyor", done: false },
      { id: "url-structure", title: "URL yapı düzenlemesi", category: "Teknik SEO", subcategory: "Site Altyapısı", description: "Temiz ve okunabilir URL yapısı oluştur", priority: "Orta", status: "Bekliyor", done: false },
      { id: "robots", title: "robots.txt yapılandırma", category: "Teknik SEO", subcategory: "Dizine Eklenebilirlik", description: "Gereksiz sayfaları engelle, önemli sayfaları izinle", priority: "Yüksek", status: "Devam ediyor", done: false },
      { id: "sitemap", title: "XML Sitemap oluşturma", category: "Teknik SEO", subcategory: "Dizine Eklenebilirlik", description: "Sitemap oluştur ve Google Search Console'a gönder", priority: "Yüksek", status: "Bekliyor", done: false },
      { id: "title-optimization", title: "Title optimizasyonu", category: "On-Page SEO", subcategory: "Meta", description: "Her sayfaya benzersiz, açıklayıcı title ekle", priority: "Yüksek", status: "Bekliyor", done: false },
      { id: "meta-description", title: "Meta description yazımı", category: "On-Page SEO", subcategory: "Meta", description: "Her sayfaya tıklama odaklı meta description yaz", priority: "Orta", status: "Bekliyor", done: false },
      { id: "h1", title: "H1 optimizasyonu", category: "On-Page SEO", subcategory: "İçerik", description: "Her sayfada tek ve net bir H1 kullan", priority: "Orta", status: "Bekliyor", done: false },
      { id: "images-compress", title: "Görselleri sıkıştır", category: "Görsel SEO", subcategory: "Performans", description: "Görselleri mümkünse WebP formatına çevir ve sıkıştır", priority: "Orta", status: "Bekliyor", done: false },
      { id: "images-alt", title: "ALT metin ekle", category: "Görsel SEO", subcategory: "Erişilebilirlik", description: "Tüm görsellere anlamlı ALT metni ekle", priority: "Yüksek", status: "Bekliyor", done: false },
      { id: "internal-links", title: "İç bağlantı ekleme", category: "İç Bağlantı", subcategory: "Navigasyon", description: "Sayfalar arasında mantıklı iç link yapısı oluştur", priority: "Yüksek", status: "Devam ediyor", done: false },
      { id: "orphan-pages", title: "Yetim sayfa kontrolü", category: "İç Bağlantı", subcategory: "Teknik", description: "Orphan (bağlantısız) sayfaları tespit et", priority: "Yüksek", status: "Bekliyor", done: false },
      { id: "backlink-audit", title: "Backlink analizi", category: "Off-Page SEO", subcategory: "Bağlantı Profili", description: "Zararlı/spam backlinkleri tespit ve temizle", priority: "Yüksek", status: "Bekliyor", done: false },
      { id: "pagespeed", title: "PageSpeed testi", category: "Performans", subcategory: "Core Web Vitals", description: "PageSpeed Insights ile hız ve CWV analiz et", priority: "Yüksek", status: "Bekliyor", done: false },
      { id: "css-js", title: "CSS/JS optimizasyonu", category: "Performans", subcategory: "Kod Optimizasyon", description: "CSS/JS dosyalarını küçült ve mümkünse ertele (defer)", priority: "Orta", status: "Bekliyor", done: false },
      { id: "gsc-setup", title: "GSC doğrulama", category: "Search Console", subcategory: "Setup", description: "Google Search Console mülkünü ekle ve doğrula", priority: "Yüksek", status: "Tamamlandı", done: true },
      { id: "gsc-coverage", title: "Dizine ekleme sorunları çözme", category: "Search Console", subcategory: "Coverage", description: "Coverage raporundaki hataları çöz", priority: "Yüksek", status: "Bekliyor", done: false },
      { id: "ga4-setup", title: "GA4 kurulumu", category: "Analytics", subcategory: "Setup", description: "Google Analytics 4 kurulumu ve bağlantı", priority: "Yüksek", status: "Bekliyor", done: false },
      { id: "goals", title: "Dönüşüm hedeflerini ayarla", category: "Analytics", subcategory: "Ölçümleme", description: "Dönüşüm hedefleri ve event tracking yapılandır", priority: "Yüksek", status: "Bekliyor", done: false },
      { id: "kw-research", title: "Anahtar kelime araştırması", category: "İçerik Stratejisi", subcategory: "Keyword Research", description: "Temel anahtar kelime listesini çıkar (Ahrefs, Semrush vb.)", priority: "Yüksek", status: "Devam ediyor", done: false },
      { id: "content-calendar", title: "İçerik takvimi hazırlama", category: "İçerik Stratejisi", subcategory: "Planlama", description: "Blog/landing sayfa yayın takvimi oluştur", priority: "Orta", status: "Bekliyor", done: false },
      { id: "mobile-ux", title: "Mobil UX kontrol", category: "UX", subcategory: "Mobil", description: "Mobil gezinme ve okunabilirliği kontrol et", priority: "Orta", status: "Bekliyor", done: false },
      { id: "cta", title: "CTA optimizasyonu", category: "UX", subcategory: "Dönüşüm", description: "Net, görünür ve ikna edici CTA butonları tasarla", priority: "Orta", status: "Bekliyor", done: false }
    ];
    
    this.PRIORITY_OPTIONS = ["Düşük", "Orta", "Yüksek"];
    this.STATUS_OPTIONS = ["Bekliyor", "Devam ediyor", "Tamamlandı"];
    
    this.init();
  }
  
  init() {
    this.bindEvents();
    this.refreshProjectSelect();
    this.renderTasks();
  }
  
  bindEvents() {
    this.loadDomainBtn.addEventListener('click', () => this.handleLoadDomain());
    this.domainInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.handleLoadDomain();
      }
    });
    
    this.projectSelect.addEventListener('change', () => {
      const domain = this.projectSelect.value;
      if (domain) this.loadProject(domain);
    });
    
    this.deleteProjectBtn.addEventListener('click', () => this.handleDeleteProject());
  }
  
  getStorageKey(domain) {
    return this.STORAGE_PREFIX + domain;
  }
  
  loadExistingDomains() {
    const domains = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(this.STORAGE_PREFIX)) {
        const domain = key.substring(this.STORAGE_PREFIX.length);
        domains.push(domain);
      }
    }
    domains.sort();
    return domains;
  }
  
  refreshProjectSelect(activeDomain = null) {
    const saved = this.loadExistingDomains();
    this.projectSelect.innerHTML = '';
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = '— Seç —';
    this.projectSelect.appendChild(placeholder);
    
    saved.forEach(domain => {
      const opt = document.createElement('option');
      opt.value = domain;
      opt.textContent = domain;
      if (activeDomain === domain) opt.selected = true;
      this.projectSelect.appendChild(opt);
    });
  }
  
  handleLoadDomain() {
    const domain = this.domainInput.value.trim();
    if (!domain) {
      alert('Lütfen bir domain veya proje adı gir.');
      return;
    }
    this.loadProject(domain);
  }
  
  loadProject(domain) {
    if (!domain) return;
    
    const key = this.getStorageKey(domain);
    const existing = localStorage.getItem(key);
    
    if (existing) {
      try {
        this.currentProject = JSON.parse(existing);
      } catch (e) {
        console.error('JSON parse hatası, yeni proje oluşturuluyor', e);
        this.currentProject = {
          domain,
          tasks: this.cloneTasksTemplate(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
      }
    } else {
      // Yeni proje oluştur
      this.currentProject = {
        domain,
        tasks: this.cloneTasksTemplate(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      this.saveCurrentProject();
    }
    
    this.domainInput.value = domain;
    this.refreshProjectSelect(domain);
    this.renderTasks();
    this.updateJsonPreview();
  }
  
  saveCurrentProject() {
    if (!this.currentProject || !this.currentProject.domain) return;
    
    this.currentProject.updatedAt = new Date().toISOString();
    const key = this.getStorageKey(this.currentProject.domain);
    localStorage.setItem(key, JSON.stringify(this.currentProject));
    this.updateJsonPreview();
  }
  
  handleDeleteProject() {
    const domain = this.projectSelect.value || (this.currentProject && this.currentProject.domain);
    if (!domain) {
      alert('Silmek için önce bir proje seç.');
      return;
    }
    
    const ok = confirm(`"${domain}" projesini silmek istediğine emin misin?`);
    if (!ok) return;
    
    const key = this.getStorageKey(domain);
    localStorage.removeItem(key);
    
    if (this.currentProject && this.currentProject.domain === domain) {
      this.currentProject = null;
      this.tasksBody.innerHTML = '';
      this.jsonPreview.value = '';
    }
    
    this.refreshProjectSelect();
  }
  
  cloneTasksTemplate() {
    return this.TASKS_TEMPLATE.map(t => ({ ...t }));
  }
  
  renderTasks() {
    this.tasksBody.innerHTML = '';
    
    if (!this.currentProject) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = 7;
      td.textContent = 'Önce üstten bir domain/proje yükle veya oluştur.';
      td.style.fontSize = '13px';
      td.style.color = '#6b7280';
      td.style.textAlign = 'center';
      tr.appendChild(td);
      this.tasksBody.appendChild(tr);
      return;
    }
    
    this.currentProject.tasks.forEach(task => {
      const tr = document.createElement('tr');
      tr.dataset.taskId = task.id;
      
      // Checkbox
      const tdCheck = document.createElement('td');
      tdCheck.className = 'checkbox-cell';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = !!task.done;
      checkbox.addEventListener('change', () => {
        task.done = checkbox.checked;
        if (checkbox.checked) {
          task.status = 'Tamamlandı';
          statusSelect.value = 'Tamamlandı';
        } else if (task.status === 'Tamamlandı') {
          task.status = 'Bekliyor';
          statusSelect.value = 'Bekliyor';
        }
        this.saveCurrentProject();
      });
      tdCheck.appendChild(checkbox);
      tr.appendChild(tdCheck);
      
      // Görev
      const tdTitle = document.createElement('td');
      tdTitle.textContent = task.title;
      tr.appendChild(tdTitle);
      
      // Kategori
      const tdCat = document.createElement('td');
      const catSpan = document.createElement('span');
      catSpan.className = 'badge';
      catSpan.textContent = task.category;
      tdCat.appendChild(catSpan);
      tr.appendChild(tdCat);
      
      // Alt kategori
      const tdSubcat = document.createElement('td');
      tdSubcat.textContent = task.subcategory || '';
      tr.appendChild(tdSubcat);
      
      // Açıklama
      const tdDesc = document.createElement('td');
      tdDesc.textContent = task.description || '';
      tr.appendChild(tdDesc);
      
      // Öncelik
      const tdPriority = document.createElement('td');
      const prioritySelect = document.createElement('select');
      prioritySelect.className = 'select priority-select';
      this.PRIORITY_OPTIONS.forEach(optVal => {
        const opt = document.createElement('option');
        opt.value = optVal;
        opt.textContent = optVal;
        prioritySelect.appendChild(opt);
      });
      prioritySelect.value = this.PRIORITY_OPTIONS.includes(task.priority) ? task.priority : 'Orta';
      prioritySelect.addEventListener('change', () => {
        task.priority = prioritySelect.value;
        this.saveCurrentProject();
      });
      tdPriority.appendChild(prioritySelect);
      tr.appendChild(tdPriority);
      
      // Durum
      const tdStatus = document.createElement('td');
      const statusSelect = document.createElement('select');
      statusSelect.className = 'select status-select';
      this.STATUS_OPTIONS.forEach(optVal => {
        const opt = document.createElement('option');
        opt.value = optVal;
        opt.textContent = optVal;
        statusSelect.appendChild(opt);
      });
      statusSelect.value = this.STATUS_OPTIONS.includes(task.status) ? task.status : 'Bekliyor';
      statusSelect.addEventListener('change', () => {
        task.status = statusSelect.value;
        if (task.status === 'Tamamlandı') {
          task.done = true;
          checkbox.checked = true;
        } else if (task.done && task.status !== 'Tamamlandı') {
          task.done = false;
          checkbox.checked = false;
        }
        this.saveCurrentProject();
      });
      tdStatus.appendChild(statusSelect);
      tr.appendChild(tdStatus);
      
      this.tasksBody.appendChild(tr);
    });
  }
  
  updateJsonPreview() {
    if (!this.currentProject) {
      this.jsonPreview.value = '';
      return;
    }
    this.jsonPreview.value = JSON.stringify(this.currentProject, null, 2);
  }
}

// Uygulama başlat
document.addEventListener('DOMContentLoaded', () => {
  new SEOTaskManager();
});
