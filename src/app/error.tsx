"use client";

import Image from "next/image";
import "./Error.css";
import Link from "next/link";
const Error = () => {
  return (
    <div className="four-zero-section padding-tb section-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="four-zero-content">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="CodexCoder"
                  width={200}
                  height={200}
                />
              </Link>
              <h2 className="title">Error 404!</h2>
              <p>Oops! The Page You Are Looking For Could Not Be Found</p>
              <Link className="lab-btn" href="/">
                <span>
                  Go Back To Home{" "}
                  <i className="icofont-external-link icofont"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-8 col-sm-6 col-12">
            <div className="foue-zero-thumb">
              <Image
                src="/assets/images/404.png"
                alt="CodexCoder"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
