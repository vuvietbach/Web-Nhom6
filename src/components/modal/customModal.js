import { useState } from "react";
import { Modal } from "react-bootstrap";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { orange } from "@mui/material/colors";

const CustomModal = ({ children, onConfirm }) => {
    const [showModal, setShowModal] = useState(false);
  
    const handleOpenModal = (event) => {
      event.preventDefault();
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const handleConfirm = () => {
      onConfirm();
      setShowModal(false);
    };
  
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <div onClick={handleOpenModal}>{children}</div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Body>
            <h2>
              <WarningAmberIcon
                sx={{ color: "#F96C08" }}
                style={{
                  paddingBottom: "3px",
                  color: orange,
                  marginRight: "5px",
                }}
              />
              Xác nhận đặt mua
            </h2>
            <div className="content">
              Vui lòng kiểm tra kĩ trước khi đặt hàng
            </div>
            <Stack spacing={2} direction="row" style={{ left: "100px" }}>
              <Button
                variant="outlined"
                onClick={() => handleConfirm()}
                style={{ marginLeft: "50px" }}
              >
                Xác nhận
              </Button>
              <Button variant="contained" onClick={() => handleCloseModal()}>
                Hủy
              </Button>
            </Stack>
          </Modal.Body>
        </Modal>
      </div>
    );
  };
export default CustomModal;