import React from 'react';
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

export default function Carousel({children1, children2}) {;
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style={{width:"100%"}}>
            <div class="carousel-inner">
                {/* {
                    React.Children.map(children, (child, index) => { 
                        let active = index === 0 ? 'active' : '';
                        return (
                            <div class={`carousel-item`}>
                                {child}
                            </div>
                        )
                    })
                }  */}
                <div class="carousel-item active">
                    {children1}
                </div>
                <div class="carousel-item">
                    {children2}
                </div>

            </div>
            <a href="#carouselExampleControls" class="carousel-control-prev custom-carousel-control" role="button" data-slide="prev" style={{width:"5%"}}>
                <div style={controlBtnStyle}>
                    <i class="fa-solid fa-chevron-left" style={controlIconStyle}></i>
                </div>
                <span class="sr-only">Previous</span>
            </a>
            <a href="#carouselExampleControls" class="carousel-control-next custom-carousel-control" role="button" data-slide="next">
                <div style={controlBtnStyle}>
                    <i class="fa-solid fa-chevron-right" style={controlIconStyle}></i>
                </div>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}