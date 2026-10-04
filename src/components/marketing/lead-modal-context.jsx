"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const LeadModalContext = createContext({
  isOpen: false,
  modalSource: "website",
  openLeadModal: () => {},
  closeLeadModal: () => {},
});

export function LeadModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalSource, setModalSource] = useState("website");

  const openLeadModal = useCallback((source = "website") => {
    setModalSource(source);
    setIsOpen(true);
  }, []);

  const closeLeadModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Also listen for global custom event so raw buttons or non-React scripts can open it
  useEffect(() => {
    const handleCustomOpen = (e) => {
      const source = (e.detail && e.detail.source) || "custom_trigger";
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

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return context;
}
