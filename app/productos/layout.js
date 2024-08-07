import React from 'react'
import CategoriesMenu from '../components/CategoriesMenu'

export const metadata = {
  title: "Menu de categorias ",
  description: "Aqui se muestran todas las categorias",
};

const Layout = ({children}) => {
  return (
    <div>
        <CategoriesMenu/>
        {children}
    </div>
  )
}

export default Layout