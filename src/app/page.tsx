"use client";
import '../../node_modules/like-keditor/dist/index.css';

import React, { useState } from 'react';

import { Editor } from 'like-keditor';
import {
  Redo,
  Undo,
} from 'lucide-react';

import PreviewSheet from '@/components/custom/preview';
import { Button } from '@/components/ui/button';

export default function Home() {
	const [html, setHTML] = useState("");
  const undoRef = React.useRef<() => void>(() => {});
  const redoRef = React.useRef<() => void>(() => {});
	const handleChange = (data: any) => {
		setHTML(data.html);
	};
	return (
		<div className="flex flex-col p-6 gap-4 items-center">
			<div className="flex justify-start items-center w-full gap-3 max-w-[1000px]">
        <Button size="icon" onClick={() => undoRef?.current?.()}><Undo /></Button>
        <Button size="icon" onClick={() => redoRef?.current?.()}><Redo /></Button>
        
        <Button className='w-fit' onClick={() => navigator.clipboard.writeText(html)}>Copy</Button>
        <Button className='w-fit' onClick={() => setHTML("")}>Clear</Button>
				<PreviewSheet html={html} />
			</div>
			<Editor  className='max-w-[1000px] w-full' onExport={handleChange} onUndo={(fn) => (undoRef.current = fn)} onRedo={(fn) => (redoRef.current = fn)} />
		</div>
	);
}
