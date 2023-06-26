import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./DeleteCartModal.css";
import { orange } from "@mui/material/colors";
import axios from "axios";
const DeleteCartModalButton = (props) => {
    const { user_id, item_id } = props;
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    // Xử lý logic xóa sản phẩm ở đây
    const data = {
        user_id : user_id,
        item_id : item_id
    }
    axios
        .post(`${window.env.REACT_APP_SERVER_URL}/cart/delete-cart`, data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });

    console.log(data);
    setShowModal(false);
  };

  return (
    <div className="main" style={{width:"250px"}}>
      <a href="#" onClick={handleOpenModal}>
        {props.children}
      </a>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Body>
            <h2>
                <WarningAmberIcon sx={{ color: "#F96C08" }} style={{
                    paddingBottom:"3px",
                    color: orange,
                    marginRight:"5px"
                }} />
                Xóa sản phẩm
          </h2>
          <div className="content">Bạn có muốn xóa sản phẩm đang chọn?</div>
          <Stack spacing={2} direction="row" style={{left:"100px"}}>
            <Button variant="outlined" onClick={handleConfirmDelete} style={{marginLeft:"50px"}}>
              Xác nhận
            </Button>
            <Button variant="contained" onClick={handleCloseModal}>
              Hủy
            </Button>
          </Stack>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DeleteCartModalButton;
