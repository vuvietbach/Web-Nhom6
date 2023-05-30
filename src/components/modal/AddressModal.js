import React, { useEffect } from "react";
import data from "./data.json";
import "./AddressModal.css";
import { Modal, Button } from "react-bootstrap";
const ChooseAddress = () => {
  // region State
  const default_state = { value: "", selected: false, changed: false, options: [] };
  const [change, setChange] = React.useState(false);
  const [city, setCity] = React.useState(default_state);
  const [district, setDistrict] = React.useState(default_state);
  const [ward, setWard] = React.useState(default_state);
  // get from redux state
  const [address, setAddress] = React.useState("");
  // endregion

  // reset state when change
  useEffect(() => {
    setCity({ ...default_state, options: data });
    setDistrict(default_state);
    setWard(default_state);
  }, [change]);

  useEffect(() => {
    if (city.changed) {
      let options = city.options.find((item) => item.Name == city.value).Districts;
      setDistrict({ ...default_state, options: options });
      setWard(default_state);
      setCity((prevState) => ({
        ...prevState,
        changed: false,
      }));
    }
  }, [city.changed])
  useEffect(() => {
    if (district.changed) {
      let options = district.options.find((item) => item.Name == district.value).Wards;
      setWard({ ...default_state, options: options });
      setDistrict((prevState) => ({
        ...prevState,
        changed: false,
      }));
    }
  }, [district.changed])

  const handleClicked = () => {
    if (ward.selected) {
      let address = `${ward.value}, ${district.value}, ${city.value}`;
      setAddress(address);
    }
  };
  // call back when change
  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.name == "city") {
      let changed = event.target.value != city.value ? true : false;
      setCity((prevState)=>({ 
        ...prevState,
        value: event.target.value, 
        selected: true, 
        changed: changed
      }));
    } else if (event.target.name == "district") {
      let changed = event.target.value != district.value ? true : false;
      setDistrict((prevState)=>({
        ...prevState,
        value: event.target.value,
        selected: true,
        changed: changed,
      }));
    } else {
      setWard((prevState)=>({
        ...prevState,
        value: event.target.value,
        selected: true,
      }));
    }
  };

  return (
    <div>
      <form>
        <input type="radio" name="optRadio" id="radio1" onClick={() => setChange(false)} checked={!change ? true : false}/>
        <label for="radio1">{address}</label> <br />
        <input type="radio" name="optRadio" id="radio2" onClick={() => setChange(true)} />
        <label for="radio2">Chọn địa chỉ khác</label> <br />
      </form>
      {change && (
        <table>
          <tr>
            <th>Tỉnh/Thành Phố</th>
            <td>
              <select name="city" onChange={handleChange}>
                <option value="" disabled selected hidden>
                  Vui lòng chọn tỉnh/thành phố
                </option>
                {city.options.map((item) => {
                  return <option value={item.Name}>{item.Name}</option>;
                })}
              </select>
            </td>
          </tr>
          <tr>
            <th>Quận/Huyện</th>
            <td>
              <select
                name="district"
                disabled={!city.selected ? true : false}
                onChange={handleChange}
              >
                <option
                  value=""
                  disabled
                  selected={!city.selected || city.changed ? true : false}
                  hidden
                >
                  Vui lòng chọn quận/huyện
                </option>
                {district.options.map((item) => {
                  return <option value={item.Name}>{item.Name}</option>;
                })}
              </select>
            </td>
          </tr>
          <tr>
            <th>Phường/Xã</th>
            <td>
              <select
                name="ward"
                disabled={!district.selected ? true : false}
                onChange={handleChange}
              >
                <option
                  value=""
                  disabled
                  selected={
                    !district.selected || district.changed ? true : false
                  }
                  hidden
                >
                  Vui lòng chọn phường/xã
                </option>
                {ward.options.map((item) => {
                  return <option value={item.Name}>{item.Name}</option>;
                })}
              </select>
            </td>
          </tr>
        </table>
      )}
    </div>
  );
};
export const AddressModalButton = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);

  const handleOpenModal = (event) => {
    event.preventDefault();
    setShowModal(true);
  };
  const handleCloseModal = (event) => {
    setShowModal(false);
  };
  return (
    <div>
      <a href="" onClick={handleOpenModal}>
        {props.children}
      </a>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Địa chỉ giao hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div class="address-description">
                Hãy chọn địa chỉ nhận hàng để được dự báo thời gian giao hàng
                cùng phí đóng gói, vận chuyển một cách chính xác nhất.
            </div>
            <ChooseAddress />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal} style={{margin: "0 auto"}}>
              Giao đến địa chỉ này
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
