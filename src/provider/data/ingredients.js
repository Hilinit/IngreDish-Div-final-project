export const INGREDIENT_CATEGORIES = [
  { id: "all",   label: "Hamısı" },
  { id: "meat",  label: "Ət məhsulları" },
  { id: "veg",   label: "Tərəvəzlər" },
  { id: "legume",label: "Baklagillər" },
  { id: "dairy", label: "Süd məhsulları" },
  { id: "other", label: "Digər" },
];

export const INGREDIENTS = [
  // ── Ət məhsulları ──────────────────────────────────────────────────
  { id: "toyuq",      name: "Toyuq əti",       emoji: "🍗", category: "meat" },
  { id: "mal",        name: "Mal əti",          emoji: "🥩", category: "meat" },
  { id: "quzu",       name: "Quzu əti",         emoji: "🐑", category: "meat" },
  { id: "baliq",      name: "Balıq",            emoji: "🐟", category: "meat" },
  { id: "ton-baligi", name: "Ton balığı",       emoji: "🐠", category: "meat" },
  { id: "krevetka",   name: "Krevetka",         emoji: "🦐", category: "meat" },
  { id: "yumurta",    name: "Yumurta",          emoji: "🥚", category: "meat" },
  { id: "toyuq-ciy",  name: "Toyuq ciyəri",     emoji: "🫀", category: "meat" },
  { id: "kolbasa",    name: "Kolbasa",          emoji: "🌭", category: "meat" },

  // ── Tərəvəzlər ─────────────────────────────────────────────────────
  { id: "kartof",     name: "Kartof",           emoji: "🥔", category: "veg" },
  { id: "pomidor",    name: "Pomidor",          emoji: "🍅", category: "veg" },
  { id: "sogan",      name: "Soğan",            emoji: "🧅", category: "veg" },
  { id: "sarimsaq",   name: "Sarımsaq",         emoji: "🧄", category: "veg" },
  { id: "kok",        name: "Kök",              emoji: "🥕", category: "veg" },
  { id: "biber",      name: "Bibər",            emoji: "🫑", category: "veg" },
  { id: "xiyar",      name: "Xiyar",            emoji: "🥒", category: "veg" },
  { id: "badimcan",   name: "Badımcan",         emoji: "🍆", category: "veg" },
  { id: "kelem",      name: "Kələm",            emoji: "🥬", category: "veg" },
  { id: "gobetek",    name: "Göbələk",          emoji: "🍄", category: "veg" },
  { id: "ispanaq",    name: "İspanaq",          emoji: "🥬", category: "veg" },
  { id: "qabaq",      name: "Qabaq",            emoji: "🥦", category: "veg" },
  { id: "brokkoli",   name: "Brokkoli",         emoji: "🥦", category: "veg" },
  { id: "sarı-biber", name: "Sarı bibər",       emoji: "🫑", category: "veg" },
  { id: "koriander",  name: "Koriander",        emoji: "🌿", category: "veg" },
  { id: "reyhan",     name: "Reyhan",           emoji: "🌿", category: "veg" },
  { id: "nane",       name: "Nanə",             emoji: "🌿", category: "veg" },
  { id: "portakal",   name: "Portağal",         emoji: "🍊", category: "veg" },
  { id: "limon",      name: "Limon",            emoji: "🍋", category: "veg" },
  { id: "alma",       name: "Alma",             emoji: "🍎", category: "veg" },

  // ── Baklagillər ─────────────────────────────────────────────────────
  { id: "noxud",      name: "Noxud",            emoji: "🫛", category: "legume" },
  { id: "merci",      name: "Mərci",            emoji: "🫘", category: "legume" },
  { id: "lobya",      name: "Lobya",            emoji: "🫘", category: "legume" },
  { id: "nut",        name: "Yer fındığı",      emoji: "🥜", category: "legume" },

  // ── Süd məhsulları ──────────────────────────────────────────────────
  { id: "pendir",     name: "Pendir",           emoji: "🧀", category: "dairy" },
  { id: "sud",        name: "Süd",              emoji: "🥛", category: "dairy" },
  { id: "qatiq",      name: "Qatıq",            emoji: "🍶", category: "dairy" },
  { id: "qaymaq",     name: "Qaymaq",           emoji: "🥛", category: "dairy" },
  { id: "kesmik",     name: "Kəsmik",           emoji: "🧀", category: "dairy" },
  { id: "yag",        name: "Kərə yağı",        emoji: "🧈", category: "dairy" },

  // ── Digər ────────────────────────────────────────────────────────────
  { id: "makaron",    name: "Makaron",          emoji: "🍝", category: "other" },
  { id: "duyu",       name: "Düyü",             emoji: "🍚", category: "other" },
  { id: "goyerti",    name: "Göyərti",          emoji: "🌿", category: "other" },
  { id: "zeytun-yagi",name: "Zeytun yağı",      emoji: "🫒", category: "other" },
  { id: "un",         name: "Un",               emoji: "🌾", category: "other" },
  { id: "zeytun",     name: "Zeytun",           emoji: "🫒", category: "other" },
  { id: "pomidor-sou",name: "Pomidor sousu",    emoji: "🥫", category: "other" },
  { id: "bal",        name: "Bal",              emoji: "🍯", category: "other" },
  { id: "sirke",      name: "Sirkə",            emoji: "🫙", category: "other" },
  { id: "soya-sou",   name: "Soya sousu",       emoji: "🫙", category: "other" },
  { id: "zencefil",   name: "Zəncəfil",         emoji: "🌶️", category: "other" },
  { id: "darcin",     name: "Darçın",           emoji: "🟤", category: "other" },
  { id: "ceviz",      name: "Ceviz",            emoji: "🌰", category: "other" },
  { id: "bulqur",     name: "Bulqur",           emoji: "🌾", category: "other" },
  { id: "ezmec",      name: "Əzmə çörək",       emoji: "🍞", category: "other" },
];


