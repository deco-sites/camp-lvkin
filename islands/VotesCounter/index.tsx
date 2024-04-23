import Icon from "deco-sites/camp-lvkin/components/ui/Icon.tsx";
import { alreadyLiked } from "../../sdk/useVotes.tsx";
import { ProductVotesApiResponse } from "deco-sites/camp-lvkin/loaders/votesCounter.ts";
import { invoke } from "deco-sites/camp-lvkin/runtime.ts";

interface VotesCounterProps {
  votesCount: ProductVotesApiResponse | undefined;
  productId: string;
}

export function ErrorFallback({ error }: { error?: Error }) {
  console.error({ ErrorFallback: error });

  return <VotesCounter productId={""} votesCount={{ product: 0 }} />;
}

const actionVotesCounter = invoke["deco-sites/camp-lvkin"].actions.votesCounter;

function VotesCounter({ votesCount, productId }: VotesCounterProps) {
  async function handleLike() {
    const actionResponse = await actionVotesCounter({ productId });

    if (actionResponse) {
      console.log({ actionResponse: "Success" });

      return;
    }

    console.log({ actionResponse: "Action error" });
  };
  console.log("votesCount", votesCount);
  
  return (
    <div class="flex gap-3 items-center">
      <button
        class={`border-0 ${alreadyLiked.value ? "text-emerald-500 hover:text-emerald-600" : "text-slate-400 hover:text-slate-500"} transition-all`}
				onClick={() => handleLike()}
      >
        <Icon
          id={alreadyLiked.value ? "IconMoodCheck" : "IconMoodSmile"}
          size={24}
        />
      </button>

      <div class="flex gap-1 text-slate-400">
        <Icon id="IconFriends" size={24} />
        <span>{votesCount}</span>
      </div>
    </div>
  );
}

export default VotesCounter;
