import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SellerInformation from "./sellerinformation";
import ItemList from "./itemlist";
import OrderList from "./orderlist";
import UpdateInfo from "./updateinformation";

const drawerWidth = 240;

function SellerMenu(props) {
  const [showShopInfo, setShowShopInfo] = React.useState(true);
  const [showItemList, setShowItemList] = React.useState(false);
  const [showOrderList, setShowOrderList] = React.useState(false);
  const [showUpdateInfo, setShowUpdateInfo] = React.useState(false);

  const handleShowShopInfo = () => {
    setShowShopInfo(true);
    setShowItemList(false);
    setShowOrderList(false);
    setShowUpdateInfo(false);
  };

  const handleShowItemList = () => {
    setShowShopInfo(false);
    setShowItemList(true);
    setShowOrderList(false);
    setShowUpdateInfo(false);
  };

  const handleShowOrderList = () => {
    setShowShopInfo(false);
    setShowItemList(false);
    setShowOrderList(true);
    setShowUpdateInfo(false);
  };

  const handleShowUpdateInfo = () => {
    setShowShopInfo(false);
    setShowItemList(false);
    setShowOrderList(false);
    setShowUpdateInfo(true);
  };

  const drawer = (
    <div>
      <List>
        <ListItem key="1" disablePadding>
          <ListItemButton onClick={handleShowShopInfo}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText
              sx={{ fontSize: "14px", fontFamily: "Arial", padding: "5px" }}
              disableTypography
              primary="Thông tin cửa hàng"
            />
          </ListItemButton>
        </ListItem>

        <ListItem key="2" disablePadding>
          <ListItemButton onClick={handleShowItemList}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText
              sx={{ fontSize: "14px", fontFamily: "Arial", padding: "5px" }}
              disableTypography
              primary="Danh sách sản phẩm"
            />
          </ListItemButton>
        </ListItem>

        <ListItem key="3" disablePadding>
          <ListItemButton onClick={handleShowOrderList}>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText
              sx={{ fontSize: "14px", fontFamily: "Arial", padding: "5px" }}
              disableTypography
              primary="Danh sách đơn hàng"
            />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem key="4" disablePadding>
          <ListItemButton onClick={handleShowUpdateInfo}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText
              sx={{ fontSize: "14px", fontFamily: "Arial", padding: "5px" }}
              disableTypography
              primary="Chỉnh sửa thông tin"
            />
          </ListItemButton>
        </ListItem>

        <ListItem key="5" disablePadding>
          <ListItemButton onClick={() => alert("check2")}>
            <ListItemIcon>
              <PowerSettingsNewIcon />
            </ListItemIcon>
            <ListItemText
              sx={{ fontSize: "14px", fontFamily: "Arial", padding: "5px" }}
              disableTypography
              primary="Đăng xuất"
            />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex", backgroundColor: "white", height: "100vh" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {showShopInfo && <SellerInformation />}
      {showItemList && <ItemList />}
      {showOrderList && <OrderList />}
      {showUpdateInfo && <UpdateInfo />}
    </Box>
  );
}

SellerMenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SellerMenu;
