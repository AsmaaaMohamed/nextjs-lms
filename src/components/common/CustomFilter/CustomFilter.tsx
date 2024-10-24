// import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./CustomFilter.css";
// import { useContext } from "react";
// import { SearchContext } from "@store/context/searchContext";

const CustomFilter = ({ categoriesOptions }) => {
  // const[filteredCourses , setFilteredCourses] = useState([]);
  // useEffect(()=>{
  //     const courses = [
  //         {name:'Mon' , age:'29' , prof:'SE'},
  //         {name:'Vir' , age:'28' , prof:'Bat'},
  //         {name:'Roh' , age:'32' , prof:'Bat'},
  //         {name:'Sham' , age:'31' , prof:'Bow'},
  //         {name:'Bum' , age:'30' , prof:'Bow'},
  //     ]
  // },[]);
//   const {
//     selectedCategory,
//     setSelectedCategory,
//     selectedPrice,
//     setSelectedPrice,
//   } = useContext(SearchContext);
  return (
    <div className="group-select-section">
      <div className="container">
        <div className="section-wrapper">
          <div className="row align-items-center g-4">
            <div className="col-md-1">
              <div className="group-select-left">
                <i className="icofont-abacus-alt icofont"></i>
                <span>Filters</span>
              </div>
            </div>
            <div className="col-md-11">
              <div className="group-select-right">
                <div className="row g-2 row-cols-lg-4 row-cols-sm-2 row-cols-1">
                  <div className="col">
                    <div className="select-item">
                      <Form.Select
                        aria-label="Default select example"
                        value={
                           "All Categories"
                        }
                        // onChange={(e) => setSelectedCategory(e.target.value)}
                      >
                        <option>All Categories</option>
                        <option>Uncategorized</option>
                        {categoriesOptions}
                      </Form.Select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="select-item">
                      <Form.Select aria-label="Default select example">
                        <option value="all">All Languages</option>
                        <option value="java">Java</option>
                        <option value="php">PHP</option>
                        <option value="html">HTML</option>
                      </Form.Select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="select-item">
                      <Form.Select
                        aria-label="Default select example"
                        value={"All prices"}
                        // onChange={(e) => setSelectedPrice(e.target.value)}
                      >
                        <option>All Prices</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                      </Form.Select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="select-item">
                      <Form.Select aria-label="Default select example">
                        <option value="all">All Skills</option>
                        <option value="css">CSS</option>
                        <option value="php">PHP</option>
                        <option value="html">HTML</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomFilter;
