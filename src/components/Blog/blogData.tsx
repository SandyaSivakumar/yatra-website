import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Virasat",
    paragraph:
      "Virasat is Yatra's flagship annual student showcase — a grand-scale showcase introduced in 2024 that drew a houseful audience in its debut edition. Conceived and directed by Aditya Sharma, Virasat celebrates the training, discipline, and artistic guidance offered at Yatra under his tutelage.",
    image: "/images/blog/upcoming1.jpg",
    location: {
      name: "Indiranagar",
      image: "/images/blog/upcoming1.jpg",
      designation: "",
    },
    tags: ["New"],
    publishDate: "2025",
  }
  // {
  //   id: 2,
  //   title: "9 simple ways to improve your design skills",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/blog/blog-02.jpg",
  //   author: {
  //     name: "Musharof Chy",
  //     image: "/images/blog/author-02.png",
  //     designation: "Content Writer",
  //   },
  //   tags: ["computer"],
  //   publishDate: "2025",
  // },
  // {
  //   id: 3,
  //   title: "Tips to quickly improve your coding speed.",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/blog/blog-03.jpg",
  //   author: {
  //     name: "Lethium Deo",
  //     image: "/images/blog/author-03.png",
  //     designation: "Graphic Designer",
  //   },
  //   tags: ["design"],
  //   publishDate: "2025",
  // },
];
export default blogData;
