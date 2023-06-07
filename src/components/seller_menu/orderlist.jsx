import React, { useEffect, useState } from "react";
import axios from "axios";

function OrderList() {
  // const [image, setImage] = useState(null);

  // const handleClick = () => {
  //   if (image) {
  //     const formData = new FormData();
  //     formData.append("image", image[0]);

  //     axios
  //       .post("http://localhost:8080/upload", formData)
  //       .then((response) => {
  //         // Handle success response
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         // Handle error
  //         console.error(error);
  //       });
  //   }
  // };

  // return (
  //   <div>
  //     <input onChange={(e) => setImage(e.target.files)} type="file" />
  //     <button onClick={handleClick}>ADD</button>
  //     <img src="http://localhost:8080/uploads\\2039809.jpg" />
  //   </div>
  // );
  return <div>Order list page</div>;
}

export default OrderList;
