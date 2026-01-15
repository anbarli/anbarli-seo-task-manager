# Anbarlı SEO Task Manager

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Language](https://img.shields.io/badge/language-JavaScript-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> **English** | [Türkçe](#türkçe)

A simple and powerful web application designed to manage SEO tasks. It features domain-based project management and automatic JSON file saving using a local-first approach.

## 🚀 Demo

You can try the application by opening `index.html` in your browser. The app runs entirely on the client-side, no server required!

> **Note:** This application uses the File System Access API, which is currently supported in Chrome, Edge, and Opera browsers.

## 📸 Screenshots

<!-- Screenshot coming: Main task management interface -->
<!-- Screenshot coming: Dark mode view -->
<!-- Screenshot coming: Task creation modal -->

## ✨ Features

- 📝 **Task Management:** Add, edit, and delete tasks easily.
- 🏷️ **Organization:** Manage tasks by category, subcategory, and priority.
- 📊 **Progress Tracking:** Visual progress bar and status management.
- 🌓 **Dark/Light Mode:** Built-in theme support for comfortable viewing.
- 🌍 **Multi-language:** Support for English and Turkish languages.
- 💾 **Local Storage:** Integrates with your local file system using the File System Access API.
- 🔄 **Auto-Save:** Automatically creates and saves JSON files for each project in the `data/` folder.
- 🖱️ **Drag & Drop:** Reorder tasks easily (disabled when grouping or filtering is active).
- 🔍 **Advanced Filtering:** Search tasks and filter by category, priority, or status.
- 📂 **Grouping:** Option to group tasks by category.
- 🔗 **SEO Tools:** Dynamic links to useful SEO tools based on the current domain.
- 📱 **Responsive Design:** Modern interface built with Bootstrap 5.

## 📖 Usage

### First Setup

1. Clone or download the project.
2. Open `index.html` in a supported browser (Chrome, Edge, or Opera recommended).
3. **IMPORTANT:** On first load, the browser will ask you to select a folder.
4. Select the **`data/`** folder located inside the project directory.
5. Click "Grant permission" or "View files" to allow the app to access the file system.

### Creating a Project

1. Click the "Add New Project" (+) button.
2. Enter your domain name (e.g., `example.com`) in the modal.
3. Click "Create".
4. The system will automatically create a `data/example.com.json` file and load default SEO tasks.

### Task Management

- ➕ **Add Task:** Click the "New Task" button.
- ✏️ **Edit Task:** Click the edit (pen) button on a task row.
- ✅ **Complete Task:** Click the checkbox next to a task.
- 🗑️ **Delete Task:** Click the delete (trash) button on a task row.
- 🖱️ **Reorder:** Drag and drop task rows to change their order.

### Project Management

- 📂 **Select Project:** Use the dropdown menu to switch between existing projects.
- 🗑️ **Delete Project:** Click the trash icon next to the dropdown to delete the current project.
- 📁 **Change Data Folder:** Use the folder icon to re-select or change permissions for the data directory.

## 🛠️ Technologies

- HTML5
- CSS3 (Bootstrap 5)
- Vanilla JavaScript
- File System Access API
- IndexedDB (to store the directory handle)
- FontAwesome 6

## 🌐 Browser Support

Since this application uses the File System Access API, the following browsers are supported:
- ✅ Google Chrome 86+
- ✅ Microsoft Edge 86+
- ✅ Opera 72+
- ❌ Firefox (Not supported yet)
- ❌ Safari (Not supported yet)

## 💻 Installation

No npm or backend installation is required. It runs entirely client-side.

```bash
# Clone the project
git clone https://github.com/anbarli/anbarli-seo-task-manager.git

# Go to project directory
cd anbarli-seo-task-manager

# Open index.html in a supported browser
# Or start a simple server:
npx serve
# or
python -m http.server 8000
```

## 📁 Data Format

Each project is stored as a separate JSON file in the `data/` folder:

```json
{
  "domain": "example.com",
  "tasks": [
    {
      "id": "unique-id",
      "title": "Task Name",
      "category": "Technical SEO",
      "subcategory": "Site Infrastructure",
      "description": "Description",
      "priority": "High",
      "status": "Pending",
      "done": false,
      "startDate": null,
      "dueDate": null,
      "completedDate": null,
      "notes": ""
    }
  ],
  "createdAt": "2026-01-15T12:00:00.000Z",
  "updatedAt": "2026-01-15T12:00:00.000Z"
}
```

## 🔧 Troubleshooting

### "Data folder could not be selected" Error

1. Refresh the page (F5)
2. In the dialog that opens, select the **`data/` folder** in your project directory
3. After selecting the folder, click "View files" or "Grant permission"
4. If the problem persists, use the "📁 Re-select Data Folder" button

### Files Not Saving

1. Make sure your browser supports the File System Access API
2. Ensure you have granted write permission for the `data/` folder
3. Open the browser console and check for error messages (F12)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork this repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push your branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

For major changes, please open an issue first to discuss what you would like to change. See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 👨‍💻 Developer

**Anbarlı**

## ⭐ Support

If you like this project, please give it a ⭐ star to support it!

---

# Türkçe

[![Lisans: MIT](https://img.shields.io/badge/Lisans-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Dil](https://img.shields.io/badge/dil-JavaScript-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> [English](#anbarlı-seo-task-manager) | **Türkçe**

SEO görevlerini yönetmek için tasarlanmış basit ve güçlü bir web uygulaması. Domain bazlı proje yönetimi ve yerel-öncelikli (local-first) yaklaşımla otomatik JSON dosya kaydetme özellikleri sunar.

## 🚀 Demo

Uygulamayı tarayıcınızda `index.html` dosyasını açarak deneyebilirsiniz. Uygulama tamamen istemci tarafında çalışır, sunucu gerektirmez!

> **Not:** Bu uygulama File System Access API kullanır, şu anda Chrome, Edge ve Opera tarayıcılarında desteklenmektedir.

## 📸 Ekran Görüntüleri

<!-- Eklenecek: Ana görev yönetim ekranı -->
<!-- Eklenecek: Dark mode görünümü -->
<!-- Eklenecek: Görev ekleme modalı -->

## ✨ Özellikler

- 📝 **Görev Yönetimi:** Görevleri kolayca ekleyin, düzenleyin ve silin.
- 🏷️ **Organizasyon:** Görevleri kategori, alt kategori ve önceliğe göre yönetin.
- 📊 **İlerleme Takibi:** Görsel ilerleme çubuğu ve durum yönetimi.
- 🌓 **Karanlık/Aydınlık Mod:** Rahat görüntüleme için yerleşik tema desteği.
- 🌍 **Çok Dilli:** İngilizce ve Türkçe dil desteği.
- 💾 **Yerel Depolama:** File System Access API kullanarak yerel dosya sisteminizle entegrasyon.
- 🔄 **Otomatik Kaydetme:** Her proje için `data/` klasöründe otomatik olarak JSON dosyaları oluşturur ve kaydeder.
- 🖱️ **Sürükle & Bırak:** Görevleri kolayca yeniden sıralayın (gruplama veya filtreleme aktifken devre dışı).
- 🔍 **Gelişmiş Filtreleme:** Görevleri arayın ve kategori, öncelik veya duruma göre filtreleyin.
- 📂 **Gruplama:** Görevleri kategoriye göre gruplama seçeneği.
- 🔗 **SEO Araçları:** Mevcut domain'e göre dinamik SEO araç linkleri.
- 📱 **Responsive Tasarım:** Bootstrap 5 ile oluşturulmuş modern arayüz.

## 📖 Kullanım

### İlk Kurulum

1. Projeyi klonlayın veya indirin.
2. Desteklenen bir tarayıcıda (Chrome, Edge veya Opera önerilir) `index.html` dosyasını açın.
3. **ÖNEMLİ:** İlk yüklemede tarayıcı sizden bir klasör seçmenizi isteyecektir.
4. Proje dizinindeki **`data/`** klasörünü seçin.
5. Uygulamanın dosya sistemine erişmesine izin vermek için "İzin ver" veya "Dosyaları görüntüle" butonuna tıklayın.

### Proje Oluşturma

1. "Yeni Proje Ekle" (+) butonuna tıklayın.
2. Modal'da domain adınızı girin (örn. `example.com`).
3. "Oluştur" butonuna tıklayın.
4. Sistem otomatik olarak `data/example.com.json` dosyasını oluşturacak ve varsayılan SEO görevlerini yükleyecektir.

### Görev Yönetimi

- ➕ **Görev Ekle:** "Yeni Görev" butonuna tıklayın.
- ✏️ **Görev Düzenle:** Görev satırındaki düzenleme (kalem) butonuna tıklayın.
- ✅ **Görev Tamamla:** Görevin yanındaki onay kutusuna tıklayın.
- 🗑️ **Görev Sil:** Görev satırındaki silme (çöp kutusu) butonuna tıklayın.
- 🖱️ **Yeniden Sırala:** Görev satırlarını sırasını değiştirmek için sürükleyip bırakın.

### Proje Yönetimi

- 📂 **Proje Seç:** Mevcut projeler arasında geçiş yapmak için açılır menüyü kullanın.
- 🗑️ **Proje Sil:** Mevcut projeyi silmek için açılır menünün yanındaki çöp kutusu simgesine tıklayın.
- 📁 **Veri Klasörünü Değiştir:** Veri dizinini yeniden seçmek veya izinleri değiştirmek için klasör simgesini kullanın.

## 🛠️ Teknolojiler

- HTML5
- CSS3 (Bootstrap 5)
- Vanilla JavaScript
- File System Access API
- IndexedDB (dizin tanıtıcısını saklamak için)
- FontAwesome 6

## 🌐 Tarayıcı Desteği

Bu uygulama File System Access API kullandığından, aşağıdaki tarayıcılar desteklenmektedir:
- ✅ Google Chrome 86+
- ✅ Microsoft Edge 86+
- ✅ Opera 72+
- ❌ Firefox (Henüz desteklenmiyor)
- ❌ Safari (Henüz desteklenmiyor)

## 💻 Kurulum

npm veya backend kurulumu gerekmez. Tamamen istemci tarafında çalışır.

```bash
# Projeyi klonlayın
git clone https://github.com/anbarli/anbarli-seo-task-manager.git

# Proje dizinine gidin
cd anbarli-seo-task-manager

# Desteklenen bir tarayıcıda index.html'i açın
# Veya basit bir sunucu başlatın:
npx serve
# veya
python -m http.server 8000
```

## 📁 Veri Formatı

Her proje `data/` klasöründe ayrı bir JSON dosyası olarak saklanır:

```json
{
  "domain": "example.com",
  "tasks": [
    {
      "id": "benzersiz-id",
      "title": "Görev Adı",
      "category": "Teknik SEO",
      "subcategory": "Site Altyapısı",
      "description": "Açıklama",
      "priority": "Yüksek",
      "status": "Bekliyor",
      "done": false,
      "startDate": null,
      "dueDate": null,
      "completedDate": null,
      "notes": ""
    }
  ],
  "createdAt": "2026-01-15T12:00:00.000Z",
  "updatedAt": "2026-01-15T12:00:00.000Z"
}
```

## 🔧 Sorun Giderme

### "Data klasörü seçilemedi" Hatası

1. Sayfayı yenileyin (F5)
2. Açılan pencerede **proje klasörünüzdeki `data/` klasörünü** seçin
3. Klasörü seçtikten sonra "Dosyaları görüntüle" veya "İzin ver" butonuna tıklayın
4. Sorun devam ederse "📁 Data Klasörünü Yeniden Seç" butonunu kullanın

### Dosyalar Kaydedilmiyor

1. Tarayıcınızın File System Access API'yi desteklediğinden emin olun
2. `data/` klasörü için yazma izni verdiğinizden emin olun
3. Tarayıcı konsolunu açıp hata mesajlarını kontrol edin (F12)

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🤝 Katkıda Bulunma

Katkılar memnuniyetle karşılanır! Katkıda bulunmak için:

1. Bu repository'yi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/harika-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Harika özellik ekle'`)
4. Branch'inizi push edin (`git push origin feature/harika-ozellik`)
5. Pull Request açın

Büyük değişiklikler için lütfen önce bir issue açarak neyi değiştirmek istediğinizi tartışın. Detaylı yönergeler için [CONTRIBUTING.md](CONTRIBUTING.md) dosyasına bakın.

## 👨‍💻 Geliştirici

**Anbarlı**

## ⭐ Destek

Bu projeyi beğendiyseniz, lütfen ⭐ vererek destekleyin!
