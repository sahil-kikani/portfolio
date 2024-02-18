import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';

function AboutMeBio() {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	return (
		<>
			<h1 className='dark:text-white text-[34px] mt-6 text-center'>About Me</h1>
		<div className="md:flex  w-full items-center justify-center sm:gap-10 mt-10 sm:mt-20">
		<div className="w-full md:w-1/4 mb-7 md:mb-0 items-center justify-center flex ">
		  <Image
			src="/images/profile1.jpg"
			width={200}
			height={200}
			className="rounded-lg"
			alt="Profile Image"
		  />
		</div>
	  
		<div className="font-general-regular w-full md:w-3/4 text-left">
		  {aboutMe.map((bio) => (
			<p
			  className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-center md:text-left"
			  key={bio.id}
			>
			  {bio.bio}
			</p>
		  ))}
		</div>
	  </div>
	  </>
	  
	);
}

export default AboutMeBio;
