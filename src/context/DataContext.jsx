import { createContext } from 'react';
import {
	illustrationIntro,
	securityIcon,
	collabIcon,
	anyfileIcon,
	accessIcon,
	arrowIcon,
	stayProd,
	quotes,
	profile1,
	profile2,
	profile3,
	phoneIcon,
	emailIcon,
	facebook,
	twitter,
	instagram,
} from '../assets';
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
	return (
		<DataContext.Provider
			value={{
				illustrationIntro,
				securityIcon,
				collabIcon,
				anyfileIcon,
				accessIcon,
				arrowIcon,
				stayProd,
				quotes,
				profile1,
				profile2,
				profile3,
				phoneIcon,
				emailIcon,
				facebook,
				twitter,
				instagram,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
