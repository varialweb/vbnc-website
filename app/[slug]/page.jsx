import Image from "next/image";

export default function CatchAll() {
  return (
    <section className="grid place-items-center gap-8 w-full h-full py-24">
      <Image src="/img/under-construction.svg" width="300" height="300" alt="" className="" />
      <h1 className="text-3xl">Under construction, please check back later</h1>
    </section>
  )
}