import { getProduct } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

import styles from "./page.module.css";

type Props = {
  params: { product: string };
};

export default async function Product({ params }: Props) {
  const slug = params.product;
  const product = await getProduct(slug);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.grid}>
        <header className={styles.navHeader}>
          <div>{product.productName}</div>
        </header>
        <Image
          src={urlForImage(product.image)
            .size(800, 800)
            .dpr(2)
            .quality(80)
            .url()}
          alt={product.productName}
          width={800}
          height={800}
          className={styles.image}
        />
        <div className={styles.descriptionContainer}>
          <div className={styles.price}>{`$${product.price}.00`}</div>
          <div className={styles.contentContainer}>
            <PortableText value={product.content} />
          </div>
        </div>
      </div>
      <div className={styles.moreSection}>
        <header className={styles.navHeader}>Similar Items</header>
      </div>
    </div>
  );
}
