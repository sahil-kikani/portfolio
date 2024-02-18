import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { motion } from 'framer-motion';
import Button from '../components/reusable/Button';
import AppBanner from '../components/shared/AppBanner';
import AboutMeBio from '../components/about/AboutMeBio';
import Skills from '../components/skills';
import Link from 'next/link';
import Experience from '../components/expirience';
import ContactForm from '../components/contact/ContactForm';
import ContactDetails from '../components/contact/ContactDetails';

export default function Home() {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title="Home" />

			<AppBanner />
			<AboutMeBio/>
			<Skills/>
			<Experience/>

			<ProjectsGrid />

			{/* <div className="mt-10 sm:mt-15 flex justify-center">
				<div className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
					<Link href="/projects" aria-label="More Projects" passHref>
						<Button title="More Projects" />
					</Link>
				</div>
			</div> */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.5,
					delay: 0.1,
				}}
				className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5"
			>
				<ContactForm />

				<ContactDetails />
			</motion.div>
		</div>
	);
}
