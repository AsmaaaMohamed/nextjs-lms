import Link from "next/link";
import "./Author.css";
import Image from "next/image";

const Author = () => {
  return (
    <div className="authors">
      <div className="author-thumb">
        <Image src="/assets/images/author/01.jpg" alt="rajibraj91" width={150} height={150}/>
      </div>
      <div className="author-content">
        <h5>Rajib Raj</h5>
        <span>Assistant Teacher</span>
        <p>
          I am an Afro-Latina digital artist originally from Long Island, NY. I
          love to paint design and photo manpulate in Adobe Photoshop while
          helping others learn too. Follow me on Instagram or tweet me
        </p>
        <ul className="lab-ul social-icons">
          <li>
            <Link href="#" className="facebook">
              <i className="icofont-facebook icofont"></i>
            </Link>
          </li>
          <li>
            <Link href="#" className="twitter">
              <i className="icofont-twitter icofont"></i>
            </Link>
          </li>
          <li>
            <Link href="#" className="linkedin">
              <i className="icofont-linkedin icofont"></i>
            </Link>
          </li>
          <li>
            <Link href="#" className="instagram">
              <i className="icofont-instagram icofont"></i>
            </Link>
          </li>
          <li>
            <Link href="#" className="pinterest">
              <i className="icofont-pinterest icofont"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Author;
