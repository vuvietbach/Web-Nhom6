import { Grid, Typography } from "@mui/material";
import SideBar from "components/side_bar";
import Carousel from 'react-bootstrap/Carousel';
import Button from '@mui/material/Button';
const iS = {
    width: '100%',
    height: '230px'
}
const s1 = {
    backgroundColor: '#fff',
    borderRadius: '7px',
    padding: '10px'
}
const iA = [
    'https://salt.tikicdn.com/ts/brickv2og/48/8b/6b/363e7197f5487145c3294951da0d6f11.png',
    'https://salt.tikicdn.com/ts/brickv2og/48/8b/6b/363e7197f5487145c3294951da0d6f11.png',
    'https://salt.tikicdn.com/ts/brickv2og/48/8b/6b/363e7197f5487145c3294951da0d6f11.png',
    'https://salt.tikicdn.com/ts/brickv2og/48/8b/6b/363e7197f5487145c3294951da0d6f11.png',
    'https://salt.tikicdn.com/ts/brickv2og/48/8b/6b/363e7197f5487145c3294951da0d6f11.png',
    'https://salt.tikicdn.com/ts/brickv2og/48/8b/6b/363e7197f5487145c3294951da0d6f11.png',
]
const iS1 = {
    width: '100%',
    border: '1px solid #efefef',
    borderRadius: '4px'
}
const pI = () => {
    return (
        <span aria-hidden="true" className="carousel-control-prev-icon" style={{marginLeft:'0'}}/>	
    )
}
const nI = () => {
    return (
        <span aria-hidden="true" className="carousel-control-next-icon" style={{marginRight:'0'}}/>
    )
}
const iS2 = {
    width: '40px',
}
const btnArr = [
    ['https://salt.tikicdn.com/cache/w100/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png.webp', 'Dành cho bạn'],
    ['https://salt.tikicdn.com/cache/w100/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png.webp', 'Dành cho bạn'],
    ['https://salt.tikicdn.com/cache/w100/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png.webp', 'Dành cho bạn'],
    ['https://salt.tikicdn.com/cache/w100/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png.webp', 'Dành cho bạn'],
    ['https://salt.tikicdn.com/cache/w100/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png.webp', 'Dành cho bạn'],
    ['https://salt.tikicdn.com/cache/w100/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png.webp', 'Dành cho bạn'],
]
const LandingPage = () => {
    return (
        <div style={{backgroundColor: '#efefef'}}>
            <div style={{width:'var(--max-content-width)', margin:'0 auto', paddingTop:'15px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                        <SideBar />
                    </Grid>
                    <Grid item xs={9.5}>
                        <Grid container spacing={2} sx={{gridAutoRows:'max-content'}}>
                            <Grid item xs={9}>
                                <img style={iS} src='https://salt.tikicdn.com/cache/w1080/ts/tikimsp/75/e6/eb/ac3c8bc53fcca5bfa1a7e2c6bb8aea77.png.webp'/>
                            </Grid>
                            <Grid item xs={3}>
                                <img style={iS} src='https://salt.tikicdn.com/cache/w750/ts/tikimsp/2c/42/a3/a771e6fca78aeed42de750bfd1e0a59f.png.webp'/>
                            </Grid>
                            <Grid item xs={12}>
                                <div style={s1}>
                                    <h5>Bộ sưu tập nổi bật</h5>
                                    <Carousel nextIcon={nI()} prevIcon={pI()}>
                                        <Carousel.Item>
                                            <Grid container spacing={1}>
                                                {iA.map((i, index) => {
                                                    return (
                                                        <Grid item xs={2}>
                                                            <img style={iS1} src={i}/>
                                                        </Grid>
                                                    )
                                                })}
                                            </Grid>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Grid container spacing={1}>
                                                {iA.map((i, index) => {
                                                    return (
                                                        <Grid item xs={2}>
                                                            <img style={iS1} src={i}/>
                                                        </Grid>
                                                    )
                                                })}
                                            </Grid>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </Grid>
                            <Grid item xs={12} sx={{position:'sticky', top:'0px', zIndex:'10'}}>
                                <div style={{borderRadius:'7px 7px 0 0', backgroundColor:'#fff', overflow:'auto', }}>
                                    <h5 style={{margin:'10px'}}>Gợi ý hôm nay</h5>
                                    <div style={{display:'flex'}}>
                                        {btnArr.map((i, index) => {
                                            return (
                                                <Button sx={{width:'100%', flexDirection:'column', borderRadius:'0px'}}>
                                                    <img style={{width:'40px'}} src={i[0]}/>
                                                    <span>{i[1]}</span>
                                                </Button> 
                                            )
                                        })}
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={2}>
                                        <div style={{display:'flex', flexDirection:'column', alignItems: 'center',backgroundColor:'#fff'}}>
                                            <img style={{width:'100%'}}src="https://salt.tikicdn.com/cache/280x280/ts/product/f5/52/80/675e31a670afc560e7b0e46c0b65fb4f.png.webp"/>                   
                                            <div style={{padding:'10px'}}>
                                                <div>Apple Iphone 14 Pro Max</div>
                                                <div>4.95 Da ban 1000</div>
                                                <div>27.000.000 d</div>
                                                <div>Tang toi 687 ASA(117k) = hoan tien</div>
                                                <div>Tra gop Nhieu mau</div>
                                                <div>Now Giao sieu toc 2h</div>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default LandingPage;