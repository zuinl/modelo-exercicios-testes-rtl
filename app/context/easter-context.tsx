"use client";
import { createContext, ReactNode, useMemo, useState } from "react";
import { useEaster } from "../hooks/use-easter";

type EasterContextPayload = {
  onDateChange: (newDate: string) => void;
  tellMeItsEaster: () => void;
  date: string;
  data: string | null;
  error: string | null;
};

export const EasterContext = createContext({} as EasterContextPayload);

export const EasterProvider = ({ children }: { children: ReactNode }) => {
  const [date, setDate] = useState<string>("");

  const { data, error, updateData } = useEaster(date);

  const onDateChange = (newDate: string) => {
    setDate(newDate);
  }

  const tellMeItsEaster = () => {
    updateData();
  }

  const value = useMemo(
    () => ({ onDateChange, date, data, error, tellMeItsEaster }),
    [onDateChange, date, data, error, tellMeItsEaster],
  );

  return (
    <EasterContext.Provider value={value}>{children}</EasterContext.Provider>
  );
};
