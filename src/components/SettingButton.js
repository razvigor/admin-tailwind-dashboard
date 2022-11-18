import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { useStateContext } from '../contexts/ContextProvider';

const SettingButton = () => {
	const { setThemeSettings, currentColor } = useStateContext();
	return (
		<div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
			<TooltipComponent content='Settings' position='Top'>
				<button
					type='button'
					className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
					style={{ background: currentColor, borderRadius: '50%' }}
					onClick={() => setThemeSettings(true)}
				>
					<FiSettings />
				</button>
			</TooltipComponent>
		</div>
	);
};

export default SettingButton;
