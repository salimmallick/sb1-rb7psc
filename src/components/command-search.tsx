import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

// Search index
const searchIndex = [
  // Product Guide
  { 
    title: 'Platform Overview', 
    path: '/learn/product-guide/platform-overview', 
    category: 'Documentation',
    keywords: ['overview', 'introduction', 'platform', 'features']
  },
  { 
    title: 'Dashboards', 
    path: '/learn/product-guide/dashboards', 
    category: 'Documentation',
    keywords: ['dashboard', 'widgets', 'visualization']
  },
  { 
    title: 'Metrics & Analytics', 
    path: '/learn/product-guide/metrics', 
    category: 'Documentation',
    keywords: ['metrics', 'analytics', 'measurement']
  },
  // Add more documentation items...

  // Tutorials
  { 
    title: 'Creating Dashboards Tutorial', 
    path: '/learn/tutorials/creating-dashboards', 
    category: 'Tutorials',
    keywords: ['tutorial', 'dashboard', 'create']
  },
  { 
    title: 'Data Analysis Tutorial', 
    path: '/learn/tutorials/data-analysis', 
    category: 'Tutorials',
    keywords: ['tutorial', 'analysis', 'data']
  },
  // Add more tutorial items...
];

export function CommandSearch() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <>
      <Button
        variant="outline"
        className="relative h-8 w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Documentation">
            {searchIndex.map((item, index) => (
              <CommandItem
                key={index}
                value={item.title}
                onSelect={() => handleSelect(item.path)}
              >
                <Search className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {item.category}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}