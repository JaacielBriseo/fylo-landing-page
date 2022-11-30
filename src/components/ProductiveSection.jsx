import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const ProductiveSection = () => {
	const { stayProd, arrowIcon } = useContext(DataContext);
	return (
		<section role={'complementary'} className='bg-White dark:bg-DarkBlue'>
			<div className='container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16'>
				<div className='md:w-1/2'>
					<img src={stayProd} alt='stayProd' className='mb-10' />
				</div>
				<div className='flex flex-col items-start md:w-1/2'>
					<div className='flex flex-col space-y-5'>
						<h4 className='max-w-md text-xl font-bold md:text-4xl'>Stay productive, wherever you are</h4>
						<p className='text-md md:text-lg'>
							Never let location be an issue when accessing your files. Fylo has you covered for all of your file
							storage needs.
						</p>
						<p className='text-md md:text-lg'>
							Securely share files and folders with friends, family and colleagues for live collaboration. No email
							attachments required.
						</p>
					</div>
					<div className='block mt-4'>
						<a href='#' className='border-b border-AccentCyan text-AccentCyan'>
							See how Flyo works
							<img src={arrowIcon} alt='arrowIcon' className='inline pb-2' />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
