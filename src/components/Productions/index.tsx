import SingleBlog from "../Blog/SingleBlog";
import SectionTitle from "../Common/SectionTitle";
import productionsData from "./productionsData";

const Productions = () => {
  return (
    <section
      id="blog"
      className="py-16 md:py-16 lg:py-16 bg-[#000000]"
    >
      <div className="container">
        <SectionTitle
          title="Our Productions"
          paragraph="At Yatra, choreography is not just about movement — it is a form of enquiry. Each production is conceptualised with a strong thematic focus and choreographic rigour, showcasing classical vocabulary in contemporary formats."
          mb="50px"
          center
        />
        
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2">
          {productionsData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
        </div>
      </section>
  )};

export default Productions;