import { Link } from 'react-router-dom'
import { BsStars } from "react-icons/bs";
const CTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8  lg:pb-10">
        <div className="bg-[#C2410C] rounded-3xl px-5 sm:px-10 py-8 sm:py-14 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-white text-center md:text-left">
          <div>
            <h3 className="font-display text-xl sm:text-3xl font-semibold">Ərzaqlarını seç, biz reseptləri tapaq! 🍽</h3>
            <p className="text-orange-100 mt-2 max-w-3xl text-sm sm:text-base">
              IngreDish, soyuducunuzda olan inqredientlərdən sənə uyğun resepti tapmağın ən sadə yolunu təklif edir. Məqsədimiz qida tullantısını azaltmaq və mətbəxdə yaradıcılığı asanlaşdırmaqdır.
            </p>
          </div>
          <Link to="/whaticook" className="shrink-0 px-6 py-3 rounded-xl bg-white text-[#C2410C] font-semibold text-sm hover:bg-orange-50 transition-colors">
            İndi sına <BsStars className="inline text-xl"/>
          </Link>
        </div>
      </section>
  )
}

export default CTA