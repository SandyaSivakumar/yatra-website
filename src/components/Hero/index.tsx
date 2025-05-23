import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Yatra Dance Productions
                </h1>
                <p className="mb-12 text-base leading-relaxed! text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Kathak at its Finest <br />
                A premier academy for classical excellence, choreographic depth, and uncompromising training.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-xs bg-red-500 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-red-400"
                  >
                    Join Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 z-[-1] opacity-30 lg:opacity-40">
          <img
            src="/images/home/cover4.png"
            alt="shape"
            className="w-full"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
