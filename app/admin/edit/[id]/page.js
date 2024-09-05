
import EditForm from '@/app/components/admin/EditForm'
import { db } from '@/app/firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React from 'react'


const getDocumentById = async (id) => {
  const productsRef = collection(db, "productos");
  const q = query(productsRef, where("id", "==", id));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs[0].data();
  


}



const EditProduct = async ({params}) => {
 const {id} = params;
  const product = await getDocumentById(id)

  return (
    <div>
      <EditForm loadesValues={product}/>
    </div>
  )
}

export default EditProduct