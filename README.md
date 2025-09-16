Mini-Loja: Comparativo de Técnicas de Estilização

Este projeto demonstra a implementação da mesma interface de uma pequena loja virtual utilizando quatro abordagens populares de estilização em CSS no ecossistema React. O objetivo é comparar as vantagens, desvantagens e a experiência de desenvolvimento de cada método.

A aplicação inclui funcionalidades como:

    Grid de produtos responsivo

    Dark mode com persistência em localStorage

    Simulação de carregamento com skeleton states

    Componentes reutilizáveis (Button, ProductCard, etc.)

Implementações

O projeto está dividido em quatro pastas, cada uma contendo uma implementação completa e independente.
1. 01-css-global/

    Técnica: CSS Global

    Descrição: Utiliza uma única folha de estilo (global.css) para toda a aplicação. As classes são globais e a organização é mantida através da convenção BEM. Os tokens de design são gerenciados com variáveis CSS (:root).

2. 02-css-modules/

    Técnica: CSS Modules

    Descrição: Cada componente React possui seu próprio arquivo de estilo (*.module.css). As classes são locais por padrão, evitando conflitos de nomenclatura. Os tokens globais ainda são definidos em um index.css.

3. 03-tailwind/

    Técnica: Tailwind CSS

    Descrição: Uma abordagem utility-first. A estilização é aplicada diretamente no JSX através de classes de utilitário. A configuração do tema e do dark mode é gerenciada no arquivo tailwind.config.js.

4. 04-styled-components/

    Técnica: CSS-in-JS com Styled Components

    Descrição: Os estilos são escritos em JavaScript dentro dos arquivos de componente. A biblioteca cria componentes React com estilos encapsulados. A tematização (dark/light mode) é controlada de forma poderosa através do ThemeProvider.

Como Executar

Para rodar qualquer uma das versões, siga os passos abaixo:

    Navegue até a pasta da implementação desejada:

    # Exemplo para a versão de CSS Global
    cd 01-css-global

    Instale as dependências (necessário apenas na primeira vez):

    npm install

    Inicie o servidor de desenvolvimento:

    npm run dev

A aplicação estará disponível em http://localhost:5173.
