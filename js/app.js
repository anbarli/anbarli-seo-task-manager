/**
 * SEO Görev Yöneticisi - JSON Dosya Sistemi
 * Her domain data/ klasöründe ayrı JSON dosyası olarak saklanır
 */

class SEOTaskManager {
  constructor() {
    this.currentProject = null;
    this.dataDirectoryHandle = null;
    this.projectFiles = new Map();
    
    // DOM elemanları
    this.domainInput = document.getElementById('domainInput');
    this.loadDomainBtn = document.getElementById('loadDomainBtn');
    this.projectSelect = document.getElementById('projectSelect');
    this.deleteProjectBtn = document.getElementById('deleteProjectBtn');
    this.tasksBody = document.getElementById('tasksBody');
    this.toolLinks = document.getElementById('toolLinks');
    
    // Modal elemanları
    this.taskModal = document.getElementById('taskModal');
    this.addTaskBtn = document.getElementById('addTaskBtn');
    this.taskForm = document.getElementById('taskForm');
    this.modalTitle = document.getElementById('modalTitle');
    this.modalClose = document.querySelector('.modal-close');
    this.cancelModalBtn = document.getElementById('cancelModalBtn');
    
    this.editingTaskId = null;
    
    // SEO Araçları
    this.seoTools = {
      'Speed Test': [
        { name: 'GTmetrix Speed Test', url: 'https://gtmetrix.com' },
        { name: 'HubSpot Website Grader', url: 'https://website.grader.com' },
        { name: 'PageSpeed Speed Test', url: 'https://pagespeed.web.dev/analysis?url={domain}' },
        { name: 'Pingdom Speed Test', url: 'https://tools.pingdom.com' }
      ],
      'Other Tools': [
        { name: 'Gzip Check', url: 'https://www.giftofspeed.com/gzip-test/' },
        { name: 'Markup Validator (w3)', url: 'https://validator.w3.org/check?uri={domain}%2F&charset=%28detect+automatically%29&doctype=Inline&group=0' },
        { name: 'Meta Tag Check', url: 'https://www.opengraph.xyz/url/{domain}' },
        { name: 'Robots.txt Generator', url: 'https://www.seoptimer.com/robots-txt-generator' },
        { name: 'SEMRush', url: 'https://www.semrush.com' },
        { name: 'SEO Site Checker', url: 'https://sitechecker.pro/' },
        { name: 'SEO Site Checkup', url: 'https://seositecheckup.com/seo-audit/{domain}' },
        { name: 'Schema.org', url: 'https://schema.org' },
        { name: 'SerpStack', url: 'https://serpstack.com' },
        { name: 'Sitemap Generator', url: 'https://www.xml-sitemaps.com' },
        { name: 'WCAG Check', url: 'https://www.accessibilitychecker.org/audit/?website={domain}&flag=ww' },
        { name: 'Small SEO Tools', url: 'https://smallseotools.com/' },
        { name: 'ahrefs SEO Tools', url: 'https://ahrefs.com/free-seo-tools' },
        { name: 'SEO Site Checkup Tools', url: 'https://seositecheckup.com/tools' }
      ],
      'DNS Tools': [
        { name: 'DNS Check SecurityTrails', url: 'https://securitytrails.com/domain/{domain}/dns' },
        { name: 'DNS Check host.io', url: 'https://host.io/{domain}' },
        { name: 'DNS Checker', url: 'https://dnschecker.org/#A/{domain}' },
        { name: 'DNS Spy', url: 'https://dnsspy.io/scan/{domain}' },
        { name: 'MX ToolBox', url: 'https://mxtoolbox.com/SuperTool.aspx?action=mx%3a{domain}&run=toolpage#' },
        { name: 'Sucuri Blacklist Check', url: 'https://labs.sucuri.net/blacklist/info/?domain={domain}' },
        { name: 'ZONE Master', url: 'https://zonemaster.net/' },
        { name: 'intoDNS', url: 'https://intodns.com/{domain}' }
      ],
      'Anti Malware': [
        { name: 'Abuse IP Db', url: 'https://www.abuseipdb.com/check/{domain}' },
        { name: 'Google Güvenli Tarama', url: 'https://transparencyreport.google.com/safe-browsing/search?url={domain}' },
        { name: 'Mcafee Web Advisor', url: 'https://www.siteadvisor.com/sitereport.html?url={domain}' },
        { name: 'MyWOT', url: 'https://www.mywot.com/scorecard/{domain}' },
        { name: 'Norton Safe Web', url: 'https://safeweb.norton.com/report?url={domain}' },
        { name: 'Sucuri Site Check', url: 'https://sitecheck.sucuri.net/results/{domain}' },
        { name: 'Threat Intelligence Platform', url: 'https://threatintelligenceplatform.com/' },
        { name: 'URL Scan', url: 'https://urlscan.io/' },
        { name: 'Virus Total', url: 'https://www.virustotal.com/gui/domain/{domain}' },
        { name: 'WebPageTest', url: 'https://www.webpagetest.org/' },
        { name: 'Website Malware Scanner', url: 'https://quttera.com/' },
        { name: 'Website Reputation Checker', url: 'https://www.urlvoid.com/scan/{domain}/' },
        { name: 'Yandex Safety Check', url: 'https://yandex.com/safety/?url={domain}' }
      ]
    };
    
    // Görev template'i
    this.TASKS_TEMPLATE = [
      { id: "hosting", title: "Hosting kontrolü", category: "Teknik SEO", subcategory: "Site Altyapısı", description: "Hosting hızını optimize et", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "ssl", title: "SSL kurulumu", category: "Teknik SEO", subcategory: "Güvenlik", description: "HTTPS/SSL sertifikasını doğrula", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "mobile", title: "Mobil uyumluluk testi", category: "Teknik SEO", subcategory: "Mobil SEO", description: "Google Mobile-Friendly Test çalıştır", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "url-structure", title: "URL yapı düzenlemesi", category: "Teknik SEO", subcategory: "Site Altyapısı", description: "Temiz ve okunabilir URL yapısı oluştur", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "robots", title: "robots.txt yapılandırma", category: "Teknik SEO", subcategory: "Dizine Eklenebilirlik", description: "Gereksiz sayfaları engelle, önemli sayfaları izinle", priority: "Yüksek", status: "Devam ediyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "sitemap", title: "XML Sitemap oluşturma", category: "Teknik SEO", subcategory: "Dizine Eklenebilirlik", description: "Sitemap oluştur ve Google Search Console'a gönder", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "title-optimization", title: "Title optimizasyonu", category: "On-Page SEO", subcategory: "Meta", description: "Her sayfaya benzersiz, açıklayıcı title ekle", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "meta-description", title: "Meta description yazımı", category: "On-Page SEO", subcategory: "Meta", description: "Her sayfaya tıklama odaklı meta description yaz", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "h1", title: "H1 optimizasyonu", category: "On-Page SEO", subcategory: "İçerik", description: "Her sayfada tek ve net bir H1 kullan", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "images-compress", title: "Görselleri sıkıştır", category: "Görsel SEO", subcategory: "Performans", description: "Görselleri mümkünse WebP formatına çevir ve sıkıştır", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "images-alt", title: "ALT metin ekle", category: "Görsel SEO", subcategory: "Erişilebilirlik", description: "Tüm görsellere anlamlı ALT metni ekle", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "internal-links", title: "İç bağlantı ekleme", category: "İç Bağlantı", subcategory: "Navigasyon", description: "Sayfalar arasında mantıklı iç link yapısı oluştur", priority: "Yüksek", status: "Devam ediyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "orphan-pages", title: "Yetim sayfa kontrolü", category: "İç Bağlantı", subcategory: "Teknik", description: "Orphan (bağlantısız) sayfaları tespit et", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "backlink-audit", title: "Backlink analizi", category: "Off-Page SEO", subcategory: "Bağlantı Profili", description: "Zararlı/spam backlinkleri tespit ve temizle", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "pagespeed", title: "PageSpeed testi", category: "Performans", subcategory: "Core Web Vitals", description: "PageSpeed Insights ile hız ve CWV analiz et", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "css-js", title: "CSS/JS optimizasyonu", category: "Performans", subcategory: "Kod Optimizasyon", description: "CSS/JS dosyalarını küçült ve mümkünse ertele (defer)", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "gsc-setup", title: "GSC doğrulama", category: "Search Console", subcategory: "Setup", description: "Google Search Console mülkünü ekle ve doğrula", priority: "Yüksek", status: "Tamamlandı", done: true, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "gsc-coverage", title: "Dizine ekleme sorunları çözme", category: "Search Console", subcategory: "Coverage", description: "Coverage raporundaki hataları çöz", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "ga4-setup", title: "GA4 kurulumu", category: "Analytics", subcategory: "Setup", description: "Google Analytics 4 kurulumu ve bağlantı", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "goals", title: "Dönüşüm hedeflerini ayarla", category: "Analytics", subcategory: "Ölçümleme", description: "Dönüşüm hedefleri ve event tracking yapılandır", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "kw-research", title: "Anahtar kelime araştırması", category: "İçerik Stratejisi", subcategory: "Keyword Research", description: "Temel anahtar kelime listesini çıkar (Ahrefs, Semrush vb.)", priority: "Yüksek", status: "Devam ediyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "content-calendar", title: "İçerik takvimi hazırlama", category: "İçerik Stratejisi", subcategory: "Planlama", description: "Blog/landing sayfa yayın takvimi oluştur", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "mobile-ux", title: "Mobil UX kontrol", category: "UX", subcategory: "Mobil", description: "Mobil gezinme ve okunabilirliği kontrol et", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "cta", title: "CTA optimizasyonu", category: "UX", subcategory: "Dönüşüm", description: "Net, görünür ve ikna edici CTA butonları tasarla", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" }
    ];
    
    this.PRIORITY_OPTIONS = ["Düşük", "Orta", "Yüksek"];
    this.STATUS_OPTIONS = ["Bekliyor", "Devam ediyor", "Tamamlandı"];
    
    this.init();
  }
  
  async init() {
    this.bindEvents();
    await this.initDataDirectory();
    this.renderTasks();
  }
  
  async initDataDirectory() {
    // IndexedDB'den kaydedilmiş klasör handle'ını yükle
    const stored = await this.loadStoredDirectoryHandle();
    if (stored) {
      try {
        const permission = await stored.queryPermission({ mode: 'readwrite' });
        if (permission === 'granted') {
          this.dataDirectoryHandle = stored;
          await this.scanProjectFiles();
          return;
        }
      } catch (e) {
        console.log('Kaydedilmiş klasör erişilemedi:', e);
      }
    }
    
    // Klasör seçilmemişse kullanıcıya sor
    await this.promptForDataDirectory();
  }
  
  async promptForDataDirectory() {
    if (!('showDirectoryPicker' in window)) {
      alert('Tarayıcınız dosya sistemi erişimini desteklemiyor. Chrome, Edge veya Opera kullanın.');
      return;
    }
    
    try {
      const dirHandle = await window.showDirectoryPicker({
        mode: 'readwrite',
        startIn: 'documents'
      });
      
      this.dataDirectoryHandle = dirHandle;
      await this.storeDirectoryHandle(dirHandle);
      await this.scanProjectFiles();
    } catch (e) {
      if (e.name !== 'AbortError') {
        console.error('Klasör seçme hatası:', e);
        alert('Data klasörü seçilemedi. Lütfen sayfayı yenileyin ve data/ klasörünü seçin.');
      }
    }
  }
  
  async loadStoredDirectoryHandle() {
    try {
      const db = await this.openDatabase();
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(['settings'], 'readonly');
        const store = transaction.objectStore('settings');
        const request = store.get('dataDirectoryHandle');
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    } catch (e) {
      return null;
    }
  }
  
  async openDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('SEOTaskManagerDB', 1);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('settings')) {
          db.createObjectStore('settings');
        }
      };
    });
  }
  
  async storeDirectoryHandle(handle) {
    const db = await this.openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['settings'], 'readwrite');
      const store = transaction.objectStore('settings');
      const request = store.put(handle, 'dataDirectoryHandle');
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
  
  async scanProjectFiles() {
    if (!this.dataDirectoryHandle) return;
    
    this.projectFiles.clear();
    
    try {
      for await (const entry of this.dataDirectoryHandle.values()) {
        if (entry.kind === 'file' && entry.name.endsWith('.json')) {
          const domain = entry.name.replace('.json', '');
          this.projectFiles.set(domain, entry);
        }
      }
      
      this.refreshProjectSelect();
    } catch (e) {
      console.error('Dosya tarama hatası:', e);
    }
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
    
    // Modal event listeners
    this.addTaskBtn.addEventListener('click', () => this.openTaskModal());
    this.modalClose.addEventListener('click', () => this.closeTaskModal());
    this.cancelModalBtn.addEventListener('click', () => this.closeTaskModal());
    this.taskForm.addEventListener('submit', (e) => this.handleTaskSubmit(e));
    
    // Modal dışına tıklayınca kapat
    this.taskModal.addEventListener('click', (e) => {
      if (e.target === this.taskModal) this.closeTaskModal();
    });
  }
  
  refreshProjectSelect(activeDomain = null) {
    this.projectSelect.innerHTML = '';
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = '— Seç —';
    this.projectSelect.appendChild(placeholder);
    
    const domains = Array.from(this.projectFiles.keys()).sort();
    domains.forEach(domain => {
      const opt = document.createElement('option');
      opt.value = domain;
      opt.textContent = domain;
      if (activeDomain === domain) opt.selected = true;
      this.projectSelect.appendChild(opt);
    });
  }
  
  async handleLoadDomain() {
    const domain = this.domainInput.value.trim();
    if (!domain) {
      alert('Lütfen bir domain veya proje adı gir.');
      return;
    }
    
    if (!this.dataDirectoryHandle) {
      alert('Data klasörü seçilmedi. Sayfayı yenileyin.');
      return;
    }
    
    await this.loadProject(domain);
  }
  
  async loadProject(domain) {
    if (!domain || !this.dataDirectoryHandle) return;
    
    try {
      const fileName = `${domain}.json`;
      let fileHandle = this.projectFiles.get(domain);
      
      if (fileHandle) {
        // Var olan dosyayı yükle
        const file = await fileHandle.getFile();
        const content = await file.text();
        this.currentProject = JSON.parse(content);
      } else {
        // Yeni proje oluştur
        this.currentProject = {
          domain,
          tasks: this.cloneTasksTemplate(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        
        // Dosyayı oluştur ve kaydet
        fileHandle = await this.dataDirectoryHandle.getFileHandle(fileName, { create: true });
        this.projectFiles.set(domain, fileHandle);
        await this.saveCurrentProject();
      }
      
      this.domainInput.value = domain;
      this.refreshProjectSelect(domain);
      this.renderTasks();
      this.renderToolLinks();
    } catch (e) {
      console.error('Proje yükleme hatası:', e);
      alert('Proje yüklenemedi: ' + e.message);
    }
  }
  
  async saveCurrentProject() {
    if (!this.currentProject || !this.currentProject.domain || !this.dataDirectoryHandle) return;
    
    try {
      this.currentProject.updatedAt = new Date().toISOString();
      const fileName = `${this.currentProject.domain}.json`;
      
      let fileHandle = this.projectFiles.get(this.currentProject.domain);
      if (!fileHandle) {
        fileHandle = await this.dataDirectoryHandle.getFileHandle(fileName, { create: true });
        this.projectFiles.set(this.currentProject.domain, fileHandle);
      }
      
      const writable = await fileHandle.createWritable();
      await writable.write(JSON.stringify(this.currentProject, null, 2));
      await writable.close();
    } catch (e) {
      console.error('Kaydetme hatası:', e);
      alert('Dosya kaydedilemedi: ' + e.message);
    }
  }
  
  async handleDeleteProject() {
    const domain = this.projectSelect.value || (this.currentProject && this.currentProject.domain);
    if (!domain) {
      alert('Silmek için önce bir proje seç.');
      return;
    }
    
    const ok = confirm(`"${domain}" projesini silmek istediğine emin misin?\n\nJSON dosyası data/ klasöründen silinecek.`);
    if (!ok) return;
    
    try {
      await this.dataDirectoryHandle.removeEntry(`${domain}.json`);
      this.projectFiles.delete(domain);
      
      if (this.currentProject && this.currentProject.domain === domain) {
        this.currentProject = null;
        this.tasksBody.innerHTML = '';
        this.toolLinks.innerHTML = '<p class="hint">Bir proje yükleyince linkler otomatik olarak domain ile güncellenecek.</p>';
      }
      
      this.refreshProjectSelect();
    } catch (e) {
      console.error('Silme hatası:', e);
      alert('Proje silinemedi: ' + e.message);
    }
  }
  
  cloneTasksTemplate() {
    return this.TASKS_TEMPLATE.map(t => ({ ...t }));
  }
  
  openTaskModal(task = null) {
    if (!this.currentProject) {
      alert('Önce bir proje yükle.');
      return;
    }
    
    this.editingTaskId = task ? task.id : null;
    
    if (task) {
      this.modalTitle.textContent = 'Görevi Düzenle';
      document.getElementById('taskTitle').value = task.title || '';
      document.getElementById('taskCategory').value = task.category || '';
      document.getElementById('taskSubcategory').value = task.subcategory || '';
      document.getElementById('taskDescription').value = task.description || '';
      document.getElementById('taskPriority').value = task.priority || 'Orta';
      document.getElementById('taskStatus').value = task.status || 'Bekliyor';
      document.getElementById('taskStartDate').value = task.startDate || '';
      document.getElementById('taskDueDate').value = task.dueDate || '';
      document.getElementById('taskNotes').value = task.notes || '';
    } else {
      this.modalTitle.textContent = 'Yeni Görev Ekle';
      this.taskForm.reset();
    }
    
    this.taskModal.classList.add('show');
  }
  
  closeTaskModal() {
    this.taskModal.classList.remove('show');
    this.taskForm.reset();
    this.editingTaskId = null;
  }
  
  handleTaskSubmit(e) {
    e.preventDefault();
    
    const taskData = {
      id: this.editingTaskId || 'task-' + Date.now(),
      title: document.getElementById('taskTitle').value,
      category: document.getElementById('taskCategory').value,
      subcategory: document.getElementById('taskSubcategory').value,
      description: document.getElementById('taskDescription').value,
      priority: document.getElementById('taskPriority').value,
      status: document.getElementById('taskStatus').value,
      startDate: document.getElementById('taskStartDate').value || null,
      dueDate: document.getElementById('taskDueDate').value || null,
      notes: document.getElementById('taskNotes').value || '',
      done: document.getElementById('taskStatus').value === 'Tamamlandı',
      completedDate: null
    };
    
    if (this.editingTaskId) {
      const taskIndex = this.currentProject.tasks.findIndex(t => t.id === this.editingTaskId);
      if (taskIndex !== -1) {
        taskData.completedDate = this.currentProject.tasks[taskIndex].completedDate;
        if (taskData.done && !taskData.completedDate) {
          taskData.completedDate = new Date().toISOString().split('T')[0];
        }
        this.currentProject.tasks[taskIndex] = taskData;
      }
    } else {
      if (taskData.done) {
        taskData.completedDate = new Date().toISOString().split('T')[0];
      }
      this.currentProject.tasks.push(taskData);
    }
    
    this.saveCurrentProject();
    this.renderTasks();
    this.closeTaskModal();
  }
  
  deleteTask(taskId) {
    if (!confirm('Bu görevi silmek istediğine emin misin?')) return;
    
    this.currentProject.tasks = this.currentProject.tasks.filter(t => t.id !== taskId);
    this.saveCurrentProject();
    this.renderTasks();
  }
  
  renderToolLinks() {
    if (!this.currentProject || !this.currentProject.domain) {
      this.toolLinks.innerHTML = '<p class="hint">Bir proje yükleyince linkler otomatik olarak domain ile güncellenecek.</p>';
      return;
    }
    
    const domain = this.currentProject.domain;
    let html = '';
    
    for (const [category, tools] of Object.entries(this.seoTools)) {
      html += `<div class="tool-links-section">`;
      html += `<h3>${category}</h3>`;
      html += `<div class="tool-links-grid">`;
      
      tools.forEach(tool => {
        const url = tool.url.replace(/{domain}/g, domain);
        html += `<a href="${url}" target="_blank" class="tool-link">${tool.name}</a>`;
      });
      
      html += `</div></div>`;
    }
    
    this.toolLinks.innerHTML = html;
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
      
      // Açıklama
      const tdDesc = document.createElement('td');
      tdDesc.textContent = task.description || '';
      tdDesc.style.maxWidth = '250px';
      tdDesc.style.overflow = 'hidden';
      tdDesc.style.textOverflow = 'ellipsis';
      tdDesc.style.whiteSpace = 'nowrap';
      if (task.notes) {
        tdDesc.title = `${task.description}\n\nNotlar: ${task.notes}`;
      }
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
      
      // Başlangıç tarihi
      const tdStart = document.createElement('td');
      tdStart.className = 'date-cell';
      tdStart.textContent = task.startDate ? new Date(task.startDate).toLocaleDateString('tr-TR') : '-';
      tr.appendChild(tdStart);
      
      // Hedef bitiş tarihi
      const tdDue = document.createElement('td');
      tdDue.className = 'date-cell';
      if (task.dueDate) {
        const dueDate = new Date(task.dueDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (!task.done && dueDate < today) {
          tdDue.className += ' overdue';
          tdDue.textContent = dueDate.toLocaleDateString('tr-TR') + ' ⚠️';
        } else {
          tdDue.textContent = dueDate.toLocaleDateString('tr-TR');
        }
      } else {
        tdDue.textContent = '-';
      }
      tr.appendChild(tdDue);
      
      // Aksiyon butonları
      const tdAction = document.createElement('td');
      tdAction.style.textAlign = 'center';
      const actionDiv = document.createElement('div');
      actionDiv.className = 'action-buttons';
      
      const editBtn = document.createElement('button');
      editBtn.className = 'action-btn edit';
      editBtn.textContent = '✏️';
      editBtn.title = 'Düzenle';
      editBtn.addEventListener('click', () => this.openTaskModal(task));
      
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'action-btn delete';
      deleteBtn.textContent = '🗑️';
      deleteBtn.title = 'Sil';
      deleteBtn.addEventListener('click', () => this.deleteTask(task.id));
      
      actionDiv.appendChild(editBtn);
      actionDiv.appendChild(deleteBtn);
      tdAction.appendChild(actionDiv);
      tr.appendChild(tdAction);
      
      this.tasksBody.appendChild(tr);
    });
  }
}

// Uygulama başlat
document.addEventListener('DOMContentLoaded', () => {
  new SEOTaskManager();
});
