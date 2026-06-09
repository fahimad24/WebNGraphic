"use client";

import { useResponseModal } from "@/context/response-form-modal";

interface ResModTrigBtn {
  children: React.ReactNode;
  plan?: string;
  service?: string;
}

export default function ResModTrigBtn({
  children,
  plan,
  service,
}: ResModTrigBtn) {
  const { openModal } = useResponseModal();

  return <div onClick={() => openModal({ plan, service })}>{children}</div>;
}
