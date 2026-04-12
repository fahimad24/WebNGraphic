"use client";

import { GetStartedForm } from "@/components/manual/form/GetStartedForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { createContext, useContext, useState, type ReactNode } from "react";

type PresetDataType = {
  service?: string;
  plan?: string;
};

type ResponseModalContextType = {
  openModal: (presetData?: PresetDataType) => void;
  closeModal: () => void;
};

const ResponseModalContext = createContext<ResponseModalContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export const useResponseModal = () => useContext(ResponseModalContext);

export function ResponseModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [preData, setPreData] = useState<PresetDataType>({});

  const openModal = (presetData?: PresetDataType) => {
    setPreData(presetData || {});
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <ResponseModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="lg:min-w-3xl max-h-[90vh] overflow-y-auto w-full">
          <GetStartedForm presetValues={preData} />
        </DialogContent>
      </Dialog>
    </ResponseModalContext.Provider>
  );
}
