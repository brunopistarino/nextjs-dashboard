"use client";

import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  date: Date;
  category: string;
  description: string;
  size: string;
  proveedora: string;
  prize: number;
  status: "available" | "sold" | "returned";
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "",
    header: "Fecha Ingreso",
    cell: ({ row }) => {
      return <span>{new Date().toJSON().slice(0, 10)}</span>;
    },
  },
  {
    accessorKey: "category",
    header: "Categoría",
  },
  {
    accessorKey: "description",
    header: "Descripción",
  },
  {
    accessorKey: "size",
    header: "Talle",
  },
  {
    accessorKey: "proveedora",
    header: "Proveedora",
  },
  {
    accessorKey: "prize",
    header: "Precio",
    cell: ({ row }) => {
      return <span>$ {row.getValue("prize")}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      // return (
      //   {
      //     available: "Disponible",
      //     sold: "Vendido",
      //     returned: "Devuelto",
      //   }[status] || null
      // );
      // return (
      //   <Badge variant="outline" className="bg-green-600 text-white border-0">
      //     {/* <CheckCircle2 /> */}
      //     {/* <XCircle /> */}
      //     <AlertCircle />
      //     Disponible
      //   </Badge>
      // );
      return (
        <div className="flex gap-2">
          <CheckCircle2 size={15} />
          {/* <XCircle size={15} /> */}
          {/* <AlertCircle size={15} /> */}
          Disponible
        </div>
      );
    },
  },
];
