import { assets } from '../assets/assets'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <>
      <div className='hero'>
        {/* hero left container */}
        <div className='heroLeft'>
          <div>
            <div className='hero-container'>
              <p className='hero-line'></p>
              <p className='hero-text'>OUR BESTSELLERS</p>
            </div>
            <h1>LATEST ARRIVALS</h1>
            <div className='hero-container-two'>
              <p className='hero-text-two'>SHOP NOW</p>
              <p className='hero-line'></p>
            </div>      
          </div>
        </div>

        {/* hero right container */}
        <img className='hero-img' src={assets.hero_img} />
      </div> 
    </>
  )
}

export default Hero
