
import { assets } from '../assets/assets'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
    <div>
      <div className="footer-div">
        <div>
          <img src={assets.logo} className='footer-img' />
          <p className='footer-text'>
          Shop the latest trends with us! Premium quality, fast shipping, and exclusive deals. Stay stylish—follow us for updates.
          </p>
        </div>

        <div>
        <p className='footer-title'>COMPANY</p>
        <ul className='footer-column'>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
        </div>

        <div>
          <p className='footer-title'>GET IN TOUCH</p>
          <ul className='footer-column'>
            <li>+234 704 236 0983</li>
            <li>funshofaleye1@gmail.com</li>
          </ul>
        </div>

        
      </div> 
      <div>
        <hr />
        <p className='footer-copyright'>Copyright 2025@ forever.com - All Right Reserved</p>
      </div>
      
    </div>
     
    </>
  )
}

export default Footer
