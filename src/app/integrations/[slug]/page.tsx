
import { notFound } from "next/navigation";
import IntegrationPage from "@/components/integrations/integration-page";
import { integrationData } from "@/components/integrations/integration-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    { slug: "instagram-dm" },
    { slug: "meta-capi" },
  ];
}

export default async function IntegrationDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const integration = integrationData[slug];

  if (!integration) {
    notFound();
  }

  return <IntegrationPage integration={integration} />;
}
