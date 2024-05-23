export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Resume", link: "/resume.pdf" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize collaboration and open communication, ensuring a cohesive and innovative team environment.",
    description: "Let's Work !",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently delving into virtual reality, exploring its vast potential and pushing boundaries in the field.",
    description: "The Inside Scoop !",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Modern Portfolio with NextJS",
    des: "Crafted a personal portfolio project using Next.js, React.js, React-icons, Tailwind CSS, Accordion UI, and Shadow CSS UI from January to April 2024. Showcased skills, projects, and professional experience for effective self-promotion. 🌟",
    img: "/p1.png",
    live_link:"https://mangesh-portfolio.vercel.app/",
    iconLists: ["/next.svg","/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/js.png","/shadcn.png"],
    github_link: "https://github.com/MangeshRShakkarwar/mangesh-portfolio",
  },
  {
    id: 2,
    title: "PopCornPal - Your Movie Ally",
    des:" Implemented a Movie Review Application from Jan - May 2024 using MERN stack.Tailwind CSS and React icons for a polished UI, incorporating a chatbot for enhanced interaction. Provided user-based recommendations and an upvote feature for community engagement, enhancing usability for effortless interaction and easy initiation. 🚀",
    img: "/p2.png",
    live_link:"https://popcorn-pal-front.vercel.app/",
    iconLists: ["/re.svg","/express.png","/mongodb.svg", "/tail.svg","/react-icons.png", "/js.png"],
    github_link: "https://github.com/MangeshRShakkarwar/PopCornPal---Your-Movie-Ally--Frontend",
  },
  {
    id: 3,
    title: "Drive Rentals - Book your Car",
    des:"Developed a Car Rental System  Utiling HTML, CSS, PHP, and MySQL to create a user-friendly interface and secure booking system from January to July 2023. Enhanced system functionality and usability for seamless rental experiences. 🌟",
    img: "/p1.png",
    live_link:"https://github.com/MangeshRShakkarwar/DriveRentals",
    iconLists: ["/html.png","/css.png", "/js.png", "/php.png","/mysql.png"],
    github_link: "https://github.com/MangeshRShakkarwar/DriveRentals",
  },
];

export const education = [
  {
    education: "Bachelor of Technology",
    name: "SGGSIE&T,Nanded",
    description:"Majored in Computer Science and Engineering, graduating with a CGPA of 8.47 (2021 - 2024). Demonstrated strong academic performance and a solid foundation in computer science principles and engineering practices."
  },
  {
    education: "Higher Secondary Education",
    name: "Cambridge Junior College,Nanded",
    description:"Completed Science with a focus on Computer Science (2018 - 2020), achieving a 76.15% score. This period solidified my interest and foundational knowledge in computer science."
  },
  {
    education: "Bachelor of Technology",
    name: "Shri Shivaji High School,Nanded",
    description:"Completed Secondary Education with a 92.40% score (2017 - 2018). Developed a strong interest in mathematics and computers and excelled in extracurricular activities during this period."
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Full Stack Web Development Intern",
    company:" DeveloperCorners [Jan-June 2023]",
    desc: "Led the creation of dynamic web applications using the MERN stack. Implemented targeted optimizations that boosted application efficiency and scalability by 30%. Played a key role in improving user experience and contributing to project success within a professional team setting.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/MangeshRShakkarwar",
  },
  {
    id: 2,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/mangesh-shakkarwar",
  },
  {
    id: 3,
    img: "/wha.svg",
    link:"https://wa.link/2bykkf",
  },
];
