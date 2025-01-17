/* eslint-disable react/prop-types */
import { deleteProduct } from "@/api/product";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function DeleteProduct(props) {
  const { toast } = useToast();

  const { id } = props;
  const queryClient = useQueryClient();
  const { mutate: deleteProductMutation, isLoading } = useMutation({
    mutationFn: () => deleteProduct(id),
    onError: (err) => {
      console.log(err);
      toast({
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
        title: "Failed to delete product",
        description: "Please try again.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast({
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
        title: "Product deleted",
        description: "Product deleted successfully.",
      });
    },
  });

  const handleDelete = () => {
    toast({
      className: cn(
        "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
      ),
      title: "Delete Confirmation",
      description: "Are you sure you want to delete this product?",
      variant: "destructive",
      action: (
        <div className="flex space-x-2">
          {/* Delete Button */}
          <ToastAction
            altText="Delete"
            onClick={() => {
              deleteProductMutation();
            }}
          >
            Delete
          </ToastAction>
          {/* Cancel Button */}
          <ToastAction
            altText="Cancel"
            onClick={() => {
              toast({
                className: cn(
                  "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
                ),
                title: "Delete Cancelled",
                description: "Product deletion has been cancelled.",
              });
            }}
          >
            Cancel
          </ToastAction>
        </div>
      ),
    });
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isLoading}
      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
    >
      {isLoading ? "Deleting..." : "Delete"}
    </button>
  );
}

export default DeleteProduct;
