import * as React from "react";
import { addDays, format, isSameDay, startOfToday } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DatePickerWithRangeProps {
  className?: string;
  align?: "start" | "center" | "end";
  showTime?: boolean;
  onChange?: (date: DateRange | undefined) => void;
}

export function DatePickerWithRange({
  className,
  align = "end",
  showTime = false,
  onChange
}: DatePickerWithRangeProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: addDays(new Date(), -7),
    to: new Date(),
  });
  const [time, setTime] = React.useState({ hour: "00", minute: "00" });
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = (selectedDate: DateRange | undefined) => {
    setDate(selectedDate);
  };

  const handleApply = () => {
    if (onChange) {
      onChange(date);
    }
    setIsOpen(false);
  };

  const handleQuickSelect = (days: number) => {
    const today = startOfToday();
    const range = {
      from: addDays(today, -days),
      to: today
    };
    handleSelect(range);
  };

  const getDateRangeLabel = () => {
    if (!date?.from) return "Select date range";
    if (!date.to) return format(date.from, "LLL dd, y");
    if (isSameDay(date.from, date.to)) {
      return `${format(date.from, "LLL dd, y")} ${showTime ? `${time.hour}:${time.minute}` : ''}`;
    }
    if (date.from.getFullYear() === date.to.getFullYear()) {
      return `${format(date.from, "LLL dd")} - ${format(date.to, "LLL dd, y")} ${showTime ? `${time.hour}:${time.minute}` : ''}`;
    }
    return `${format(date.from, "LLL dd, y")} - ${format(date.to, "LLL dd, y")} ${showTime ? `${time.hour}:${time.minute}` : ''}`;
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "justify-start text-left font-normal h-8",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {getDateRangeLabel()}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align={align}>
          <div className="p-3 border-b">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Quick Select</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Last 7 days", value: 7 },
                  { label: "Last 14 days", value: 14 },
                  { label: "Last 30 days", value: 30 },
                  { label: "Last 90 days", value: 90 }
                ].map((option) => (
                  <Button
                    key={option.value}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickSelect(option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleSelect}
            numberOfMonths={2}
          />
          {showTime && (
            <div className="p-3 border-t flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Select
                  value={time.hour}
                  onValueChange={(value) => setTime(prev => ({ ...prev, hour: value }))}
                >
                  <SelectTrigger className="w-[70px]">
                    <SelectValue placeholder="Hour" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0')).map((hour) => (
                      <SelectItem key={hour} value={hour}>{hour}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span>:</span>
                <Select
                  value={time.minute}
                  onValueChange={(value) => setTime(prev => ({ ...prev, minute: value }))}
                >
                  <SelectTrigger className="w-[70px]">
                    <SelectValue placeholder="Minute" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')).map((minute) => (
                      <SelectItem key={minute} value={minute}>{minute}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button size="sm" onClick={handleApply}>
                Apply
              </Button>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}