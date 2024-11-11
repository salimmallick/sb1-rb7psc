import { Menu, Search, X, Eye, EyeOff } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/navigation';
import { ThemeToggle } from '../components/theme-toggle';
import { UserNav } from '../components/user-nav';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { ScrollArea } from '../components/ui/scroll-area';
import { Separator } from '../components/ui/separator';
import { UnifiedFilters } from '../components/unified-filters';
import { DatePickerWithRange } from '../components/ui/date-range-picker';
import { AccountSwitcher } from '../components/account-switcher';
import { AlertsDropdown } from '../components/alerts-dropdown';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';
import { useState } from 'react';

export function DashboardLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountVisible, setIsAccountVisible] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile Navigation Trigger */}
      <div className="lg:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <div className="flex h-full flex-col">
              <div className="flex h-14 items-center border-b px-6">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" y1="22" x2="12" y2="12" />
                  </svg>
                  <span className="font-semibold text-xl">theData.io</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="ml-auto"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <ScrollArea className="flex-1 p-4">
                <Navigation onNavigate={() => setIsMobileMenuOpen(false)} />
              </ScrollArea>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <aside className="hidden border-r bg-gray-100/40 lg:block lg:w-72 dark:bg-gray-800/40">
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-6">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" y1="22" x2="12" y2="12" />
              </svg>
              <span className="font-semibold text-xl">theData.io</span>
            </div>
          </div>
          <ScrollArea className="flex-1 p-4">
            <Navigation />
          </ScrollArea>
        </div>
      </aside>

      <main className="flex-1 overflow-hidden">
        <header className="border-b bg-background">
          <div className="h-14 px-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-[300px]">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search..." className="pl-8" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[280px]">
                  {isAccountVisible && <AccountSwitcher isAdmin={true} />}
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsAccountVisible(!isAccountVisible)}
                  title={isAccountVisible ? "Hide account switcher" : "Show account switcher"}
                >
                  {isAccountVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DatePickerWithRange className="w-[260px]" showTime={true} />
              <ThemeToggle />
              <AlertsDropdown />
              <Separator orientation="vertical" className="h-6" />
              <UserNav />
            </div>
          </div>
          <div className="border-t">
            <div className="container py-2">
              <UnifiedFilters />
            </div>
          </div>
        </header>
        <ScrollArea className="h-[calc(100vh-8.5rem)]">
          <div className="container py-6">
            <Outlet />
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}