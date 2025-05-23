import React from 'react'
import homePic from '../../assets/homePic1.jpg'
import 'animate.css';
import cv from '../../assets/cv.pdf'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="mt-5 bg-bgShade" id = "home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-16 gap-2">
        <div className="md:w-[40%]">
          <img src={homePic} alt="" className="imgShadow hover:-translate-y-3" />
        </div>

        <div className="md:w-[70%] w-full ">
          <span className="md:text-4xl text-4xl font-bold text-headingColor leading-sung md:leading-[76px]
          mb-5">Namaste, I am </span> <br />
          <span className=' text-6xl mb-5 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 font-extrabold '>
           <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Keshab Pudasaini',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'IT Senior Officer ',
        1000,
        'IT Manager',
        1000,
        'Systems Administrator',
        1000,
        'Network Administrator',
        1000,
        'IT Support Specialist',
        1000,
        'Technical Support Engineer',
        1000,
        'IT Analyst',
        1000,
        'Software Support Engineer',
        1000,
        'Software & Hardware Troubleshooting',
        1000,
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
    </span>
            
          <p className=" mt-5 text-body text-xl leading-9 mb-9">An Information Technology (IT) Officer with a passion for leveraging technology to drive innovation and efficiency. Throughout my career, I have immersed myself in the dynamic world of IT, navigating the ever-evolving landscape with a keen focus on delivering cutting-edge solutions.As an IT Officer, I am passionate about staying up-to-date with the latest technological advancements and always aim to provide innovative solutions to improve the IT infrastructure of the organization.
          </p>
            <a target='_blank' href={cv}><button className="btn-primary">Download CV</button></a>
        </div>
        
      </div>

    </div>
  )
}

export default Home