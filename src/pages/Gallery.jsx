
import CTASection from '../components/gallery/CTASection';
import GallerySection from '../components/gallery/GallerySection';
import HeroSection from '../components/gallery/HeroSection';
import TeamCultureSection from '../components/gallery/TeamCultureSection';
import VideoSection from '../components/gallery/VideoSection';

export default function Gallery() {
  return (
    <div className="bg-[#00061A] min-h-screen">
      <HeroSection />
      <GallerySection />
      <TeamCultureSection />
      <VideoSection />
      <CTASection />
    </div>
  );
}
