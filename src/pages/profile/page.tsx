import ContactUs from '../../component/contactus'; // Contact form section
import ProfileFavorites from './components/favorite'; // User's favorite cars section
import ProfileHero from './components/hero'; // Hero banner for profile page
import ProfileInfo from './components/profile'; // User profile info & edit section

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero section with background image and page title */}
      <ProfileHero />

      {/* User profile info with editable fields */}
      <ProfileInfo />

      {/* User's favorite cars section */}
      <ProfileFavorites />

      {/* Contact form at the bottom */}
      <ContactUs />
    </main>
  );
}
