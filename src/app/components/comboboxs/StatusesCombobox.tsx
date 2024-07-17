"use client";
import React from 'react';
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

const Statuses = [
  {
    value: "Pending",
    label: "Pending",
  },
  {
    value: "Canceled",
    label: "Canceled",
  },
  {
    value: "Ongoing",
    label: "Ongoing",
  },
  {
    value: "Waiting for Confirmation",
    label: "Waiting for Confirmation",
  },
  {
    value: "Completed",
    label: "Completed",
  }
]

const StatusesCombobox = () => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? Statuses.find((Status) => Status.value === value)?.label
            : "Status"}
          <Image src={CarretDown} width={20} height={20} alt="icon carretDown" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Status..." className="h-9" />
          <CommandEmpty>No Status found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {Statuses.map((Status) => (
                <CommandItem
                  key={Status.value}
                  value={Status.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {Status.label}
                  <Image src={Check} width={20} height={20} alt="icon check"
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === Status.value ? "opacity-100" : "opacity-0"
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

export default StatusesCombobox;