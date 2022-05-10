import Product from "./Product";

const Products = () => {
  return (
    <section id="product">
      <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 class="text-4xl font-bold text-center">Our Products</h2>
        <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
            <Product image={"https://images.unsplash.com/photo-1444097315577-49429a8b6224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym91dGlxdWUlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}/>
            <Product image={"https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvdXRpcXVlJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"}/>
            <Product image={"https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJvdXRpcXVlJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"}/>
            <Product image={"https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym91dGlxdWUlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"}/>
        </div>
      </div>
    </section>
  );
};

export default Products;
