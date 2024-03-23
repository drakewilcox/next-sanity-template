import { urlForImage } from "@/sanity/lib/image";
import { getCollectionProducts } from "@/lib/shopify";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default async function Home() {
  const collectionProducts = await getCollectionProducts({ collection: "all" });
  console.log(collectionProducts[0].featuredImage.url);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.grid}>
        {collectionProducts.map((product) => (
          <div className={styles.item} key={product.id}>
            <Link className={styles.link} href={`/products/${product.handle}`}>
              {product.featuredImage.url && (
                <div className={styles.imageContainer}>
                  <Image
                    // src={urlForImage(product.featuredImage.url)
                    //   .size(600, 600)
                    //   .dpr(2)
                    //   .quality(80)
                    //   .url()}
                    src={product.featuredImage.url}
                    alt={product.title}
                    width={product.featuredImage.width}
                    height={product.featuredImage.height}
                    className={styles.image}
                  />
                </div>
              )}
              <div className={styles.textContainer}>{product.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
