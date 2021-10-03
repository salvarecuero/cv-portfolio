import React from "react";
import { Col, Text } from "@geist-ui/react";

// Petgram assets.
import {
  petgramImg_1,
  petgramImg_1_fallback,
  petgramImg_2,
  petgramImg_2_fallback,
  petgramImg_3,
  petgramImg_3_fallback,
  petgramImg_4,
  petgramImg_4_fallback,
  petgramImg_5,
  petgramImg_5_fallback,
} from "../assets/Projects/petgram/";

// URL Shortening Challenge assets.
import {
  urlShorteningImg_1,
  urlShorteningImg_1_fallback,
  urlShorteningImg_2,
  urlShorteningImg_2_fallback,
  urlShorteningImg_3,
  urlShorteningImg_3_fallback,
  urlShorteningImg_4,
  urlShorteningImg_4_fallback,
} from "../assets/Projects/url-shortening-challenge";

// CV-Portfolio assets.
import {
  portfolioImg_1,
  portfolioImg_1_fallback,
  portfolioImg_2,
  portfolioImg_2_fallback,
} from "../assets/Projects/cv-portfolio/";

// Mercado Libre Frontend Challenge assets.
import {
  meliImg_1,
  meliImg_1_fallback,
  meliImg_2,
  meliImg_2_fallback,
  meliVideo_1,
} from "../assets/Projects/meli-challenge/";

// LolChampionGallery assets.
import {
  LolChampionGalleryImg_1,
  LolChampionGalleryImg_1_fallback,
  LolChampionGalleryImg_2,
  LolChampionGalleryImg_2_fallback,
  LolChampionGalleryImg_3,
  LolChampionGalleryImg_3_fallback,
  LolChampionGalleryImg_4,
  LolChampionGalleryImg_4_fallback,
  LolChampionGalleryImg_5,
  LolChampionGalleryImg_5_fallback,
  LolChampionGalleryVideo_1,
} from "../assets/Projects/LolChampionGallery/";

// Platzi-Exchange assets.
import {
  platziExchangeImg_1,
  platziExchangeImg_1_fallback,
  platziExchangeImg_2,
  platziExchangeImg_2_fallback,
} from "../assets/Projects/platzi-exchange/";

// Rangetube assets.
import {
  rangetubeImg_1,
  rangetubeImg_1_fallback,
  rangetubeImg_2,
  rangetubeImg_2_fallback,
} from "../assets/Projects/rangetube/";

// IP Address tracker assets.
import {
  ipAddressImg_1,
  ipAddressImg_1_fallback,
  ipAddressImg_2,
  ipAddressImg_2_fallback,
} from "../assets/Projects/ip-address-challenge/";

// Confusion assets.
import {
  confusionImg_1,
  confusionImg_1_fallback,
  confusionImg_2,
  confusionImg_2_fallback,
  confusionImg_3,
  confusionImg_3_fallback,
  confusionImg_4,
  confusionImg_4_fallback,
  confusionImg_5,
  confusionImg_5_fallback,
} from "../assets/Projects/confusion/";

// Extinga assets.
import {
  extingaImg_1,
  extingaImg_1_fallback,
  extingaImg_2,
  extingaImg_2_fallback,
  extingaImg_3,
  extingaImg_3_fallback,
} from "../assets/Projects/extinga/";

// JaP-Ecommerce assets.
import {
  japEcommerceImg_1,
  japEcommerceImg_1_fallback,
  japEcommerceImg_2,
  japEcommerceImg_2_fallback,
  japEcommerceImg_3,
  japEcommerceImg_3_fallback,
  japEcommerceImg_4,
  japEcommerceImg_4_fallback,
  japEcommerceImg_5,
  japEcommerceImg_5_fallback,
  japEcommerceImg_6,
  japEcommerceImg_6_fallback,
  japEcommerceImg_7,
  japEcommerceImg_7_fallback,
  japEcommerceImg_8,
  japEcommerceImg_8_fallback,
  japEcommerceImg_9,
  japEcommerceImg_9_fallback,
} from "../assets/Projects/jap-ecommerce/";

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
        type: "video",
        src: meliVideo_1,
      },
      {
        type: "img",
        src: [meliImg_1, meliImg_1_fallback],
      },
      {
        type: "img",
        src: [meliImg_2, meliImg_2_fallback],
      },
    ],
  },
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
        src: [petgramImg_1, petgramImg_1_fallback],
      },
      {
        type: "img",
        src: [petgramImg_2, petgramImg_2_fallback],
      },
      {
        type: "img",
        src: [petgramImg_3, petgramImg_3_fallback],
      },
      {
        type: "img",
        src: [petgramImg_4, petgramImg_4_fallback],
      },
      {
        type: "img",
        src: [petgramImg_5, petgramImg_5_fallback],
      },
    ],
  },
  {
    title: "Shortly",
    description: (
      <Text>
        Interesting FrontEnd project, where you can create shorten links of a
        given URL. It's based on{" "}
        <a
          href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G"
          target="_blank"
          rel="noreferrer"
        >
          this Frontend Mentor challenge
        </a>
        . Was a really fun experience where I put my CSS knowledge at test.
      </Text>
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
        name: "PWA",
      },
    ],
    repository: "https://github.com/salvarecuero/url-shortening-challenge",
    demoURL: "https://url-shortening-challenge.vercel.app/",
    demos: [
      {
        type: "img",
        src: [urlShorteningImg_1, urlShorteningImg_1_fallback],
      },
      {
        type: "img",
        src: [urlShorteningImg_2, urlShorteningImg_2_fallback],
      },
      {
        type: "img",
        src: [urlShorteningImg_3, urlShorteningImg_3_fallback],
      },
      {
        type: "img",
        src: [urlShorteningImg_4, urlShorteningImg_4_fallback],
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
        src: [portfolioImg_1, portfolioImg_1_fallback],
      },
      {
        type: "img",
        src: [portfolioImg_2, portfolioImg_2_fallback],
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
        src: [LolChampionGalleryImg_1, LolChampionGalleryImg_1_fallback],
        isMobile: true,
      },
      {
        type: "img",
        src: [LolChampionGalleryImg_2, LolChampionGalleryImg_2_fallback],
        isMobile: true,
      },
      {
        type: "img",
        src: [LolChampionGalleryImg_3, LolChampionGalleryImg_3_fallback],
        isMobile: true,
      },
      {
        type: "img",
        src: [LolChampionGalleryImg_4, LolChampionGalleryImg_4_fallback],
        isMobile: true,
      },
      {
        type: "img",
        src: [LolChampionGalleryImg_5, LolChampionGalleryImg_5_fallback],
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
        <a href="https://looptube.io/" target="_blank" rel="noreferrer">
          LoopTube
        </a>
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
        type: "img",
        src: [rangetubeImg_1, rangetubeImg_1_fallback],
      },
      {
        type: "img",
        src: [rangetubeImg_2, rangetubeImg_2_fallback],
      },
    ],
  },
  {
    title: "IP Address tracker",
    description: (
      <Text>
        Simple IP geo-tracker, following{" "}
        <a
          href="https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0"
          target="_blank"
          rel="noreferrer"
        >
          this Frontend Mentor challenge
        </a>
        , that I decided to complete using HTML and good <i>ol'</i> vanilla CSS
        and JS. Interesting and good looking project. The challenge indicates
        you to use the{" "}
        <a href="https://geo.ipify.org/" target="_blank" rel="noreferrer">
          ipify API
        </a>
        , but the free plan gives you a maximum of 1000 queries, which I found
        limitating. Instead, I decided to use{" "}
        <a href="https://ipwhois.io/" target="_blank" rel="noreferrer">
          ipwhois
        </a>
        , which gives you a little bit more freedom, and also doesn't requires
        you to sign up and get an API Key (that would be exposed at least you
        make a server for this simple challenge).
      </Text>
    ),
    pills: [
      projectType["challenge"],
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Javascript",
      },
    ],
    repository: "https://github.com/salvarecuero/ip-address-tracker-challenge",
    demoURL: "https://salvarecuero.github.io/ip-address-tracker-challenge/",
    demos: [
      {
        type: "img",
        src: [ipAddressImg_1, ipAddressImg_1_fallback],
      },
      {
        type: "img",
        src: [ipAddressImg_2, ipAddressImg_2_fallback],
      },
    ],
  },
  {
    title: "Confusion",
    description: (
      <Text>
        My first React project. Made in a course of{" "}
        <a href="https://hkust.edu.hk/" target="_blank" rel="noreferrer">
          The Hong Kong University of Science and Technology
        </a>
        , which was done in{" "}
        <a href="https://www.coursera.org/" target="_blank" rel="noreferrer">
          Coursera
        </a>{" "}
        with the facilitation of{" "}
        <a href="http://www.inefop.org.uy/" target="_blank" rel="noreferrer">
          INEFOP
        </a>
        .
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
        src: [confusionImg_1, confusionImg_1_fallback],
      },
      {
        type: "img",
        src: [confusionImg_2, confusionImg_2_fallback],
      },
      {
        type: "img",
        src: [confusionImg_3, confusionImg_3_fallback],
      },
      {
        type: "img",
        src: [confusionImg_4, confusionImg_4_fallback],
      },
      {
        type: "img",
        src: [confusionImg_5, confusionImg_5_fallback],
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
        type: "img",
        src: [platziExchangeImg_1, platziExchangeImg_1_fallback],
      },
      {
        type: "img",
        src: [platziExchangeImg_2, platziExchangeImg_2_fallback],
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
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
          target="_blank"
          rel="noreferrer"
        >
          localStorage
        </a>
        . It was my second project, and I used it to apply the basic usage of
        JavaScript. If it well says that this is a personal project, I made this
        eCommerce in a{" "}
        <a
          href="https://jovenesaprogramar.edu.uy/"
          target="_blank"
          rel="noreferrer"
        >
          Jóvenes a Programar
        </a>{" "}
        course. They provided me some learning content and the directions of how
        the site should work, but I made the logic behind the website and the
        pages design mostly all by myself, sometimes using the help of a{" "}
        <a href="https://github.com/Felichz/" target="_blank" rel="noreferrer">
          friend
        </a>
        .
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
        src: [japEcommerceImg_1, japEcommerceImg_1_fallback],
      },
      {
        type: "img",
        src: [japEcommerceImg_2, japEcommerceImg_2_fallback],
      },
      {
        type: "img",
        src: [japEcommerceImg_3, japEcommerceImg_3_fallback],
      },
      {
        type: "img",
        src: [japEcommerceImg_4, japEcommerceImg_4_fallback],
      },
      {
        type: "img",
        src: [japEcommerceImg_5, japEcommerceImg_5_fallback],
      },
      {
        type: "img",
        src: [japEcommerceImg_6, japEcommerceImg_6_fallback],
      },
      {
        type: "img",
        src: [japEcommerceImg_7, japEcommerceImg_7_fallback],
      },
      {
        type: "img",
        src: [japEcommerceImg_8, japEcommerceImg_8_fallback],
      },
      {
        type: "img",
        src: [japEcommerceImg_9, japEcommerceImg_9_fallback],
      },
    ],
  },
  {
    title: "Extinga",
    description: (
      <Text>
        My first "official" HTML (and also Bootstrap) project. At the time I was
        learning HTML and decided to make a{" "}
        <a href="https://www.taringa.net/" target="_blank" rel="noreferrer">
          Taringa!
        </a>{" "}
        clone. It has almost no interaction because at the moment I didn't know
        JavaScript. It's based on the V5 of Taringa!, specifically,{" "}
        <a
          href="http://web.archive.org/web/20120223062759/http://www.taringa.net/"
          target="_blank"
          rel="noreferrer"
        >
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
        src: [extingaImg_1, extingaImg_1_fallback],
      },
      {
        type: "img",
        src: [extingaImg_2, extingaImg_2_fallback],
      },
      {
        type: "img",
        src: [extingaImg_3, extingaImg_3_fallback],
      },
    ],
  },
];

export default projects;
