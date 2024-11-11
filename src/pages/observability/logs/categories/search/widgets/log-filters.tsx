import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

export function LogFilters() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-4">
        <div>
          <Label>Time Range</Label>
          <Select defaultValue="1h">
            <SelectTrigger>
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1h">Last Hour</SelectItem>
              <SelectItem value="6h">Last 6 Hours</SelectItem>
              <SelectItem value="24h">Last 24 Hours</SelectItem>
              <SelectItem value="7d">Last 7 Days</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Log Level</Label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select log level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="error">Error</SelectItem>
              <SelectItem value="warn">Warning</SelectItem>
              <SelectItem value="info">Info</SelectItem>
              <SelectItem value="debug">Debug</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Service</Label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Services</SelectItem>
              <SelectItem value="api">API Gateway</SelectItem>
              <SelectItem value="auth">Auth Service</SelectItem>
              <SelectItem value="user">User Service</SelectItem>
              <SelectItem value="payment">Payment Service</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Source</Label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sources</SelectItem>
              <SelectItem value="app">Application</SelectItem>
              <SelectItem value="system">System</SelectItem>
              <SelectItem value="security">Security</SelectItem>
              <SelectItem value="network">Network</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        <Label>Search Options</Label>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="case-sensitive" />
            <label
              htmlFor="case-sensitive"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Case Sensitive
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="regex" />
            <label
              htmlFor="regex"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Use Regex
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="include-metadata" />
            <label
              htmlFor="include-metadata"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Include Metadata
            </label>
          </div>
        </div>
      </div>

      <div>
        <Label>Search Query</Label>
        <Input placeholder="Enter search query..." className="mt-1" />
      </div>
    </div>
  );
}