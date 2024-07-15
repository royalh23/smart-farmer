import { FC, ComponentPropsWithoutRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

interface ProductsProps extends ComponentPropsWithoutRef<"main"> {}

const Products: FC<ProductsProps> = ({ ...props }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchProducts() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/products/findAllByCategoryId?categoryId=${categoryId}`,
          { signal }
        );

        if (!response.ok) {
          throw new Error("error");
        }

        const products = await response.json();
        console.log(products);

        setProducts(products);
        setError(null);
      } catch (err) {
        setError(error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, []);

  return (
    <main {...props}>
      <section>
        <div className="my-container">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div>
              {products.map((product) => (
                <Link
                  to={
                    product.category.category === "EGG"
                      ? `/eggs/${product.id}`
                      : "/"
                  }
                >
                  <div
                    key={product.id}
                    className="flex flex-col justify-center items-center mt-20 mb-20"
                  >
                    <img src="/egg.png" alt="egg" />
                    <div>Kənd yumurtası</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export { Products };
