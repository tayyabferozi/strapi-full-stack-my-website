import type { NextPage } from "next";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

const carouselData = [
  {
    src: "/assets/img/scenery/image1.jpg",
  },
  {
    src: "/assets/img/scenery/image4.jpg",
  },
  {
    src: "/assets/img/scenery/image6.jpg",
  },
];

const Slides: NextPage = () => {
  return (
    <section className="clean-block slider dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Slider</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
            urna, dignissim nec auctor in, mattis vitae leo.
          </p>
        </div>
        <Carousel>
          {carouselData.map((el, idx) => {
            return (
              <Carousel.Item
                key={"carousel-item" + idx}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                <div className="unset-img">
                  <Image
                    layout="fill"
                    className="custom-img w-100 d-block"
                    src={el.src}
                    alt="Slide Image"
                  />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Slides;
