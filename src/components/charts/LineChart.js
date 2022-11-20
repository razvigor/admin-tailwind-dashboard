import React from 'react';

import {
	ChartComponent,
	SeriesDirective,
	Inject,
	DateTime,
	Legend,
	Tooltip,
	LineSeries,
	SeriesCollectionDirective,
} from '@syncfusion/ej2-react-charts';

import {
	lineCustomSeries,
	LinePrimaryYAxis,
	LinePrimaryXAxis,
} from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
	const { currentMode } = useStateContext();
	return (
		<ChartComponent
			id='line-chart'
			height='420px'
			primaryXAxis={LinePrimaryXAxis}
			primaryYAxis={LinePrimaryYAxis}
			chartArea={{ border: { width: 0 } }}
			tooltip={{ enable: true }}
			background={currentMode === 'Dark' ? '' : '#fff'}
			legendSettings={{ background: 'white' }}
		>
			<Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
			<SeriesCollectionDirective>
				{lineCustomSeries.map((item, index) => (
					<SeriesDirective key={index} {...item} />
				))}
			</SeriesCollectionDirective>
		</ChartComponent>
	);
};

export default LineChart;
