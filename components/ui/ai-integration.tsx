import React from 'react'

export default function AiIntegration() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 bg-opacity-50 bg-linear-to-t from-neutral-400 to-neutral-900  dark:from-neutral-50 dark:to-neutral-400 bg-clip-text! text-transparent">
          <h2 className="text-6xl font-extrabold mb-4">
            In built <span className="text-[#FF7757]">AI Integration</span>
          </h2>
          <p className="text-muted-foreground">
            With AI booming each passing day, we&apos;ve made sure that we integrate AI the best way we can, that is
            embedding it at meaningless places.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 — Chat widget */}
          <div className="bg-[#F9FAFB] dark:bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] border border-[#E1E1E1]  rounded-[18px] p-4  shadow-[0px_37px_10px_0px_rgba(0,0,0,0.00),0px_24px_10px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.02),0px_6px_6px_0px_rgba(0,0,0,0.03),0px_1px_3px_0px_rgba(0,0,0,0.04)]">
            <div className="space-y-10 rounded-xl p-4 border bg-white dark:bg-background/60 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-2xl h-80">
              <div className="space-y-4">
                <div className="flex justify-start">
                  <div className="max-w-[80%] text-sm p-2 rounded-[0px_10px_10px_10px] border bg-white dark:bg-gray-900 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]">
                    Hello, Nice
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[80%] text-sm p-2 rounded-[0px_10px_10px_10px] border bg-white dark:bg-gray-900 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]">
                    Welcome to LiveChat I was made with Pick a topic from the list or type down a question!
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[80%] text-sm p-2 rounded-[20px_0px_20px_20px] border bg-linear-to-br from-[#FFA756] to-[#EE602C] text-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]">
                    Welcome
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-full p-3.5  flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Write a message"
                  className="flex-1 outline-none text-sm bg-white dark:bg-transparent placeholder-gray-400"
                />
                <div className="flex items-center gap-3 text-gray-400">
                  <button type="button" className="hover:text-gray-600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"></path>
                    </svg>
                  </button>
                  <button type="button" className="hover:text-gray-600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-2">Chat with your calls</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              It makes no sense but we have it here. Use it the way you want it.
            </p>
          </div>

          {/* Card 2 — Payments / stacked cards */}
          <div className="bg-[#F9FAFB] dark:bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] border border-[#E1E1E1] rounded-[18px] p-4  shadow-[0px_37px_10px_0px_rgba(0,0,0,0.00),0px_24px_10px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.02),0px_6px_6px_0px_rgba(0,0,0,0.03),0px_1px_3px_0px_rgba(0,0,0,0.04)]">
            <div className="space-y-4 rounded-xl p-4  bg-white dark:bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] h-80">
              <div className="mb-8 text-center">
                <h2 className="text-[32px] font-bold bg-clip-text text-transparent bg-linear-to-b from-[#333333] via-[#5E5E5E] to-[#000000]">
                  $12,000
                </h2>
                <p className="text-gray-500 text-sm">Total Balance</p>
              </div>

              <div className="relative h-48">
                <div
                  className="absolute w-full h-45 rounded-[20px] p-6 text-white bg-linear-to-br from-[#FF7757] to-[#FF5C38]"
                  style={{ transformOrigin: 'center top', top: '-10.68px', zIndex: 3, transform: 'scale(0.9785)' }}
                >
                  <div className="flex justify-between items-center relative z-10">
                    <div className="w-12 h-8 bg-linear-to-r from-yellow-100 to-yellow-50 rounded-md"></div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="mt-6 relative z-10">
                    <p className="tracking-[0.2em] text-lg font-medium">**** **** **** 2834</p>
                    <div className="flex items-center gap-2 mt-3">
                      <p className="text-sm opacity-90">Credit Card</p>
                      <span className="text-sm opacity-75">•</span>
                      <p className="text-sm opacity-90">Visa</p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute w-full h-45 rounded-[20px] p-6 text-white bg-linear-to-br from-[#00457C] to-[#0079C1]"
                  style={{ transformOrigin: 'center top', top: '-2px', zIndex: 2, transform: 'scale(0.9507)' }}
                >
                  <div className="flex justify-between items-center relative z-10">
                    <div className="w-12 h-8 bg-linear-to-r from-yellow-100 to-yellow-50 rounded-md"></div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="mt-6 relative z-10">
                    <p className="tracking-[0.2em] text-lg font-medium">john.doe@email.com</p>
                    <div className="flex items-center gap-2 mt-3">
                      <p className="text-sm opacity-90">PayPal</p>
                      <span className="text-sm opacity-75">•</span>
                      <p className="text-sm opacity-90">Connected</p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute w-full h-45 rounded-[20px] p-6 text-white bg-linear-to-br from-[#000000] dark:from-gray-500 to-[#262626]"
                  style={{ transformOrigin: 'center top', top: '15px', zIndex: 1, transform: 'scale(0.8907)' }}
                >
                  <div className="flex justify-between items-center relative z-10">
                    <div className="w-12 h-8 bg-linear-to-r from-yellow-100 to-yellow-50 rounded-md"></div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="mt-6 relative z-10">
                    <p className="tracking-[0.2em] text-lg font-medium">Connected to iPhone</p>
                    <div className="flex items-center gap-2 mt-3">
                      <p className="text-sm opacity-90">Apple Pay</p>
                      <span className="text-sm opacity-75">•</span>
                      <p className="text-sm opacity-90">Connected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-2">Easy payments</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We accept all kinds of cards. We make sure you get money whichever way possible.
            </p>
          </div>

          {/* Card 3 — Team / task */}
          <div className="bg-[#F9FAFB] dark:bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-[18px] p-4 border border-[#E1E1E1] shadow-[0px_37px_10px_0px_rgba(0,0,0,0.00),0px_24px_10px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.02),0px_6px_6px_0px_rgba(0,0,0,0.03),0px_1px_3px_0px_rgba(0,0,0,0.04)]">
            <div className="space-y-4 rounded-xl p-4 border border-[#E1E1E1] bg-white dark:bg-background/50 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] h-80">
              <div className="flex items-center justify-between mb-6">
                <button type="button" className="text-[#FF7757] hover:text-[#ff6640] transition-colors font-medium">
                  + Invite
                </button>
                <div className="flex -space-x-3">
                  <div
                    className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white dark:border-gray-800 ring-2 ring-gray-50 dark:ring-gray-900"
                    style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=1)', backgroundSize: 'cover' }}
                  ></div>
                  <div
                    className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white dark:border-gray-800 ring-2 ring-gray-50 dark:ring-gray-900"
                    style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=2)', backgroundSize: 'cover' }}
                  ></div>
                  <div
                    className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white dark:border-gray-800 ring-2 ring-gray-50 dark:ring-gray-900"
                    style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=3)', backgroundSize: 'cover' }}
                  ></div>
                  <div
                    className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white dark:border-gray-800 ring-2 ring-gray-50 dark:ring-gray-900"
                    style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=4)', backgroundSize: 'cover' }}
                  ></div>
                  <div className="w-10 h-10 rounded-full bg-gray-50 border-2 border-white dark:border-gray-800 ring-2 ring-gray-50 dark:ring-gray-900 flex items-center justify-center text-sm font-medium text-gray-500">
                    +2
                  </div>
                </div>
              </div>

              <div className="h-52 relative">
                <div className="rounded-[10px] absolute inset-0 border border-dashed border-[rgba(252,152,78,0.59)] bg-[rgba(252,152,78,0.06)] p-5"></div>

                <div className="rounded-[16px] absolute inset-0 border-[0.7px] border-[#E0E0E0] bg-white dark:bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)] p-5">
                  <div>
                    <span className="bg-linear-to-b from-[#FFA756] to-[#EE602C] text-white px-3 py-1 rounded text-sm font-medium">
                      High
                    </span>
                    <h4 className="text-sm font-semibold mt-3 mb-1">Research</h4>
                    <p className="text-gray-500 text-xs">
                      User research helps you to create an optimal product for users.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-5">
                    <div className="flex -space-x-2">
                      <div
                        className="w-7 h-7 rounded-full border-2 border-white ring-2 ring-gray-50"
                        style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=5)', backgroundSize: 'cover' }}
                      ></div>
                      <div
                        className="w-7 h-7 rounded-full border-2 border-white ring-2 ring-gray-50"
                        style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=6)', backgroundSize: 'cover' }}
                      ></div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 text-sm mt-2">
                      <span className="flex items-center gap-1.5 text-xs">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        10 comments
                      </span>
                      <span className="flex items-center gap-1.5 text-xs">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 20V10M18 20V4M6 20v-4"></path>
                        </svg>
                        3 files
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-2">Invite team members</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              With our state of the art support of team members, invite your team into the software.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}