import Tanya from "../assets/tanya.jpg"
import Hanniya from "../assets/haaniya.jpg"
import Alan from "../assets/alan.jpg"
import Nathan from "../assets/nathan.png"
import Olga from "../assets/olga.jpg"

export const url = process.env.REACT_APP_BACKEND_URL
export const locationUrl = process.env.REACT_APP_LOCATIONS_URL

export const LIMIT=500
export const COMMENT_LIMIT=500


export const companies =
    [
        "Pfizer",
        "Moderna",
        "Johnson & Johnson",
        "Covishield",
        "Covaxin",
        "Sinovac",
        "Sputnik V",
        "Altimmune",
        "GlaxoSmithKline",
        "BioNTech",
        "Heat Biologics",
        "Novavax",
        "Inovio Pharmaceuticals",
        "Sanofi",
        "Vaxart",
        "AstraZeneca"
    ]
export const team =
    [
        {
            id: 0,
            name: "Alan Ngo",
            img: Alan,
            bio: "I am a University of Texas at Austin alumnus working at Infosys with experience in Java, Python, and C++ to name a few. I highly believe in learning new things and solving problems to enrich one's mind and then sharing it with other people so that they can share in the intellectual endavour. Aside from learning new things, I also dedicate time for different hobbies that I love such a hanging out, hiking, rock climbing, building PCs, playing games and coding for fun. ",
            linkedin: "https://www.linkedin.com/in/alan-ngo-77338a150/",
            github: "https://github.com/alanngo",
            roles: "Fullstack Developer"
        },
        {
            id: 1,
            name: "Nathan Suarez",
            img: Nathan,
            bio: "Graduated from California State University Los Angeles - Bachelors degree in Computer Science. For me, problem solving and taking on challenges is the spice of life.  My passion is being able to utilize my software engineering skills to help others by improving & creating new tools and it is also extremely rewarding to me.",
            linkedin: "https://www.linkedin.com/in/nsuarez22",
            github: "https://github.com/redxzeta",
            roles: "Fullstack Developer"
        },

        {
            id: 2,
            name: "Tanya Gupta",
            img: Tanya,
            bio: "A final year mechanical engineering student at IIT Bombay, India. I’m working on using Image Morphing for optimising the Die Forging process. A self-taught UI/UX designer, I'm currently learning Android App development by participating in hackathons. I love meeting new people, brainstorming ideas and collaborating with them through different projects. You can find me on the basketball court or playing chess in my free time.",
            linkedin: " https://www.linkedin.com/in/tanyagupta10/",
            github: "https://github.com/Tannybuoy",
            roles: "UX/UI designer"
        },
        {
            id: 3,
            name: "Hanniya Zohdi",
            img: Hanniya,
            bio: "I am a web and graphic designer based in Vancouver and am attending University of Western, Ontario. I have a passion for creating digital experiences that are seamless, through code and design. I am specialized in all things digital design and development for user experience. For Covax-19, I assisted with branding and UX design, as well as implementing React-Bootstrap with custom CSS.",
            linkedin: "https://www.linkedin.com/in/hanniya-zohdi/",
            github: "https://github.com/hanniyazohdi",
            roles: "UX/UI designer"
        },
        {
            id: 4,
            name: "Olga Shevchuk",
            img: Olga,
            bio: "I'm a junior Computer Science and Math double major at Bryn Mawr College. I am passionate about using my coding skills to benefit the society. I also have interests in cybersecurity, data science and app development. This hackathon was a great chance for me to learn web development. In particular, I researched information for the website and contributed to website implementation using JSX and CSS.",
            linkedin: "https://www.linkedin.com/in/olgashevchuk/",
            github: "https://github.com/oshevchuk27",
            roles: "UX/UI designer"
        }
    ]

