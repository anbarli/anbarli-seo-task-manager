# Data Klasörü

Bu klasör SEO Görev Yöneticisi projelerinin JSON dosyalarını içerir.

## Kullanım

1. Uygulamadan bir proje oluşturun veya düzenleyin
2. "Dosyaya Kaydet (İndir)" butonuna tıklayın
3. İndirilen JSON dosyasını bu klasöre kaydedin
4. "Dosyadan Yükle" butonu ile JSON dosyalarını tekrar yükleyebilirsiniz

## JSON Dosya Formatı

```json
{
  "domain": "example.com",
  "createdAt": "2026-01-12T...",
  "updatedAt": "2026-01-12T...",
  "tasks": [
    {
      "id": "hosting",
      "title": "Hosting kontrolü",
      "category": "Teknik SEO",
      "subcategory": "Site Altyapısı",
      "description": "Hosting hızını optimize et",
      "priority": "Yüksek",
      "status": "Bekliyor",
      "done": false
    }
  ]
}
```

## Not

- Her domain/proje için ayrı bir JSON dosyası oluşturulur
- Dosya adı formatı: `domain-adi.json`
- JSON dosyaları manuel olarak da düzenlenebilir
