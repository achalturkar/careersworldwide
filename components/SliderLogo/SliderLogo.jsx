"use client"
import Slider from 'react-infinite-logo-slider'

const SliderLogo = ({ logo }) => {

    return (
        <div className=' py-8'>
            <Slider
                width="250px"
                duration={40}
                pauseOnHover={true}
                blurBorders={false}
                blurBorderColor={'#fff'}
                className="p-8"
            >



                {
                    logo.map((each, index) => (
                        <Slider.Slide key={index}>
                            <img src={each.img} alt="any" className='w-28' />
                        </Slider.Slide>

                    ))
                }
            </Slider>
        </div>
    )
}

export default SliderLogo;