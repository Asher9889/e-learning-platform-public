import { AdmissionPage } from "@/src/features/admissions/pages/AdmissionPage";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  return <AdmissionPage slug={slug} />;
}