import React from 'react'
import { SkillsData } from '../../data/skills'
import Image from 'next/image'

function Skills() {
  return (
    <div className='w-full h-full mt-12 flex flex-col justify-center items-center '>
        <h1 className='dark:text-white text-[34px]'>Skills</h1>
        <section className='mt-4'>
            <div className='w-full grid grid-cols-3 sm:grid-cols-5 xl:grid-col-12 justify-center items-center gap-3'>
            {SkillsData.map((skill, i) => {
                return(
                    <div key={i} className='bg-secondary-light dark:bg-secondary-dark rounded-lg p-4 flex flex-col justify-center items-center h-[150px] w-[150px] hover:bg-ternary-light dark:hover:bg-ternary-dark'>
                        <Image alt='' src={skill?.icon} height={64} width={64} />
                        <h3 className='text-lg px-3 py-2 text-center dark:text-primary-light text-primary-dark font-semibold'>{skill?.name}</h3>
                    </div>
                )
            })}
                         </div>
        </section>
    </div>
  )
}

export default Skills