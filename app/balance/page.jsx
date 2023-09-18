import Image from "next/image";
import Link from "next/link";

export default function BalancePage() {
  return (
    <main className="bg-gradient-to-b from-[#81A4CD] to-[#0F4D8A] grid px-5 py-20 justify-center justify-items-center">
      <section className="bg-white p-5 lg:p-12 rounded shadow max-w-[70ch] flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center">Improving Balance to Boost Quality of Life</h1>
        <Image 
          src="https://media.vbncpt.com/images/clinic/equipment"
          alt="Office equipment"
          width="1800"
          height="2400"
          className="w-full max-w-[500px] mx-auto rounded"
        />
        <p>As we age, it is normal to experience changes in our bodies, such as slowed reaction time, aches and pains, and less muscle. Loss of balance may seem par for the course as well, but this is an area that is critical to maintain into our senior years. Fall risks and mobility are serious concerns for elderly people and can eventually lead to less independence or potential injuries. A physical therapist provides the essential exercises and expertise needed to strengthen your balance both in office and at home. By working consistently on balance, you can minimize these risks and maintain an active, healthy lifestyle for years to come.</p>
        <Image 
          src="https://media.vbncpt.com/images/clinic/balance-equipment"
          alt="Balance equipment"
          width="1800"
          height="2400"
          className="w-full max-w-[500px] mx-auto rounded"
        />
        <p>Balance issues can come from a range of causes, and our team is able to analyze your symptoms to find the best treatment strategy for you. VBNC Physical Therapy uses a combination of exercises to promote better balance at any age. We do a full assessment to understand your current ability to balance. From there, we educate on potential risks and begin developing a comprehensive home exercise program specific to your needs and abilities. With ongoing support and guidance from a physical therapist, you can achieve success in increasing your balance. We recognize that every patient will be at different stages in their recovery and may face periods of more or less motivation. Consistency is key in regaining and maintaining balance, but during the more challenging times, we will be here to support you and help you stay on track in your recovery.</p>
        <Image 
          src="https://media.vbncpt.com/images/clinic/girl-throwing-ball-while-balancing"
          alt="Girl throwing ball while balancing"
          width="2400"
          height="1800"
          className="w-full mx-auto rounded"
        />
        <p>If you are experiencing balance issues, we are ready to help. <Link href="/contact" className="text-blue-600 font-medium">Contact us</Link> today to book a free phone consultation and discover how increasing your balance can help you feel more confident in your daily life.</p>
      </section>
    </main>
  )
}