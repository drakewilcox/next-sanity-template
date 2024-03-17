import { getProducts } from "@/sanity/sanity-utils";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <div className="">
        {products.map((product) => (
          <Link
            href={`/projects/${product.slug}`}
            key={product._id}
            className=""
          >
            {product.image && (
              <Image
                src={product.image}
                alt={product.productName}
                width={750}
                height={300}
                className=""
              />
            )}
            <div className="">{product.productName}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
