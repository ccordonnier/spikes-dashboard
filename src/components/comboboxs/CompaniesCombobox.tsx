"use client";
import { useState } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import CarretDown from "/public/icons/carret-down.svg"
import Check from "/public/icons/check.svg"

const Companies = [
  {
    value: "Stripe Inc.",
    label: "Stripe Inc.",
  },
  {
    value: "Github Corp.",
    label: "Github Corp.",
  },
  {
    value: "Amazon",
    label: "Amazon",
  },
  {
    value: "Steam",
    label: "Steam",
  },
  {
    value: "Adobe LLC.",
    label: "Adobe LLC.",
  },
  {
    value: "The Browser Company",
    label: "The Browser Company",
  },
  {
    value: "Figma",
    label: "Figma",
  },
  {
    value: "Slack Inc.",
    label: "Slack Inc.",
  },
  {
    value: "Opensea",
    label: "Opensea",
  },
]

type CompaniesComboboxType = {
  companyFilter: string;
  setCompanyFilter: React.Dispatch<React.SetStateAction<string>>;
};

const CompaniesCombobox: React.FC<CompaniesComboboxType> = ({companyFilter, setCompanyFilter}) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {companyFilter
            ? Companies.find((Company) => Company.value === companyFilter)?.label
            : "Company"}
          <Image src={CarretDown} width={20} height={20} alt="icon carretDown" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Company..." className="h-9" />
          <CommandEmpty>No Company found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {Companies.map((Company) => (
                <CommandItem
                  key={Company.value}
                  value={Company.value}
                  onSelect={(currentValue) => {
                    setCompanyFilter(currentValue === companyFilter ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {Company.label}
                  <Image src={Check} width={20} height={20} alt="icon check"
                    className={cn(
                      "ml-auto h-4 w-4",
                      companyFilter === Company.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
};

export default CompaniesCombobox;