"use client";
import React, { useState, createContext, ReactNode } from "react";

type LanguageType = "en" | "cn";

type LanguageContextType = {
  language: "en" | "cn";
  toggleLanguage: () => void;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<LanguageType>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "cn" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
