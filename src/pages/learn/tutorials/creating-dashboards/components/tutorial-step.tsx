import { ReactNode } from 'react';

interface TutorialStepProps {
  children: ReactNode;
}

export function TutorialStep({ children }: TutorialStepProps) {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      {children}
    </div>
  );
}