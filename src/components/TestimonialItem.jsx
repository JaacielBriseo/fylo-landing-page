export const TestimonialItem = ({ img, name }) => {
	return (
		<div className='flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-DarkBlue3 md:w-1/3'>
			<p className='text-sm leading-5 md:text-lg'>
				Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a
				well-oiled collaboration machine.
			</p>
			<div className='flex space-x-4'>
				<img src={img} alt='profile' className='w-10 h-10 rounded-full' />
				<div>
					<h5 className='text-sm font-semibold'>{name}</h5>
					<p className='text-xs font-extralight'>Founder & CEO. Huddle</p>
				</div>
			</div>
		</div>
	);
};
