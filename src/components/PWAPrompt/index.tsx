import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function PWAPrompt() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPrompt = localStorage.getItem('pwaPromptSeen');
    if (!hasSeenPrompt) {
      setIsOpen(true);
      localStorage.setItem('pwaPromptSeen', 'true');
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-72 xs:w-96 p-4 shadow-md rounded-xl">
        <DialogHeader>
          <DialogTitle>Add Gnoasis to Home Screen</DialogTitle>
          <DialogDescription>
            Enhance your experience by adding Gnoasis to your home screen for
            quick and easy access!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Got it, thanks!</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
