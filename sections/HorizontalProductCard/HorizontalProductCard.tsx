import Image from "apps/website/components/Image.tsx";

import type { ImageWidget } from "apps/admin/widgets.ts";
import { formatPrice } from "deco-sites/camp-lvkin/sdk/format.ts";
import Spinner from "deco-sites/camp-lvkin/components/ui/Spinner.tsx";

export interface HorizontalProductCardProps {
  image: ImageWidget;
  productInfo: {
    title: string;
    description: string;
    price: number;
    buyButtonText: string;
  };
}

export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <div class="error-fallback flex flex-col max-w-5xl mx-auto items-center">
      <img
        src="https://socialsahomolog.vtexassets.com/assets/vtex.file-manager-graphql/images/f8237baa-62c6-4b76-a4bc-f2aae3afc74c___fa63d90cf7d4fd2ceedad0c60fd963a4.png"
        alt="error image"
        class="error-ffallback-image"
      />
      <h3 className="fallback-error-title">
        OPS! Encontramos um problema :{"("}
      </h3>
      <p className="fallback-error-description">Erro: {error?.message}</p>
      <a href="/culturas" title="página culturas">Saiba mais sobre nós!</a>
    </div>
  );
}

export function LoadingFallback() {
  return <Spinner />;
}

const HorizontalProductCard = (
  { image, productInfo }: HorizontalProductCardProps,
) => (
  <section class="horizontal-product-card-section flex">
    {image &&
      (
        <Image
          class="horizontal-product-card-image"
          width={600}
          src={image}
          alt={image}
          loading="lazy"
        />
      )}
    <div class="horizontal-product-card-details">
      <h3 class="horizontal-product-card-title">
        {productInfo.title}
      </h3>
      <p class="horizontal-product-card-description">
        {productInfo.description}
      </p>
      <div class="horizontal-product-card-buy-">
        <span className="horizontal-product-card-price">
          {formatPrice(productInfo.price)}
        </span>
        <button className="horizontal-product-card-add-to-cart">
          {productInfo.buyButtonText}
        </button>
      </div>
    </div>
  </section>
);

export default HorizontalProductCard;
