import { FaTimes, FaCamera } from "react-icons/fa";

const EditProfileModal = ({ isOpen, onClose, user, newName, setNewName, newAvatar, handleImageChange, handleSaveProfile}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-neutral-900 text-slate-800 dark:text-slate-100 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative space-y-6 animate-in fade-in zoom-in duration-200 border border-slate-100 dark:border-neutral-800"> 
        <button type="button" onClick={onClose} className="absolute top-5 right-5 text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-neutral-800 p-2 rounded-full transition cursor-pointer" >
          <FaTimes className="text-xs" />
        </button>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white text-center">Profili Redaktə Et</h2>
        <form onSubmit={handleSaveProfile} className="space-y-6">
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="relative group">
              <img loading="lazy" src={newAvatar || "https://i.pinimg.com/736x/b8/d8/c5/b8d8c54c03e3d1a3cc050578e7d46389.jpg"} alt="Profil" className="w-28 h-28 rounded-3xl object-cover border-4 border-slate-100 dark:border-neutral-800 shadow-md" />
              <label htmlFor="avatarInput" className="absolute inset-0 bg-black/40 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer text-white" >
                <FaCamera className="text-xl" />
              </label>
            </div>
            <input type="file" id="avatarInput" accept="image/*" onChange={handleImageChange} className="hidden" />
            <label htmlFor="avatarInput" className="text-xs text-[#C2410C] dark:text-orange-400 font-semibold cursor-pointer hover:underline">
              Yeni şəkil yüklə
            </label>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">Ad Soyad</label>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} required className="w-full bg-slate-50 dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 text-slate-800 dark:text-slate-100 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20 dark:focus:ring-orange-500/20 focus:border-[#C2410C] dark:focus:border-orange-500 transition" placeholder="Adınızı daxil edin" />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">E-poçt (Gmail)</label>
            <input type="email" value={user?.email || ""} disabled className="w-full bg-slate-100 dark:bg-neutral-800/50 border border-slate-200 dark:border-neutral-700 rounded-xl px-4 py-2.5 text-xs text-slate-400 dark:text-slate-500 cursor-not-allowed" />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 bg-slate-100 dark:bg-neutral-800 hover:bg-slate-200 dark:hover:bg-neutral-700 text-slate-700 dark:text-slate-200 text-xs font-semibold py-3 rounded-xl transition cursor-pointer" >
              Ləğv et
            </button>
            <button type="submit" className="flex-1 bg-[#C2410C] hover:bg-[#9A3412] dark:bg-orange-600 dark:hover:bg-orange-500 text-white text-xs font-semibold py-3 rounded-xl transition shadow-sm cursor-pointer" >
              Yadda saxla
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;