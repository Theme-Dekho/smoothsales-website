"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

export interface LeadModalContextType {
  isOpen: boolean;
  modalSource: string;
  openLeadModal: (source?: string) => void;
  closeLeadModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextType>({
  isOpen: false,
  modalSource: "website",
  openLeadModal: () => {},
  closeLeadModal: () => {},
});

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalSource, setModalSource] = useState<string>("website");

  const openLeadModal = useCallback((source: string = "website") => {
    setModalSource(source);
    setIsOpen(true);
  }, []);

  const closeLeadModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Also listen for global custom event so raw buttons or non-React scripts can open it
  useEffect(() => {
    const handleCustomOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ source?: string }>;
      const source = (customEvent.detail && customEvent.detail.source) || "custom_trigger";
      openLeadModal(source);
    };

    window.addEventListener("open-lead-modal", handleCustomOpen);
    return () => window.removeEventListener("open-lead-modal", handleCustomOpen);
  }, [openLeadModal]);

  return (
    <LeadModalContext.Provider
      value={{
        isOpen,
        modalSource,
        openLeadModal,
        closeLeadModal,
      }}
    >
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal(): LeadModalContextType {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return context;
}
