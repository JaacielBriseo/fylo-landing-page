import { ToggleDarkTheme } from './ToggleDarkTheme';
export const Header = () => {
	return (
		<header role={'heading'} className='container mx-auto mt-10 px-6 text-center h-40 md:h-20'>
			{/* Dynamic Logo */}
			<div className='bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10'></div>
			{/* Menu */}
			<div className='flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10'>
				<a href='#features' className='hover:text-AccentCyan'>
					Features
				</a>
				<a href='#testimonials' className='hover:text-AccentCyan'>
					Testimonials
				</a>
				{/* Dark&/Light Mode Button */}
				<ToggleDarkTheme />
			</div>
		</header>
	);
};
