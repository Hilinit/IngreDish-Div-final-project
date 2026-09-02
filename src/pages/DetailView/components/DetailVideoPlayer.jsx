import { useState } from "react";
import { FaYoutube, FaPlay } from "react-icons/fa";

const DetailVideoPlayer = ({ isBlog, embedUrl, title, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isBlog || !embedUrl) return null;
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(embedUrl);
  const posterImage = thumbnail || (videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null);

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-3xl p-5 sm:p-8 shadow-sm border border-slate-100/80 dark:border-neutral-800 transition-colors space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-orange-50 dark:bg-orange-950/40 text-[#C2410C] dark:text-orange-400 rounded-2xl border border-orange-100 dark:border-orange-900/40">
          <FaYoutube className="text-2xl" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Addım-addım Video Təlimat</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Yeməyin hazırlanmasını birbaşa buradan izləyin</p>
        </div>
      </div>
      
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-inner bg-black/5 dark:bg-neutral-950 border border-slate-100 dark:border-neutral-800">
        {!isPlaying ? (
          <div onClick={() => setIsPlaying(true)} className="relative w-full h-full cursor-pointer group flex items-center justify-center bg-black">
            {posterImage && (
              <img loading="lazy" src={posterImage} alt={title || "Video thumbnail"} className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition duration-500" />
            )}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition duration-300" />
            <div className="absolute p-4 sm:p-5 bg-[#C2410C] dark:bg-orange-600 text-white rounded-full shadow-lg group-hover:scale-110 group-hover:bg-[#9A3412] dark:group-hover:bg-orange-500 transition duration-300 flex items-center justify-center">
              <FaPlay className="text-xl sm:text-2xl ml-1" />
            </div>
          </div>
        ) : (
          <iframe src={`${embedUrl}?autoplay=1`} title={title || "Video"} className="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        )}
      </div>
    </div>
  );
};

export default DetailVideoPlayer;