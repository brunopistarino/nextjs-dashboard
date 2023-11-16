export type Product = {
  id: string;
  description: string;
  size: string;
  prize: number;
  categoryId: string;
  supplierId: string;
  status: "available" | "sold" | "returned";
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  soldAt: Date | null;
  returnedAt: Date | null;
};

export type Category = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};

export type Supplier = {
  id: string;
  name: string;
  dni: string;
  address: string;
  city: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
