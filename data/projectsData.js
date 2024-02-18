import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Crictracker',
		url: 'https://www.crictracker.com/',
		category: 'Web Application',
		img: '/images/projects/p1.png',
		info:'Crictracker is a dynamic platform tailored for sports aficionados, delivering real-time updates, insightful analysis, and in-depth statistics across various sporting events. Boasting a diverse array of captivating content formats such as articles, videos, and interactive graphics.',
		tech:[
			'/skills/NextJS.png',
			'/skills/GraphQL.png',
			'/skills/sass.png',			
		],
	},
	{
		id: 2,
		title: 'EV India',
		url: 'https://evindia.online/',
		category: 'Web Application',
		img: '/images/projects/p3.png',
		info: 'EV India is your ultimate destination for all things electric vehicle-related in the Indian market. From the latest news and updates on EV technology to comprehensive guides and reviews of electric cars and bikes available in India',
		tech:[
			'/skills/react.png',
			'/skills/Redux.png',
			'/skills/sass.png',			
		],
	},
	{
		id: 3,
		title: 'Run To Learn',
		url: 'http://running-webpage-stag.s3-website.eu-central-1.amazonaws.com/',
		category: 'Web Application',
		img: '/images/projects/p4.png',
		info: 'Learn2Run is a cutting-edge educational platform designed to make learning enjoyable and engaging for students through interactive games. With a diverse range of games covering various subjects and topics, Learn2Run seamlessly integrates learning into playtime, making studying fun and effective',
		tech:[
			'/skills/react.png',
			'/skills/ReactQuery.png',
			'/skills/sass.png',			
		],
	},
	{
		id: 4,
		title: 'Formizz',
		url: 'https://club-digital.vercel.app/',
		category: 'Web Tool',
		img: '/images/projects/p6.png',
		info: 'Formizz simplifies form creation and data management by offering a user-friendly platform for building dynamic forms. With its intuitive interface, users can effortlessly create custom forms tailored to their needs.',
		tech:[
			'/skills/NextJS.png',
			'/skills/ReactQuery.png',
			'/skills/TailwindCSS.png'			
		],
	},
	{
		id: 4,
		title: 'Crictracker Admin',
		private: true,
		category: 'Admin Panel',
		img: '/images/projects/p8.png',
		info: 'Admin Panel',
		tech:[
			'/skills/react.png',
			'/skills/ReactQuery.png',
			'/skills/sass.png',			
		],
	},
	{
		id: 5,
		title: 'RTL Admin',
		private: true,
		category: 'Admin Panel',
		img: '/images/projects/p9.png',
		info: 'Admin Panel',
		tech:[
			'/skills/react.png',
			'/skills/ReactQuery.png',
			'/skills/sass.png',			
		],
	},
	
];
