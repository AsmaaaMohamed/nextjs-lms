"use client";

//* eslint-disable react/prop-types */
import Logo from "/public/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { InputGroup } from "react-bootstrap";
import "./Header.css";
import {  useEffect, useState } from "react";
import {  usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "@/components/link";
import Image from "next/image";
import { logoutClickHandler } from "@/app/_lib/actions";
import queryString from "query-string";

const ClientComponent = ({ session, coursesCategories }) => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const currentTitle = searchParams.get("title");
  const [searchCourseCategory, setSearchCourseCategory] =
    useState("All Categories");
  console.log(
    `https://ui-avatars.com/api/?name=${session?.user?.username[0]}&background=26c976&color=fff`
  );
  const [searchCourseName, setSearchCourseName] = useState("");
  const handleSearchCourseEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClickSearchBtn();
    }
  };
  const handleClickSearchBtn = () => {
    if (searchCourseName !== "")
      handleSearch(currentCategory, searchCourseName);
  };
  const handleChangeSearch = (e) => {
    setSearchCourseName(e.target.value);
  };
  const handleSearch = (categoryName, courseName) => {
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
      <option key={record.id} value={record.title}>
        {record.title}
      </option>
    );
  });
  const navClass = "";

  const handleCategorySelect = (e) => {
    setSearchCourseCategory(e.target.value);
    handleSearch(e.target.value, currentTitle);
    console.log("gggggggggggggggggggggggggggg", searchCourseCategory);
  };
  useEffect(() => {
    // Reset the state whenever the p''ath changes
    if (pathname !== '/courses') {
      setSearchCourseName("");
      setSearchCourseCategory("All Categories");
    }
  }, [pathname]);
  return (
    <header className={navClass}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand as={Link} href="/">
          <Image src={Logo} height="52" alt="image" loading="eager" priority/>
        </Navbar.Brand>
        <Nav className="left-nav d-none d-xxl-flex">
          <Form.Select
            aria-label="Default select example"
            className="select-cat"
            value={searchCourseCategory}
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
                value={searchCourseName}
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
