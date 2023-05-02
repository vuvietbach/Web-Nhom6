import styles from "./index.module.scss";
import TikiLogo from "assets/tiki.png";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import PlaceIcon from "@mui/icons-material/Place";

export default function Header() {
  const thucPham = [
    "trái cây",
    "thịt, trứng",
    "rau củ quả",
    "sữa, bơ, phô mai",
    "hải sản",
    "gạo, mì ăn liền",
    "đồ uống, bia rượu",
    "bánh kẹo",
  ];
  const thucPhamLink = thucPham.map((item, index) => {
    return (
      <Link
        href="#"
        underline="none"
        sx={{ mr: "10px", color: "text.secondary", fontSize: "0.9rem" }}
      >
        {item}
      </Link>
    );
  });
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div style={{ margin: "0 auto", width: "var(--content-max-width)" }}>
        <Box
          sx={{
            height: "40px",
            display: "flex",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          <img src={TikiLogo} style={{ height: "40px" }} alt="tiki logo" />
          <div style={{ display: "flex", alignItems: "center", flexGrow: "1" }}>
            <div
              style={{
                width: "650px",
                height: "35px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                border: "1px solid grey",
                borderRadius: "7px",
              }}
            >
              <SearchIcon sx={{ margin: "auto 0", marginLeft: "15px" }} />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Bạn tìm kiếm gì hôm nay"
                inputProps={{ "aria-label": "Bạn tìm kiếm gì hôm nay" }}
              />
              <div
                class="vr"
                style={{ height: "70%", alignSelf: "center" }}
              ></div>
              <Button variant="text" sx={{ px: "10px" }}>
                Tìm kiếm
              </Button>
            </div>
          </div>
          <Button sx={{ height: "100%" }} color={"secondary"}>
            <img
              src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png"
              style={{ height: "70%", paddingRight: "5px" }}
            />
            <Typography fontSize={14}>Trang chủ</Typography>
          </Button>
          <Button sx={{ height: "100%" }}>
            <img
              src="https://salt.tikicdn.com/ts/upload/41/28/7d/4713aa0d2855c5c770799f248692f0c5.png"
              style={{ height: "70%", paddingRight: "5px" }}
            />
            <Typography fontSize={14}>Astra</Typography>
          </Button>
          <Button sx={{ height: "100%" }}>
            <img
              src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png"
              style={{ height: "70%", paddingRight: "5px" }}
            />
            <Typography fontSize={14}>Tài khoản</Typography>
          </Button>
          <div class="vr" style={{ height: "70%", alignSelf: "center" }}></div>
          <IconButton aria-label="gio hang">
            <ShoppingCartIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItem: "center",
            height: "35px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "140px",
            }}
          >
            {thucPhamLink}
          </div>
          <Link
            href="#"
            underline="none"
            sx={{ mr: "10px", display: "flex", alignItems: "center" }}
          >
            <PlaceIcon sx={{ mr: "5px", fontSize: "18px" }} />
            <Typography sx={{ fontSize: "15px" }}>Giao đến: </Typography>
            <Typography sx={{ fontSize: "15px", textDecoration: "underline" }}>
              Q.Hoan Kiem, P.Hang Trong, Ha Noi
            </Typography>
          </Link>
        </Box>
      </div>
    </div>
  );
}
