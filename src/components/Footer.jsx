import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { SocialItem } from './SocialItem';
export const Footer = () => {
	const { phoneIcon, emailIcon, facebook, twitter, instagram } = useContext(DataContext);
	return (
		<footer role={'directory'} className='bg-DarkBlue2 text-White'>
			<div className='container mx-auto pt-12 px-5 pb-10'>
				<div className='flex flex-col items-center justify-between space-y-24 md:flex-row md:space-y-0'>
					<div className='mt-10 space-y-6'>
						<div className='flex items-center space-x-3 md:-mt-10'>
							<div className='w-6'>
								<img src={phoneIcon} alt='phoneicon' className='scale-10' />
							</div>
							<div>+1-543-123-4567</div>
						</div>
						<div className='flex items-center space-x-3'>
							<div className='w-6'>
								<img src={emailIcon} alt='emailicon' className='scale-10' />
							</div>
							<div>example@flyo.com</div>
						</div>
					</div>
					<div className='flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row'>
						<div className='flex flex-col space-y-3'>
							<a href='#'>About</a>
							<a href='#'>Jobs</a>
							<a href='#'>Press</a>
							<a href='#'>Blog</a>
						</div>
						<div className='flex flex-col space-y-3'>
							<a href='#'>Contact Us</a>
							<a href='#'>Terms</a>
							<a href='#'>Privacy</a>
						</div>
					</div>
					<div className='flex justify-center pb-10 space-x-3'>
						<SocialItem img={facebook} />
						<SocialItem img={twitter} />
						<SocialItem img={instagram} />
					</div>
				</div>
			</div>
		</footer>
	);
};
