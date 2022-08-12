import type { NextPage } from "next";
import Image from "next/image";

const Info: NextPage = () => {
  return (
    <section className="clean-block clean-info dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Info</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
            urna, dignissim nec auctor in, mattis vitae leo.
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            {/* <img
                  className="img-thumbnail"
                  src="/assets/img/scenery/image5.jpg"
                /> */}
            <div className="unset-img">
              <Image
                layout="fill"
                className="custom-img img-thumbnail"
                src="/assets/img/scenery/image5.jpg"
                alt="Scenary"
              />
            </div>
          </div>
          <div className="col-md-6">
            <h3>Lorem impsum dolor sit amet</h3>
            <div className="getting-started-info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <button className="btn btn-outline-primary btn-lg" type="button">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
