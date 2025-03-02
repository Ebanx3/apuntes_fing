export const readMdFile = async (tema: string): Promise<string> => {
  try {
    const context = import.meta.glob("../temas/*.md");
    const articleFunc = context[`../temas/${tema}.md`];
    if (articleFunc) {
      const module = await articleFunc() as { default: string };
      return module.default;
    } else {
      return "Artículo no encontrado";
    }
  } catch {
    return "Error al cargar el artículo";
  }
};
