import React , {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FirstHope from '../accets/1.jpg';
import SecondHope from '../accets/2.jpg';
import LastHope from '../accets/3.jpg';


export default class CarouselBox extends Component {
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height={550}
                        src={FirstHope}
                        alt="First Hope"
                    />    
                    <Carousel.Caption>
                        <h3>First Hope is Hopation</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height={550}
                        src={SecondHope}
                        alt="Second Hope"
                    />    
                    <Carousel.Caption>
                        <h3>Second Hope is Awsome</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height={550}
                        src={LastHope}
                        alt="First Hope"
                    />    
                    <Carousel.Caption>
                        <h3>Last Hope did not Die</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        )
    }
}