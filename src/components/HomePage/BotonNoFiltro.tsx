interface Props {
  onClickMethod: () => void;
}

export const BotonNoFiltro = ({ onClickMethod }: Props) => {
  return (
    <button
      className="px-2 py-1 cursor-pointer border-orange-600 border-2 hover:bg-orange-600 text-zinc-700 hover:text-zinc-200  dark:text-zinc-300 text-sm font-bold"
      onClick={onClickMethod}
    >
      Sin Filtro
    </button>
  );
};
