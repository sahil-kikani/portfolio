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
    <div className='w-full  mb-4 md:mb-0'>
      <div className='h-72 block group relative mx-2 overflow-hidden shadow-lg'>
        <Image src={props.img} className='rounded-t-xl border-none' alt='Single Project'  fill/>
        <div className='absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10'></div>
        <div className='absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-[450px] group-hover:translate-y-0 delay-100'>
          <div className='h-1/2 relative'>
            <div className='absolute bottom-0'>
              <h2 className='font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline'>
			  {props.title}
              </h2>
            </div>
          </div>
          <div className='h-full'>
            <p className='text-white text-md pb-4 opacity-0 transition duration-300 group-hover:opacity-100'>
              {props?.info}
            </p>
			<div className='flex justify-center items-center gap-2'>			
			{props?.tech?.map((t, i) => {
				return(
					<Image src={t} key={i} height={32} width={36} className='p-1 bg-white rounded-lg' style={{objectFit: 'cover'}}/>
				)
			})}
			{!props?.private &&
				<Link href={props.url} target='blank' className='bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 rounded-md border-white focus:border-black focus:bg-gray-300'>
              Visit
            </Link>
			}
			            
			</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSingle
