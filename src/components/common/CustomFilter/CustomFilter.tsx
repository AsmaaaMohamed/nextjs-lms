import { Form } from "react-bootstrap";
import "./CustomFilter.css";
import useSearchStore from "@/store/lms/search/search";

const CustomFilter = ({
  categoriesOptions,
}) => {
   const { searchCategory, searchPrice, setSearchCategory, setSearchPrice } = useSearchStore();
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
                        value={searchCategory}
                        onChange={(e) => setSearchCategory(e.target.value)}
                      >
                        <option value="">All Categories</option>
                        <option value="Uncategorized">Uncategorized</option>
                        {categoriesOptions}
                      </Form.Select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="select-item">
                      <Form.Select
                        aria-label="Default select example"
                        value={searchPrice}
                        onChange={(e) => setSearchPrice(e.target.value)}
                      >
                        <option value="0">All Prices</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="25">30</option>
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
