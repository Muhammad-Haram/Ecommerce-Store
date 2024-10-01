import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Publish from "@mui/icons-material/Publish";
import { useSelector } from "react-redux";

export default function Product() {

    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const product = useSelector((store) => store.product.products.find((product) => product._id === productId))

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                {/* <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div> */}
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={product.img} alt="" className="productInfoImg" />
                        <span className="productName">{product.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{product._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">{product.inStock}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <div className="productFormLeft-input">
                            <label>Product Name</label>
                            <input type="text" placeholder={product.title} />
                        </div>

                        <div className="productFormLeft-input">
                            <label>Product Description</label>
                            <textarea placeholder={product.desc}></textarea>
                        </div>

                        <div className="productFormLeft-input">
                            <label>Product Point</label>

                            {product.points.map((point, index) => (
                                <input type="text" key={index} placeholder={point} />
                            ))}
                        </div>
                        <div className="productFormLeft-input">
                            <label>In Stock</label>
                            <input type="number"/>
                        </div>

                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={product.img} alt="" className="productUploadImg" />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
