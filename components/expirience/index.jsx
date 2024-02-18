import React from 'react'
import YudizIcon from '../../public/yudiz.svg'
import Image from 'next/image'

function Experience() {

    const data = [
        'Contributed to a diverse array of projects, such as CricTracker, EvIndia and Run To Learn, showcasing versatility and adaptability in different domains.',
        'Demonstrated proficiency in creating reusable components and responsive layouts, ensuring consistent user experiences across various devices and screen sizes.',
        'Implemented advanced features and functionality in web applications, leveraging technologies like ReactJS, NextJS, and GraphQL to enhance user experiences and meet project requirements',
        'Actively participated in Agile methodologies such as Scrum or Kanban, attending sprint planning, stand-up meetings, and retrospectives, ensuring efficient project delivery and alignment with client expectations'
    ]

  return (
    <section className='flex flex-col justify-center items-center mt-[60px]'>
        <h1 className='dark:text-white text-[34px]'>Experience</h1>
        <div className='w-full md:w-[75%] mt-4 rounded-lg bg-primary-light dark:bg-secondary-dark'>
            <div className='flex justify-start p-3 items-center'>
            <div className='bg-white m-2 rounded-lg w-[36px] '>
            <Image src={YudizIcon} />
            </div>
            <div>
            <h4 className='dark:text-white'>Yudiz Solutions Limited</h4>
            <span className='dark:text-gray-200 text-gray-500 text-sm '>July 2022 - Present</span>
            </div>
            </div>

            <div className='w-full h-[1px] bg-gray-400' />

            

            <div className='dark:text-white text-xl m-2 text-left font-semibold'>Front End Developer</div>
            <div className='flex flex-col gap-6 justify-start items-center p-4'>
            {data?.map((d, i) => {
                return(
                    <div className='flex justify-start items-center' key={i}>
                        <li className='text-lg text-left font-medium dark:text-white'>{d}</li>
                        </div>
                )
            })}
            </div>
        </div>
    </section>
  )
}

export default Experience