import { useMemo } from 'react';

import DOMPurify from 'dompurify';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from '../ui/button';

export default function PreviewSheet({ html }: { html: string }) {
  const sanitized = useMemo(() => DOMPurify.sanitize(html), [html]);

  return (
    <Sheet>
      <SheetTrigger asChild><Button className='w-fit'> Preview</Button></SheetTrigger>
      <SheetContent side="right" className="w-full min-w-1/2 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>HTML Preview</SheetTitle>
        </SheetHeader>
        <div
          className="prose dark:prose-invert max-w-none p-3"
          dangerouslySetInnerHTML={{ __html: sanitized }}
        />
      </SheetContent>
    </Sheet>
  );
}
