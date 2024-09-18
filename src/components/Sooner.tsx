import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

export function Sooner({ text }: { text: string }) {
  return (
    <Button
      variant='outline'
      onClick={() =>
        toast(text, {
          description: format(new Date(), 'MMMM dd, yyyy'),
          action: {
            label: 'Ok',
            onClick: () => console.log('Ok'),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}
