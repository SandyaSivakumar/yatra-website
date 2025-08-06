import SectionTitle from "../Common/SectionTitle";
import ensembleData from "./ensembleData";
import SingleMember from "./SingleMember";
import Image from "next/image";

const AboutSectionEnsemble = () => {
  return (
    <section
      id="blog"
      className="py-16 md:py-16 lg:py-16 bg-[#000000]"
    >
      <div className="container">
        <SectionTitle
          title="The Ensemble"
          paragraph="A glimpse into our committed star performers and soloists"
          mb="50px"
          center
        />

        <div className="flex flex-wrap justify-center -mx-4">
          {ensembleData.map((member) => (
            <div
              key={member.id}
              // Define responsive widths for columns and add horizontal padding for gutters
              // w-full: 1 column on extra small screens
              // sm:w-1/2: 2 columns on small-medium screens (e.g., tablets)
              // md:w-1/3: 3 columns on medium and larger screens (e.g., desktops)
              className="w-full px-4 sm:w-1/2 md:w-1/3 mb-10" // px-4 creates horizontal gutter, mb-10 creates vertical gutter
            >
              <SingleMember data={member} />
            </div>
          ))}
        </div>

        <div className="-mx-4 flex flex-wrap items-center mt-[60px]">
            <div className="w-full px-4 lg:w-1/2">
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                The Yatra Ensemble is an elite training initiative launched by Aditya Sharma in 2024, designed for students and soloists with promising talent and a deep sense of commitment to the art of Kathak. More than just a performance troupe, the ensemble is a rigorous artistic and professional development programme, equipping dancers with the skills needed to thrive in today’s dynamic dance landscape. <br /><br />
                Ensemble members undergo intensive training in technique, body conditioning, and movement aesthetics while also expanding their choreographic vocabulary under Aditya’s guidance. <br /><br />
                Beyond dance, the ensemble emphasizes holistic growth, teaching students the nuances of branding themselves as budding soloists and develops their creative liberty in choreography, composition, and the art of curating original work. <br /><br />
                By fostering a culture of discipline, innovation, and artistic integrity, the Yatra Ensemble is shaping the next generation of Kathak artists.
              </p>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/ensemble.jpg"
                  alt="about-image"
                  width={541}
                  height={331}
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 w-full h-auto"
                />
                <Image
                  src="/images/about/ensemble.jpg"
                  alt="about-image"
                  width={541}
                  height={331}
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 w-full h-auto"
                />
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default AboutSectionEnsemble;
