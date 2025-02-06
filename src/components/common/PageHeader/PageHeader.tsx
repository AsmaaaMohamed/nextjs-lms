"use client";

import Link from "next/link";
import "./PageHeader.css";
import { usePathname } from "next/navigation";
import { Fragment} from "react";

const PageHeader = ({pageTitle}:{pageTitle:string}) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  return (
    <div className="pageheader-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="pageheader-content text-center">
              <h2>{pageTitle}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  {pathNames.map((link, index) => {
                    const href = `/${pathNames.slice(0, index + 1).join("/")}`;
                    const itemClasses =
                      paths === href
                        ? `breadcrumb-item active`
                        : `breadcrumb-item`;
                    // let itemLink = capitalizeLinks
                    //   ? link[0].toUpperCase() + link.slice(1, link.length)
                    //   : link;
                    return (
                      <Fragment key={index}>
                        <li className={itemClasses}>
                          {index !==pathNames.length-1 ?
                          (<Link href={href} className={itemClasses}>
                            {link}
                          </Link>) :
                          link}
                          
                        </li>
                        {/* {pathNames.length !== index + 1 && separator} */}
                      </Fragment>
                    );
                  })}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
