import Image from "next/image";
import Link from "next/link";

export default function VertigoPage() {
  return (
    <main className="bg-gradient-to-b from-[hsl(28,95%,60%)] to-[hsl(28,95%,48%)] grid px-5 py-20 justify-center justify-items-center">
      <section className="bg-white p-5 lg:p-12 rounded shadow max-w-[70ch] flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center">Overcoming Vertigo Through Physical Therapy</h1>
        <Image 
          src="https://media.vbncpt.com/images/clinic/patient-goggles"
          alt="Daniel laughing with patient"
          width="1800"
          height="2400"
          className="w-full mx-auto rounded"
        />
        <p>Diagnosed vertigo and chronic dizziness or unsteadiness can wreak havoc on a happy life. The activities you used to enjoy may feel distant now that you are facing this challenging condition. Many people approach their treatment with their general practitioner by taking medication, but certain types of vertigo and dizziness can also be treated with physical therapy. A physical therapist with the right methods and expertise can often quickly restore your prior ability to function without any symptoms.</p>
        <Image 
          src="https://media.vbncpt.com/images/clinic/daniel-with-patient-goggles-3"
          alt="Daniel laughing with patient"
          width="1800"
          height="2400"
          className="w-full max-w-[500px] mx-auto rounded"
        />
        <p>Vertigo or dizziness is multifaceted and can stem from many different causes. The most common sources are ear diseases, motion sickness, nausea, concussion, Meniere's disease, cervicogenic dizziness, vestibular neuritis, and benign paroxysmal positional vertigo (BPPV). These conditions can cause the sensation of spinning inside your head and range from mild to intense episodes of dizziness. A key thing to note about vertigo is it is not a condition, but rather a symptom of something greater. VBNC Physical Therapy understands this important distinction and strives to get to the root of the issue so you can experience long-lasting relief from your vertigo.</p>
        <Image 
          src="https://media.vbncpt.com/images/clinic/daniel-with-patient-goggles-2?w=2400&h=1800"
          alt="Daniel laughing with patient"
          width="2400"
          height="1800"
          className="w-full mx-auto rounded"
        />
        <p>VBNC Physical Therapy features industry-leading technology and strategies to help treat your vertigo and dizziness. One of the best ways to diagnose and treat vertigo is by examining the eyes in total darkness, which can be quite tricky. VBNC Physical Therapy has Vestibular First goggles that use infrared light to illuminate the eyes while putting the patient in total darkness. These goggles help make it easier to assess the status of their condition and are an essential tool that many physical therapy offices simply don't have. Through a video recording of the eyes while wearing the goggles, our team can easily analyze the behavior of the eyes to better assess and treat your condition.</p>
        <Image 
          src="https://media.vbncpt.com/images/clinic/daniel-with-patient-goggles-4?w=2400&h=1800"
          alt="Daniel laughing with patient"
          width="1800"
          height="2400"
          className="w-full max-w-[500px] mx-auto rounded"
        />
        <p>Treating vertigo can be an exhausting experience for patients at times because of the stimulation that happens during treatment plans. It is often necessary to experience the dizziness in order to overcome it successfully, which can be draining or downright uncomfortable. VBNC Physical Therapy will never push you beyond your comfort zone and works at your pace to make sure you feel safe and comfortable at all times. Through patience and continued exposure, these methodologies can help retrain your brain to better understand stimulation and cope with triggers of vertigo.</p>
        <p>If you are currently struggling with vertigo, dizziness, or unsteadiness, we are here to help. We are eager to work alongside your general practitioner to support your diagnosis and recovery. <Link href="/contact" className="text-blue-600 font-medium">Contact us</Link>  to schedule a free phone consultation or coordinate with your primary care physician to obtain a referral to our office and begin treating your vertigo today.</p>
      </section>
    </main>
  )
}