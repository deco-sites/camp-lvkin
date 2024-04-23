export interface ProductVotesApiResponse {
  product: number;
}

export interface votesCounterProps {
  productId: string;
}

export default async function productLikes(
  props: votesCounterProps,
  _req: Request,
  _ctx: unknown,
): Promise<ProductVotesApiResponse | undefined> {
  try {
    const productVotesResponse = await fetch(`https://camp-api.deco.cx/event/${props.productId}`,
      {
        headers: {
          "x-api-key": "camp-lvkin"
        }
      }
    );

    const productVotes = await productVotesResponse.json();

    return productVotes.product;
  } catch (e) {
    console.error({ Error: e });
  }
}
