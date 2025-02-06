'use client'

import { useEffect, useState } from "react";

const ScrollToTopBtn = () => {
    const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };
    function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
    }, [isVisible]);
    return isVisible &&(
      <button
        className="absolute p-10 d-flex align-items-center justify-content-center position-fixed"
        onClick={scrollToTop}
        style={{
          bottom: "30px",
          right: "30px",
          zIndex: "10",
          width: "45px",
          height: "45px",
          borderRadius: "50%",
          background: "#f16126",
          boxShadow: "#629d2310 0px 0px 6px 7px",
        }}
      >
        <i
          className="icofont icofont-simple-up"
          style={{ color: "#fff", fontSize: "30px" }}
        ></i>
      </button>
    );
};

export default ScrollToTopBtn;