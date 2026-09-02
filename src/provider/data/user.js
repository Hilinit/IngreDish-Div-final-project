export const DEFAULT_USER = {
  name:     "",          // filled in on first register/login
  username: "",
  email:    "",
  role:     "",          // user fills this in later via Parametrlər
  verified: false,
  initials: "?",
  myRecipeIds: [
    "sobada-toyuq-kartof", "pasta-bolonez", "saglam-bowl",
    "toyuqlu-salat", "limonlu-balik", "mercili-sorba",
    "veqan-sebze-qovurmasi", "naneli-limonad",
  ],
  myBlogIds: [
    "saglam-qidalanma-5-meslehet", "metbexde-vaxt-qenaeti",
    "usaqlar-saglam-reseptler", "vegetarian-pehriz-faydalari",
    "qis-ucun-isinici-yemekler",
  ],
};

export function initialsFromName(name) {
  const parts = (name || "").trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}
