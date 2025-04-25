import { useState } from "react";

/**
 * Hook tem uma lógica complexa e com uso de IA avançada para determinar se hoje é Páscoa!
 * @param date A data a ser verificada
 * @returns Dados da Páscoa
 */
export const useEaster = (date: string) => {
  const currentYear = new Date().getFullYear();
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = (): void => {
    setLoading(true);

    const result: Promise<{ success: boolean, message: string }> = new Promise((resolve) => {
      setTimeout(() => {
        const dateInstance = new Date(date);
        const dateYear = dateInstance.getFullYear();

        if (dateYear === currentYear) {
          return resolve({ success: true, message: "Everyday's Easter! 🍫" });
        } else if (dateYear > currentYear) {
          return resolve({ success: true, message: "The future promises rivers of chocolate 👀" });
        } else {
          return resolve({ success: false, message: "The past has no chocolate 💔" });
        }
      }, 500);
    });

    result.then((res) => {
      if (res.success) {
        setData(res.message);
      } else {
        setError(res.message);
      }
    });

    result.finally(() => {
      setLoading(false);
    });
  };

  const clearData = (): void => {
    setData(null);
    setError(null);
  };

  const updateData = (): void => {
    clearData();
    fetchData();
  };

  return {
    loading,
    data,
    error,
    clearData,
    updateData,
  };
};

