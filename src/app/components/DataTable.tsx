"use client"

import * as React from "react"
import Image from "next/image"
import ArrowDown from "/public/icons/arrow-down.svg"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data: Payment[] = [
  {
    add: "1Jan.24",
    object: "Product Design : Payment",
    company: "stripe",
    status: "Pending",
    amount: 7800,
  },{
    add: "2Jan.24",
    object: "App Redesign : Onboarding",
    company: "github",
    status: "Canceled",
    amount: 12800,
  },{
    add: "3Dec.23",
    object: "Pitch Deck B2B",
    company: "amazon",
    status: "Ongoing",
    amount: 14000,
  },{
    add: "4Oct.23",
    object: "Mobile App, UX Audit",
    company: "steam",
    status: "Wainting for confirmation",
    amount: 2000,
  },{
    add: "5Oct.23",
    object: "Splash Screen Illustrator",
    company: "adobe",
    status: "Completed",
    amount: 5500,
  },{
    add: "6Oct.23",
    object: "Features Add",
    company: "thebrowsercompany",
    status: "Pending",
    amount: 14500,
  },{
    add: "7Sept.23",
    object: "Brand Guidelines",
    company: "figma",
    status: "Completed",
    amount: 21500,
  },{
    add: "8Sept.23",
    object: "New messages UX",
    company: "slack",
    status: "Ongoing",
    amount: 1900,
  },{
    add: "9Sept23",
    object: "Landing page",
    company: "opensea",
    status: "Pending",
    amount: 2300,
  }
  ,{
    add: "9Sept23",
    object: "Landing page",
    company: "opensea",
    status: "Pending",
    amount: 2300,
  },
  {
    add: "9Sept23",
    object: "Landing page",
    company: "opensea",
    status: "Pending",
    amount: 2300,
  },
]

type colors = "#ECB30A" | "#EC0A0A" | "#2AD730" | "#960AEC" | "#0085FF";
type statusColors = {
  "Pending": colors
  "Canceled": colors
  "Ongoing": colors
  "Wainting for confirmation": colors
  "Completed": colors
}

const statusColors: statusColors = {
  "Pending": "#ECB30A",
  "Canceled": "#EC0A0A",
  "Ongoing": "#2AD730",
  "Wainting for confirmation": "#960AEC",
  "Completed": "#0085FF",
}

const Companies: Companies = {
  "stripe": {name:"Stripe Inc.", logo: "stripe.svg"},
  "github": {name:"Github Corp.", logo: "github.svg"},
  "amazon": {name:"Amazon", logo: "amazon.svg"},
  "steam": {name:"Steam", logo: "steam.svg"},
  "adobe": {name:"Adobe LLC.", logo: "adobe.svg"},
  "thebrowsercompany": {name:"The Browser Company", logo: "thebrowsercompany.svg"},
  "figma": {name:"Figma", logo: "figma.svg"},
  "slack": {name:"Slack Inc.", logo: "slack.svg"},
  "opensea": {name:"Opensea", logo: "opensea.svg"},
}

export type Companies = {
  "stripe": company
  "github": company
  "amazon": company
  "steam": company
  "adobe": company
  "thebrowsercompany": company
  "figma": company
  "slack": company
  "opensea": company
}

export type company = {
  name: string
  logo: string
}

export type Payment = {
  add: string
  object: string
  company: string
  status: "Pending" | "Canceled" | "Ongoing" | "Wainting for confirmation" | "Completed"
  amount: number
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "add",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Added
          <Image src={ArrowDown} className="ml-2 h-4 w-4" width={16} height={16} alt="Sort arrow" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("add").substring(1)}</div>,
  },
  {
    accessorKey: "object",
    header: "Object",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("object")}</div>
    ),
  },
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => (
      <div className="capitalize flex flex-row items-center"><Image className="mr-2" src={`/logos/${Companies[row.getValue("company")].logo}`} width={30} height={30} alt={Companies[row.getValue("company")].name} /> {Companies[row.getValue("company")].name}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize flex items-center"><span className="rounded-full block w-[6px] h-[6px] mr-3" style={{backgroundColor: statusColors[row.getValue("status")]}}></span> {row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted.substring(0,formatted.length-5)} $USD</div>
    },
  },
]

export function DataTable({objectFilter, companieFilter, statusFilter}) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const [dataToShow, setDataToShow] = React.useState(data)
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  React.useEffect(() => {
    table.getColumn("object")?.setFilterValue(objectFilter)
  }, [objectFilter])
  React.useEffect(() => {
    table.getColumn("companie")?.setFilterValue(companieFilter)
  }, [companieFilter])
  React.useEffect(() => {
    table.getColumn("status")?.setFilterValue(statusFilter)
  }, [statusFilter])
  return (
    <div className="w-full h-full grid ">
      
      <div className="rounded-md overflow-y-scroll flex" style={{height: "calc(100vh - 20rem)"}}>
        <Table className="">
          <TableHeader className="bg-root sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="max-h-[50vh]">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4 h-20">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
