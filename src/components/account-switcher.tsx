import * as React from "react";
import { Check, ChevronsUpDown, PlusCircle, Building } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Account = {
  label: string;
  id: string;
  type: "personal" | "team";
};

const accounts: Account[] = [
  {
    label: "Acme Corp",
    id: "acme-corp",
    type: "team",
  },
  {
    label: "Monsters Inc.",
    id: "monsters-inc",
    type: "team",
  },
  {
    label: "Stark Industries",
    id: "stark-industries",
    type: "team",
  },
  {
    label: "Wayne Enterprises",
    id: "wayne-enterprises",
    type: "team",
  },
];

type AccountSwitcherProps = {
  isAdmin?: boolean;
};

export function AccountSwitcher({ isAdmin = false }: AccountSwitcherProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedAccount, setSelectedAccount] = React.useState<Account>(accounts[0]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Select account"
          className="w-[280px] justify-between h-8"
        >
          <Building className="mr-2 h-4 w-4" />
          {selectedAccount.label}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search accounts..." />
            <CommandEmpty>No accounts found.</CommandEmpty>
            <CommandGroup heading="Accounts">
              {accounts.map((account) => (
                <CommandItem
                  key={account.id}
                  onSelect={() => {
                    setSelectedAccount(account);
                    setOpen(false);
                  }}
                  className="text-sm"
                >
                  <Building className="mr-2 h-4 w-4" />
                  {account.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedAccount.id === account.id
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          {isAdmin && (
            <>
              <CommandSeparator />
              <CommandList>
                <CommandGroup>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false);
                      // Add new account logic here
                    }}
                  >
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Account
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
}