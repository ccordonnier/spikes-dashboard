"use client";
import { Input } from "@/components/ui/input";
import ObjectsCombobox from "./components/comboboxs/ObjectsCombobox";
import CompaniesCombobox from "./components/comboboxs/CompaniesCombobox";
import StatusesCombobox from "./components/comboboxs/StatusesCombobox";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="flex h-[90vh] flex-col bg-main w-4/5 rounded-xl border-main border-2 relative left-3 px-10">
      <h1 className="text-4xl font-bold mt-8 mb-4">Deals</h1>
      <nav className="flex flex-row cursor-pointer mb-6">
        <a className="text-md font-bold border-b-2 border-category-active px-4">All Deals</a>
        <a className="text-md  font-bold border-b-2 text-category-inactive border-category-inactive hover:text-category-incative-hover hover:border-category-incative-hover px-4">Completed (3)</a>
        <a className="text-md  font-bold border-b-2 text-category-inactive border-category-inactive hover:text-category-incative-hover hover:border-category-incative-hover px-4">Pending (10)</a>
        <a className="text-md  font-bold border-b-2 text-category-inactive border-category-inactive hover:text-category-incative-hover hover:border-category-incative-hover px-4">Ongoing (4)</a>
        <a className="text-md  font-bold border-b-2 text-category-inactive border-category-inactive hover:text-category-incative-hover hover:border-category-incative-hover px-4">Waiting for Confirmation (1)</a>
      </nav>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          <Input type="text" placeholder="Search" className="w-[280px]" />
          <ObjectsCombobox />
          <CompaniesCombobox />
          <StatusesCombobox />
        </div>
        <div className="flex flex-row gap-1">
          <Button size="sm" className="w-full" variant={"secondary"}>
            Export
          </Button>
          <Button size="sm" className="w-full">
            New Deal
          </Button>
        </div>
      </div>
    </main>
  );
}
