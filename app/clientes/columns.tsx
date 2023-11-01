"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  name: string;
  amount: number;
  // status: "pending" | "processing" | "success" | "failed";
  status: string;
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "status",
    header: "Productos vendidos",
  },
  {
    accessorKey: "status",
    header: "Productos a la venta",
  },
  {
    accessorKey: "status",
    header: "Pagos pendientes",
  },
  {
    accessorKey: "amount",
    header: "Monto a pagar",
    cell: ({ row }) => {
      return <span>$ {row.getValue("amount")}</span>;
    },
  },
];
