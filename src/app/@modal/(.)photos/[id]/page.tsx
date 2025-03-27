import { Modal } from "./modal";

export function generateStaticParams() {
  return [];
}

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  return <Modal>{photoId}</Modal>;
}
