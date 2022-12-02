import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function HomePage() {
  return (
    <>
      <section className="py-12 lg:py-24">
        <p className="text-[42px] lg:text-[clamp(64px,_calc(64px_+_0.9vw),80px)] leading-normal font-semibold text-center">
          Restore Your Body's  <Image src="/img/stick1.svg" alt="" width="144" height="256" className="block lg:inline mx-auto py-4 lg:py-0 lg:w-[12.5vw]" /> <span className="text-[#EF7206]">Potential</span>
        </p>
      </section>
      <section className="lg:flex py-5 lg:py-24">
        <div className="w-full lg:w-1/3 relative">
          <Image 
            src="https://media.vbncpt.com/images/stock-images/vertigo-img"
            width="375"
            height="423"
            className="w-full"
          />
          <div className="px-5 py-10 lg:py-20 lg:border-b lg:border-r lg:border-[#4E565F] rounded-br-sm">
            <p className="text-center lg:max-w-[30ch] lg:text-xl lg:mx-auto">
              Battling vertigo or chronic dizziness? VBNC Physical Therapy has the tools, expertise, and strategies to help you get your life back without the use of medication.  
            </p>
          </div>
          <Link 
            href="/vertigo"
            // className="absolute top-[65%] lg:top-[55%] w-full text-center"
            className="absolute top-[102vw] lg:top-[35vw] w-full text-center"
          >
            {/* <span className=" bg-[#4E565F] text-white p-4 px-24 lg:py-5 lg:px-32 rounded-full uppercase text-xl lg:text-2xl font-bold shadow-[0_4px_4px_rgb(0_0_0_/_0.25)]"> */}
            <span className=" bg-[#4E565F] text-white p-4 px-24 lg:py-5 lg:px-[20%] rounded-full uppercase text-xl lg:text-2xl font-bold shadow-[0_4px_4px_rgb(0_0_0_/_0.25)]">
              Vertigo
            </span>
          </Link>
        </div>
        <div className="w-full lg:w-1/3 relative lg:mt-[3.85vw]">
          <Image 
            src="https://media.vbncpt.com/images/stock-images/balance-img"
            width="375"
            height="423"
            className="w-full"
          />
          <div className="px-5 py-10 lg:py-20 lg:border-b lg:border-l lg:border-r lg:border-[#4E565F] relative lg:-left-[1px] lg:rounded-bl-lg lg:w-[calc(100%_+_1px)]">
            <p className="text-center lg:max-w-[30ch] lg:text-xl lg:mx-auto">
              Feeling unsteady? Our exercise programs promote functionality to help you minimize fall risks and maintain your independence well into your golden years.  
            </p>
          </div>
          <Link 
            href="/balance"
            // className="absolute top-[65%] lg:top-[58.5%] w-full text-center"
            className="absolute top-[102vw] lg:top-[35vw] w-full text-center"
          >
            {/* <span className=" bg-[#4E565F] text-white p-4 px-24 lg:py-5 lg:px-32 rounded-full uppercase text-xl lg:text-4xl font-bold shadow-[0_4px_4px_rgb(0_0_0_/_0.25)]"> */}
            <span className=" bg-[#4E565F] text-white p-4 px-24 lg:py-5 lg:px-[20%] rounded-full uppercase text-xl lg:text-2xl font-bold shadow-[0_4px_4px_rgb(0_0_0_/_0.25)]">
              Balance
            </span>
          </Link>
        </div>
        <div className="w-full lg:w-1/3 relative lg:mt-[7.8vw]">
          <Image 
            src="https://media.vbncpt.com/images/stock-images/core-img"
            width="375"
            height="423"
            className="w-full"
          />
          <div className="px-5 py-10 lg:py-20 lg:border-b lg:border-l lg:border-[#4E565F] relative lg:-left-[1px] lg:rounded-bl-lg">
            <p className="text-center lg:max-w-[30ch] lg:text-xl lg:mx-auto">
              Overcoming an injury or accident? Using the hidden link theory, our practice holistically supports recovery by strengthening the core instead of simply treating the pain points.  
            </p>
          </div>
          <Link 
            href="/core"
            // className="absolute top-[65%] lg:top-[62%] w-full text-center"
            className="absolute top-[102vw] lg:top-[35vw] w-full text-center"
          >
            {/* <span className=" bg-[#4E565F] text-white p-4 px-24 lg:py-5 lg:px-32 rounded-full uppercase text-xl lg:text-4xl font-bold shadow-[0_4px_4px_rgb(0_0_0_/_0.25)]"> */}
            <span className=" bg-[#4E565F] text-white p-4 px-24 lg:py-5 lg:px-[20%] rounded-full uppercase text-xl lg:text-2xl font-bold shadow-[0_4px_4px_rgb(0_0_0_/_0.25)]">
              Core
            </span>
          </Link>
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#09529A] to-[#0D76DD] py-[60px] lg:py-24 px-5 text-white grid gap-5 justify-center justify-items-center lg:gap-12">
        <h1 className="text-center text-[32px] leading-[38px] lg:text-[48px] lg:leading-[56px] font-semibold">
          Physical Therapy with a Personal Touch
        </h1>
        <p className="max-w-[80ch]">
          When you are suffering from an injury or managing a chronic health condition, life can begin to feel heavy. The weight of uncertainty can often leave you feeling hopeless, as if things will never be able to go back to the way they were. This resignation is normal, but it doesn't have to be the end of life as you know it. At VBNC Physical Therapy, we see you, we value you, and we are here to help you. With years of physical therapy experience, our team understands the challenges and obstacles you are facing and is eager to help you regain your life as much as possible. We are committed to a person-first approach and are focused on treating each individual with one-on-one support, empathy, and top strategies to support your rehabilitation.
        </p>
        <p className="max-w-[80ch]">
          If you're feeling overwhelmed with your current condition, VBNC Physical Therapy is ready to provide the support you deserve. Book a free phone consultation with our physical therapist and discover how our treatment plans can help you restore your body's potential. 
        </p>
      </section>
      <section className="grid gap-10 lg:grid-cols-2 max-w-[1600px] mx-auto lg:items-center px-5 py-20 justify-center justify-items-center">
        <img
          src="https://media.vbncpt.com/images/team/daniel"
          width="335"
          height="395"
          alt="Daniel Rojas"
          className="rounded-[100%] shadow-inner"
        />
        <div className="grid gap-10">
          <h2 className="text-[28px] leading-[33px] lg:text-[48px] lg:leading-[56px] font-semibold text-center">Your <span className="text-[#EF7206]">Local</span> Physical Therapist</h2>
          <p>
            VBNC Physical Therapy proudly opened its doors in 2021 to fill a gap in the industry and provide full one-on-one support to every patient at each appointment. The founder Daniel is deeply passionate about helping others, specifically in the areas of vestibular rehabilitation  for vertigo and balance as well as orthopedic conditions. Our team has the compassionate guidance and unmatched expertise to fully support you as you work to maximize your body's functional capabilities. 
          </p>
          <Link href="/team" className="border border-[#EF7206] text-[#EF7206] hover:bg-[#EF7206] hover:text-white text-center px-1 lg:px-24 py-4 rounded-full lg:w-fit lg:mx-auto font-bold text-lg">
            Meet our team
          </Link>
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#E35200] via-[#EF7206] to-[#F7A52B] px-5 py-[60px] lg:p-24 flex flex-col items-center gap-8 lg:gap-16">
        <h2 className="text-white text-center text-[28px] leading-[33px] lg:text-[48px] lg:leading-[56px] font-semibold">Our Values</h2>
        <div className="bg-white rounded shadow p-5 py-12 lg:p-24 max-w-[1280px] w-full grid gap-16 lg:gap-24 justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-12">
            <img src="/img/heart.svg" alt="" width="96" height="86" className="lg:w-[160px]" />
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <h3 className="text-lg font-semibold lg:text-2xl">Sympathy</h3>
              <p className="text-center lg:text-left">
                We care deeply about your personal rehabilitation journey and are here every step of the way to help guide you with compassion and kindness. It isn't always easy, but with our team by your side, your recovery becomes much more manageable.  
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-12">
            <img src="/img/shield.svg" alt="" width="96" height="86" className="lg:w-[160px]" />
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <h3 className="text-lg font-semibold lg:text-2xl">Trust & Confidence</h3>
              <p className="text-center lg:text-left">
                As professionals in our field, we want to instill confidence in every person we treat. Pursuing physical therapy can feel overwhelming or even scary at times, but with our practice, you can trust that we have the skills, expertise, and tools to help you get the individualized treatment you deserve. 
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-12">
            <img src="/img/magnifying-glass.svg" alt="" width="96" height="86" className="lg:w-[160px]" />
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <h3 className="text-lg font-semibold lg:text-2xl">Trust & Confidence</h3>
              <p className="text-center lg:text-left">
                Physical therapy isn't a one-size-fits-all program. Every person has unique needs and challenges, even if they are experiencing a similar condition or health concern. We use evidence, testing, analysis, and a person-centered approach to find the best treatment plan for you. From there, we can put the pieces together and find a solution based on your symptoms to help you recover as quickly as possible. 
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-12">
            <img src="/img/care.svg" alt="" width="96" height="86" className="lg:w-[160px]" />
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <h3 className="text-lg font-semibold lg:text-2xl">One-on-One Care</h3>
              <p className="text-center lg:text-left">
                We recognize the value in one-on-one care during your recovery and prioritize private appointments at every step of your rehabilitation. Rather than getting passed off to a technician, you will receive a full hour of dedicated support and guidance with your physical therapist during each appointment.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-12">
            <img src="/img/target.svg" alt="" width="96" height="86" className="lg:w-[160px]" />
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <h3 className="text-lg font-semibold lg:text-2xl">Targeted Therapy</h3>
              <p className="text-center lg:text-left">
                Our practice specializes in 3 primary areas: vertigo, balance, and core. By focusing on these specialties, we are able to master these conditions and offer the best care possible to each patient.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:grid-cols-2 max-w-[1600px] mx-auto lg:items-center px-5 py-20 justify-center justify-items-center">
        <Image 
          src="/img/faq.png"
          alt=""
          width="335"
          height="222"
          className="lg:w-[500px] lg:order-2"
        />
        <div className="flex flex-col gap-4 lg:gap-12">
          <h2 className="text-[28px] leading-normal lg:text-[48px] font-semibold text-center">Frequently Asked Questions</h2>
          <p className="text-center lg:max-w-[60ch]">
            New to physical therapy and not sure where to start? Explore our Frequently Asked Questions and discover how our practice, specialties, and methods can get you on the right path to recovery. 
          </p>
          <Link href="/faq" className="border border-[#EF7206] text-[#EF7206] hover:bg-[#EF7206] hover:text-white text-center px-1 lg:px-24 py-4 rounded-full lg:w-fit lg:mx-auto font-bold text-lg">
            Explore FAQ
          </Link>
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#165CA2] to-[#1B71C5] grid px-5 py-20 justify-center justify-items-center">
        <ContactForm />
      </section>
    </>
  )
}
