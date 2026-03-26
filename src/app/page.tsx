import { ContactNoclegi } from "@/components/ContactNoclegi";
import { EventsCulture } from "@/components/EventsCulture";
import { FoodDrink } from "@/components/FoodDrink";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { HoursLocation } from "@/components/HoursLocation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <FoodDrink />
        <Highlights />
        <EventsCulture />
        <Gallery />
        <HoursLocation />
        <ContactNoclegi />
      </main>
      <SiteFooter />
    </>
  );
}
