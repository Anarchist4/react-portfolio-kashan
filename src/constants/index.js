import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm Machine Learning Engineer with passion for analytics, model development and visualization!`;

export const ABOUT_TEXT = "I'm a dedicated and versatile Machine Learning Engineer with a knack for creating smart and efficient models. With 3 years in the game, I've played around with Python, TensorFlow, PyTorch, Scikit-learn, and Keras. My ML journey started with a burning curiosity about turning data into gold (or at least some neat insights), and now it's my daily grind to keep learning and tackling new challenges. I specialize in deep learning and data visualization, making sense of complex data and presenting it in a way that's easy on the eyes. I love working with teams, cracking tough problems, and delivering top-notch solutions. When I'm not buried in code, you'll find me playing football, geeking out over new tech, or reading books."
export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "ML Engineer",
    company: "Freelance",
    description: "Independently developed a computer vision solution improving image recognition accuracy by 20%. Created a custom anomaly detection algorithm for time-series data, reducing false positives by 30%. Handled end-to-end ML projects, ensuring efficient deployment and seamless integration with client systems.",
    technologies: ["Python","Computer Vision","Deep Learning"],
  },
  {
    year: "2022 - 2023",
    role: "Associate Data Scientist",
    company: "Programmers Force",
    description: "Enhanced computer vision model accuracy by 18% and optimized development workflows with Ubuntu WSL, cutting development time by 20%. Developed Flask APIs and applied advanced neural network architectures to improve object detection accuracy by 30%.",
    technologies: ["Computer Vision","Data Analysis","NoSQL"],
  },
//  {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//       year: "2020 - 2021",
//       role: "Software Engineer",
//       company: "Paypal",
//       description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//       technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
];

export const PROJECTS = [
  {
    title: "Classification Using Transfer Learning",
    image: project1,
    description:
    "Diverse Image Classification: Developed a deep learning model to classify 100k images of sandals, shoes, and boots using transfer learning.",
    technologies: ["Python","Deep Learning","Transfer Learning","Image Classification"],
  },
  {
    title: "License Plate detection",
    image: project2,
    description:
      "License Plate Detection using OpenCV and EasyOCR.This project Detects and recognize license plates from images using OpenCV and EasyOCR libraries.",
    technologies: ["Python","OpenCV","EasyOCR","License Plate Detection"],
  },
  {
    title: "Netflix Dashboard",
    image: project3,
    description:
      "Created an interactive Netflix dashboard using Power BI to visualize key metrics such as viewer demographics, popular genres, and watch trends. Enabled data-driven insights for content strategy and user engagement analysis.",
    technologies: ["SQL", "Data Analysis", "Power Bi"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Lahore, Pakistan ",
  phoneNo: "+92 316 4305897",
  email: "kashanabdullah19@gmail.com",
};
