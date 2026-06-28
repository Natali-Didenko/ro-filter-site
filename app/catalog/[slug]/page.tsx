import Image from "next/image";
import { notFound } from "next/navigation";
import CatalogProductCards from "../CatalogProductCards";
import {
  catalogSections,
  getCatalogSection,
  reverseOsmosisProducts,
} from "../data";

export function generateStaticParams() {
  return catalogSections.map((section) => ({ slug: section.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const section = getCatalogSection(slug);

  if (!section) {
    return {
      title: "Каталог RO filter",
    };
  }

  return {
    title: `${section.title} | RO filter`,
    description: section.description,
  };
}

export default async function CatalogSectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const section = getCatalogSection(slug);

  if (!section) {
    notFound();
  }

  return (
    <main>
      <section className="catalogPageHero">
        <div>
          <h1>{section.title}</h1>
          <p className="lead">{section.description}</p>
        </div>
        <div className="catalogHeroImage">
          <Image
            src={section.image}
            alt={section.imageAlt}
            width={720}
            height={450}
            priority
          />
        </div>
      </section>
      {section.slug === "reverse-osmosis" ? (
        <CatalogProductCards products={reverseOsmosisProducts} />
      ) : null}
    </main>
  );
}
