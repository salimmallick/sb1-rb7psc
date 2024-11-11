import { NavigationMenu } from '../ui/navigation-menu';
import { NavigationSection } from './navigation-section';
import { navigationItems } from './navigation-items';

interface NavigationProps {
  onNavigate?: () => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  return (
    <NavigationMenu>
      {navigationItems.map((section) => (
        <NavigationSection 
          key={section.title} 
          {...section} 
          onNavigate={onNavigate}
        />
      ))}
    </NavigationMenu>
  );
}