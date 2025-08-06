import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-[#000000]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 max-w-[600px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/portfolio1.jpg"
                alt="about image"
                width={541}
                height={331}
                className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded-lg w-full h-auto"
              />
              <Image
                src="/images/about/portfolio1.jpg"
                alt="about image"
                width={541}
                height={331}
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none rounded-lg w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[650px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Building Legacy
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Rooted in the legacy of Kathak and committed to the highest standards of classical performance, Yatra Dance Productions is one of Bangalore’s leading institutions for rigorous dance training and artistic creation. <br /><br />
Founded by Aditya Sharma, a disciple of the legendary Pt. Jai Kishan Maharaj, Yatra is a space where excellence is non-negotiable, and tradition is engaged with thoughtfulness and intent. Our institution is a hub for serious practitioners, offering a dynamic blend of pedagogy, production, and mentorship that nurtures both individual growth and collective artistry.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
