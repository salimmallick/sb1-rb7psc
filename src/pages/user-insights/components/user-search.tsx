import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePickerWithRange } from '@/components/ui/date-range-picker';
import { User } from '..';

interface UserSearchProps {
  onUserSelect: (user: User | null) => void;
}

export function UserSearch({ onUserSelect }: UserSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const [userType, setUserType] = useState('all');
  const [plan, setPlan] = useState('all');
  const [segment, setSegment] = useState('all');

  const handleSearch = () => {
    // Mock API call - replace with actual implementation
    const mockUser: User = {
      id: '123',
      name: 'John Doe',
      email: 'john@example.com',
      status: 'active',
      registrationDate: '2024-01-01',
      lastActive: '2024-01-20',
      plan: 'Enterprise',
      company: 'Acme Inc.',
      role: 'Technical Lead',
      phoneNumber: '+1 234 567 8900',
      totalSpent: 15000,
      lifetimeValue: 25000
    };
    onUserSelect(mockUser);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setDateRange({ from: null, to: null });
    setUserType('all');
    setPlan('all');
    setSegment('all');
    onUserSelect(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[300px]">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, email, company, or user ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
        
        <DatePickerWithRange
          onChange={setDateRange}
          className="min-w-[300px]"
        />
        
        <Select value={userType} onValueChange={setUserType}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="User status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Users</SelectItem>
            <SelectItem value="active">Active Users</SelectItem>
            <SelectItem value="inactive">Inactive Users</SelectItem>
          </SelectContent>
        </Select>

        <Select value={plan} onValueChange={setPlan}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Plan type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Plans</SelectItem>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="pro">Pro</SelectItem>
            <SelectItem value="enterprise">Enterprise</SelectItem>
          </SelectContent>
        </Select>

        <Select value={segment} onValueChange={setSegment}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="User segment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Segments</SelectItem>
            <SelectItem value="new">New Users</SelectItem>
            <SelectItem value="power">Power Users</SelectItem>
            <SelectItem value="risk">At Risk</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={clearSearch}>
          <X className="h-4 w-4 mr-2" />
          Clear Search
        </Button>
        <Button onClick={handleSearch}>Search Users</Button>
      </div>
    </div>
  );
}