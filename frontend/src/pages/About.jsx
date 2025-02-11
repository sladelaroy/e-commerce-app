import React from 'react'
import '../styles/About.css'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='about-div'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='about-img-div'>
        <img className='about-img' src={assets.about_img} alt="" />
        <div className='about-info-div'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio consequuntur hic a inventore veritatis laborum, sapiente iure reprehenderit nostrum amet vero consequatur, doloremque quidem repellat nisi quam accusantium cumque!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio consequuntur hic a inventore veritatis laborum, sapiente iure reprehenderit nostrum amet vero consequatur, doloremque quidem repellat nisi quam accusantium cumque!</p>
          <b>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, optio cum quos quia</p>
        </div>
      </div>

      <div className='about-title-why-us'>
        <Title text1={'WHY'} text2={'US'} />
      </div>

      <div className='about-gurantees-div'>
        <div className='about-gurantees'>
          <b>Quality Assurance:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minima molestiae ea dignissimos animi quibusdam blanditiis minus hic ullam porro saepe sapiente</p>
        </div>
        <div className='about-gurantees'>
          <b>Convenience:</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, sed similique consequatur earum recusandae architecto</p>
        </div>
        <div className='about-gurantees'>
          <b>Exceptional Customer Service:</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, sed similique consequatur earum recusandae architecto</p>
        </div>
      </div>


      <NewsLetterBox />
    </div>
  )
}

export default About
