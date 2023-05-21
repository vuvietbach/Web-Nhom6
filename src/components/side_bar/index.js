import Button from '@mui/material/Button';
const s1 = {
    backgroundColor: '#fff', 
    overflow: 'auto',
    borderRadius: '7px',
    marginBottom: '15px',
    padding: '10px',

}
const s1h = {
    margin: '10px',
}
const iS = {
    height: '100%',
    marginRight: '10px',
}
const bS = {
    width: '100%',
    height: '45px',
    justifyContent: 'flex-start',
}
const nI = {

}
const SideCard = () => {
    return (
        <div style={s1}>
            <h6 style={{marginLeft:'10px'}}>Nổi bật</h6>
            <Button sx={bS} color={'secondary'}>
                <img 
                    src='https://salt.tikicdn.com/cache/100x100/ts/upload/ae/72/a3/d4503c3ece932dc8c57d2d5c97cd6ffc.png.webp'
                    style={iS}
                />
                <span>Giá rẻ mỗi ngày</span>
            </Button> 
        </div>
    )
}
export default function SideBar() {
    return (
        <div style={{maxHeight: '100vh', position: 'sticky', overflowY: 'scroll', top: '15px'}}>
            <SideCard />
            <SideCard />
        </div>
    )
}