import TikiLogo from "../assets/tiki.png";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import { SearchBar } from "components/searchBar/searchBar";
import "./header.css";
function HeaderButton({fa_icon, text}) {
    return (
        <button type="button" className="unstyled-button header-button">
            <i class={fa_icon}></i>
            {text&&(
                <div>{text}</div>
            )}
    </button>
    )
}
const headerButtons = [
    {
        fa_icon: "fa fa-home",
        text: "Trang chủ"
    },
    {
        fa_icon: "fa-solid fa-crown",
        text: "Astra"
    },
    {
        fa_icon: "fa-regular fa-face-smile-beam",
        text: "Tài khoản"
    }
]
const thuc_pham = [
    "trái cây",
    "thịt, trứng",
    "rau củ quả",
    "sữa, bơ, phô mai",
    "hải sản",
    "gạo, mì ăn liền",
    "đồ uống, bia rượu",
    "bánh kẹo",
];
export default function Header() {


  return (
    <div style={{ backgroundColor: "#fff", width: "100%", paddingTop: "5px"}}>
      <div style={{ margin: "0 auto", width: "var(--content-max-width)" }}>
        <div class="header-row">
          <img src={TikiLogo} style={{ height: "40px" }} alt="tiki logo" />
          <div
            class="search-bar-ctn"
            style={{ display: "flex", alignItems: "center", flexGrow: "1" }}
          >
            <SearchBar />
          </div>
            {
                headerButtons.map((item, index)=>{
                    return (
                        <HeaderButton
                            fa_icon={item.fa_icon}
                            text={item.text}
                        />
                    )
                })
            }
            <div className="vertical-rule"/>
            <div className="unstyled-button header-button cart-icon">
                <i class="fa-solid fa-cart-shopping"></i>
                <span class="cart-count">3</span>
            </div>

        </div>
        <div style={{ display:"flex", alignItems:"center", height: "35px", justifyContent: "space-between", color:"#717171"}}>
            <div class="d-flex flex-"></div>
            <a href="#" className="unstyled-link">
                <span style={{fontSize:"0.9rem"}}>
                    <i class="fa-solid fa-location-dot" style={{marginRight:'3px'}}></i>
                    <span>Giao đến:   </span>
                    <span style={{textDecoration:"underline", color:"#000", fontWeight:"500"}}>Q.Hoàn Kiếm, P.Hàng Trống, Hà Nội</span>
                </span>
            </a>
        </div>
      </div>
    </div>
  );
}
