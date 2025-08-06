import Image from "next/image";

const AboutSectionThree = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-[#000000]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center border-b border-body-color pb-16 dark:border-white">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 max-w-[600px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about3.png"
                alt="about image"
                width={541}
                height={790}
                className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded-lg w-full h-auto"
              />
              <Image
                src="/images/about/about3.png"
                alt="about image"
                width={541}
                height={790}
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none rounded-lg w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[650px]">
              <div className="mb-9">
                <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Aditya Sharma
                </h2>
                <h4 className="mb-4 text-lg font-semibold text-red-400 dark:text-primary-light">
                  Kathak Artiste | Choreographer | Educator
                </h4>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Aditya Sharma is a seasoned Kathak dancer, choreographer, and educator known best for his uniquely refined artistry, intellectual rigour, and deeply process-oriented approach to classical performance. He is a disciple of the legendary Pt. Jai Kishan Maharaj, the eighth generation of the Lucknow Gharana of Kathak. <br /><br />
                Aditya&apos;s journey in Kathak began at the age of 13 and has since evolved into a committed pursuit of both excellence and enquiry. Placing a key emphasis on grace, poise and aesthetic value, he has had the pleasure of honing his skills under the artistic eyes of Shri Tribhuwan Maharaj, Smt. Ruby Mishra, Vidushi Saswati Sen, Ms. Aditi Mangaldas among a few. His work traverses solo performance, ensemble choreography, and thematic productions, weaving together spiritual, literary, and philosophical ideas through the lens of classical aesthetics. Gifted with a keen eye for contemporary aesthetic and traditional practice, Aditya harmoniously blends the old and the new, tailoring each showcase to be a personal, reflective and engaging performance. <br /><br />
                In 2018, he founded Yatra Dance Productions — a premium organisation that serves as both a performance platform and a pedagogical space for serious practitioners of the classical arts and has over 50 students under his wing across the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
