import { urlForImage } from "@/sanity/lib/image";
import { Image, Money } from "@shopify/hydrogen";
import { getCollectionProducts } from "@/lib/shopify";
// import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { getSanityCollection } from "@/lib/sanity";

export default async function Home() {
  const collectionProducts = await getCollectionProducts({ collection: "all" });

  const collectionPage = await getSanityCollection("all");

  console.log(collectionPage);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.grid}>
        {collectionProducts.map((product) => (
          <div className={styles.item} key={product.id}>
            <div className={styles.imageContainer}>
              <Link
                className={styles.link}
                href={`/products/${product.handle}`}
              >
                {product.featuredImage.url && (
                  <Image
                    className={styles.image}
                    data={product.featuredImage}
                    crop="center"
                    sizes="100%"
                    width={1000}
                    height={1000}
                    alt={product.featuredImage.altText}
                  />
                )}
              </Link>
              <div className={styles.badge}>
                {product.priceRange.minVariantPrice.amount}
              </div>
            </div>
            <div className={styles.textContainer}>
              <div>{product.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
