"use client";

import dynamic from "next/dynamic";
import ContactForm from "../ContactForm/Contact";

const Map = dynamic(() => import("@/components/Map/Map"), {
  loading: () => <p>Loading map...</p>,
  ssr: false,
});

export default function ContactClient() {
  return (
    <>
      <ContactForm />
      <Map />
    </>
  );
}
