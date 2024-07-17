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

const Objects = [
  {
    value: "Product Design",
    label: "Product Design",
  },
  {
    value: "App Redesign",
    label: "App Redesign",
  },
  {
    value: "Pitch Deck B2B",
    label: "Pitch Deck B2B",
  },
  {
    value: "Mobile App, UX Audit",
    label: "Mobile App, UX Audit",
  },
  {
    value: "Splash Screen Illustrator",
    label: "Splash Screen Illustrator",
  },
  {
    value: "Features Add",
    label: "Features Add",
  },
  {
    value: "Brand Guidelines",
    label: "Brand Guidelines",
  },
  {
    value: "New messages UX",
    label: "New messages UX",
  },
  {
    value: "Landing page",
    label: "Landing page",
  },
]

const ObjectsCombobox = () => {
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
            ? Objects.find((Object) => Object.value === value)?.label
            : "Object"}
          <Image src={CarretDown} width={20} height={20} alt="icon carretDown" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Object..." className="h-9" />
          <CommandEmpty>No Object found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {Objects.map((Object) => (
                <CommandItem
                  key={Object.value}
                  value={Object.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {Object.label}
                  <Image src={Check} width={20} height={20} alt="icon check"
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === Object.value ? "opacity-100" : "opacity-0"
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

export default ObjectsCombobox;