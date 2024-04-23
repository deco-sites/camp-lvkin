export interface Props {
    productId: string;
}

export interface Result {
    status: "ok" | "failure";
}

export default async function votesCounter({ productId }: Props): Promise<Result> {
    const response = await fetch("https://camp-api.deco.cx/event", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "camp-lvkin"
        },
        body: JSON.stringify({ "productId": productId })
    })

    if (response.ok) return { status: "ok" };

    return { status: "failure" };
}
