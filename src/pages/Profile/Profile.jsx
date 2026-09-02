import GuestView from "./components/GuestView";
import EditProfileModal from "./components/EditProfileModal";
import ProfileTabs from "./components/ProfileTabs";
import ProfileHeader from "./components/ProfileHeader";
import UserProfileSection from "./components/UserProfileSection";
import { useProfileLogic } from "./hook/useProfileLogic";

const Profile = () => {
  const {
    activeTab, setActiveTab,
    searchTerm, setSearchTerm,
    isEditModalOpen, setIsEditModalOpen,
    newName, setNewName,
    newAvatar, setNewAvatar,
    favorites, favoriteDispatch,
    bookmarks, bookmarkDispatch,
    user, isLoggedIn, viewsCount, logout,
    theme, toggleTheme,
    handleImageChange, handleCoverImageChange, handleSaveProfile,
    formatMemberDate, formatLastLogin,
    filteredFavorites, filteredBookmarks
  } = useProfileLogic()

  if (!isLoggedIn || user?.isGuest) { return <GuestView /> }

  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-100 font-sans pb-8 w-full pt-16 lg:pt-24 transition-colors">

      <ProfileHeader user={user} theme={theme} toggleTheme={toggleTheme} handleCoverImageChange={handleCoverImageChange} />

      <UserProfileSection 
        user={user} 
        onOpenEditModal={() => {
          setNewName(user?.name || ""); 
          setNewAvatar(user?.avatar || ""); 
          setIsEditModalOpen(true); 
        }}
        logout={logout}
        formatMemberDate={formatMemberDate}
        formatLastLogin={formatLastLogin}
        favorites={favorites}
        bookmarks={bookmarks}
        viewsCount={viewsCount} 
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <ProfileTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          favorites={favorites} 
          bookmarks={bookmarks} 
          filteredFavorites={filteredFavorites} 
          filteredBookmarks={filteredBookmarks} 
          favoriteDispatch={favoriteDispatch} 
          bookmarkDispatch={bookmarkDispatch} 
        />
      </div>

      <EditProfileModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} user={user} newName={newName} setNewName={setNewName} newAvatar={newAvatar} handleImageChange={handleImageChange} handleSaveProfile={handleSaveProfile} />
    </div>
  );
};

export default Profile;