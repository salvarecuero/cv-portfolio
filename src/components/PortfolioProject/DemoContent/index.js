import React from "react";
import { Button } from "@geist-ui/react";
import { ArrowLeft, ArrowRight } from "@geist-ui/react-icons";
import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel";
import IframeDemo from "./IframeDemo";
import VideoDemo from "./VideoDemo";
import ImgDemo from "./ImgDemo";
import "@brainhubeu/react-carousel/lib/style.css";
import "./styles/index.css";

function DemoContent({ demos, nameForID }) {
  return (
    <Carousel
      draggable={true}
      plugins={[
        {
          resolve: arrowsPlugin,
          options: {
            arrowLeft: (
              <Button className="arrowButton leftArrow">
                <ArrowLeft />
              </Button>
            ),
            arrowLeftDisabled: (
              <Button className="arrowButton leftArrow">
                <ArrowLeft />
              </Button>
            ),
            arrowRight: (
              <Button className="arrowButton rightArrow">
                <ArrowRight />
              </Button>
            ),
            arrowRightDisabled: (
              <Button className="arrowButton rightArrow">
                <ArrowRight />
              </Button>
            ),
            addArrowClickHandler: true,
          },
        },
      ]}
    >
      {demos.map((demo, index) => {
        const demoID = `${nameForID}Demo${index}`;
        const possibleItems = {
          iframe: <IframeDemo key={index} nameForID={demoID} src={demo.src} />,
          video: (
            <VideoDemo
              key={index}
              nameForID={demoID}
              src={demo.src}
              isMobile={demo.isMobile}
            />
          ),
          img: (
            <ImgDemo
              key={index}
              nameForID={demoID}
              src={demo.src}
              isMobile={demo.isMobile}
            />
          ),
        };

        return possibleItems[demo.type];
      })}
    </Carousel>
  );
}

export default DemoContent;
