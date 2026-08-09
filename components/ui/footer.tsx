
"use client"

import { Icons } from '@/lib/icons/icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const FooterPreview = () => {

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);


  if (!mounted) return null;

  return (
    <footer className="overflow-hidden mt-30 md:mt-60 border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-neutral-950">
        <div className="w-full">
          <div className="preview relative flex min-h-87.5 w-full justify-center items-center">
            <div className="relative w-full overflow-hidden  border-neutral-100 bg-white  py-10 dark:border-white/10 dark:bg-neutral-950">
              <div className="mx-auto flex flex-col items-start justify-between text-sm text-neutral-500 sm:flex-row px-8">
                <div>
                  <div className="mr-0 mb-4 md:mr-4 md:flex-col">

                    <div className="relative z-20 mr-4 flex items-center space-x-2  py-1 text-sm font-normal text-black">
                      <div className="size-8 flex justify-center items-center min-w-8 md:size-10 rounded-full">
                      <Icons.main fill={theme === "dark" ? "#ffffff" : "#000000"} />
                      </div>
                      <span className="font-extrabold text-black dark:text-white">Black Labs</span>
                    </div>
                    <p className='max-w-full md:max-w-7/12 p-2'>
                      We design and develop premium websites, web applications, and digital experiences that help businesses stand out and grow.
                    </p>
                    <p className='max-w-full md:max-w-7/12 p-2 '>
                      A Product By <span className='font-extrabold text-foreground'>Black Labs </span>Team
                    </p>
                  </div>
                </div>
                <div className="mt-10 grid items-start gap-10 sm:mt-0 md:mt-0 px-3 md:px-0 grid-cols-3">
                  <div className="flex w-full flex-col justify-center space-y-4">
                    <p className="hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors dark:text-neutral-300">Pages</p>
                    <ul className="hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300">
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="/projects">All Products</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="/blogs">Blogs</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="/contactUs">Contact Us</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="/about">About</a></li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <p className="hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors dark:text-neutral-300">Socials</p>
                    <ul className="hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300">
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">Telegram</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">Instagram</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">X Account</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">LinkedIn</a></li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <p className="hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors dark:text-neutral-300">Legal</p>
                    <ul className="hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300">
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">Privacy Policy</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">Terms of Service</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="inset-x-0 mt-10 bg-linear-to-b from-neutral-50 to-neutral-200 bg-clip-text text-center text-5xl font-bold text-transparent md:text-9xl lg:text-[10rem] xl:text-[13rem] dark:from-neutral-950 dark:to-neutral-800">
                Black Labs
              </p>
              <div className="mt-2 ml-2 text-center text-muted-foreground dark:text-muted">© copyright Black Labs 2026. All rights reserved.</div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPreview;