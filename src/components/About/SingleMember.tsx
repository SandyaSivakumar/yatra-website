import Image from "next/image";

const SingleMember = ({ data }) => {
  const { name, image } = data;
  return (
    <>
      <div className="group shadow-one hover:shadow-two dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-[#000000] text-white duration-300 p-8 text-center"> {/* Changed bg-white to bg-black and added text-white for contrast, increased padding */}
        {/* Circular Image */}
        <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full mb-6 shadow-[0_0_20px_5px_rgba(255,0,0,0.7)]">
          <Image
            src={image} // Use the image from data
            alt={name} // Use name as alt text for accessibility
            fill
            className="object-cover" // Ensure the image covers the circular area
          />
        </div>

        {/* Name Text */}
        <h3 className="text-2xl font-bold text-white mt-2"> {/* Ensured text is white for contrast */}
          {name} {/* Display the name from data */}
        </h3>

      </div>
    </>
  );
};

export default SingleMember;
