export const Greeting = ({
  nomes,
  onImparNomeClick,
  onParNomeClick,
  onMouseDireitoClick,
  onDigitaNome,
}: {
  nomes: string[];
  onImparNomeClick: (nome: string) => void;
  onParNomeClick: (nome: string) => void;
  onMouseDireitoClick: (nome: string) => void;
  onDigitaNome: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      {nomes.map((nome, idx) => {
        return (
          <button
            type="button"
            key={nome}
            onClick={() =>
              (idx + 1) % 2 === 0
                ? onParNomeClick(nome)
                : onImparNomeClick(nome)
            }
            onContextMenu={(e) => {
              e.preventDefault();
              onMouseDireitoClick(nome);
            }}
          >
            Olá, {nome}!
          </button>
        );
      })}

      <input type="text" onChange={onDigitaNome} />
    </div>
  );
};