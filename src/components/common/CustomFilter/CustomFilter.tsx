import { Form } from "react-bootstrap";
import "./CustomFilter.css";
import useSearchStore from "@/store/lms/search/search";

const CustomFilter = ({ categoriesOptions }) => {
  //  const { searchCategory, searchPrice, setSearchCategory, setSearchPrice } = useSearchStore();
  //  console.log(searchCategory);
  //  const handleCategorySelect = (e) => {
  //    setSearchCategory(e.target.value);
  //    console.log("ffffffffffffffffffffffffffffff", e.target.value);
  //  };
  return (
    <div className="group-select-section">
      <div className="container">
        <div className="section-wrapper">
          <div className="row align-items-center g-4">
            <div className="col-md-4">
              <div className="group-select-left" style={{ textAlign: "right" }}>
                <i className="icofont-abacus-alt icofont"></i>
                <span>Filters</span>
              </div>
            </div>
            <div className="col-md-8">
              <div className="group-select-right">
                <div className="row g-2 row-cols-lg-4 row-cols-sm-2 row-cols-1">
                  <div className="col">
                    <div className="select-item">
                      <Form.Select
                        aria-label="Default select example"
                        
                      >
                        <option>All Categories</option>
                        <option>Uncategorized</option>
                        {categoriesOptions}
                      </Form.Select>
                    </div>
                  </div>
                  {/* <div className="col">
                    <div className="select-item">
                      <Form.Select aria-label="Default select example">
                        <option value="all">All Languages</option>
                        <option value="java">Java</option>
                        <option value="php">PHP</option>
                        <option value="html">HTML</option>
                      </Form.Select>
                    </div>
                  </div> */}
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
                  {/* <div className="col">
                    <div className="select-item">
                      <Form.Select aria-label="Default select example">
                        <option value="all">All Skills</option>
                        <option value="css">CSS</option>
                        <option value="php">PHP</option>
                        <option value="html">HTML</option>
                      </Form.Select>
                    </div>
                  </div> */}
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
