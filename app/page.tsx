import HeroTutelas from "@/components/Tutelas/HeroTutelas";
import LogicalProof from "@/components/Tutelas/LogicalProof";
import TestimonialsTutelas from "@/components/Tutelas/TestimonialsTutelas";
import WhyUs from "@/components/Tutelas/WhyUs";
import ProcessTutela from "@/components/Tutelas/ProcessTutela";
import PricingTutelas from "@/components/Tutelas/PricingTutelas";
import FAQTutelas from "@/components/Tutelas/FAQTutelas";
import ContactForm from "@/components/shared/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroTutelas />
      <LogicalProof />
      <TestimonialsTutelas />
      <WhyUs />
      <ProcessTutela />
      <PricingTutelas />
      <FAQTutelas />
      <ContactForm />
    </main>
  );
}
