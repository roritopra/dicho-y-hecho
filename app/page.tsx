import HeroTutelas from "@/components/Tutelas/HeroTutelas";
import TestimonialsTutelas from "@/components/Tutelas/TestimonialsTutelas";
import WhyUs from "@/components/Tutelas/WhyUs";
import ProcessTutela from "@/components/Tutelas/ProcessTutela";
import PricingTutelas from "@/components/Tutelas/PricingTutelas";
import ContactForm from "@/components/shared/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroTutelas />
      <TestimonialsTutelas />
      <WhyUs />
      <ProcessTutela />
      <PricingTutelas />
      <ContactForm />
    </main>
  );
}
