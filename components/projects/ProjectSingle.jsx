import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const imageStyle = { maxWidth: '100%', height: 'auto' }

const ProjectSingle = (props) => {
  return (
    // <motion.div
    // 	initial={{ opacity: 0 }}
    // 	animate={{ opacity: 1, delay: 1 }}
    // 	transition={{
    // 		ease: 'easeInOut',
    // 		duration: 0.7,
    // 		delay: 0.15,
    // 	}}
    // >
    // 	<div
    // 		aria-label="Single Project"
    // 		passHref
    // 	>
    // 		<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
    // 			<div>
    // 				<Image
    // 					src={props.img}
    // 					className="rounded-t-xl border-none"
    // 					alt="Single Project"
    // 					layout="responsive"
    // 					width={120}
    // 					height={120}
    // 				/>
    // 			</div>
    // 			<div className="text-center px-4 py-6">
    // 				<p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
    // 					{props.title}
    // 				</p>
    // 				<span className="text-lg text-ternary-dark dark:text-ternary-light">
    // 					{props.category}
    // 				</span>
    // 			</div>
    // 		</div>
    // 	</div>
    // </motion.div>
    //
    <div class='w-96 bg-secondary-light dark:bg-secondary-dark shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
      <img src={props.img} alt='Product' class='object-cover rounded-t-xl aspect-video' />
      <div class='px-4 py-3 w-96'>
        <span class='text-gray-400 dark:text-gray-200 mr-3 uppercase text-xs'>{props?.category}</span>
        <p class='text-lg font-bold dark:text-white text-black truncate block capitalize'>{props.title}</p>
        <div class='flex items-center'>
          <p class='text-lg font-medium dark:text-white text-black cursor-auto my-3'>{props.info}</p>
        </div>
      </div>
      <div className='flex justify-between w-full items-center gap-3 p-4'>
        <div className='flex gap-2'>
          {props?.tech?.map((t, i) => {
            return (
              <Image src={t} key={i} height={38} width={38} className='p-2 bg-ternary-dark rounded-lg' style={{ objectFit: 'cover' }} />
            )
          })}
        </div>
       
          {!props?.private ? (
            <Link
              href={props.url}
              target='blank'
              className='text-blue-500 font-semibold text-md '
            >
              Visit
            </Link> 
          ) : <span className='dark:text-white font-semibold'>Private</span>}
       
      </div>
    </div>
  )
}

export default ProjectSingle
