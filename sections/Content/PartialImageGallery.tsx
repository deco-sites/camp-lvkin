import Image from "apps/website/components/Image.tsx";
import Spinner from "deco-sites/camp-lvkin/components/ui/Spinner.tsx";

import { ImageWidget } from "apps/admin/widgets.ts";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

/** @title Imagem */
interface Image {
  /** @title Selecione sua imagem */
  src: ImageWidget;
  /** @title Indique um texto alternativo para a imagem **/
  alt: string;
}

export interface PartialImageGalleryProps {
  /** @title Título da galeria */
  title?: string;
  /** @title Texto descritivo */
  description?: string;
  /** @title Lista de imagens */
  items: Image[];
  /** @title Texto do botão */
  showMoreButtonText: string;
  /** @title Página */
  page: number;
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

export default function PartialImageGallery(
  { title, description, items, showMoreButtonText, page }:
    PartialImageGalleryProps,
) {
  const imagePage = items.slice(0, page * 3);

  return items.length >= 3 && (
    <section class="partial-image-gallery-section">
      {title && (
        <h2 class="partial-image-gallery-title text-center mx-auto">
          {title}
        </h2>
      )}
      {description && (
        <h2 class="partial-image-gallery-description text-center mx-auto max-w-40">
          {description}
        </h2>
      )}
      <div class="partial-image-gallery mx-auto">
        {imagePage.map((item: Image) => (
          <Image alt={item.alt} title="imagem" src={item.src} width={540} />
        ))}
      </div>

      {Math.ceil(items.length / 3) > page && (
        <button
          className="partial-image-gallery-see-more"
          {...usePartialSection({ props: { page: page + 1 } })}
        >
          {showMoreButtonText}
        </button>
      )}
    </section>
  );
}
