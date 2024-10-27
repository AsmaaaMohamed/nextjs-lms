
"use client";

//* eslint-disable react/prop-types */
import Logo from "/public/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { InputGroup } from "react-bootstrap";
import "./Header.css";
import { useState } from "react";
// import actGetCoursesCategories from "@store/lms/categories/act/actGetCategories";
// import { SearchContext } from "@store/context/searchContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// import { setCategory, setSearchText } from "@/store/lms/search/searchSlice";
import { coursesCategories } from "@/utils/data";
console.log('header')
const Header = () => {
  const router = useRouter();
  const [searchCourseName, setSearchCourseName] = useState("");
//   const {
//     selectedCategory,
//     setSelectedCategory,
//     setSearchCourse,
//     searchCourse,
//   } = useContext(SearchContext);
  // const handleSearchCourseEnter = (e) => {
  //   if (e.key === "Enter" && e.target.value !== '') {
  //     e.preventDefault();
  //     handleClickSearchBtn();
  //   }
  // };
  // const handleClickSearchBtn = () => {
  //   dispatch(setSearchText(searchCourseName));
  //   router.push("/courses");
  // };
  // const handleChangeSearch = (e) => {
  //   setSearchCourseName(e.target.value);
  // };

  const mappedOptions = coursesCategories.map((record) => {
    return (
      <option key={record.id} value={record.title}>
        {record.title}
      </option>
    );
  });
  const navClass = "";

//   const loginClickHandle = () => {
//     navigate("/login");
//   };
//   const signupClickHandle = () => {
//     navigate("/signup");
//   };
  // const handleCategorySelect = (e) => {
  //   dispatch(setCategory(e.target.value));
  //   router.push("/courses");
  // };
  return (
    <header className={navClass}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand as={Link} href="/">
          <Image src={Logo} height="52" alt="image" />
        </Navbar.Brand>
        <Nav className="left-nav d-none d-xxl-flex">
          <Form.Select
            aria-label="Default select example"
            className="select-cat"
            // value={category}
            // onChange={(e) => handleCategorySelect(e)}
          >
            <option>All Categories</option>
            <option>Uncategorized</option>
            {mappedOptions}
          </Form.Select>
          <Form className="d-flex">
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search Here ..."
                className=""
                aria-label="Search"
                // onKeyDown={handleSearchCourseEnter}
                // onChange={handleChangeSearch}
                value={searchCourseName}
              />
              <Button
                variant="outline-secondary"
                id="button-addon1"
                // onClick={handleClickSearchBtn}
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
            <Button className="login" onClick={() => router.push("/login")}>
              <i className="icofont-user icofont"></i>Log in
            </Button>
            <Button className="signup" onClick={() => router.push("/signup")}>
              <i className="icofont-users icofont"></i>Sign up
            </Button>
          </Nav>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;