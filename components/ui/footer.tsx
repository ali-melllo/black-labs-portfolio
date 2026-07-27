
import Image from 'next/image';

const FooterPreview = () => {
  return (
    <footer className="overflow-hidden mt-60 border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-neutral-950">
        <div className="w-full ">
          <div className="preview relative flex min-h-87.5 w-full justify-center items-center">
            <div className="relative w-full overflow-hidden  border-neutral-100 bg-white px-8 py-10 dark:border-white/10 dark:bg-neutral-950">
              <div className="mx-auto flex max-w-7xl flex-col items-start justify-between text-sm text-neutral-500 sm:flex-row md:px-8">
                <div>
                  <div className="mr-0 mb-4 md:mr-4 md:flex">
                    <div className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black">
                      <div className="size-8 min-w-8 md:size-10 rounded-full">
                        <Image
                          width={50}
                          height={50}
                          src={"/assets/images/logo.webp"}
                          alt={"Black Labs"}
                          className=" w-full h-full rounded-full"
                        />
                      </div>
                      <span className="font-medium text-black dark:text-white">Black Labs</span>
                    </div>
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-2 items-start gap-10 sm:mt-0 md:mt-0 lg:grid-cols-4">
                  <div className="flex w-full flex-col justify-center space-y-4">
                    <p className="hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors dark:text-neutral-300">Pages</p>
                    <ul className="hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300">
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">All Products</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">Studio</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">Clients</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">Pricing</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">Blog</a></li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <p className="hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors dark:text-neutral-300">Socials</p>
                    <ul className="hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300">
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">Facebook</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">Instagram</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">Twitter</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">LinkedIn</a></li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <p className="hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors dark:text-neutral-300">Legal</p>
                    <ul className="hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300">
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">Privacy Policy</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">Terms of Service</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">Cookie Policy</a></li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <p className="hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors dark:text-neutral-300">Register</p>
                    <ul className="hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300">
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">Sign Up</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">Login</a></li>
                      <li className="list-none"><a className="hover:text-text-neutral-800 transition-colors" href="#">Forgot Password</a></li>
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