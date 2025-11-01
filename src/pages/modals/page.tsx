import Testimonials from "../../component/testinimonial";
import ModelsBrowser from "./component/modal-browser";
import ModelsHero from "./component/modal-hero";

export default function ModelsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ModelsHero />
      <ModelsBrowser />
    </main>
  );
}
