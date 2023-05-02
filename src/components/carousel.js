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
            >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
            </a>
            <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
            >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}