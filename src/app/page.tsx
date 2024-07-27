"use client";
import { Input } from "@/components/ui/input";
import ObjectsCombobox from "./components/comboboxs/ObjectsCombobox";
import CompaniesCombobox from "./components/comboboxs/CompaniesCombobox";
import StatusesCombobox from "./components/comboboxs/StatusesCombobox";
import { Button } from "@/components/ui/button";
import { DataTable } from "./components/DataTable";
import { use, useEffect, useState } from "react";

const statuts = [
  "Pending", 
  "Canceled", 
  "Ongoing", 
  "Waiting for Confirmation", 
  "Completed"];

export default function Home() {
  const [objectFilter, setObjectFilter] = useState("");
  const [companieFilter, setCompanieFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  return (
    <main className="flex h-full flex-col bg-main w-4/5 rounded-xl border-main border-2 relative left-3 px-10 overflow-hidden m-y-auto">
      <h1 className="text-4xl font-bold mt-8 mb-4">Deals</h1>
      <nav className="flex flex-row cursor-pointer mb-6">
        <a className={(statusFilter !== "" ? "border-category-inactive text-category-inactive hover:text-category-incative-hover hover:border-category-incative-hover ":"") + "text-md font-bold border-b-2  border-category-active  px-4 transition-all"} onClick={() => setStatusFilter("")}>All Deals</a>
        <a className={(statusFilter !== "Completed" ? "border-category-inactive text-category-inactive hover:text-category-incative-hover hover:border-category-incative-hover ":"") + "text-md  font-bold border-b-2 border-category-active  px-4"} onClick={() => setStatusFilter("Completed")}>Completed (3)</a>
        <a className={(statusFilter !== "Pending" ? "border-category-inactive text-category-inactive hover:text-category-incative-hover hover:border-category-incative-hover ":"") + "text-md  font-bold border-b-2 border-category-active  px-4"} onClick={() => setStatusFilter("Pending")}>Pending (10)</a>
        <a className={(statusFilter !== "Ongoing" ? "border-category-inactive text-category-inactive hover:text-category-incative-hover hover:border-category-incative-hover ":"") + "text-md  font-bold border-b-2 border-category-active  px-4"} onClick={() => setStatusFilter("Ongoing")}>Ongoing (4)</a>
        <a className={(statusFilter !== "Waiting for Confirmation" ? "border-category-inactive text-category-inactive hover:text-category-incative-hover hover:border-category-incative-hover  ":"") + "text-md  font-bold border-b-2 border-category-active px-4"} onClick={() => setStatusFilter("Waiting for Confirmation")}>Waiting for Confirmation (1)</a>
      </nav>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          <Input type="text" placeholder="Search" className="w-[280px]" />
          <ObjectsCombobox objectFilter={objectFilter} setObjectFilter={setObjectFilter} />
          <CompaniesCombobox companieFilter={companieFilter} setCompanieFilter={setCompanieFilter} />
          <StatusesCombobox statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
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
      <div className="flex flex-col mt-4 h-full">
        <DataTable objectFilter={objectFilter} companieFilter={companieFilter} statusFilter={statusFilter} />
      </div>
    </main>
  );
}
