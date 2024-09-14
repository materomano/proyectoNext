"use client";
import { db } from "@/app/firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
import { FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";

const DeleteProductBtn = ({ id }) => {
  const deleteProduct = () => {
    Swal.fire({
      icon: "warning",
      title: "¿Deseas eliminar este producto?",
      text: "Una vez eliminado, no podrás recuperar este producto.",
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#d90429",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "¡Eliminado!",
          text: "El producto ha sido eliminado exitosamente.",
          iconColor: "#457b9d",
          timer: 2500,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        try {
          await deleteDoc(doc(db, "productos", id));
        } catch (error) {
          console.error("Error al eliminar el producto:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un problema al eliminar el producto. Por favor, inténtalo nuevamente.",
            confirmButtonText: "OK",
            confirmButtonColor: "#d90429",
          });
        }
      }
    });
  };

  return (
    <button onClick={deleteProduct}>
      <FiTrash2 className="text-red text-xl" />
    </button>
  );
};

export default DeleteProductBtn;
