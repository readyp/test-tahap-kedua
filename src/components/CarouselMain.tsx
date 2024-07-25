import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import React from 'react'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

type CarouselMainProps = {
  banners: string[]
}

const CarouselMain: React.FC<CarouselMainProps> = ({ banners }) => {

  return (
    <Carousel
      responsive={responsive}
      autoPlay
      swipeable
      autoPlaySpeed={2_000}
      infinite
      arrows={false}
    >
      {banners.map((banner) => (
        <div key={banner}>
          <img src={banner} alt="" />
        </div>
      ))}
    </Carousel>
  )
}

export { CarouselMain }
