import Head from "next/head";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="w-full h-full grid place-items-center py-24">
      <p className="text-[80px] font-semibold">Restore Your Body's <Image src="/img/stick1.svg" alt="" width="234" height="418" className="inline" /> <span className="text-[#EF7206]">Potential</span></p>
    </section>
  )
}
