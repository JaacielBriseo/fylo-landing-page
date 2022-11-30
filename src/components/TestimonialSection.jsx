import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { TestimonialItem } from './';

export const TestimonialSection = () => {
	const { quotes, profile1, profile2, profile3 } = useContext(DataContext);
	return (
		<section role={'rowgroup'} id='testimonials' className='bg-gray-50 dark:bg-DarkBlue'>
			<div className='container mx-auto px-6 pt-12 pb-80 md:pb-96'>
				<div className='relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12'>
					<img src={quotes} alt='quotes' className='absolute left-1 -top-2 w-10 md:-top-16 md:w-20' />
					<TestimonialItem img={profile1} name='Satish Patel' />
					<TestimonialItem img={profile2} name='Bruce McKenzie' />
					<TestimonialItem img={profile3} name='Eva Boyd' />
				</div>
			</div>
		</section>
	);
};
