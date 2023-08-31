import Swal from "sweetalert2";
import { useDeleteUserMutation } from "../../api/apiSlice";

const Confirmation = async ({ data }) => {
  const [deleteUser] = useDeleteUserMutation();
  const handleDelete = () => {};
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    backdrop: false,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      handleDelete();
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
};

export default Confirmation;
