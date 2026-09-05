# 🍽️ IngreDish

**IngreDish** istifadəçinin əlində olan ərzaq və inqrediyentlərə əsasən uyğun reseptlər tapmasına kömək edən, müasir və responsive dizayna malik resept platformasıdır.

Layihədə istifadəçilər reseptləri axtara, kateqoriyalar üzrə baxa, sevimli reseptlərini yadda saxlaya, blog məqalələrini bookmark edə və öz profillərini idarə edə bilərlər.

## ✨ Əsas imkanlar

* 🔍 Resept adına görə axtarış
* 🥕 Əldə olan inqrediyentlərə əsasən resept axtarışı
* 🍕 Reseptlərin kateqoriyalar üzrə göstərilməsi
* 🌍 Müxtəlif ölkələrin mətbəxləri
* ❤️ Reseptləri Favorites-ə əlavə etmək və silmək
* 🔖 Blog məqalələrini Bookmark etmək
* 📖 Resept və məqalələrin ətraflı səhifələri
* 👤 Qeydiyyat və giriş sistemi
* 👻 Guest olaraq daxil olmaq
* 🖼️ Profil şəklini dəyişmək
* 🎨 Light / Dark mode
* 💾 LocalStorage ilə məlumatların saxlanılması
* 📱 Responsive dizayn
* 🔐 Giriş tələb edən funksiyaların qorunması
* ☁️ Cloudinary ilə şəkil yüklənməsi
* 🔄 MockAPI ilə istifadəçi məlumatlarının idarə olunması

## 🛠️ İstifadə olunan texnologiyalar

### Frontend

* React
* Vite
* JavaScript (ES6+)
* Tailwind CSS
* React Router DOM
* Axios
* React Icons

### Məlumat və yaddaş

* **MockAPI** — istifadəçi məlumatları və CRUD əməliyyatları
* **Cloudinary** — profil şəkillərinin yüklənməsi
* **GitHub Raw JSON** — resept, blog, inqrediyent və kateqoriya məlumatları
* **LocalStorage** — istifadəçi seçimlərinin və tətbiq məlumatlarının brauzerdə saxlanılması

## 📂 Layihənin strukturu

```text
IngreDish/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── BottomBar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   └── ...
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── BookmarksContext.jsx
│   │   ├── FavoritesContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── hooks/
│   │   ├── useAppData.js
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Auth/
│   │   ├── Recipes/
│   │   ├── Catalog/
│   │   ├── CategoryDetail/
│   │   ├── Blog/
│   │   ├── DetailView/
│   │   ├── Profile/
│   │   └── NotFound/
│   │
│   ├── provider/
│   │   └── data/
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── router/
│   │   └── router.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── package.json
└── README.md
```

## 🔐 Authentication

İstifadəçi giriş və qeydiyyat sistemi `AuthContext` və custom hook-lardan istifadə edilərək hazırlanıb.

Authentication sistemi aşağıdakı imkanları dəstəkləyir:

* Yeni istifadəçinin qeydiyyatı
* Mövcud istifadəçinin sistemə daxil olması
* Guest olaraq daxil olmaq
* İstifadəçi məlumatlarının yenilənməsi
* İstifadəçi giriş vəziyyətinin idarə olunması

Authentication məntiqinin ümumi quruluşu:

```text
useAuthLogic
      ↓
AuthProvider
      ↓
AuthContext
      ↓
useAuth()
      ↓
Komponentlər
```

## ❤️ Favorites

İstifadəçilər reseptləri **Favorites** bölməsinə əlavə edə və daha sonra silə bilərlər.

Favorites sistemi React Context və `useReducer` istifadə edilərək idarə olunur.

Əsas əməliyyatlar:

```text
SET_FAVORITES
TOGGLE_FAVORITE
CLEAR_FAVORITES
```

Beləliklə, favorit məlumatları müxtəlif komponentlər arasında paylaşılır.

## 🔖 Bookmarks

Blog məqalələri istifadəçilər tərəfindən **Bookmark** edilə bilər.

Bookmark sistemi `useReducer` vasitəsilə idarə olunur.

Əsas action-lar:

```text
SET_BOOKMARKS
TOGGLE_BOOKMARK
CLEAR_BOOKMARKS
```

Guest və ya giriş etməmiş istifadəçi bookmark funksiyasından istifadə etməyə çalışdıqda profil səhifəsinə yönləndirilir.

## 💾 LocalStorage

Layihədə brauzerin `localStorage` imkanından istifadə olunur.

Məsələn, seçilmiş tema saxlanılır:

```javascript
localStorage.setItem("app_theme", theme);
```

Bu sayədə istifadəçi səhifəni yenilədikdə və ya tətbiqi yenidən açdıqda əvvəlki seçimlərini itirmir.

LocalStorage layihədə əsasən client-side məlumatların və istifadəçi seçimlərinin saxlanılması üçün istifadə olunur.

## 🌙 Dark / Light Mode

IngreDish həm **Light**, həm də **Dark** rejimi dəstəkləyir.

Tema `ThemeContext` vasitəsilə idarə olunur.

Tətbiq ilk açıldıqda:

1. LocalStorage-da saxlanılmış tema yoxlanılır.
2. Saxlanılmış tema yoxdursa, sistemin dark/light seçimi yoxlanılır.
3. Heç biri yoxdursa, Light mode istifadə olunur.

Dark mode aktiv olduqda `<html>` elementinə `dark` class-ı əlavə edilir:

```html
<html class="dark">
```

Daha sonra Tailwind CSS-in `dark:` class-larından istifadə edilir.

## ☁️ Cloudinary

İstifadəçi profil şəkillərinin yüklənməsi üçün **Cloudinary** istifadə olunur.

Şəkilin yüklənmə prosesi:

```text
İstifadəçi şəkil seçir
        ↓
FileReader
        ↓
Base64
        ↓
Cloudinary
        ↓
Secure URL
        ↓
İstifadəçi profili
```

Cloudinary-dən alınan `secure_url` istifadəçinin profil məlumatlarında saxlanılır.

## 📡 Məlumat mənbələri

IngreDish-də məlumatlar müxtəlif mənbələrdən əldə edilir.

### MockAPI

İstifadəçi məlumatlarının idarə olunması üçün MockAPI istifadə olunur.

Əsas əməliyyatlar:

```text
GET    /users
POST   /users
PUT    /users/:id
```

Axios vasitəsilə API sorğuları göndərilir.

### GitHub Raw JSON

Resept və digər məlumatlar GitHub-da yerləşdirilmiş JSON fayllarından əldə olunur.

İstifadə olunan məlumatlar:

* Reseptlər
* Blog məqalələri
* İnqrediyentlər
* Kateqoriyalar

Məlumatların alınması üçün JavaScript-in `fetch()` funksiyasından istifadə olunur.

Dörd məlumat mənbəyi eyni anda `Promise.all()` vasitəsilə yüklənir.

```text
recipes.json
blogs.json
ingredients.json
categories.json
        ↓
   useAppData()
        ↓
    React State
        ↓
   Komponentlər
```

## 🔄 Məlumatların çevrilməsi

Resept və blog məlumatlarının strukturları fərqli olduğuna görə layihədə `transformToDetailLayout()` funksiyasından istifadə olunur.

Bu funksiya müxtəlif məlumat strukturlarını ümumi formata çevirir.

Nəticədə eyni komponentlər həm resept, həm də blog məlumatlarını göstərə bilir.

Bu yanaşma kod təkrarını azaltmağa və komponentlərin daha reusable olmasına kömək edir.

## 🧭 Routing

Səhifələr arasında keçid üçün **React Router DOM** istifadə olunur.

Əsas route-lar:

```text
/home
/whaticook
/recepies
/catalog
/categorydetail/:id
/blog
/recipedetail/:id
/blogdetail/:id
/profile
/login
/register
```

Dinamik route-lardan resept, blog və kateqoriya detalları üçün istifadə olunur.

Həmçinin mövcud olmayan səhifələr üçün `404 Not Found` səhifəsi yaradılıb.

## 📱 Responsive Design

IngreDish müxtəlif ekran ölçülərinə uyğun hazırlanıb.

Desktop versiyada:

* Header
* Naviqasiya menyusu
* Footer

Mobile versiyada:

* Responsive layout
* Bottom navigation
* Mobil üçün uyğunlaşdırılmış kartlar və komponentlər

istifadə olunur.

Responsive dizayn əsasən Tailwind CSS vasitəsilə hazırlanıb.

## ⚙️ Quraşdırılması

Layihəni GitHub-dan clone et:

```bash
git clone https://github.com/YOUR_USERNAME/IngreDish.git
```

Layihənin qovluğuna daxil ol:

```bash
cd IngreDish
```

Dependency-ləri yüklə:

```bash
npm install
```

Development server-i başlad:

```bash
npm run dev
```

Layihə lokal olaraq aşağıdakı ünvanda açılacaq:

```text
http://localhost:5173
```

## 🔐 Environment Variables

Layihənin əsas konfiqurasiya məlumatlarını `.env` faylında saxlamaq mümkündür.

Məsələn:

```env
VITE_API_URL=your_mockapi_url
```

Axios daxilində:

```javascript
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
```

> `.env` faylında parol, private API key və digər məxfi məlumatlar saxlanılmamalıdır. Vite-də `VITE_` ilə başlayan dəyişənlər frontend koduna çıxarıla bilər.

## 🚀 Production Build

Production üçün build yaratmaq:

```bash
npm run build
```

Production build-i lokal olaraq yoxlamaq:

```bash
npm run preview
```

## 🎯 Layihənin məqsədi

IngreDish layihəsinin əsas məqsədi istifadəçilərə yemək və resept tapma prosesini daha rahat və interaktiv etməkdir.

Layihə həmçinin müasir frontend texnologiyalarını praktiki şəkildə tətbiq etmək üçün hazırlanıb.

Layihədə aşağıdakı mövzular praktik olaraq tətbiq olunub:

* React komponentləri
* React Hooks
* Custom Hooks
* Context API
* useReducer
* State Management
* React Router
* Axios
* REST API
* Fetch API
* Async/Await
* Promise.all()
* LocalStorage
* FileReader
* FormData
* Cloudinary
* MockAPI
* Tailwind CSS
* Responsive Design
* CRUD əməliyyatları
* Reusable Components
* Data Transformation

## 🔮 Gələcək inkişaflar

Layihəyə gələcəkdə aşağıdakı funksiyalar əlavə edilə bilər:

* Real backend authentication
* Təhlükəsiz parol hash-ləmə
* Database inteqrasiyası
* Reseptlərə şərh yazmaq
* Reseptlərə rating vermək
* Sosial paylaşım funksiyası
* Daha inkişaf etmiş filter sistemi
* Fərdiləşdirilmiş resept tövsiyələri
* Pagination
* Cache sistemi
* Offline dəstək
* PWA dəstəyi

## 👩‍💻 Müəllif

**Xəyalə İsmayıllı**

Azərbaycan Texniki Universiteti
İnformasiya Texnologiyaları

---

⭐ Layihə xoşunuza gəldisə, GitHub-da star verməyi unutmayın!
