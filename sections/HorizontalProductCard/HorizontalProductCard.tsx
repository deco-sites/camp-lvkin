import Image from "apps/website/components/Image.tsx";
import AddToCartButtonVTEX from "../../islands/AddToCartButton/vtex.tsx";
import Spinner from "deco-sites/camp-lvkin/components/ui/Spinner.tsx";
import ProductVote from "deco-sites/camp-lvkin/islands/ProductVote.tsx";
import { Product } from "apps/commerce/types.ts";
import { formatPrice } from "deco-sites/camp-lvkin/sdk/format.ts";
import { useOffer } from "deco-sites/camp-lvkin/sdk/useOffer.ts";

export interface HorizontalProductCardProps {
  maxWidth:
    "max-w-xl" |
    "max-w-2xl" |
    "max-w-3xl" |
    "max-w-4xl" |
    "max-w-5xl" |
    "max-w-6xl" |
    "max-w-7xl" |
    "max-w-full";
  animateImage: boolean;
  productDetails: Product[] | null;
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
  { maxWidth, animateImage, productDetails }: HorizontalProductCardProps,
) => {
  const getPrice = ((product: Product) => {
    const { price = 0 } = useOffer(product.offers);

    return price;
  })

  if (!productDetails) return null;

  return (
    <section>
      {productDetails.map((product) => (
        <div
          class={`horizontal-product-card-section flex sm:max-h-60 items-center overflow-hidden justify-center w-fit mx-auto bg-[#3c3c3c] border border-[#3c3c3c] ${maxWidth}`}
        >
          <div class="horizontal-product-card-image-container max-w-[200px] w-[80%] overflow-hidden">
            <Image
              class={`horizontal-product-card-image h-fit ${animateImage && "hover:scale-125 transition"}`}
              width={200}
              src={product?.image?.at(0)?.url || ""}
              alt={product.name}
              loading="lazy"
            />
          </div>
          <div class="horizontal-product-card-details px-4 flex flex-col overflow-ellipsis gap-3">
            <h3 class="horizontal-product-card-title text-white text-2xl">
              {product.name}
            </h3>
            <span class="horizontal-product-card-price text-white text-xl">
              {formatPrice(getPrice(product))}
            </span>
            <p class="horizontal-product-card-description text-white font-light text-sm flex flex-1 overflow-ellipsis">
              {product.description}
            </p>
            <ProductVote productId={product.productID} />
            <div
              class="horizontal-product-card-add-to-cart flex justify-center" 
            >
              <AddToCartButtonVTEX
                eventParams={{
                  items: [{
                    item_url: product.url,
                    quantity: 1,
                    item_name: product.name!,
                  }]
                }}
                productID={product.productID}
                seller={"1"}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
};

export default HorizontalProductCard;
