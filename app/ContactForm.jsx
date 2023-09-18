'use client'

import { useState } from "react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  //const recaptchaSiteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_CLIENT_KEY
  //const [verified, setVerified] = useState(false)
  //const [verifyError, setVerifyError] = useState('')

  if (submitted) {
    return (
      <div className="bg-white p-5 lg:p-12 flex flex-col gap-10 leading-normal text-lg rounded shadow">
        <p>Your request has been processed. You will hear from us shortly!</p>
      </div>
    )
  }
  
  if (!submitted) {
    return (
      <form
        onSubmit={event => {
          event.preventDefault()

          setLoading(true)

          if (event.target.address.value != '') return

          fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
              name: event.target.name.value,
              treatment: event.target.treatment.value,
              phone: event.target.phone.value,
              email: event.target.email.value,
              comments: event.target.comments.value,
            })
          })
          .then(response => response.json())
          .then(response => {
            if (response.success) {
              setSubmitted(true)
            }

            setLoading(false)
          })
          .catch(error => console.error('error', error))
        }}
        className="bg-white p-5 lg:p-12 flex flex-col gap-10 leading-normal text-lg rounded shadow"
      >
        <h2 className="text-[28px] leading-normal lg:text-[48px] font-semibold text-center">Recovery is Just a Step Away</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="grid">
            <label>Name</label>
            <input 
              id="name"
              name="name"
              placeholder="John Doe"
              className="text-[18px] leading-[18px]"
              required
            />
          </div>
          <div className="grid">
            <label>Treatment Type</label>
            <select 
              id="treatment"
              name="treatment"
              className="text-[18px] leading-[18px]"
            >
              <option>Vertigo</option>
              <option>Balance</option>
              <option>Core</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="grid">
              <label htmlFor="phone">Phone number</label>
              <input 
                id="phone"
                name="phone"
                placeholder="(555) 555-5555"
              />
            </div>
            <div className="grid">
              <label htmlFor="email">Email address</label>
              <input 
                id="email"
                name="email"
                placeholder="(555) 555-5555"
              />
            </div>
        </div>
        <div className="grid">
          Questions or comments
          <textarea 
            id="comments"
            name="comments"
            rows="4"
          />
        </div>
        <div className="hidden">
          <input htmlFor="address" />
        </div>
        <button className="border border-[#EF7206] text-[#EF7206] hover:bg-[#EF7206] disabled:bg-[#EF7206] disabled:text-white hover:text-white text-center px-1 lg:px-24 py-3 rounded-full lg:w-1/2 lg:mx-auto font-bold text-lg" disabled={loading}>
          {loading ? <img src="/img/loading.png" width={32} height={32} alt="loading" className="mx-auto animate-spin animate" /> : "Submit"}
        </button>
      </form>
    )
  }
  
}