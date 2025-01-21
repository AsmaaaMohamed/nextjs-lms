"use client";

import Image from "next/image";

const ClientComponent = ({course}) => {
  return (
    <div className="video-part mb-4 mb-lg-0">
      <div className="vp-title mb-4">
        <h3>Themeforest Standard Website Design</h3>
      </div>
      <div className="vp-video mb-4">
        <video controls>
          <source
            src="http://demos.codexcoder.com/anthem/wp-content/uploads/2017/07/Ghum-by-Habib-Wahid-Ft.-Mithila.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="content-wrapper ">
        <div className="content-icon d-lg-none">
          <i className="icofont-caret-down"></i>
        </div>
        <div className="vp-content mb-5">
          <h4>Introduction</h4>
          <p>
            This is an excellent course. The content seems very thorough and
            comprehensive. I like the way all the concepts and configurations
            are clearly demonstrated in GNS3. There are also a lot of
            troubleshooting examples and real world applications. I especially
            enjoyed the practical simlets.{" "}
          </p>
        </div>
        <div className="vp-author">
          <div className="vpa-item">
            <div className="vpa-inner d-flex flex-wrap justify-content-between">
              <div className="vpa-thumb">
                <Image
                  src="/assets/images/author/01.jpg"
                  alt="instructor"
                  className="rounded-circle"
                  width={20}
                  height={20}
                />
              </div>
              <div className="vpa-contnet">
                <h6 className="mb-2">Rajib Raj</h6>
                <p className="mb-4">
                  This is an excellent course. The content seems very thorough
                  and comprehensive. I like the way all the concepts and
                  configurations are clearly demonstrated in GNS3.{" "}
                </p>
                <ul className="lab-ul social-icons">
                  <li>
                    <a href="#" className="facebook">
                      <i className="icofont-facebook icofont"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="icofont-twitter icofont"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="linkedin">
                      <i className="icofont-linkedin icofont"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="instagram">
                      <i className="icofont-instagram icofont"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <i className="icofont-pinterest icofont"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;
