"use client"

/* eslint-disable @next/next/no-img-element */
import React from "react";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/toast";
import { formatDate } from "date-fns";
import { Loader } from "lucide-react";
import { Header } from "@/components/ui/header";

const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;


const ContactSection = () => {


  const [startDate] = React.useState<Date | undefined>()
  const [emailLoading, setEmailLoading] = React.useState<boolean>(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setEmailLoading(true)

    try {
      await emailjs.send(
        EMAIL_SERVICE_ID || "",
        EMAIL_TEMPLATE_ID || "",
        {
          user_name: formData.get("name"),
          to_email: "blacklabsx@gmail.com",
          time: formatDate(startDate || new Date(), "PPP"),
          user_email: formData.get("email"),
          budget: "From contact us",
          project_type: "From contact us",
          company_name: formData.get("company"),
          details: formData.get("message"),
        },
        EMAIL_PUBLIC_KEY
      )

      form.reset()

      setEmailLoading(false)

      toast.add({
        title: "Project Request Submitted Successfully",
        description:
          "We Will reach You very Soon By Your Email provided in the form",
      })
    } catch {

      setEmailLoading(false)

      toast.add({
        title: "Project Request Failed",
        description:
          "Your Project Submission Failed Due to an unknown error, please try again",
      })
    }
  }

  return (
    <>
    <Header />

    <div className="flex flex-col z-20 pt-20 min-h-svh md:max-w-7xl 2xl:max-w-[90em] mx-auto relative">
      <div className=" w-full rounded-2xl">
        <div className="preview relative flex min-h-87.5 w-full justify-center p-2 sm:p-10 items-center">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-20 lg:grid-cols-2">

            <div className="relative flex flex-col items-center overflow-hidden lg:items-start">
              <div className="flex items-start justify-start">
                <div className="relative h-14 w-14 bg-background rounded-4xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="relative z-20 h-full w-full rounded-[5px] flex items-center justify-center overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-500"
                    >
                      <path
                        d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                        fill="currentColor"
                        strokeWidth="0"
                      />
                      <path
                        d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                        fill="currentColor"
                        strokeWidth="0"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-neutral-600 opacity-50 blur-lg" />
                  <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-linear-to-r from-transparent via-blue-500 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-linear-to-r from-transparent via-blue-600 to-transparent dark:h-2 dark:blur-sm" />
                </div>
              </div>

              <h2 className="mt-9 bg-linear-to-b from-neutral-800 to-neutral-900 bg-clip-text text-left text-xl font-bold text-transparent md:text-3xl lg:text-5xl dark:from-neutral-200 dark:to-neutral-300">
                Contact us
              </h2>
              <p className="mt-8 max-w-lg text-center text-base text-neutral-600 md:text-left dark:text-neutral-400">
                We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.
              </p>

            

              {/* World map with floating badge */}
              <div className="div relative mt-20 flex w-150 shrink-0 -translate-x-10 items-center justify-center perspective-midrange transform-3d sm:translate-x-0 lg:-translate-x-32">
                <div
                  className="pointer-events-none absolute z-60 flex h-40 w-96 items-center justify-center opacity-100 transition duration-500 top-0 right-1"
                  style={{ transform: "translateZ(1px)" }}
                >
                  <div className="h-full w-full">
                    <div className="absolute inset-x-0 top-0 z-20 mx-auto inline-block w-fit rounded-lg bg-neutral-200 px-2 py-1 text-xs font-normal text-neutral-700 dark:bg-neutral-900 dark:text-white">
                      We are here
                      <span className="absolute bottom-0 left-4.5 h-px w-[calc(100%-2.25rem)] bg-linear-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0 transition-opacity duration-500" />
                    </div>
                    <div
                      className="absolute top-1/2 left-1/2 mt-4 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2"
                      style={{ perspective: "800px", transform: "rotateX(70deg) translateZ(0px)" }}
                    >
                      <div
                        className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/8 shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/20"
                        style={{ opacity: 0, transform: "scale(0.446259)" }}
                      />
                      <div
                        className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/8 shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/20"
                        style={{ opacity: 0, transform: "scale(0.998062)" }}
                      />
                      <div
                        className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/8 shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/20"
                        style={{ opacity: 0, transform: "scale(0.816293)" }}
                      />
                    </div>
                    <div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-3.5 bg-linear-to-b from-transparent to-blue-500 blur-[2px]" />
                    <div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-3.5 bg-linear-to-b from-transparent to-blue-500" />
                    <div className="absolute right-1/2 bottom-1/2 z-40 h-1 w-1 translate-x-[1.5px] translate-y-3.5 rounded-full bg-blue-600 blur-[3px]" />
                    <div className="absolute right-1/2 bottom-1/2 z-40 h-0.5 w-0.5 translate-x-[0.5px] translate-y-3.5 rounded-full bg-blue-300" />
                  </div>
                </div>
                <img
                  width="500"
                  height="500"
                  alt="world map"
                  className="transform-[rotateX(45deg)_translateZ(0px)] dark:invert dark:filter"
                  src="https://assets.aceternity.com/pro/world.svg"
                />
              </div>
            </div>

            {/* Right column – contact form */}
            <form onSubmit={handleSubmit} className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden  p-4 sm:p-10 bg-background rounded-4xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-2xl">
              {/* Decorative background pattern */}
              <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full mask-[linear-gradient(white,transparent)]">
                <div className="absolute inset-0 bg-linear-to-r from-zinc-900/30 to-zinc-900/30 mask-[radial-gradient(farthest-side_at_top,white,transparent)] opacity-10 dark:from-zinc-900/30 dark:to-zinc-900/30">
                  <svg
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full fill-black stroke-black mix-blend-overlay dark:fill-white dark:stroke-white"
                  >
                    <defs>
                      <pattern
                        id="contact-grid-pattern"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                        x="-12"
                        y="4"
                      >
                        <path d="M.5 20V.5H20" fill="none" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth="0" fill="url(#contact-grid-pattern)" />
                    <svg x="-12" y="4" className="overflow-visible">
                      <rect strokeWidth="0" width="21" height="21" x="200" y="80" />
                      <rect strokeWidth="0" width="21" height="21" x="140" y="120" />
                      <rect strokeWidth="0" width="21" height="21" x="140" y="80" />
                      <rect strokeWidth="0" width="21" height="21" x="180" y="40" />
                      <rect strokeWidth="0" width="21" height="21" x="200" y="100" />
                    </svg>
                  </svg>
                </div>
              </div>

              <div className="relative z-20 mb-4 w-full">
                <label className="mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300" htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Manu Arora"
                  className="shadow-input h-10 w-full rounded-3xl border border-transparent bg-gray-100 pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                  type="text"
                />
              </div>

              <div className="relative z-20 mb-4 w-full">
                <label className="mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="support@aceternity.com"
                  className="shadow-input h-10 w-full rounded-3xl border border-transparent bg-gray-100 pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                  type="email"
                />
              </div>

              <div className="relative z-20 mb-4 w-full">
                <label className="mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300" htmlFor="company">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  placeholder="Aceternity Labs LLC"
                  className="shadow-input h-10 w-full rounded-3xl border border-transparent bg-gray-100 pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                  type="text"
                />
              </div>

              <div className="relative z-20 mb-4 w-full">
                <label className="mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Type your message here"
                  className="shadow-input w-full rounded-3xl border border-transparent bg-gray-100 pt-4 pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                />
              </div>

              <button
                type="submit"
                disabled={emailLoading}
                className="relative z-10 min-w-24 md:min-w-48 bg-blue-500 hover:bg-blue-600 shadow-2xl flex items-center justify-center rounded-xl border border-transparent px-5 py-2 text-sm font-medium text-white  transition duration-200 md:text-sm">
                {emailLoading ? <Loader className="animate-spin" /> : "Submit"}
              </button>
            </form>


          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactSection;