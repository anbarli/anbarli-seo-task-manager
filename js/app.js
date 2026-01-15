/**
 * Anbarlı SEO Task Manager - JSON Dosya Sistemi
 * Her domain data/ klasöründe ayrı JSON dosyası olarak saklanır
 */

const TRANSLATIONS = {
  tr: {
    appTitle: "Anbarlı SEO Task Manager",
    appDesc: "Domain seç, görevleri güncelle. Her değişiklik data/ klasöründeki JSON dosyasına otomatik kaydedilir.",
    selectProject: "— Proje Seçiniz —",
    deleteProject: "Seçili Projeyi Sil",
    newProject: "Yeni Proje Ekle",
    folderPermission: "Data Klasör İzni / Değiştir",
    firstUse: "İlk Kullanım:",
    firstUseDesc: "Uygulama yüklendiğinde data/ klasörünü seçmeniz istenecek. Lütfen proje klasörünüzdeki \"data\" klasörünü seçin.",
    tasksTitle: "Görevler",
    newTask: "Yeni Görev",
    progress: "Proje İlerlemesi",
    searchPlaceholder: "Görev ara...",
    allCategories: "Tüm Kategoriler",
    allPriorities: "Tüm Öncelikler",
    allStatuses: "Tüm Durumlar",
    statusPending: "Bekliyor",
    statusInProgress: "Devam ediyor",
    statusDone: "Tamamlandı",
    priorityLow: "Düşük",
    priorityMedium: "Orta",
    priorityHigh: "Yüksek",
    tableDone: "Bitti",
    tableTask: "Görev",
    tableCategory: "Kategori",
    tablePriority: "Öncelik",
    tableStatus: "Durum",
    tableStart: "Başlangıç",
    tableEnd: "Hedef Bitiş",
    tableAction: "Aksiyon",
    toolsTitle: "Faydalı SEO Araçları",
    toolsDesc: "Bir proje yükleyince linkler otomatik olarak domain ile güncellenecek.",
    modalNewTask: "Yeni Görev Ekle",
    modalEditTask: "Görevi Düzenle",
    lblTaskName: "Görev Adı",
    lblCategory: "Kategori",
    lblSubcategory: "Alt Kategori",
    lblDescription: "Açıklama",
    lblTools: "İlgili Araçlar",
    lblPriority: "Öncelik",
    lblStatus: "Durum",
    lblStartDate: "Başlangıç Tarihi",
    lblDueDate: "Hedef Bitiş Tarihi",
    lblNotes: "Notlar / Yorumlar",
    btnCancel: "İptal",
    btnSave: "Kaydet",
    modalNewProject: "Yeni Proje Oluştur",
    lblDomain: "Domain / Proje Adı",
    btnCreate: "Oluştur",
    modalConfirm: "İşlemi Onayla",
    confirmBody: "Bu işlemi yapmak istediğinizden emin misiniz?",
    btnConfirm: "Evet, Onayla",
    msgNoProject: "Önce üstten bir domain/proje yükle veya oluştur.",
    msgNoTaskFound: "Filtrelere uygun görev bulunamadı.",
    msgDeleteProject: "projesini kalıcı olarak silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.",
    msgDeleteTask: "görevini silmek istediğinizden emin misiniz?",
    msgFolderSelect: "Anbarlı SEO Task Manager, görevlerinizi saklamak için bir klasör seçmeniz gerekiyor.\n\nLütfen sonraki pencereden \"data\" klasörünü seçin.\n\nNot: Proje klasörünüzdeki \"data\" klasörünü seçmelisiniz.\n\nDevam etmek için Tamam'a basın.",
    msgFolderSuccess: "Data klasörü başarıyla seçildi! Artık projelerinizi oluşturabilirsiniz.",
    msgFolderFail: "Data klasörü seçilemedi. Lütfen sayfayı yenileyin ve data/ klasörünü seçin.",
    msgFolderCancel: "Klasör seçimi iptal edildi. Uygulama çalışmayacak. Lütfen sayfayı yenileyin.",
    msgReSelectFolder: "Data klasörünü yeniden seçmek istediğinize emin misiniz?\n\nBu işlem mevcut klasör bağlantısını sıfırlayacak ve yeni bir klasör seçmenizi isteyecek.",
    msgSelectProjectFirst: "Silmek için önce bir proje seç.",
    msgEnterDomain: "Lütfen bir domain veya proje adı gir.",
    msgFolderNotSelected: "Data klasörü seçilmedi. Sayfayı yenileyin.",
    msgLoadProjectFirst: "Önce bir proje yükle."
  },
  en: {
    appTitle: "Anbarlı SEO Task Manager",
    appDesc: "Select domain, update tasks. Every change is automatically saved to JSON file in data/ folder.",
    selectProject: "— Select Project —",
    deleteProject: "Delete Selected Project",
    newProject: "Add New Project",
    folderPermission: "Data Folder Permission / Change",
    firstUse: "First Use:",
    firstUseDesc: "When the app loads, you will be asked to select the data/ folder. Please select the \"data\" folder in your project directory.",
    tasksTitle: "Tasks",
    newTask: "New Task",
    progress: "Project Progress",
    searchPlaceholder: "Search tasks...",
    allCategories: "All Categories",
    allPriorities: "All Priorities",
    allStatuses: "All Statuses",
    statusPending: "Pending",
    statusInProgress: "In Progress",
    statusDone: "Done",
    priorityLow: "Low",
    priorityMedium: "Medium",
    priorityHigh: "High",
    tableDone: "Done",
    tableTask: "Task",
    tableCategory: "Category",
    tablePriority: "Priority",
    tableStatus: "Status",
    tableStart: "Start",
    tableEnd: "Due Date",
    tableAction: "Action",
    toolsTitle: "Useful SEO Tools",
    toolsDesc: "Links will update automatically with the domain when a project is loaded.",
    modalNewTask: "Add New Task",
    modalEditTask: "Edit Task",
    lblTaskName: "Task Name",
    lblCategory: "Category",
    lblSubcategory: "Subcategory",
    lblDescription: "Description",
    lblTools: "Related Tools",
    lblPriority: "Priority",
    lblStatus: "Status",
    lblStartDate: "Start Date",
    lblDueDate: "Due Date",
    lblNotes: "Notes / Comments",
    btnCancel: "Cancel",
    btnSave: "Save",
    modalNewProject: "Create New Project",
    lblDomain: "Domain / Project Name",
    btnCreate: "Create",
    modalConfirm: "Confirm Action",
    confirmBody: "Are you sure you want to perform this action?",
    btnConfirm: "Yes, Confirm",
    msgNoProject: "Load or create a project first.",
    msgNoTaskFound: "No tasks found matching filters.",
    msgDeleteProject: "Are you sure you want to permanently delete this project? This action cannot be undone.",
    msgDeleteTask: "Are you sure you want to delete this task?",
    msgFolderSelect: "Anbarlı SEO Task Manager needs you to select a folder to store your tasks.\n\nPlease select the \"data\" folder in the next window.\n\nNote: You must select the \"data\" folder in your project directory.\n\nPress OK to continue.",
    msgFolderSuccess: "Data folder selected successfully! You can now create your projects.",
    msgFolderFail: "Data folder could not be selected. Please refresh the page and select the data/ folder.",
    msgFolderCancel: "Folder selection cancelled. The app will not work. Please refresh the page.",
    msgReSelectFolder: "Are you sure you want to re-select the data folder?\n\nThis will reset the current folder connection and ask you to select a new folder.",
    msgSelectProjectFirst: "Select a project first to delete.",
    msgEnterDomain: "Please enter a domain or project name.",
    msgFolderNotSelected: "Data folder not selected. Refresh the page.",
    msgLoadProjectFirst: "Load a project first."
  }
};

class SEOTaskManager {
  constructor() {
    this.currentProject = null;
    this.dataDirectoryHandle = null;
    this.projectFiles = new Map();
    
    // DOM elemanları
    this.newDomainInput = document.getElementById('newDomainInput');
    this.projectSelect = document.getElementById('projectSelect');
    this.deleteProjectBtn = document.getElementById('deleteProjectBtn');
    this.reSelectFolderBtn = document.getElementById('reSelectFolderBtn');
    this.tasksBody = document.getElementById('tasksBody');
    this.toolLinks = document.getElementById('toolLinks');
    this.progressBar = document.getElementById('progressBar');
    this.progressText = document.getElementById('progressText');
    this.themeToggleBtn = document.getElementById('themeToggleBtn');
    this.languageSelect = document.getElementById('languageSelect');
    
    // Filtre elemanları
    this.searchInput = document.getElementById('searchInput');
    this.filterCategory = document.getElementById('filterCategory');
    this.filterStatus = document.getElementById('filterStatus');
    this.filterPriority = document.getElementById('filterPriority');
    this.groupByCategory = document.getElementById('groupByCategory');

    // Modal elemanları
    // Bootstrap Modal instance'larını oluştur
    this.bsTaskModal = new bootstrap.Modal(document.getElementById('taskModal'));
    this.bsNewProjectModal = new bootstrap.Modal(document.getElementById('newProjectModal'));
    this.bsConfirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));

    this.addTaskBtn = document.getElementById('addTaskBtn');
    this.taskForm = document.getElementById('taskForm');
    this.modalTitle = document.getElementById('modalTitle');
    
    // Yeni Proje Modal elemanları
    this.openNewProjectModalBtn = document.getElementById('openNewProjectModalBtn');
    this.newProjectForm = document.getElementById('newProjectForm');

    this.editingTaskId = null;
    this.dragSrcIndex = null;

    this.currentLang = localStorage.getItem('seo_lang') || 'tr';
    this.currentTheme = localStorage.getItem('seo_theme') || 'light';
    
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
      { id: "hosting", title: "Hosting kontrolü", category: "Teknik SEO", subcategory: "Site Altyapısı", description: "Hosting hızını optimize et", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "", tools: ["GTmetrix Speed Test", "Pingdom Speed Test"] },
      { id: "ssl", title: "SSL kurulumu", category: "Teknik SEO", subcategory: "Güvenlik", description: "HTTPS/SSL sertifikasını doğrula", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "", tools: ["Sucuri Site Check"] },
      { id: "mobile", title: "Mobil uyumluluk testi", category: "Teknik SEO", subcategory: "Mobil SEO", description: "Google Mobile-Friendly Test çalıştır", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "", tools: ["PageSpeed Speed Test"] },
      { id: "url-structure", title: "URL yapı düzenlemesi", category: "Teknik SEO", subcategory: "Site Altyapısı", description: "Temiz ve okunabilir URL yapısı oluştur", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "robots", title: "robots.txt yapılandırma", category: "Teknik SEO", subcategory: "Dizine Eklenebilirlik", description: "Gereksiz sayfaları engelle, önemli sayfaları izinle", priority: "Yüksek", status: "Devam ediyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "", tools: ["Robots.txt Generator"] },
      { id: "sitemap", title: "XML Sitemap oluşturma", category: "Teknik SEO", subcategory: "Dizine Eklenebilirlik", description: "Sitemap oluştur ve Google Search Console'a gönder", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "", tools: ["Sitemap Generator"] },
      { id: "title-optimization", title: "Title optimizasyonu", category: "On-Page SEO", subcategory: "Meta", description: "Her sayfaya benzersiz, açıklayıcı title ekle", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "", tools: ["Meta Tag Check"] },
      { id: "meta-description", title: "Meta description yazımı", category: "On-Page SEO", subcategory: "Meta", description: "Her sayfaya tıklama odaklı meta description yaz", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "", tools: ["Meta Tag Check"] },
      { id: "h1", title: "H1 optimizasyonu", category: "On-Page SEO", subcategory: "İçerik", description: "Her sayfada tek ve net bir H1 kullan", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "images-compress", title: "Görselleri sıkıştır", category: "Görsel SEO", subcategory: "Performans", description: "Görselleri mümkünse WebP formatına çevir ve sıkıştır", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "", tools: ["PageSpeed Speed Test"] },
      { id: "images-alt", title: "ALT metin ekle", category: "Görsel SEO", subcategory: "Erişilebilirlik", description: "Tüm görsellere anlamlı ALT metni ekle", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "internal-links", title: "İç bağlantı ekleme", category: "İç Bağlantı", subcategory: "Navigasyon", description: "Sayfalar arasında mantıklı iç link yapısı oluştur", priority: "Yüksek", status: "Devam ediyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "orphan-pages", title: "Yetim sayfa kontrolü", category: "İç Bağlantı", subcategory: "Teknik", description: "Orphan (bağlantısız) sayfaları tespit et", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "backlink-audit", title: "Backlink analizi", category: "Off-Page SEO", subcategory: "Bağlantı Profili", description: "Zararlı/spam backlinkleri tespit ve temizle", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "", tools: ["ahrefs SEO Tools", "SEMRush"] },
      { id: "pagespeed", title: "PageSpeed testi", category: "Performans", subcategory: "Core Web Vitals", description: "PageSpeed Insights ile hız ve CWV analiz et", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "", tools: ["PageSpeed Speed Test", "GTmetrix Speed Test"] },
      { id: "css-js", title: "CSS/JS optimizasyonu", category: "Performans", subcategory: "Kod Optimizasyon", description: "CSS/JS dosyalarını küçült ve mümkünse ertele (defer)", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "gsc-setup", title: "GSC doğrulama", category: "Search Console", subcategory: "Setup", description: "Google Search Console mülkünü ekle ve doğrula", priority: "Yüksek", status: "Tamamlandı", done: true, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "gsc-coverage", title: "Dizine ekleme sorunları çözme", category: "Search Console", subcategory: "Coverage", description: "Coverage raporundaki hataları çöz", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "ga4-setup", title: "GA4 kurulumu", category: "Analytics", subcategory: "Setup", description: "Google Analytics 4 kurulumu ve bağlantı", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "goals", title: "Dönüşüm hedeflerini ayarla", category: "Analytics", subcategory: "Ölçümleme", description: "Dönüşüm hedefleri ve event tracking yapılandır", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "kw-research", title: "Anahtar kelime araştırması", category: "İçerik Stratejisi", subcategory: "Keyword Research", description: "Temel anahtar kelime listesini çıkar (Ahrefs, Semrush vb.)", priority: "Yüksek", status: "Devam ediyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "", tools: ["ahrefs SEO Tools", "SEMRush"] },
      { id: "content-calendar", title: "İçerik takvimi hazırlama", category: "İçerik Stratejisi", subcategory: "Planlama", description: "Blog/landing sayfa yayın takvimi oluştur", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "mobile-ux", title: "Mobil UX kontrol", category: "UX", subcategory: "Mobil", description: "Mobil gezinme ve okunabilirliği kontrol et", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "cta", title: "CTA optimizasyonu", category: "UX", subcategory: "Dönüşüm", description: "Net, görünür ve ikna edici CTA butonları tasarla", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "schema-markup", title: "Schema Markup (Yapısal Veri)", category: "Teknik SEO", subcategory: "Rich Snippets", description: "JSON-LD ile uygun schema türlerini (Organization, Article, Product) ekle", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "", tools: ["Schema.org", "Markup Validator (w3)"] },
      { id: "canonical", title: "Canonical Etiketleri", category: "Teknik SEO", subcategory: "Dizine Eklenebilirlik", description: "Yinelenen içerik sorunlarını önlemek için canonical etiketlerini kontrol et", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "", tools: ["SEO Site Checkup"] },
      { id: "broken-links", title: "Kırık Link Kontrolü", category: "Teknik SEO", subcategory: "Bakım", description: "Site genelindeki 404 veren iç ve dış linkleri tespit et ve düzelt", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "", tools: ["Small SEO Tools"] },
      { id: "eeat-audit", title: "E-E-A-T (Uzmanlık/Güven) Kontrolü", category: "İçerik Stratejisi", subcategory: "Kalite", description: "Hakkımızda sayfası, yazar biyografileri ve iletişim bilgilerini güncelle", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "breadcrumbs", title: "Breadcrumb Navigasyonu", category: "Teknik SEO", subcategory: "Site Yapısı", description: "Kullanıcı ve botlar için breadcrumb yapısını ve şemasını oluştur", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "favicon", title: "Favicon Optimizasyonu", category: "On-Page SEO", subcategory: "CTR", description: "SERP'te görünürlük için uygun boyutlarda favicon ekle", priority: "Düşük", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "core-web-vitals", title: "Core Web Vitals (LCP, INP, CLS)", category: "Performans", subcategory: "UX", description: "Google sıralama faktörü olan LCP, INP ve CLS metriklerini analiz et ve iyileştir", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "", tools: ["PageSpeed Speed Test", "GTmetrix Speed Test"] },
      { id: "content-audit", title: "İçerik Denetimi (Content Audit)", category: "İçerik Stratejisi", subcategory: "Kalite", description: "Trafik almayan, güncelliğini yitirmiş içerikleri tespit et; güncelle veya sil", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "google-business", title: "Google İşletme Profili (GBP)", category: "Yerel SEO", subcategory: "Görünürlük", description: "Yerel aramalar için işletme profilini doğrula, fotoğraflar ekle ve optimize et", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "social-tags", title: "Open Graph & Twitter Cards", category: "On-Page SEO", subcategory: "Sosyal", description: "Sosyal medya paylaşımları için meta etiketlerini (og:image, og:title) ekle", priority: "Düşük", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "", tools: ["Meta Tag Check"] },
      { id: "custom-404", title: "Özel 404 Sayfası", category: "UX", subcategory: "Hata Yönetimi", description: "Kullanıcıyı sitede tutacak, site haritası veya arama kutusu içeren özel 404 sayfası", priority: "Orta", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "" },
      { id: "competitor-analysis", title: "Rakip Analizi", category: "Strateji", subcategory: "Araştırma", description: "Hedef kelimelerdeki ilk 3 rakibin içerik yapısını ve backlink kaynaklarını incele", priority: "Yüksek", status: "Bekliyor", done: false, startDate: null, dueDate: null, completedDate: null, notes: "", tools: ["ahrefs SEO Tools", "SEMRush"] }
    ];
    
    this.PRIORITY_OPTIONS = ["Düşük", "Orta", "Yüksek"];
    this.STATUS_OPTIONS = ["Bekliyor", "Devam ediyor", "Tamamlandı"];
    
    this.init();
  }
  
  async init() {
    this.applyTheme(this.currentTheme);
    this.applyLanguage(this.currentLang);
    this.bindEvents();
    this.populateModalSelects();
    await this.initDataDirectory();
    this.renderTasks();
  }

  t(key) {
    return TRANSLATIONS[this.currentLang][key] || key;
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    this.currentTheme = theme;
    localStorage.setItem('seo_theme', theme);
    
    const icon = this.themeToggleBtn.querySelector('i');
    if (theme === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }

  applyLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('seo_lang', lang);
    this.languageSelect.value = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = this.t(key);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      el.title = this.t(key);
    });

    this.populateCategoryFilter();
    this.renderTasks();
    this.refreshProjectSelect(this.projectSelect.value);
  }

  getPriorityLabel(val) {
    const map = { "Düşük": "priorityLow", "Orta": "priorityMedium", "Yüksek": "priorityHigh" };
    return this.t(map[val] || val);
  }

  getStatusLabel(val) {
    const map = { "Bekliyor": "statusPending", "Devam ediyor": "statusInProgress", "Tamamlandı": "statusDone" };
    return this.t(map[val] || val);
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
      alert('Browser does not support File System Access API. Use Chrome, Edge or Opera.');
      return;
    }
    
    // Kullanıcıya açıklayıcı bir bilgi ver
    const confirmPrompt = confirm(this.t('msgFolderSelect'));
    
    if (!confirmPrompt) {
      alert(this.t('msgFolderCancel'));
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
      
      alert(this.t('msgFolderSuccess'));
    } catch (e) {
      if (e.name !== 'AbortError') {
        console.error('Klasör seçme hatası:', e);
        alert(this.t('msgFolderFail'));
      } else {
        alert(this.t('msgFolderCancel'));
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
    this.themeToggleBtn.addEventListener('click', () => {
      const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
      this.applyTheme(newTheme);
    });

    this.languageSelect.addEventListener('change', (e) => {
      this.applyLanguage(e.target.value);
    });
    
    this.projectSelect.addEventListener('change', () => {
      const domain = this.projectSelect.value;
      if (domain) this.loadProject(domain);
    });
    
    this.deleteProjectBtn.addEventListener('click', () => this.handleDeleteProject());
    
    this.reSelectFolderBtn.addEventListener('click', () => this.handleReSelectFolder());
    
    // Filtre event listener'ları
    this.searchInput.addEventListener('input', () => this.renderTasks());
    this.filterCategory.addEventListener('change', () => this.renderTasks());
    this.filterStatus.addEventListener('change', () => this.renderTasks());
    this.filterPriority.addEventListener('change', () => this.renderTasks());
    this.groupByCategory.addEventListener('change', () => this.renderTasks());

    // Modal event listeners
    this.addTaskBtn.addEventListener('click', () => this.openTaskModal());
    this.taskForm.addEventListener('submit', (e) => this.handleTaskSubmit(e));

    // Yeni Proje Modal event listeners
    this.openNewProjectModalBtn.addEventListener('click', () => {
      this.newProjectForm.reset();
      this.bsNewProjectModal.show();
      setTimeout(() => this.newDomainInput.focus(), 100);
    });
    this.newProjectForm.addEventListener('submit', (e) => this.handleLoadDomain(e));
  }
  
  refreshProjectSelect(activeDomain = null) {
    this.projectSelect.innerHTML = '';
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = this.t('selectProject');
    this.projectSelect.appendChild(placeholder); // Not: HTML'de "Proje Seçiniz" yazıyor ama burası JS ile eziliyor, sorun değil.
    
    const domains = Array.from(this.projectFiles.keys()).sort();
    domains.forEach(domain => {
      const opt = document.createElement('option');
      opt.value = domain;
      opt.textContent = domain;
      if (activeDomain === domain) opt.selected = true;
      this.projectSelect.appendChild(opt);
    });
  }
  
  async handleLoadDomain(e) {
    if (e) e.preventDefault();
    
    const domain = this.newDomainInput.value.trim();
    if (!domain) {
      alert(this.t('msgEnterDomain'));
      return;
    }
    
    if (!this.dataDirectoryHandle) {
      alert(this.t('msgFolderNotSelected'));
      return;
    }
    
    await this.loadProject(domain);
    this.bsNewProjectModal.hide();
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
      
      this.refreshProjectSelect(domain);
      this.populateCategoryFilter();
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
      alert(this.t('msgSelectProjectFirst'));
      return;
    }
    
    const title = this.t('deleteProject');
    const body = `<strong>"${domain}"</strong> ${this.t('msgDeleteProject')}`;
    
    this.showConfirmationModal(title, body, async () => {
      try {
        await this.dataDirectoryHandle.removeEntry(`${domain}.json`);
        this.projectFiles.delete(domain);
        
        if (this.currentProject && this.currentProject.domain === domain) {
          this.currentProject = null;
          this.tasksBody.innerHTML = '';
          this.toolLinks.innerHTML = `<p class="hint">${this.t('toolsDesc')}</p>`;
        }
        
        this.refreshProjectSelect();
        this.renderTasks(); // UI'ı güncellemek için
      } catch (e) {
        console.error('Silme hatası:', e);
        alert('Proje silinemedi: ' + e.message);
      }
    });
  }
  
  async handleReSelectFolder() {
    const ok = confirm(this.t('msgReSelectFolder'));
    
    if (!ok) return;
    
    try {
      // Mevcut handle'ı temizle
      this.dataDirectoryHandle = null;
      this.currentProject = null;
      this.projectFiles.clear();
      
      // IndexedDB'den kayıtlı handle'ı sil
      const db = await this.openDatabase();
      const transaction = db.transaction(['settings'], 'readwrite');
      const store = transaction.objectStore('settings');
      await new Promise((resolve, reject) => {
        const request = store.delete('dataDirectoryHandle');
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
      
      // Yeni klasör seç
      await this.promptForDataDirectory();
      
      // UI'ı güncelle
      this.refreshProjectSelect();
      this.tasksBody.innerHTML = '';
      this.toolLinks.innerHTML = `<p class="hint">${this.t('toolsDesc')}</p>`;
    } catch (e) {
      console.error('Klasör yeniden seçme hatası:', e);
      alert('İşlem tamamlanamadı: ' + e.message);
    }
  }
  
  cloneTasksTemplate() {
    return this.TASKS_TEMPLATE.map(t => ({ ...t }));
  }
  
  findToolByName(name) {
    for (const cat in this.seoTools) {
      const found = this.seoTools[cat].find(t => t.name === name);
      if (found) return found;
    }
    return null;
  }

  openTaskModal(task = null) {
    if (!this.currentProject) {
      alert(this.t('msgLoadProjectFirst'));
      return;
    }
    
    this.editingTaskId = task ? task.id : null;
    
    const toolsDiv = document.getElementById('taskRelatedTools');
    const toolsList = document.getElementById('taskToolsList');
    
    if (task) {
      this.modalTitle.innerHTML = `<i class="fa-solid fa-pen-to-square me-2"></i>${this.t('modalEditTask')}`;
      document.getElementById('taskTitle').value = task.title || '';
      
      this.ensureOptionExists(document.getElementById('taskCategory'), task.category);
      document.getElementById('taskCategory').value = task.category || '';
      
      this.ensureOptionExists(document.getElementById('taskSubcategory'), task.subcategory);
      document.getElementById('taskSubcategory').value = task.subcategory || '';
      
      document.getElementById('taskDescription').value = task.description || '';
      document.getElementById('taskPriority').value = task.priority || 'Orta';
      document.getElementById('taskStatus').value = task.status || 'Bekliyor';
      document.getElementById('taskStartDate').value = task.startDate || '';
      document.getElementById('taskDueDate').value = task.dueDate || '';
      document.getElementById('taskNotes').value = task.notes || '';
      
      // İlgili araçları göster
      if (toolsDiv && toolsList) {
        toolsList.innerHTML = '';
        
        // Düzeltme: Eski verilerde tools olmayabilir, şablondan kontrol et
        let toolsToShow = task.tools;
        if (!toolsToShow) {
          const templateTask = this.TASKS_TEMPLATE.find(t => t.id === task.id);
          if (templateTask) toolsToShow = templateTask.tools;
        }

        if (toolsToShow && toolsToShow.length > 0) {
          toolsDiv.classList.remove('d-none');
          toolsToShow.forEach(toolName => {
            const tool = this.findToolByName(toolName);
            if (tool) {
              const url = tool.url.replace(/{domain}/g, this.currentProject.domain);
              const a = document.createElement('a');
              a.href = url;
              a.target = '_blank';
              a.className = 'btn btn-outline-primary btn-sm';
              a.innerHTML = `<i class="fa-solid fa-external-link-alt me-1"></i> ${tool.name}`;
              toolsList.appendChild(a);
            }
          });
        } else {
          toolsDiv.classList.add('d-none');
        }
      }
    } else {
      this.modalTitle.innerHTML = `<i class="fa-solid fa-plus me-2"></i>${this.t('modalNewTask')}`;
      this.taskForm.reset();
      if (toolsDiv) toolsDiv.classList.add('d-none');
    }
    
    this.bsTaskModal.show();
  }
  
  closeTaskModal() {
    this.bsTaskModal.hide();
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
        const existingTask = this.currentProject.tasks[taskIndex];
        
        // Tools verisini koru veya şablondan tamamla (Kaydederken kaybolmaması için)
        if (existingTask.tools) {
          taskData.tools = existingTask.tools;
        } else {
          const templateTask = this.TASKS_TEMPLATE.find(t => t.id === this.editingTaskId);
          if (templateTask) taskData.tools = templateTask.tools;
        }

        taskData.completedDate = existingTask.completedDate;
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
    const task = this.currentProject.tasks.find(t => t.id === taskId);
    if (!task) return;

    const title = this.t('modalConfirm');
    const body = `<strong>"${task.title}"</strong> ${this.t('msgDeleteTask')}`;

    this.showConfirmationModal(title, body, () => {
      this.currentProject.tasks = this.currentProject.tasks.filter(t => t.id !== taskId);
      this.saveCurrentProject();
      this.renderTasks();
    });
  }

  showConfirmationModal(title, body, onConfirm) {
    document.getElementById('confirmationModalTitle').innerHTML = `<i class="fa-solid fa-triangle-exclamation me-2"></i>${title}`;
    document.getElementById('confirmationModalBody').innerHTML = body;
    
    const confirmBtn = document.getElementById('confirmActionBtn');
    confirmBtn.onclick = () => {
      onConfirm();
      this.bsConfirmationModal.hide();
    };

    this.bsConfirmationModal.show();
  }
  
  populateCategoryFilter() {
    if (!this.currentProject) return;
    
    const categories = new Set(this.currentProject.tasks.map(t => t.category));
    const currentVal = this.filterCategory.value;
    
    this.filterCategory.innerHTML = `<option value="">${this.t('allCategories')}</option>`;
    
    Array.from(categories).sort().forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      this.filterCategory.appendChild(opt);
    });
    
    if (categories.has(currentVal)) {
      this.filterCategory.value = currentVal;
    }
  }

  renderToolLinks() {
    if (!this.currentProject || !this.currentProject.domain) {
      this.toolLinks.innerHTML = `<p class="hint">${this.t('toolsDesc')}</p>`;
      return;
    }
    
    const domain = this.currentProject.domain;
    let html = '';
    
    for (const [category, tools] of Object.entries(this.seoTools)) {
      html += `<div class="mb-4">`;
      html += `<h5 class="border-bottom pb-2 mb-3">${category}</h5>`;
      html += `<div class="d-flex flex-wrap gap-2">`;
      
      tools.forEach(tool => {
        const url = tool.url.replace(/{domain}/g, domain);
        html += `<a href="${url}" target="_blank" class="btn btn-outline-secondary btn-sm text-start"><i class="fa-solid fa-external-link-alt me-1"></i> ${tool.name}</a>`;
      });
      
      html += `</div></div>`;
    }
    
    this.toolLinks.innerHTML = html;
  }
  
  updateProgress() {
    if (!this.currentProject || !this.currentProject.tasks) {
      if (this.progressBar) this.progressBar.style.width = '0%';
      if (this.progressText) this.progressText.textContent = '0%';
      return;
    }

    const total = this.currentProject.tasks.length;
    const completed = this.currentProject.tasks.filter(t => t.done).length;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

    if (this.progressBar) this.progressBar.style.width = `${percentage}%`;
    if (this.progressBar) this.progressBar.setAttribute('aria-valuenow', percentage);
    if (this.progressText) this.progressText.textContent = `%${percentage}`;
  }

  renderTasks() {
    this.updateProgress();
    this.tasksBody.innerHTML = '';
    
    if (!this.currentProject) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = 9;
      td.textContent = this.t('msgNoProject');
      td.className = 'text-center text-muted py-4';
      tr.appendChild(td);
      this.tasksBody.appendChild(tr);
      return;
    }
    
    const searchTerm = this.searchInput.value.toLowerCase();
    const categoryFilter = this.filterCategory.value;
    const statusFilter = this.filterStatus.value;
    const priorityFilter = this.filterPriority.value;

    const filteredTasks = this.currentProject.tasks.filter(task => {
      const matchesSearch = (task.title && task.title.toLowerCase().includes(searchTerm)) || 
                            (task.description && task.description.toLowerCase().includes(searchTerm));
      const matchesCategory = !categoryFilter || task.category === categoryFilter;
      const matchesStatus = !statusFilter || task.status === statusFilter;
      const matchesPriority = !priorityFilter || task.priority === priorityFilter;
      
      return matchesSearch && matchesCategory && matchesStatus && matchesPriority;
    });

    if (filteredTasks.length === 0) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = 9;
      td.textContent = this.t('msgNoTaskFound');
      td.className = 'text-center text-muted py-4';
      tr.appendChild(td);
      this.tasksBody.appendChild(tr);
      return;
    }

    const isFiltered = this.searchInput.value || this.filterCategory.value || this.filterStatus.value || this.filterPriority.value;
    const isGrouped = this.groupByCategory.checked;

    if (isGrouped) {
      // Gruplama Mantığı
      const groups = {};
      filteredTasks.forEach(task => {
        const cat = task.category || 'Diğer';
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(task);
      });

      Object.keys(groups).sort().forEach(category => {
        // Kategori Başlığı
        const trHeader = document.createElement('tr');
        trHeader.className = 'table-light';
        const th = document.createElement('th');
        th.colSpan = 9;
        th.innerHTML = `<i class="fa-solid fa-folder-open me-2 text-primary"></i>${category} <span class="badge bg-secondary rounded-pill ms-2">${groups[category].length}</span>`;
        th.className = 'py-2 ps-3';
        trHeader.appendChild(th);
        this.tasksBody.appendChild(trHeader);

        // O kategorideki görevler
        groups[category].forEach(task => {
          this.renderTaskRow(task, true); // Grupluyken drag-drop kapalı (true)
        });
      });

    } else {
      // Normal Liste Mantığı
      filteredTasks.forEach((task, index) => {
        this.renderTaskRow(task, isFiltered, index);
      });
    }
  }

  populateModalSelects() {
    const categories = [...new Set(this.TASKS_TEMPLATE.map(t => t.category))].sort();
    const subcategories = [...new Set(this.TASKS_TEMPLATE.map(t => t.subcategory))].filter(Boolean).sort();

    const catSelect = document.getElementById('taskCategory');
    const subCatSelect = document.getElementById('taskSubcategory');

    const populate = (select, options) => {
      select.innerHTML = '<option value="">--</option>';
      options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        select.appendChild(option);
      });
    };

    populate(catSelect, categories);
    populate(subCatSelect, subcategories);
  }

  ensureOptionExists(select, value) {
    if (!value) return;
    const exists = Array.from(select.options).some(opt => opt.value === value);
    if (!exists) {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    }
  }

  renderTaskRow(task, disableDrag, index = null) {
      const tr = document.createElement('tr');
      tr.dataset.taskId = task.id;

      // Drag Handle
      const tdHandle = document.createElement('td');
      if (!disableDrag && index !== null) {
        tdHandle.className = 'text-center';
        tdHandle.innerHTML = '<i class="fa-solid fa-grip-vertical drag-handle"></i>';
        tr.draggable = true;
        this.addDragEvents(tr, index);
      } else {
        tdHandle.className = 'text-center text-muted';
        tdHandle.innerHTML = '<i class="fa-solid fa-grip-vertical" style="opacity: 0.2; cursor: default;"></i>';
      }
      tr.appendChild(tdHandle);
      
      // Checkbox
      const tdCheck = document.createElement('td');
      tdCheck.className = 'text-center';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'form-check-input';
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
        this.updateProgress();
      });
      tdCheck.appendChild(checkbox);
      tr.appendChild(tdCheck);
      
      // Görev
      const tdTitle = document.createElement('td');
      const titleSpan = document.createElement('span');
      titleSpan.className = 'fw-medium text-primary';
      titleSpan.style.cursor = 'pointer';
      titleSpan.textContent = task.title;
      
      if (task.description) {
        titleSpan.setAttribute('data-bs-toggle', 'popover');
        titleSpan.setAttribute('data-bs-trigger', 'hover');
        titleSpan.setAttribute('data-bs-placement', 'auto');
        titleSpan.setAttribute('data-bs-title', task.title);
        titleSpan.setAttribute('data-bs-content', task.description);
        new bootstrap.Popover(titleSpan);
      }

      titleSpan.onclick = () => this.openTaskModal(task);
      tdTitle.appendChild(titleSpan);
      tr.appendChild(tdTitle);
      
      // Kategori
      const tdCat = document.createElement('td');
      const catSpan = document.createElement('span');
      catSpan.className = 'badge bg-body-secondary text-body-emphasis border';
      catSpan.textContent = task.category;
      tdCat.appendChild(catSpan);
      tr.appendChild(tdCat);
      
      // Öncelik
      const tdPriority = document.createElement('td');
      const prioritySelect = document.createElement('select');
      prioritySelect.className = 'form-select form-select-sm';
      this.PRIORITY_OPTIONS.forEach(optVal => {
        const opt = document.createElement('option');
        opt.value = optVal;
        opt.textContent = this.getPriorityLabel(optVal);
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
      statusSelect.className = 'form-select form-select-sm';
      this.STATUS_OPTIONS.forEach(optVal => {
        const opt = document.createElement('option');
        opt.value = optVal;
        opt.textContent = this.getStatusLabel(optVal);
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
        this.updateProgress();
      });
      tdStatus.appendChild(statusSelect);
      tr.appendChild(tdStatus);
      
      // Başlangıç tarihi
      const tdStart = document.createElement('td');
      tdStart.className = 'small text-muted';
      tdStart.textContent = task.startDate ? new Date(task.startDate).toLocaleDateString('tr-TR') : '-';
      tr.appendChild(tdStart);
      
      // Hedef bitiş tarihi
      const tdDue = document.createElement('td');
      tdDue.className = 'small text-muted';
      if (task.dueDate) {
        const dueDate = new Date(task.dueDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (!task.done && dueDate < today) {
          tdDue.className += ' overdue';
          tdDue.innerHTML = `<i class="fa-solid fa-circle-exclamation me-1"></i> ${dueDate.toLocaleDateString('tr-TR')}`;
        } else {
          tdDue.textContent = dueDate.toLocaleDateString('tr-TR');
        }
      } else {
        tdDue.textContent = '-';
      }
      tr.appendChild(tdDue);
      
      // Aksiyon butonları
      const tdAction = document.createElement('td');
      tdAction.className = 'text-center';
      const actionDiv = document.createElement('div');
      actionDiv.className = 'btn-group btn-group-sm';
      
      const editBtn = document.createElement('button');
      editBtn.className = 'btn btn-outline-primary';
      editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
      editBtn.title = 'Düzenle';
      editBtn.addEventListener('click', () => this.openTaskModal(task));
      
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn btn-outline-danger';
      deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
      deleteBtn.title = 'Sil';
      deleteBtn.addEventListener('click', () => this.deleteTask(task.id));
      
      actionDiv.appendChild(editBtn);
      actionDiv.appendChild(deleteBtn);
      tdAction.appendChild(actionDiv);
      tr.appendChild(tdAction);
      
      this.tasksBody.appendChild(tr);
  }

  addDragEvents(row, index) {
    row.addEventListener('dragstart', (e) => this.onDragStart(e, index));
    row.addEventListener('dragenter', (e) => this.onDragEnter(e));
    row.addEventListener('dragover', (e) => this.onDragOver(e));
    row.addEventListener('dragleave', (e) => this.onDragLeave(e));
    row.addEventListener('drop', (e) => this.onDrop(e, index));
    row.addEventListener('dragend', (e) => this.onDragEnd(e));
  }

  onDragStart(e, index) {
    this.dragSrcIndex = index;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
    e.target.classList.add('dragging');
  }

  onDragEnter(e) {
    e.preventDefault();
    const row = e.target.closest('tr');
    if (row) row.classList.add('drag-over');
  }

  onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  onDragLeave(e) {
    const row = e.target.closest('tr');
    if (row) row.classList.remove('drag-over');
  }

  onDrop(e, dropIndex) {
    e.stopPropagation();
    if (this.dragSrcIndex !== dropIndex) {
      const tasks = this.currentProject.tasks;
      const [movedItem] = tasks.splice(this.dragSrcIndex, 1);
      tasks.splice(dropIndex, 0, movedItem);
      this.saveCurrentProject();
      this.renderTasks();
    }
    return false;
  }

  onDragEnd(e) {
    e.target.classList.remove('dragging');
    document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
  }
}

// Uygulama başlat
document.addEventListener('DOMContentLoaded', () => {
  new SEOTaskManager();
});
