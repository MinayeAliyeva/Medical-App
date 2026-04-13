# Dr. Beyrək Abbaszadə SPA

Bu layihə `HTML + CSS + JS + Bootstrap 5 + jQuery + Slick Slider + WOW.js + Odometer + Webpack` stack-i ilə hazırlanmış statik SPA-dır. Məzmun əsasən `/Users/elmaramanov/Downloads/Dr Beyrək Abbaszadə Vebsayt Tərkibi -OTX.docx` sənədindən götürülərək strukturlaşdırılıb.

## İşə salmaq

```bash
npm install
npm start
```

Production build:

```bash
npm run build
```

Hazır çıxış qovluğu: `dist/`

## Quruluş

- `src/data/siteData.js`: Bütün məzmun, linklər, SEO mətnləri və media spesifikasiyaları
- `src/scripts/renderApp.js`: SPA markup render qat
- `src/scripts/interactions.js`: Slick, WOW, Odometer, form, smooth scroll və modal davranışları
- `src/scripts/seo.js`: Meta tag və FAQ/Physician schema injection
- `src/styles/main.scss`: Dizayn və responsive qat

## Media Texniki Tələbləri

- Hero portret: `1600x2000`, `4:5`, `AVIF/WEBP`
- Klinika və əməliyyat mühiti: `1920x1080`, `16:9`, `AVIF/WEBP`
- Pasiyent hekayəsi cover: `1400x900`, `14:9`, `WEBP`
- Şaquli video/reel: `1080x1920`, `9:16`, `MP4 H.264`

Fayllar mümkün olduqda `AVIF` və `WEBP` formatında verilməlidir. Saytda istifadə olunacaq şəkillər `300 KB` civarına qədər optimallaşdırılmalıdır.

## Vacib Qeyd

- Admin panel və CMS yoxdur. Bütün yeniləmələr `src/data/siteData.js` daxilində edilir.
- Randevu formu hazırda front-end `mailto` axını ilə işləyir. Real SMS/e-poçt təsdiqi üçün ayrıca backend və ya üçüncü tərəf servis inteqrasiyası lazımdır.
- Build hazırda uğurla tamamlanır. Yeganə qalan xəbərdarlıq Bootstrap və ikon fontları səbəbilə ümumi CSS bundle ölçüsünün böyük olmasıdır.
