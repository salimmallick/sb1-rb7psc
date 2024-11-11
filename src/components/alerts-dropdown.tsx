import { useState } from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

// Mock data - replace with actual alerts data
const recentAlerts = [
  {
    id: 1,
    title: 'High CPU Usage',
    description: 'Server CPU usage exceeded 90%',
    severity: 'critical',
    time: '2 minutes ago'
  },
  {
    id: 2,
    title: 'API Response Time',
    description: 'Response time above threshold',
    severity: 'warning',
    time: '15 minutes ago'
  },
  {
    id: 3,
    title: 'Memory Usage Alert',
    description: 'Memory usage approaching limit',
    severity: 'warning',
    time: '1 hour ago'
  }
];

export function AlertsDropdown() {
  const [unreadCount, setUnreadCount] = useState(2);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-blue-500';
    }
  };

  const handleAlertClick = (alertId: number) => {
    // Update unread count
    setUnreadCount(Math.max(0, unreadCount - 1));
    
    // Navigate to alerts page when enabled
    console.log(`Clicked alert ${alertId}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center"
              variant="destructive"
            >
              {unreadCount}
            </Badge>
          )}
          <span className="sr-only">View notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Notifications</p>
            <p className="text-xs leading-none text-muted-foreground">
              Recent alerts and notifications
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {recentAlerts.map((alert) => (
            <DropdownMenuItem
              key={alert.id}
              className="flex flex-col items-start gap-1 p-4 cursor-pointer"
              onClick={() => handleAlertClick(alert.id)}
            >
              <div className="flex items-center gap-2 w-full">
                <div className={`h-2 w-2 rounded-full ${getSeverityColor(alert.severity)}`} />
                <span className="font-medium flex-1">{alert.title}</span>
                <span className="text-xs text-muted-foreground">{alert.time}</span>
              </div>
              <p className="text-xs text-muted-foreground pl-4">
                {alert.description}
              </p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="w-full flex justify-center text-sm">
          View All Alerts
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}