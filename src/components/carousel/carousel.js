const controlStyle = {
    width: '5%',
}
const controlBtnStyle = {
    backgroundColor:'black', 
    width:'100%',
    height:"18%", 
    display:'flex', 
    alignItems:'center', 
    justifyContent:'center'
}
const controlIconStyle = {
    fontSize: '2rem',
    color:'white'
}
export default function Carousel(props) {;
    return (
        <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
        >
            <div class="carousel-inner" style={{height:'360px'}}>
                {props.children.map((item, index) => {
                    let active = index === 0 ? 'active' : '';
                    return (
                        <div class={`carousel-item ${active}`}>
                            <img src={item} />
                        </div>
                    )
                })}
            </div>
            <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
                style={controlStyle}
            >
                <div style={controlBtnStyle}>
                    <i class="fa-solid fa-chevron-left" style={controlIconStyle}></i>
                </div>
                <span class="sr-only">Previous</span>
            </a>
            <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
                style={controlStyle}
            >
                <div style={controlBtnStyle}>
                    <i class="fa-solid fa-chevron-right" style={controlIconStyle}></i>
                </div>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}