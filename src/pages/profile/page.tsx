import ContactUs from '../../component/contactus';
import ProfileFavorites from './components/favorite';
import ProfileHero from './components/hero';
import ProfileInfo from './components/profile';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white">
      <ProfileHero />
      <ProfileInfo />
      <ProfileFavorites />
      <ContactUs />
    </main>
  );
}
