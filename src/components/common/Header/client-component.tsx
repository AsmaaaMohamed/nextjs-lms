"use client";

//* eslint-disable react/prop-types */
import Logo from "/public/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { InputGroup } from "react-bootstrap";
import "./Header.css";
import {  useEffect} from "react";
import {  usePathname, useRouter} from "next/navigation";
import Link from "@/components/link";
import Image from "next/image";
import { logoutClickHandler } from "@/app/_lib/actions";
import queryString from "query-string";
import useSearchStore from "@/store/lms/search/search";
import { Session } from "next-auth";
import { CourseCategory } from "@prisma/client";

interface ClientComponentProps {
  session: Session | null;
  coursesCategories:CourseCategory[];
}
const ClientComponent = ({ session, coursesCategories }:ClientComponentProps) => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path
  const {
    searchCategory,
    setSearchCategory,
    searchCourse,
    setSearchCourse,
    setSearchPrice
  } = useSearchStore();
  const handleSearchCourseEnter = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClickSearchBtn();
    }
  };
  const handleClickSearchBtn = () => {
    if (searchCourse !== "")
      handleSearch(searchCategory, searchCourse);
  };
  const handleChangeSearch = (e: any) => {
    setSearchCourse(e.target.value);
  };
  const handleSearch = (categoryName:string, courseName:string) => {
    const url = queryString.stringifyUrl(
      {
        url: "/courses",
        query: {
          category: categoryName,
          title: courseName,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );
    router.push(url);
  };
  const mappedOptions = coursesCategories.map((record) => {
    return (
      <option key={record.id} value={record.title!}>
        {record.title}
      </option>
    );
  });
  const navClass = "";

  const handleCategorySelect = (e:any) => {
    setSearchCategory(e.target.value);
    handleSearch(e.target.value, searchCourse);
    console.log("gggggggggggggggggggggggggggg", searchCategory);
  };
  useEffect(() => {
    // Reset the state whenever the p''ath changes
    if (pathname !== '/courses') {
      setSearchCourse("");
      setSearchCategory("");
      setSearchPrice(0)
    }
  }, [pathname]);
  return (
    <header className={navClass}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand as={Link} href="/">
          <Image
            src={Logo}
            height="52"
            alt="image"
            loading="eager"
            placeholder="blur"
            blurDataURL={`${Logo}`}
          />
        </Navbar.Brand>
        <Nav className="left-nav d-none d-xxl-flex">
          <Form.Select
            aria-label="Default select example"
            className="select-cat"
            value={searchCategory}
            onChange={(e) => handleCategorySelect(e)}
          >
            <option value="">All Categories</option>
            <option value="Uncategorized">Uncategorized</option>
            {mappedOptions}
          </Form.Select>
          <Form className="d-flex">
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search Here ..."
                className=""
                aria-label="Search"
                onKeyDown={handleSearchCourseEnter}
                onChange={handleChangeSearch}
                value={searchCourse}
              />
              <Button
                variant="outline-secondary"
                id="button-addon1"
                onClick={handleClickSearchBtn}
              >
                <i className="icofont-search icofont"></i>
              </Button>
            </InputGroup>
          </Form>
        </Nav>

        <Nav className="right-nav ms-auto">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link as={Link} href="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} href="/courses">
                Courses
              </Nav.Link>
              <Nav.Link as={Link} href="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="btns-container d-none d-md-flex">
            {session?.user ? (
              <>
                <Link href="/account" className="d-flex align-items-center">
                  <Image
                    className="h-8 rounded-circle me-2"
                    src={`${
                      session?.user?.image ||
                      `https://ui-avatars.com/api/?name=${session?.user?.username[0]}&background=26c976&color=fff&font-size=0.7`
                    }`}
                    alt={session?.user?.name || session?.user?.username}
                    width={30}
                    height={30}
                  />

                  <span>{session.user.name || session.user.username}</span>
                </Link>
                <Button className="signup ms-2" onClick={logoutClickHandler}>
                  <i className="icofont-logout icofont"></i>Log out
                </Button>
              </>
            ) : (
              <>
                <Button className="login" onClick={() => router.push("/login")}>
                  <i className="icofont-user icofont"></i>Log in
                </Button>
                <Button
                  className="signup"
                  onClick={() => router.push("/signup")}
                >
                  <i className="icofont-users icofont"></i>Sign up
                </Button>
              </>
            )}
          </Nav>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </Nav>
      </Navbar>
    </header>
  );
};

export default ClientComponent;
