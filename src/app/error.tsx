"use client";

import Image from "next/image";
import "./Error.css";
import Link from "next/link";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}
const Error = ({error , reset}:ErrorPageProps) => {
  return (
    <div className="four-zero-section padding-tb section-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-6 col-12">
            <div className="four-zero-content">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="CodexCoder"
                  width={200}
                  height={200}
                />
              </Link>
              <h2 className="title">Error 400!</h2>
              <p className="text-gray-700 my-3 d-inline-block">
                Error Message: {error.message}
              </p>
              <p
                onClick={() => reset()}
                className="text-secondary link-underline d-inline-block m-3 mb-3"
              >
                <u>Try again</u>
              </p>
              <Link className="lab-btn d-block" href="/">
                <span>
                  Go Back To Home{" "}
                  <i className="icofont-external-link icofont"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-12">
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
