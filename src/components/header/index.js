import styles from './index.module.scss'
import TikiLogo from 'assets/tiki.png'
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div>
        <div className={styles.header}>
            <div className={styles.subheader_1}>
                <img src={TikiLogo} style={{height: '40px'}} alt="tiki logo"/>
                <div className={styles.search_ctn}>
                    <div className={styles.search_bar}>
                        <SearchIcon sx={{margin: 'auto 0', marginLeft:'15px'}}/>
                        <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Bạn tìm kiếm gì hôm nay"
                                inputProps={{ 'aria-label': 'Bạn tìm kiếm gì hôm nay' }}
                        />
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Button variant="text" sx={{px: '10px'}}>Tìm kiếm</Button>
                    </div>
                </div>
                <FontAwesomeIcon icon={['fas', 'shopping-cart']} style={{marginRight: '5px'}}/>
            </div>

            {/* <div class="sh1_btn sh1b">
                <i class="fa-solid fa-house sh1i"></i>
                <span>Trang chủ</span>
            </div>
            <div class="sh1_btn">
                <i class="fa-solid fa-crown sh1i"></i>            
                <span>Astra</span>
            </div>
            <div class="sh1_btn">
                <i class="fa-regular fa-face-smile sh1i"></i>            
                <span>Tài khoản</span>
            </div>
            <div class="center-ctn"><div class="separator" style="height:50%; margin-left:10px; margin-right: 10px;"></div></div>           
            <div class="sh1_btn">
                <i class="fa-solid fa-cart-shopping"></i>                
            </div> */}
        </div>
        {/* <div class="subheader">
            <div style="flex-grow: 1;">
                <ul class="sh2_list">
                    <li>trái cây</li>
                    <li>thịt, trứng</li>
                    <li>rau củ quả</li>
                    <li>sữa, bơ, phô mai</li>
                    <li>hải sản</li>
                    <li>gạo, mì ăn liền</li>
                    <li>đồ uống, bia rượu</li>
                    <li>bánh kẹo</li>
                </ul>
            </div>
            <div class="center-ctn" style="margin-right: 10px;">
                <i class="fa-solid fa-location-dot" style="margin-right: 5px;"></i>
                <div>Giao đến: Q.Hoan Kiem, P.Hang Trong, Ha Noi</div>
            </div>
        </div>     */}
    </div>
  )
} 