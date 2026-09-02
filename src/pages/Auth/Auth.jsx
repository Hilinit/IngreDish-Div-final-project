import { FaUser, FaEnvelope, FaLock, FaUserSecret, FaArrowRight } from "react-icons/fa";
import { useAuthForm } from "../../hooks/useAuthForm";

const Auth = () => {
  const { activeTab, formData, errors, handleTabSwitch, handleChange, handleSubmit, handleGuestLogin } = useAuthForm();

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105" style={{ backgroundImage: `url('assets/auth-bg.jpg')` }}></div>
      <div className="absolute inset-0 bg-black/40 dark:bg-black/40"></div>
      
      <div className="relative z-10 max-w-md w-full space-y-6 bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-xl dark:shadow-neutral-950 border border-slate-100 dark:border-neutral-800 transition-colors">
        <div className="flex bg-slate-100 dark:bg-neutral-800 p-1.5 rounded-2xl">
          {["login", "register"].map((tab) => (
            <button key={tab} type="button" onClick={() => handleTabSwitch(tab)} className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition cursor-pointer 
                ${activeTab === tab ? "bg-white dark:bg-neutral-700 text-slate-900 dark:text-white shadow-sm"  : "text-slate-400 dark:text-gray-400 hover:text-slate-600 dark:hover:text-gray-200"}`} >
              {tab === "login" ? "Daxil Ol" : "Qeydiyyat"}
            </button>
          ))}
        </div>
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            {activeTab === "login" ? "Xoş gəlmisiniz!" : "Yeni Hesab Yaradın"}
          </h2>
          <p className="text-xs text-slate-400 dark:text-gray-400">
            {activeTab === "login" ? "Davam etmək üçün hesabınıza daxil olun" : "Platformadan tam istifadə üçün qeydiyyatdan keçin"}
          </p>
        </div>

        <form className="space-y-4 pt-2" onSubmit={handleSubmit} noValidate>
          {activeTab === "register" && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-gray-300 mb-1">Ad və Soyad</label>
              <div className="relative">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Xəyalə İsmayıllı" className={`w-full bg-slate-50 dark:bg-neutral-800 text-slate-900 dark:text-white border rounded-xl px-4 py-3 pl-10 text-xs focus:outline-none transition 
                  ${ errors.name ? "border-red-500" : "border-slate-200 dark:border-neutral-700 focus:border-[#C2410C] dark:focus:border-orange-500"}`} />
                <FaUser className="absolute left-3.5 top-3.5 text-slate-400 dark:text-gray-500 text-xs" />
              </div>
              {errors.name && <p className="text-red-500 text-[11px] mt-1 font-medium pl-1">{errors.name}</p>}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-gray-300 mb-1">E-poçt ünvanı</label>
            <div className="relative">
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="nümunə@mail.com" className={`w-full bg-slate-50 dark:bg-neutral-800 text-slate-900 dark:text-white border rounded-xl px-4 py-3 pl-10 text-xs focus:outline-none transition 
                ${ errors.email ? "border-red-500" : "border-slate-200 dark:border-neutral-700 focus:border-[#C2410C] dark:focus:border-orange-500"}`} />
              <FaEnvelope className="absolute left-3.5 top-3.5 text-slate-400 dark:text-gray-500 text-xs" />
            </div>
            {errors.email && <p className="text-red-500 text-[11px] mt-1 font-medium pl-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-gray-300 mb-1">Şifrə</label>
            <div className="relative">
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className={`w-full bg-slate-50 dark:bg-neutral-800 text-slate-900 dark:text-white border rounded-xl px-4 py-3 pl-10 text-xs focus:outline-none transition 
                ${ errors.password ? "border-red-500" : "border-slate-200 dark:border-neutral-700 focus:border-[#C2410C] dark:focus:border-orange-500"}`} />
              <FaLock className="absolute left-3.5 top-3.5 text-slate-400 dark:text-gray-500 text-xs" />
            </div>
            {errors.password && <p className="text-red-500 text-[11px] mt-1 font-medium pl-1">{errors.password}</p>}
          </div>

          <button type="submit" className="w-full bg-[#C2410C] hover:bg-[#9A3412] dark:bg-orange-600 dark:hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-xl text-xs transition shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-2" >
            {activeTab === "login" ? "Daxil Ol" : "Qeydiyyatı Tamamla"} <FaArrowRight className="text-xs" />
          </button>
        </form>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100 dark:border-neutral-800" /></div>
          <div className="relative flex justify-center text-xs"><span className="bg-white dark:bg-neutral-900 px-3 text-slate-400 dark:text-gray-500 font-medium">və ya</span></div>
        </div>

        <button onClick={handleGuestLogin} type="button" className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-slate-700 dark:text-gray-200 font-semibold py-3 px-4 rounded-xl text-xs transition flex items-center justify-center gap-2 cursor-pointer" >
          <FaUserSecret className="text-slate-500 dark:text-gray-400" /> Qonaq kimi davam et
        </button>
      </div>
    </div>
  )
}

export default Auth