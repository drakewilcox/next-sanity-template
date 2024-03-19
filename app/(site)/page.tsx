import { getProducts } from "@/sanity/data";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.grid}>
        {products.map((product) => (
          <div className={styles.item} key={product._id}>
            <Link
              className={styles.link}
              href={`/products/${product.slug}`}
              key={product._id}
            >
              {product.image && (
                <Image
                  src={urlForImage(product.image)
                    .size(600, 600)
                    .dpr(2)
                    .quality(80)
                    .url()}
                  alt={product.productName}
                  width={600}
                  height={600}
                  className={styles.image}
                />
              )}
              <div className={styles.textContainer}>{product.productName}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
