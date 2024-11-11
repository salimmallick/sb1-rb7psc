import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Filter, Plus, X } from 'lucide-react';
import { Input } from './ui/input';

interface FilterCondition {
  field: string;
  operator: string;
  value: string;
}

interface UnifiedFiltersProps {
  showAdvanced?: boolean;
  additionalFilters?: React.ReactNode;
}

export function UnifiedFilters({ showAdvanced = false, additionalFilters }: UnifiedFiltersProps) {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [conditions, setConditions] = useState<FilterCondition[]>([]);

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2 flex-1">
          <Select defaultValue="all">
            <SelectTrigger className="h-8 w-[160px]">
              <SelectValue placeholder="Environment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Environments</SelectItem>
              <SelectItem value="prod">Production</SelectItem>
              <SelectItem value="staging">Staging</SelectItem>
              <SelectItem value="dev">Development</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="h-8 w-[160px]">
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="eu">Europe</SelectItem>
              <SelectItem value="asia">Asia Pacific</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="h-8 w-[160px]">
              <SelectValue placeholder="Application" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Applications</SelectItem>
              <SelectItem value="web">Web App</SelectItem>
              <SelectItem value="mobile">Mobile App</SelectItem>
              <SelectItem value="api">API Services</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="h-8 w-[160px]">
              <SelectValue placeholder="Version" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Versions</SelectItem>
              <SelectItem value="2.0">v2.0</SelectItem>
              <SelectItem value="1.9">v1.9</SelectItem>
              <SelectItem value="1.8">v1.8</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Advanced
          </Button>
          {conditions.length > 0 && (
            <Button variant="ghost" size="sm" onClick={() => setConditions([])}>
              <X className="h-4 w-4 mr-2" />
              Clear
            </Button>
          )}
          <Button size="sm">Apply</Button>
        </div>
      </div>

      {isAdvancedOpen && (
        <div className="pt-2 space-y-2 border-t mt-2">
          {conditions.map((condition, index) => (
            <div key={index} className="flex gap-2">
              <Select
                value={condition.field}
                onValueChange={(value) => {
                  const newConditions = [...conditions];
                  newConditions[index].field = value;
                  setConditions(newConditions);
                }}
              >
                <SelectTrigger className="h-8">
                  <SelectValue placeholder="Select field" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="status">Status</SelectItem>
                  <SelectItem value="type">Type</SelectItem>
                  <SelectItem value="category">Category</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={condition.operator}
                onValueChange={(value) => {
                  const newConditions = [...conditions];
                  newConditions[index].operator = value;
                  setConditions(newConditions);
                }}
              >
                <SelectTrigger className="h-8">
                  <SelectValue placeholder="Select operator" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="equals">Equals</SelectItem>
                  <SelectItem value="contains">Contains</SelectItem>
                  <SelectItem value="startsWith">Starts with</SelectItem>
                  <SelectItem value="endsWith">Ends with</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex-1">
                <Input
                  className="h-8"
                  placeholder="Enter value"
                  value={condition.value}
                  onChange={(e) => {
                    const newConditions = [...conditions];
                    newConditions[index].value = e.target.value;
                    setConditions(newConditions);
                  }}
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => {
                  const newConditions = conditions.filter((_, i) => i !== index);
                  setConditions(newConditions);
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={() => setConditions([...conditions, { field: '', operator: '', value: '' }])}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Condition
          </Button>
        </div>
      )}
    </div>
  );
}