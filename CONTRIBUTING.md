# Contributing Guide

> **English** | [Türkçe](#türkçe)

First of all, thank you for considering contributing to this project! 🎉

## 🚀 How to Contribute?

### Bug Reports

Found a bug? Please open an [issue](../../issues/new) with the following information:

- **Bug Description:** Explain what the bug is
- **Steps to Reproduce:** Describe step-by-step how to reproduce the bug
- **Expected Behavior:** What should happen
- **Screenshots:** Add screenshots if available
- **Browser Info:** Specify which browser and version you're using

### Feature Requests

Want a new feature? Great! Open an [issue](../../issues/new) and:

- Describe the feature in detail
- Explain why this feature is needed
- Add example use cases if available

### Pull Request Process

1. **Fork & Clone**
   ```bash
   git clone https://github.com/anbarli/anbarli-seo-task-manager.git
   cd anbarli-seo-task-manager
   ```

2. **Create a New Branch**
   ```bash
   git checkout -b feature/amazing-feature
   # or
   git checkout -b fix/bug-fix
   ```

3. **Make Your Changes**
   - Write code that follows the code style
   - Use meaningful commit messages
   - Make small, focused changes

4. **Test**
   - Test your changes in different browsers
   - Ensure existing features are not broken

5. **Commit & Push**
   ```bash
   git add .
   git commit -m "feat: Add amazing feature"
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Describe your changes in detail
   - Reference any closed issues (#issue_number)
   - Add screenshots

## 📝 Commit Message Format

We use Semantic Commit Messages:

```
<type>: <description>

[optional body]
```

**Type values:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code formatting changes (no logic change)
- `refactor`: Code refactoring
- `test`: Adding or fixing tests
- `chore`: Build or auxiliary tool changes

**Examples:**
```bash
feat: Add dark mode toggle to settings
fix: Resolve task deletion bug
docs: Update installation instructions
style: Format code with prettier
refactor: Simplify task rendering logic
```

## 🎨 Code Style

- **JavaScript:** Use ES6+ syntax
- **Naming:** camelCase (variables/functions), PascalCase (classes)
- **Indentation:** 2 spaces
- **Semicolons:** Use them
- **Comments:** Add explanatory comments for complex logic

## 🧪 Testing

Test your changes in these browsers:
- ✅ Chrome (last 2 versions)
- ✅ Edge (last 2 versions)
- ✅ Opera (last 2 versions)

## 📋 Checklist

Before opening a PR:

- [ ] Code works and has been tested
- [ ] Used meaningful commit messages
- [ ] Updated README (if necessary)
- [ ] Added documentation for new features
- [ ] Existing tests pass

## ❓ Questions?

If you have any questions, you can open an [issue](../../issues/new) or comment on existing issues.

## 📜 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

Thank you again! 🙏 Your contributions will make the project better! ⭐

---

# Türkçe

> [English](#contributing-guide) | **Türkçe**

Öncelikle, bu projeye katkıda bulunmayı düşündüğünüz için teşekkür ederiz! 🎉

## 🚀 Nasıl Katkıda Bulunurum?

### Hata Bildirimi (Bug Report)

Bir hata buldunuz mu? Lütfen aşağıdaki bilgileri içeren bir [issue](../../issues/new) açın:

- **Hata Açıklaması:** Hatanın ne olduğunu açıklayın
- **Adımlar:** Hatayı nasıl tekrar oluşturabileceğimizi adım adım açıklayın
- **Beklenen Davranış:** Ne olması gerektiğini yazın
- **Ekran Görüntüleri:** Varsa ekran görüntüleri ekleyin
- **Tarayıcı Bilgisi:** Hangi tarayıcı ve versiyonu kullandığınızı belirtin

### Özellik İsteği (Feature Request)

Yeni bir özellik mi istiyorsunuz? Harika! Bir [issue](../../issues/new) açarak:

- Özelliği detaylıca açıklayın
- Neden bu özelliğe ihtiyaç duyulduğunu belirtin
- Varsa örnek kullanım senaryoları ekleyin

### Pull Request Süreci

1. **Fork & Clone**
   ```bash
   git clone https://github.com/anbarli/anbarli-seo-task-manager.git
   cd anbarli-seo-task-manager
   ```

2. **Yeni Branch Oluşturun**
   ```bash
   git checkout -b feature/harika-ozellik
   # veya
   git checkout -b fix/hata-duzeltme
   ```

3. **Değişikliklerinizi Yapın**
   - Kod stiline uygun yazın
   - Anlamlı commit mesajları kullanın
   - Küçük ve odaklı değişiklikler yapın

4. **Test Edin**
   - Değişikliklerinizi farklı tarayıcılarda test edin
   - Mevcut özelliklerin bozulmadığından emin olun

5. **Commit & Push**
   ```bash
   git add .
   git commit -m "feat: Harika özellik ekle"
   git push origin feature/harika-ozellik
   ```

6. **Pull Request Açın**
   - Değişikliklerinizi detaylıca açıklayın
   - Kapatılan issue varsa referans verin (#issue_number)
   - Ekran görüntüleri ekleyin

## 📝 Commit Mesaj Formatı

Semantic Commit Messages kullanıyoruz:

```
<type>: <description>

[optional body]
```

**Type değerleri:**
- `feat`: Yeni özellik
- `fix`: Hata düzeltmesi
- `docs`: Dokümantasyon değişikliği
- `style`: Kod formatı değişikliği (logic değişmez)
- `refactor`: Kod yeniden yapılandırma
- `test`: Test ekleme veya düzeltme
- `chore`: Build veya yardımcı araç değişiklikleri

**Örnekler:**
```bash
feat: Ayarlara dark mode toggle ekle
fix: Görev silme hatasını düzelt
docs: Kurulum talimatlarını güncelle
style: Kodu prettier ile formatla
refactor: Görev render mantığını basitleştir
```

## 🎨 Kod Stili

- **JavaScript:** ES6+ syntax kullanın
- **İsimlendirme:** camelCase (değişkenler/fonksiyonlar), PascalCase (class'lar)
- **Girinti:** 2 boşluk
- **Noktalı virgül:** Kullanın
- **Yorumlar:** Karmaşık logic'ler için açıklayıcı yorumlar ekleyin

## 🧪 Test

Değişikliklerinizi şu tarayıcılarda test edin:
- ✅ Chrome (son 2 versiyon)
- ✅ Edge (son 2 versiyon)
- ✅ Opera (son 2 versiyon)

## 📋 Checklist

PR açmadan önce:

- [ ] Kod çalışıyor ve test edildi
- [ ] Anlamlı commit mesajları kullandım
- [ ] README'yi güncelledim (gerekirse)
- [ ] Yeni özellik için dokümantasyon ekledim
- [ ] Mevcut testler başarılı

## ❓ Sorular?

Herhangi bir sorunuz varsa [issue](../../issues/new) açabilir veya mevcut issue'lara yorum yapabilirsiniz.

## 📜 Lisans

Bu projeye katkıda bulunarak, katkılarınızın MIT Lisansı altında lisanslanacağını kabul etmiş olursunuz.
