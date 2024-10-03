import { useState } from "react";
// import "./newProduct.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import { addProducts } from "../redux/apiCallsForDashBoard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";

export default function NewProduct() {

  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState("");
  const [category, setCategory] = useState([]);
  const [points, setPoints] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  const handleCategory = (e) => {
    setCategory(e.target.value.split(","));
  };

  const handlePoints = (e) => {
    setPoints(e.target.value.split(","));
  };

  const handleClick = async (e) => {
    e.preventDefault()
    const filetitle = inputs.title || "default"; // Agar title nahi hai to default naam rakh lo
    const sanitizedTitle = filetitle.replace(/[^a-z0-9]/gi, "_").toLowerCase();
    const fileName = `${sanitizedTitle}_${new Date().getTime()}.jpg`
    console.log(fileName)
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      (error) => {
        console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          const product = { ...inputs, img: downloadURL, categories: category, points: points };
          addProducts(product, dispatch)
          navigate("/products")
        });
      }
    );
  }

  return (

    <>
      <Topbar />
      <div className="container">

        <Sidebar />

        <div className="newProduct">
          <h1 className="addProductTitle">New Product</h1>
          <form className="addProductForm">

            <div className="addProductItem">
              <label>Image</label>
              <input type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])} />
            </div>

            <div className="addProductItem">
              <label>title</label>
              <input name="title" type="text" placeholder="Product Title" onChange={handleChange} />
            </div>

            <div className="addProductItem">
              <label>Description</label>
              <input name="desc" type="text" placeholder="Product Description" onChange={handleChange} />
            </div>

            <div className="addProductItem">
              <label>Points</label>
              <input type="text" placeholder="Product Points" onChange={handlePoints} />
            </div>

            <div className="addProductItem">
              <label>Category</label>
              <input type="text" placeholder="category1,category2" onChange={handleCategory} />
            </div>

            <div className="addProductItem">
              <label>Stock</label>
              <input name="inStock" type="number" placeholder="Stock in Numbers" onChange={handleChange} />
            </div>

            <button onClick={handleClick} className="addProductButton">Create</button>

          </form>
        </div>

      </div>
    </>
  );
}
