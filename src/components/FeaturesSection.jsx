import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { FeaturesItem } from './FeaturesItem';

export const FeaturesSection = () => {
	const { accessIcon, securityIcon, collabIcon, anyfileIcon } = useContext(DataContext);
	return (
		<section id='features' role={'feed'} className='pt-12 bg-gray-50 dark:bg-DarkBlue1'>
			<div className='container mx-auto px-6 pb-32'>
				<div className='flex flex-col space-y-24 text-center md:flex-row md:space-y-0'>
					<FeaturesItem
						img={accessIcon}
						title={'Access your file from anywhere'}
						text={
							'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
						}
					/>
					<FeaturesItem
						img={securityIcon}
						title={'Security you can trust'}
						text={
							'2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
						}
					/>
				</div>
				<div className='flex flex-col space-y-24 mt-28 text-center md:flex-row md:space-y-0'>
					<FeaturesItem
						img={collabIcon}
						title={'Real-time collaboration'}
						text={
							'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
						}
					/>
					<FeaturesItem
						img={anyfileIcon}
						title={'Store any type of file'}
						text={
							"Whether you're sharing holidays photos or work documents. Fylo has you covered allowing for all file types to be securely stored and shared."
						}
					/>
				</div>
			</div>
		</section>
	);
};
