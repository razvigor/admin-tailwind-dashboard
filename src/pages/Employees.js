import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Resize,
	Sort,
	Filter,
	Search,
	Page,
	Inject,
	Toolbar,
} from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Empoyees = () => {
	return (
		<div className='m-2 mt-16 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
			<Header category='Page' title='Empoyees' />
			<GridComponent
				dataSource={employeesData}
				allowPaging
				allowSorting
				toolbar={['Search']}
				width='auto'
			>
				<ColumnsDirective>
					{employeesGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Resize, Sort, Filter, Page, Search, Toolbar]} />
			</GridComponent>
		</div>
	);
};

export default Empoyees;
