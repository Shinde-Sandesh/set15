//Given the products data. Build a React component to display the name of all products as an unordered list on the DOM. Order of items display can vary from the image shown below.

import { ProductList } from "./ProductList";

export default function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}
