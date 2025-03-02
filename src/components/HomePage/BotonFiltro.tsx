interface Props {
  label: string;
  onClickMethod: (s: string) => void;
}

export const BotonFiltro = ({ label, onClickMethod }: Props) => {
  return (
    <button
      className="px-2 py-1 cursor-pointer border-emerald-600 border-2 hover:bg-emerald-600 text-zinc-700 hover:text-zinc-200  dark:text-zinc-300 text-sm font-bold"
      onClick={() => onClickMethod(label)}
    >
      {label}
    </button>
  );
};
