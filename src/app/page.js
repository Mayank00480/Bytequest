import Buttons from "@/components/Buttons/Buttons";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import Product from "@/components/Product/Product";
import Products from "@/components/Products/Products";
export default function Home() {
  return (
    <>
    <Header/>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    <Products/>
    </div>
    </>
  );
}
