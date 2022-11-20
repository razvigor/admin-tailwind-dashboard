import React from 'react';
import {
	HtmlEditor,
	Image,
	Inject,
	Link,
	QuickToolbar,
	RichTextEditorComponent,
	Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';
import { Header } from '../components';
//import { EditorData } from '../data/dummy';

const Editor = () => {
	return (
		<div className='m-2 md:m-10 mt-24 p-2 md:p10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
			<Header category='App' title='Editor' />
			<RichTextEditorComponent>
				<Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
			</RichTextEditorComponent>
		</div>
	);
};

export default Editor;
