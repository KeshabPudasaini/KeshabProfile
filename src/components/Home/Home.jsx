import React from 'react'
import homePic from '../../assets/homePic.jpg'

const Home = () => {
  return (
    <div className="mt-5 bg-bgShade" id = "home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-16 gap-2">
        <div className="md:w-1/2">
          <img src={homePic} alt="" className="imgShadow hover:-translate-y-3" />
        </div>

        <div className="md:w-1/2 w-full mt-5">
          <h1 className="md:text-6xl text-4xl font-bold text-headingColor leading-sung md:leading-[76px]
          mb-5">Namaste, I am <h1 className="text-primary animate-pulse "> Keshab Pudasaini </h1> </h1>
          <p className="text-body text-xl leading-9 mb-9">An Information Technology (IT) Officer with a passion for leveraging technology to drive innovation and efficiency. Throughout my career, I have immersed myself in the dynamic world of IT, 
            navigating the ever-evolving landscape with a keen focus on delivering cutting-edge solutions.</p>

            <a href="/"><button className="btn-primary">Get in Touch</button></a>
        </div>
        
      </div>

    </div>
  )
}

export default Home