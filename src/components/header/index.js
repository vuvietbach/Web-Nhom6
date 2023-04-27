import styles from './index.module.scss'
import TikiLogo from 'assets/tiki.png'
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
export default function Header() {
    const thucPham = ['trái cây', 'thịt, trứng', 'rau củ quả', 'sữa, bơ, phô mai', 'hải sản', 'gạo, mì ăn liền', 'đồ uống, bia rượu', 'bánh kẹo'];
    const thucPhamLink = thucPham.map((item, index) => {
        <Link href='#' underline='none'>{item}</Link>
    })
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
                {/* <FontAwesomeIcon icon={['fas', 'shopping-cart']} style={{marginRight: '5px'}}/> */}
                <Button sx={{height: '100%'}}>
                    <img src='https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png' style={{height:'70%', paddingRight:'5px'}}/>
                    <Typography fontSize={14}>Trang chủ</Typography>
                </Button> 
                <Button sx={{height: '100%'}}>
                    <img src='https://salt.tikicdn.com/ts/upload/41/28/7d/4713aa0d2855c5c770799f248692f0c5.png' style={{height:'70%', paddingRight:'5px'}}/>
                    <Typography fontSize={14}>Astra</Typography>
                </Button> 
                <Button sx={{height: '100%'}}>
                    <img src='https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png' style={{height:'70%', paddingRight:'5px'}}/>
                    <Typography fontSize={14}>Tài khoản</Typography>
                </Button> 
                <Divider orientation="vertical" variant="middle" flexItem sx={{mx: '10px'}}/>
                <IconButton aria-label="gio hang"><ShoppingCartIcon /></IconButton>
            </div>
            <Box sx={{display:'flex'}}>
                {thucPham.map((item, index) => {<span>{item}</span>})}
            </Box>

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