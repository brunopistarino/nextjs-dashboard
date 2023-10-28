import { Package2 } from "lucide-react";

export default function Page() {
  return (
    <div className="flex gap-4">
      <div className="bg-white p-5 border flex gap-3 rounded-lg w-full">
        <div className="border p-3 rounded-md">
          <Package2 />
        </div>
        <div>
          <p>Create your first member</p>
          <p>Add yourself or import from CSV</p>
        </div>
      </div>
      <div className="bg-white p-5 border flex gap-3 rounded-lg w-full">
        <div className="border p-3 rounded-md">
          <Package2 />
        </div>
        <div>
          <p>Create your first member</p>
          <p>Add yourself or import from CSV</p>
        </div>
      </div>
      <div className="bg-white p-5 border flex gap-3 rounded-lg w-full">
        <div className="border p-3 rounded-md">
          <Package2 />
        </div>
        <div>
          <p>Create your first member</p>
          <p>Add yourself or import from CSV</p>
        </div>
      </div>
    </div>
  );
}
