import Link from "next/link";
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
        <Link className="catalogBackLink" href="/">
          ← На головну
        </Link>
        <h1>{section.title}</h1>
      </section>
      {section.slug === "reverse-osmosis" ? (
        <CatalogProductCards products={reverseOsmosisProducts} />
      ) : null}
    </main>
  );
}
