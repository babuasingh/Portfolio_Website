import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.`;

export const ABOUT_TEXT = `I am a final-year B.Tech undergraduate passionate about creating efficient and user-friendly web applications. With strong problem-solving skills, I am proficient in technologies such as React, MongoDB, Node.js, Express.js, SQL, HTML, JavaScript, Python, C,  Java and APIs. I have a natural inclination for programming and constantly seek to learn new technologies. Outside of coding, I enjoy staying active and have a keen interest in teaching and playing various sports.`;

export const ACHIEVEMENTS = [
  {
    // year: "2023 - Present",
    role: "kNIGHT on Leetcode (top 3.9 %)",
    company: "https://leetcode.com/sidd59/",
  },
  {
    // year: "2022 - 2023",
    role: "Ranked first in Intra-Departmental Coding Competition ",
    company: "https://drive.google.com/file/d/1Bgbo887XmxCApH5axW-t-VkijeEdHw6M/view?usp=sharing",
  },
  {
    // year: "2021 - 2022",
    role: "3 ⭐ Codechef",
    company: "https://www.codechef.com/users/singh59",
  },
  {
    // year: "2020 - 2021",
    role: "1000+ coding score on Geeks For Geeks",
    company: "https://auth.geeksforgeeks.org/user/mw2t7sehnxvihyu1s05ozyjruckgbexn2zpnkqap",
  },
];

export const PROJECTS = [
  {
    title: "MunchMates",
    // image: project1,
    description:
      "• An online food ordering Web Application using MERN stack .• Uses MongoDB for storing user details and their respective order history.• Uses mongoose for creating schemas for User and their Orders.• Uses Express-Validator for validation of user input and Bcrypt.js to hash passwords securely .• Uses JWT( JSON WEB TOKEN ) for authentication and authorization purpose.• Included functionality like Add to Cart and Order history using Context API in ReactJS. • Implemented Responsiveness using BOOTSTRAP and CSS FLEXBOX .",
    technologies: ["CSS", "React", "Node.js", "MongoDB", "Express.js"],
    Link : 'https://github.com/babuasingh/MunchMates'
  },
  {
    title: "PulseChat",
    // image: project2,
    description:
      "• A group chat application using ExpressJS and SocketIO • SocketIO is used to accomplish real-time communication , Bi-Directional Data Flow andlow-latency communication between clients and the server.• Uses CSS FLEXBOX to ensure Responsiveness .",
    technologies: ["HTML", "CSS", "SocketIO", "Node.js", "Express.js"],
    Link: 'https://github.com/babuasingh/pulsechat'
  },
];

export const CONTACT = {
  address: "Howrah ,West Bengal ,India",
  phoneNo: "+91-8697216077 ",
  email: "siddharthsingh02901@gmail.com",
};
