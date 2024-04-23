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
  maxWidth: "max-w-xl" | " max-w-2xl" | " max-w-3xl" | " max-w-4xl" | " max-w-5xl" | " max-w-6xl" | " max-w-7xl" | "max-w-full";
  animateImage: boolean;
}

export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <div class="error-fallback flex flex-col max-w-5xl mx-auto items-center">
      <img
        src="https://socialsahomolog.vtexassets.com/assets/vtex.file-manager-graphql/images/f8237baa-62c6-4b76-a4bc-f2aae3afc74c___fa63d90cf7d4fd2ceedad0c60fd963a4.png"
        alt="error image"
        class="error-ffallback-image"
      />
      <h3 class="fallback-error-title">
        OPS! Encontramos um problema :{"("}
      </h3>
      <p class="fallback-error-description">Erro: {error?.message}</p>
      <a href="/culturas" title="página culturas">Saiba mais sobre nós!</a>
    </div>
  );
}

export function LoadingFallback() {
  return <Spinner />;
}

const HorizontalProductCard = (
  { image, productInfo, maxWidth, animateImage }: HorizontalProductCardProps,
) => (
  <section class={`horizontal-product-card-section flex  sm:max-h-60 items-center overflow-hidden justify-center w-fit mx-auto bg-[#3c3c3c] border border-[#3c3c3c] ${maxWidth}`}>
    {image &&
      (
        <div class="horizontal-product-card-image-container max-w-[200px] w-[80%] overflow-hidden">
          <Image
            class={`horizontal-product-card-image h-fit ${animateImage && "hover:scale-125 transition"}`}
            width={200}
            src={image}
            alt={image}
            loading="lazy"
          />
        </div>
      )}
    <div class="horizontal-product-card-details px-4 py-5 flex flex-col overflow-ellipsis gap-3">
      <h3 class="horizontal-product-card-title text-white text-3xl">
        {productInfo.title}
      </h3>
      <span class="horizontal-product-card-price text-white text-xl">
        {formatPrice(productInfo.price)}
      </span>
      <p class="horizontal-product-card-description text-white font-light text-sm flex flex-1 overflow-ellipsis">
        {productInfo.description}
      </p>
      <button class="horizontal-product-card-add-to-cart bg-white text-[#3c3c3c] h-10 mt-auto rounded-md">
        {productInfo.buyButtonText}
      </button>
    </div>
  </section>
);

export default HorizontalProductCard;
