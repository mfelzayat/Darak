import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type OptionId = 1 | 2;

const STORAGE_KEY = "darak.option";

type Ctx = {
  option: OptionId;
  setOption: (n: OptionId) => void;
};

const OptionContext = createContext<Ctx | null>(null);

function readInitial(): OptionId {
  if (typeof window === "undefined") return 1;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === "2") return 2;
    if (raw === "1") return 1;
  } catch {
    /* ignore */
  }
  return 1; // default — preserves the existing experience on first load
}

export function OptionProvider({ children }: { children: ReactNode }) {
  const [option, setOptionState] = useState<OptionId>(() => readInitial());

  // persist
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(option));
    } catch {
      /* ignore */
    }
  }, [option]);

  const setOption = useCallback((n: OptionId) => setOptionState(n), []);

  const value = useMemo(() => ({ option, setOption }), [option, setOption]);

  return (
    <OptionContext.Provider value={value}>{children}</OptionContext.Provider>
  );
}

export function useOption(): Ctx {
  const ctx = useContext(OptionContext);
  if (!ctx) throw new Error("useOption must be used inside <OptionProvider>");
  return ctx;
}
