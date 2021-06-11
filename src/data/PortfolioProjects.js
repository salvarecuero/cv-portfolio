import React from "react";
import { Col, Text, Link } from "@geist-ui/react";

// Petgram assets.
import petgramImg_1 from "../assets/Projects/petgram/petgramImg_1.png";
import petgramImg_2 from "../assets/Projects/petgram/petgramImg_2.png";
import petgramImg_3 from "../assets/Projects/petgram/petgramImg_3.png";
import petgramImg_4 from "../assets/Projects/petgram/petgramImg_4.png";
import petgramImg_5 from "../assets/Projects/petgram/petgramImg_5.png";

// CV-Portfolio assets.
import portfolioImg_1 from "../assets/Projects/cv-portfolio/portfolioImg_1.png";
import portfolioImg_2 from "../assets/Projects/cv-portfolio/portfolioImg_2.png";

// Mercado Libre Frontend Challenge assets.
import meliVideo_1 from "../assets/Projects/meli-challenge/meliVideo_1.mp4";
import meliImg_1 from "../assets/Projects/meli-challenge/meliImg_1.png";

// LolChampionGallery assets.
import LolChampionGalleryVideo_1 from "../assets/Projects/LolChampionGallery/LolChampionGalleryVideo_1.webm";
import LolChampionGalleryImg_1 from "../assets/Projects/LolChampionGallery/LolChampionGalleryImg_1.png";
import LolChampionGalleryImg_2 from "../assets/Projects/LolChampionGallery/LolChampionGalleryImg_2.png";
import LolChampionGalleryImg_3 from "../assets/Projects/LolChampionGallery/LolChampionGalleryImg_3.png";
import LolChampionGalleryImg_4 from "../assets/Projects/LolChampionGallery/LolChampionGalleryImg_4.png";
import LolChampionGalleryImg_5 from "../assets/Projects/LolChampionGallery/LolChampionGalleryImg_5.png";

// Platzi-Exchange assets.
import platziImg_1 from "../assets/Projects/platzi-exchange/platziExchangeImg_1.png";

// Rangetube assets.
import rangetubeImg_1 from "../assets/Projects/rangetube/rangetubeImg_1.png";
import rangetubeImg_2 from "../assets/Projects/rangetube/rangetubeImg_2.png";

// Confusion assets.
import confusionImg_1 from "../assets/Projects/confusion/confusionImg_1.png";
import confusionImg_2 from "../assets/Projects/confusion/confusionImg_2.png";
import confusionImg_3 from "../assets/Projects/confusion/confusionImg_3.png";
import confusionImg_4 from "../assets/Projects/confusion/confusionImg_4.png";
import confusionImg_5 from "../assets/Projects/confusion/confusionImg_5.png";

// Extinga assets.
import extingaImg_1 from "../assets/Projects/extinga/extingaImg_1.png";
import extingaImg_2 from "../assets/Projects/extinga/extingaImg_2.png";
import extingaImg_3 from "../assets/Projects/extinga/extingaImg_3.png";

// Extinga assets.
import japEcommerceImg_1 from "../assets/Projects/jap-ecommerce/jap-ecommerceImg_1.png";
import japEcommerceImg_2 from "../assets/Projects/jap-ecommerce/jap-ecommerceImg_2.png";
import japEcommerceImg_3 from "../assets/Projects/jap-ecommerce/jap-ecommerceImg_3.png";
import japEcommerceImg_4 from "../assets/Projects/jap-ecommerce/jap-ecommerceImg_4.png";
import japEcommerceImg_5 from "../assets/Projects/jap-ecommerce/jap-ecommerceImg_5.png";
import japEcommerceImg_6 from "../assets/Projects/jap-ecommerce/jap-ecommerceImg_6.png";
import japEcommerceImg_7 from "../assets/Projects/jap-ecommerce/jap-ecommerceImg_7.png";
import japEcommerceImg_8 from "../assets/Projects/jap-ecommerce/jap-ecommerceImg_8.png";
import japEcommerceImg_9 from "../assets/Projects/jap-ecommerce/jap-ecommerceImg_9.png";

/* Project prototype

{
  title: "",
  description: <Text></Text>,
  pills: [
    projectType[""],
    {
      name: "",
    },
  ],
  repository: "",
  demoURL: "",
  demos: [{
    type: "",
    src: null,
  }]
} */

const projectType = {
  personalProject: {
    name: "Personal project",
    color: "#29bc9b",
  },
  course: {
    name: "Course project",
    color: "#0070f3",
  },
  challenge: {
    name: "Challenge project",
    color: "#7928ca",
  },
};

const projects = [
  {
    title: "Petgram",
    description: (
      <Text>
        Web made along a Platzi course. It has a design and functional
        similarity to Instagram. You can register, log in, like photos, navigate
        between categories, watch your favourite posts, and, of course sign out.
      </Text>
    ),
    pills: [
      projectType["course"],
      {
        name: "Webpack",
      },
      {
        name: "React",
      },
      {
        name: "GraphQL",
      },
      {
        name: "SEO",
      },
      {
        name: "PWA",
      },
      {
        name: "Cypress",
      },
    ],
    repository: "https://github.com/salvarecuero/Petgram",
    demoURL: "https://petgram-salvarecuero.vercel.app/",
    demos: [
      {
        type: "img",
        src: petgramImg_1,
      },
      {
        type: "img",
        src: petgramImg_2,
      },
      {
        type: "img",
        src: petgramImg_3,
      },
      {
        type: "img",
        src: petgramImg_4,
      },
      {
        type: "img",
        src: petgramImg_5,
      },
    ],
  },
  {
    title: "Portfolio",
    description: (
      <Text>
        Well, you are here... Little personal web where I can expose my
        projects.
      </Text>
    ),
    pills: [
      projectType["personalProject"],
      {
        name: "React",
      },
      {
        name: "Geist",
      },
      {
        name: "Node.js",
      },
      {
        name: "Express",
      },
    ],
    repository: "https://github.com/salvarecuero/cv-portfolio",
    demoURL: "https://salvador.vercel.app/",
    demos: [
      {
        type: "img",
        src: portfolioImg_1,
      },
      {
        type: "img",
        src: portfolioImg_2,
      },
    ],
  },
  {
    title: "Mercado Libre",
    description: (
      <Col>
        <Text>
          Mercado Libre Frontend Challenge, gives you the possibility to search
          and view-in-detail products.
        </Text>
        <Text p small>
          In the video I had a little problem while capturing my VSCode's, so
          -sometimes- they don't correspond to what the title says.
        </Text>
      </Col>
    ),
    pills: [
      projectType["challenge"],
      {
        name: "React",
      },
      {
        name: "Sass",
      },
      {
        name: "Node.js",
      },
      {
        name: "Express",
      },
    ],
    repository: "https://github.com/salvarecuero/meli-frontend-challenge",
    demoURL: "https://meli-frontend-challenge-client-salvarecuero.vercel.app/",
    demos: [
      {
        type: "img",
        src: meliImg_1,
      },
      {
        type: "video",
        src: meliVideo_1,
      },
    ],
  },
  {
    title: "LolChampionGallery",
    description: (
      <Text>
        Mobile app, my first React Native project, made mostly for learning the
        basics of the framework. With the app you can see basic stats and tips
        of League of Legends champions.
      </Text>
    ),
    pills: [
      projectType["personalProject"],
      {
        name: "React Native",
      },
      {
        name: "Expo",
      },
      {
        name: "Styled-Components",
      },
    ],
    repository: "https://github.com/salvarecuero/LoLChampionGallery",
    demos: [
      {
        type: "video",
        src: LolChampionGalleryVideo_1,
        isMobile: true,
      },
      {
        type: "img",
        src: LolChampionGalleryImg_1,
        isMobile: true,
      },
      {
        type: "img",
        src: LolChampionGalleryImg_2,
        isMobile: true,
      },
      {
        type: "img",
        src: LolChampionGalleryImg_3,
        isMobile: true,
      },
      {
        type: "img",
        src: LolChampionGalleryImg_4,
        isMobile: true,
      },
      {
        type: "img",
        src: LolChampionGalleryImg_5,
        isMobile: true,
      },
    ],
  },
  {
    title: "Rangetube",
    description: (
      <Text>
        This site allows you to watch-on-repeat an A-B range of a YouTube video.
        It was my first personal project with React, it's based on a website
        called{" "}
        <Link href="https://looptube.io/" target="_blank">
          LoopTube
        </Link>
        .
      </Text>
    ),
    pills: [
      projectType["personalProject"],
      {
        name: "React",
      },
      {
        name: "Bootstrap",
      },
    ],
    repository: "https://github.com/salvarecuero/rangetube",
    demoURL: "https://rangetube.netlify.app/",

    demos: [
      {
        type: "iframe",
        src: "https://rangetube.netlify.app/",
      },
      {
        type: "img",
        src: rangetubeImg_1,
      },
      {
        type: "img",
        src: rangetubeImg_2,
      },
    ],
  },
  {
    title: "Confusion",
    description: (
      <Text>
        My first React project. Made in a course of{" "}
        <a href="https://hkust.edu.hk/">
          The Hong Kong University of Science and Technology
        </a>
        , which was done in <a href="https://www.coursera.org/">Coursera</a>{" "}
        with the facilitation of <a href="http://www.inefop.org.uy/">INEFOP</a>.
      </Text>
    ),
    pills: [
      projectType["course"],
      {
        name: "React",
      },
      {
        name: "Redux",
      },
      {
        name: "Bootstrap",
      },
    ],
    repository: "https://github.com/salvarecuero/confusion-react-app",
    demoURL: "https://confusion-srecuero.herokuapp.com/",
    demos: [
      {
        type: "img",
        src: confusionImg_1,
      },
      {
        type: "img",
        src: confusionImg_2,
      },
      {
        type: "img",
        src: confusionImg_3,
      },
      {
        type: "img",
        src: confusionImg_4,
      },
      {
        type: "img",
        src: confusionImg_5,
      },
    ],
  },
  {
    title: "Platzi exchange",
    description: (
      <Text>
        Made in a Platzi course, in this site you have a cryptocurrencies
        ranking based on price. You can see a graphic of the variation on the
        price in the last 24hs, and also convert currency to USD and backwards.
      </Text>
    ),
    pills: [
      projectType["course"],
      {
        name: "Vue",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Vue-Router",
      },
    ],
    repository: "https://github.com/salvarecuero/platzi-exchange",
    demoURL: "https://salvarecuero-platzi-exchange.netlify.app/",

    demos: [
      {
        type: "iframe",
        src: "https://salvarecuero-platzi-exchange.netlify.app/",
      },
      {
        type: "img",
        src: platziImg_1,
      },
    ],
  },
  {
    title: "eCommerce - JaP",
    description: (
      <Text>
        In this webpage you can simulate the navigation through an eCommerce. It
        doesn't interact with a server, everything is fetched from .json files
        and user data stored in{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">
          localStorage
        </a>
        . It was my second project, and I used it to apply the basic usage of
        JavaScript. If it well says that this is a personal project, I made this
        eCommerce in a{" "}
        <a href="https://jovenesaprogramar.edu.uy/">Jóvenes a Programar</a>{" "}
        course. They provided me some learning content and the directions of how
        the site should work, but I made the logic behind the website and the
        pages design mostly all by myself, sometimes using the help of a{" "}
        <a href="https://github.com/Felichz/">friend</a>.
      </Text>
    ),
    pills: [
      projectType["personalProject"],
      {
        name: "HTML",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "JavaScript",
      },
    ],
    repository: "https://github.com/salvarecuero/eCommerce-JaP2020",
    demoURL: "https://salvarecuero.github.io/eCommerce-JaP2020/",
    demos: [
      {
        type: "img",
        src: japEcommerceImg_1,
      },
      {
        type: "img",
        src: japEcommerceImg_2,
      },
      {
        type: "img",
        src: japEcommerceImg_3,
      },
      {
        type: "img",
        src: japEcommerceImg_4,
      },
      {
        type: "img",
        src: japEcommerceImg_5,
      },
      {
        type: "img",
        src: japEcommerceImg_6,
      },
      {
        type: "img",
        src: japEcommerceImg_7,
      },
      {
        type: "img",
        src: japEcommerceImg_8,
      },
      {
        type: "img",
        src: japEcommerceImg_9,
      },
    ],
  },
  {
    title: "Extinga",
    description: (
      <Text>
        My first "official" HTML (and also Bootstrap) project. At the time I was
        learning HTML and decided to make a{" "}
        <a href="https://www.taringa.net/">Taringa!</a> clone. It has almost no
        interaction because at the moment I didn't know JavaScript. It's based
        on the V5 of Taringa!, specifically,{" "}
        <a href="http://web.archive.org/web/20120223062759/http://www.taringa.net/">
          on this Wayback Machine snapshot
        </a>
        .
      </Text>
    ),
    pills: [
      projectType["personalProject"],
      {
        name: "HTML",
      },
      { name: "Bootstrap" },
      {
        name: "JQuery",
      },
    ],
    repository: "https://github.com/salvarecuero/extinga",
    demoURL: "https://salvarecuero.github.io/extinga/",
    demos: [
      {
        type: "img",
        src: extingaImg_1,
      },
      {
        type: "img",
        src: extingaImg_2,
      },
      {
        type: "img",
        src: extingaImg_3,
      },
    ],
  },
];

export default projects;
