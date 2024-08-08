const fs = require('fs');
const path = require('path');

// Diretório principal do projeto
const mainDir = __dirname;

// Nome do arquivo README.md principal
const readmePath = path.join(mainDir, 'README.md');

// Título do README.md principal
let readmeContent = `# Curso de JavaScript

Este repositório contém exercícios e projetos desenvolvidos durante um curso de JavaScript. Cada pasta corresponde a uma aula específica, contendo exemplos de código e exercícios práticos.

## Estrutura do Repositório
`;

// Função para listar diretórios (aulas) no diretório principal
const listDirectories = (dir) => {
  return fs.readdirSync(dir).filter((file) => {
    return fs.statSync(path.join(dir, file)).isDirectory();
  });
};

// Listar os diretórios (aulas)
const directories = listDirectories(mainDir);

// Adicionar cada diretório (aula) ao conteúdo do README.md
directories.forEach((dir, index) => {
  readmeContent += `- [Aula ${index + 1}](./${dir})\n`;
});

// Adicionar conteúdo adicional ao README.md
readmeContent += `
## Sobre o Curso

O curso cobre os seguintes tópicos:

- Introdução ao JavaScript
- Manipulação do DOM
- Funções e escopos
- Objetos e Arrays
- Eventos e interatividade

## Como Usar

1. Clone o repositório:
   \`\`\`sh
   git clone https://github.com/seu_usuario/Curso-JS.git
   \`\`\`
2. Navegue para a pasta da aula desejada:
   \`\`\`sh
   cd Curso-JS/aula01
   \`\`\`
3. Abra o arquivo \`index.html\` no seu navegador para ver os exemplos em ação.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.
`;

// Escrever o conteúdo no README.md principal
fs.writeFileSync(readmePath, readmeContent);

console.log('README.md principal gerado com sucesso!');
