import type { Language, TranslationDictionary } from "@i18n/types";

export const translations: Record<Language, TranslationDictionary> = {
  "pt-BR": {
    nav: {
      projects: "Projetos",
      about: "Sobre",
      contact: "Contato",
    },
    hero: {
      badge: "Disponível para projetos",
      name: "João Vitor",
      role: "Desenvolvedor Front-end",
      intro:
        "Cada detalhe importa — do timing de uma animação à escolha de uma fonte. Construo interfaces que as pessoas queiram usar.",
      ctaContact: "Falar comigo",
      ctaProjects: "Ver projetos",
      scrollHint: "Rolar",
      emailLabel: "E-mail",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    about: {
      eyebrow: "// sobre",
      titleLead: "Código e design",
      emphasis: "são a mesma coisa",
      body: "Sou um desenvolvedor front-end que acredita que código e design são a mesma coisa quando feitos com atenção. Gosto de trabalhar no espaço entre o visual e o técnico — onde uma transição bem pensada muda completamente a percepção de um produto. Tenho experiência com stacks modernas, mas o que me motiva mesmo é construir interfaces que as pessoas queiram usar.",
    },
    skills: {
      eyebrow: "// habilidades",
      title: "O que uso no dia a dia",
      groups: {
        frontendMobile: "Frontend & Mobile",
        backend: "Backend",
        database: "Banco de Dados & Cache",
        messaging: "Mensageria & Streaming",
        infrastructure: "Infraestrutura",
        domains: "Domínios",
      },
      items: {
        reactJs: "React.js",
        reactNative: "React Native",
        nextJs: "Next.js",
        flutter: "Flutter",
        typescript: "TypeScript",
        nodeJs: "Node.js",
        restApis: "APIs REST",
        paymentGatewayIntegrations: "Integrações com gateways de pagamento",
        postgresql: "PostgreSQL",
        redis: "Redis",
        apacheKafka: "Apache Kafka",
        docker: "Docker",
        paymentIntermediation: "Intermediação de pagamentos",
        digitalMarketplace: "Mercado digital",
        checkout: "Checkout",
        fiscalIssuance: "Emissão fiscal (SEFAZ)",
        highVolumeSystems: "Sistemas de alto volume transacional",
      },
    },
    projects: {
      eyebrow: "// projetos",
      title: "Tudo o que foi construído",
      screenshotPending: "// screenshot pendente",
      viewProject: "Ver projeto",
    },
    contact: {
      eyebrow: "// contato",
      title: "Vamos conversar",
      body: "Aberto a colaborações, freelas e oportunidades interessantes. Prefiro uma troca direta — manda uma mensagem.",
      emailLabel: "E-mail",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    footer: {
      rights: "Todos os direitos reservados",
    },
    notFound: {
      title: "Página não encontrada",
      body: "Esse caminho não leva a lugar nenhum. Mas a home sim.",
      cta: "Voltar ao início",
    },
    a11y: {
      themeToggle: "Alternar tema claro e escuro",
      languageToggle: "Alternar idioma entre português e inglês",
      menu: "Abrir menu de navegação",
      primaryNav: "Navegação principal",
      lightboxClose: "Fechar imagem",
      lightboxPrev: "Imagem anterior",
      lightboxNext: "Próxima imagem",
      carouselPrev: "Slide anterior",
      carouselNext: "Próximo slide",
    },
    projectPage: {
      overview: "Visão geral",
      challenge: "Desafio",
      process: "Processo",
      gallery: "Galeria",
      outcome: "Resultado",
      role: "Papel",
      year: "Ano",
      stack: "Stack",
      liveLink: "Ver online",
      backToProjects: "Voltar aos projetos",
      nextProject: "Próximo projeto",
      prevProject: "Projeto anterior",
      projectNavigation: "Navegação entre projetos",
    },
    projectDetails: {
      // nota-flow
      "nota-flow.tag.1": "Fintech",
      "nota-flow.tag.2": "SaaS",
      "nota-flow.tag.3": "Pagamentos",
      "nota-flow.tagline":
        "Emissão fiscal e pagamentos sem atrito para o comércio independente.",
      "nota-flow.overview":
        "Nota Flow é uma plataforma de pagamentos voltada a lojistas independentes que precisam emitir notas fiscais e processar cobranças em um único lugar. O produto unifica gateway de pagamento, checkout customizado e comunicação com a SEFAZ, reduzindo a carga operacional do pequeno comerciante. A interface foi desenhada para ser usada sem treinamento — clareza e confiança em cada tela.",
      "nota-flow.role": "Front-end · Design de produto",
      "nota-flow.challenge":
        "Integrar fluxos de pagamento e emissão fiscal em uma mesma experiência sem sobrecarregar o usuário com jargão contábil. A SEFAZ impõe regras rígidas de formato e validação que precisavam ser abstraídas de forma transparente, enquanto o checkout deveria ser rápido o suficiente para não perder conversão em picos de venda.",
      "nota-flow.process.1":
        "Mapeamento dos fluxos fiscais e de pagamento junto a comerciantes reais — entrevistas curtas, observação de rotina.",
      "nota-flow.process.2":
        "Prototipagem do checkout e do painel, com testes de usabilidade em três rodadas iterativas.",
      "nota-flow.process.3":
        "Implementação do front-end com Next.js, integração com a API de pagamentos e a camada fiscal via endpoints Node.js.",
      "nota-flow.gallery.1":
        "Tela de login do NotaFlow, com uma animação em shader compondo o plano de fundo — o primeiro contato do usuário com o produto.",
      "nota-flow.gallery.2":
        "Listagem de notas fiscais emitidas, com status, valores e ações rápidas por linha para acompanhar e gerenciar cada documento.",
      "nota-flow.gallery.3":
        "Tela de integrações, onde o lojista conecta o NotaFlow a outros serviços e gateways usados na operação.",
      "nota-flow.outcome":
        "Redução de 40% no tempo médio gasto em emissão fiscal por lojista. O checkout customizado aumentou a taxa de conclusão de pagamentos em relação ao modelo anterior. O produto foi validado com comerciantes reais antes do lançamento e recebeu feedback positivo pela clareza das telas.",
      "nota-flow.duration": "2 anos",
      // keedpay
      "keedpay.tag.1": "Marketing Digital",
      "keedpay.tag.2": "Produtos Digitais",
      "keedpay.tag.3": "Afiliados",
      "keedpay.tagline":
        "Plataforma de marketing digital para venda de produtos digitais e físicos.",
      "keedpay.overview":
        "KeedPay é uma plataforma de marketing digital voltada à venda de produtos digitais e físicos, em que produtores cadastram produtos e afiliados os promovem. O sistema reúne checkout, programa de afiliados, área de membros para cursos, gestão pós-venda, split de comissão e fornecimento de produtos físicos. Integrei a equipe de desenvolvimento do produto por quatro anos — o projeto de maior duração da minha trajetória — acompanhando sua evolução desde uma base inicial até uma plataforma ampla e modular.",
      "keedpay.role": "Desenvolvimento front-end e back-end",
      "keedpay.challenge":
        "Sustentar uma plataforma que cresce em funcionalidades sem perder consistência: checkout, área de membros, painel de afiliados, produtos e relatórios convivem na mesma base de código. O desafio constante foi manter a interface coesa e rápida a cada novo módulo, garantindo que produtores de todos os níveis operassem sem fricção.",
      "keedpay.process.1":
        "Construção e evolução de uma biblioteca de componentes reutilizáveis para sustentar o crescimento da plataforma com consistência visual.",
      "keedpay.process.2":
        "Desenvolvimento dos fluxos centrais — checkout, cadastro de produtos, área de membros e painel de afiliados — em parceria com design e back-end.",
      "keedpay.process.3":
        "Implementação com React e TypeScript, com foco em performance percebida e clareza nos estados de cada tela.",
      "keedpay.gallery.1": "Painel de insights da operação do produtor",
      "keedpay.gallery.2":
        "Checkout customizável para produtos digitais e físicos",
      "keedpay.gallery.3": "Painel de gestão de afiliados e comissões",
      "keedpay.outcome":
        "Ao longo de quatro anos, o front-end evoluiu de uma base inicial para uma plataforma com diversos módulos, mantendo consistência visual e desempenho a cada nova funcionalidade incorporada — área de membros, fornecimento e insights com IA, entre outras.",
      "keedpay.duration": "4 anos",
      // keed sub-products
      "keed.platform.name": "Keed Plataforma",
      "keed.platform.description":
        "A plataforma web do KeedPay é onde o produtor gerencia todo o negócio: cadastro de produtos digitais e físicos, checkout customizável, área de membros para cursos, sistema de afiliados, gestão pós-venda e insights de performance e pagamentos com apoio de IA. Uma interface densa em informação, desenhada para manter a clareza mesmo com muitos módulos. Na plataforma web, atuei tanto no desenvolvimento front-end quanto no back-end.",
      "keed.platform.gallery.1":
        "Tela de Insights de Performance — valores transacionados, desempenho dos produtos e recomendações da IA para melhorar os resultados",
      "keed.platform.gallery.2":
        "Tela de Insights de Pagamentos — análise de conversão e recomendações da IA sobre o fluxo de pagamento",
      "keed.platform.gallery.3": "Tela de checkout gerada via payment link",
      "keed.mobile.name": "Keed Mobile",
      "keed.mobile.description":
        "O aplicativo do KeedPay é a versão mobile da plataforma, voltada ao acompanhamento da operação: vendas e comissões em tempo real, notificações de pagamentos e uma visão rápida do desempenho dos produtos. As telas seguem o padrão visual da plataforma web, adaptadas ao uso em celular.",
      "keed.mobile.gallery.1": "Tela inicial do aplicativo",
      "keed.mobile.gallery.2": "Gráficos de insights de desempenho",
      "keed.mobile.gallery.3": "Carteira do usuário",
      // ferrus
      "ferrus.tag.1": "Fitness",
      "ferrus.tag.2": "B2B2C",
      "ferrus.tag.3": "Marketplace",
      "ferrus.tagline":
        "Infraestrutura completa para o personal trainer fazer do treino um negócio.",
      "ferrus.overview":
        "Ferrus é uma plataforma de fitness em desenvolvimento que tira a relação personal trainer ↔ aluno do mundo informal — planilhas soltas, WhatsApp, PDFs de treino — e coloca em um ambiente dedicado. O trainer tem um estúdio digital para montar programas e treinos, acompanhar a evolução de cada aluno e gerir sua base de clientes como um negócio real. O aluno assina um plano e vive todo o acompanhamento por um aplicativo: vê treinos, registra séries, acompanha evolução e fica em contato com o trainer. O modelo é B2B2C — a plataforma serve o trainer, que serve o aluno final — e o motor financeiro é a assinatura recorrente, tornando o Ferrus um marketplace de fitness. Há forte cuidado de produto e identidade: cada trainer tem sua própria marca e cor dentro do app, para que o aluno sinta que está no espaço do trainer, não em um aplicativo genérico. Uma funcionalidade recente, a \"Legião\", dá ao trainer uma equipe com brasão, cor e nome próprios, transformando o grupo de alunos em comunidade.",
      "ferrus.role": "Desenvolvimento front-end",
      "ferrus.challenge":
        "Construir uma plataforma com dois produtos distintos — o estúdio web do trainer e o aplicativo móvel do aluno — mantendo identidade visual coesa e experiências otimizadas para cada perfil de uso. A personalização de marca por trainer exige que o app seja um produto com identidade variável sem perder consistência de interface.",
      "ferrus.process.1":
        "Definição da arquitetura de produto em duas camadas: painel web para o trainer e aplicativo para o aluno, com um modelo de dados compartilhado.",
      "ferrus.process.2":
        "Prototipagem dos fluxos principais — montagem de treino, registro de série e acompanhamento de evolução — validando a clareza do produto antes da implementação.",
      "ferrus.process.3":
        "Desenvolvimento do painel web com React e do aplicativo com Flutter, integrados a uma API Node.js com processamento assíncrono via Kafka e BullMQ.",
      "ferrus.gallery.1": "Painel do trainer com visão geral dos alunos ativos",
      "ferrus.gallery.2": "Editor de programas e treinos do estúdio web",
      "ferrus.gallery.3": "Tela de acompanhamento de evolução do aluno",
      "ferrus.outcome":
        "Projeto em andamento. Os módulos de cadastro, montagem de treinos e assinatura recorrente estão em desenvolvimento ativo. A funcionalidade Legião foi lançada como primeira versão da camada de comunidade da plataforma.",
      "ferrus.duration": "Em andamento",
      // ferrus sub-products
      "ferrus.mobile.name": "Ferrus App",
      "ferrus.mobile.description":
        "O aplicativo do Ferrus é o produto do aluno: onde ele acessa os treinos prescritos pelo trainer, registra séries e cargas, acompanha sua evolução ao longo do tempo e interage com a comunidade da sua Legião. O app reflete a identidade visual do trainer de cada aluno, criando a sensação de estar em um espaço personalizado. Desenvolvido em Flutter.",
      "ferrus.mobile.gallery.1":
        "Tela inicial do aplicativo, com o treino do dia e informações de acompanhamento à mão.",
      "ferrus.mobile.gallery.2":
        "Tela de treinos da semana, com histórico, início do treino e exportação.",
      "ferrus.mobile.gallery.3":
        "Detalhes do treino finalizado, com a possibilidade de anexar fotos e registros.",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      badge: "Available for projects",
      name: "João Vitor",
      role: "Front-end Developer",
      intro:
        "Every detail matters — from animation timing to typeface choice. I build interfaces people actually want to use.",
      ctaContact: "Get in touch",
      ctaProjects: "View projects",
      scrollHint: "Scroll",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    about: {
      eyebrow: "// about",
      titleLead: "Code and design",
      emphasis: "are the same thing",
      body: "I'm a front-end developer who believes that code and design are the same thing when done with intention. I like working in the space between visual and technical — where a well-considered transition completely shifts how a product feels. I have experience with modern stacks, but what really drives me is building interfaces people actually want to use.",
    },
    skills: {
      eyebrow: "// skills",
      title: "What I work with",
      groups: {
        frontendMobile: "Frontend & Mobile",
        backend: "Backend",
        database: "Databases & Cache",
        messaging: "Messaging & Streaming",
        infrastructure: "Infrastructure",
        domains: "Domains",
      },
      items: {
        reactJs: "React.js",
        reactNative: "React Native",
        nextJs: "Next.js",
        flutter: "Flutter",
        typescript: "TypeScript",
        nodeJs: "Node.js",
        restApis: "REST APIs",
        paymentGatewayIntegrations: "Payment gateway integrations",
        postgresql: "PostgreSQL",
        redis: "Redis",
        apacheKafka: "Apache Kafka",
        docker: "Docker",
        paymentIntermediation: "Payment intermediation",
        digitalMarketplace: "Digital marketplace",
        checkout: "Checkout",
        fiscalIssuance: "Fiscal issuance (SEFAZ)",
        highVolumeSystems: "High-volume transactional systems",
      },
    },
    projects: {
      eyebrow: "// projects",
      title: "Everything that was built",
      screenshotPending: "// screenshot pending",
      viewProject: "View project",
    },
    contact: {
      eyebrow: "// contact",
      title: "Let's talk",
      body: "Open to collaborations, freelance work, and interesting opportunities. I prefer a direct conversation — send a message.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    footer: {
      rights: "All rights reserved",
    },
    notFound: {
      title: "Page not found",
      body: "This path doesn't lead anywhere. But the home page does.",
      cta: "Back to home",
    },
    a11y: {
      themeToggle: "Toggle light and dark theme",
      languageToggle: "Toggle language between Portuguese and English",
      menu: "Open navigation menu",
      primaryNav: "Main navigation",
      lightboxClose: "Close image",
      lightboxPrev: "Previous image",
      lightboxNext: "Next image",
      carouselPrev: "Previous slide",
      carouselNext: "Next slide",
    },
    projectPage: {
      overview: "Overview",
      challenge: "Challenge",
      process: "Process",
      gallery: "Gallery",
      outcome: "Outcome",
      role: "Role",
      year: "Year",
      stack: "Stack",
      liveLink: "Live site",
      backToProjects: "Back to projects",
      nextProject: "Next project",
      prevProject: "Previous project",
      projectNavigation: "Project navigation",
    },
    projectDetails: {
      // nota-flow
      "nota-flow.tag.1": "Fintech",
      "nota-flow.tag.2": "SaaS",
      "nota-flow.tag.3": "Payments",
      "nota-flow.tagline":
        "Frictionless fiscal issuance and payments for independent retailers.",
      "nota-flow.overview":
        "Nota Flow is a payments platform built for independent merchants who need to issue fiscal receipts and process charges in a single place. The product unifies a payment gateway, custom checkout, and SEFAZ communication, reducing the operational burden on small business owners. The interface was designed to be used without any training — clarity and confidence on every screen.",
      "nota-flow.role": "Front-end · Product design",
      "nota-flow.challenge":
        "Integrating payment and fiscal issuance flows into a single experience without overwhelming users with accounting jargon. SEFAZ imposes strict format and validation rules that had to be abstracted transparently, while the checkout needed to be fast enough not to lose conversions during sales peaks.",
      "nota-flow.process.1":
        "Mapping fiscal and payment flows alongside real merchants — short interviews and routine observation.",
      "nota-flow.process.2":
        "Checkout and dashboard prototyping, with usability tests across three iterative rounds.",
      "nota-flow.process.3":
        "Front-end implementation with Next.js, integration with the payment API and the fiscal layer via Node.js endpoints.",
      "nota-flow.gallery.1":
        "NotaFlow login screen, with a shader animation composing the background — the user's first contact with the product.",
      "nota-flow.gallery.2":
        "List of issued fiscal invoices, with status, amounts, and quick per-row actions to track and manage each document.",
      "nota-flow.gallery.3":
        "Integrations screen, where the merchant connects NotaFlow to other services and gateways used in the operation.",
      "nota-flow.outcome":
        "40% reduction in average time spent on fiscal issuance per merchant. The custom checkout increased payment completion rates compared to the previous model. The product was validated with real merchants before launch and received strong feedback on screen clarity.",
      "nota-flow.duration": "2 years",
      // keedpay
      "keedpay.tag.1": "Digital Marketing",
      "keedpay.tag.2": "Digital Products",
      "keedpay.tag.3": "Affiliates",
      "keedpay.tagline":
        "Digital marketing platform for selling digital and physical products.",
      "keedpay.overview":
        "KeedPay is a digital marketing platform for selling digital and physical products, where producers register products and affiliates promote them. The system covers checkout, an affiliate program, a members area for courses, post-sale management, commission splitting, and physical product fulfillment. I was part of the product's development team for four years — the longest-running project of my career — following its evolution from an initial base to a broad, modular platform.",
      "keedpay.role": "Front-end and back-end development",
      "keedpay.challenge":
        "Sustaining a platform that keeps growing in features without losing consistency: checkout, members area, affiliate panel, products, and reports all live in the same codebase. The constant challenge was keeping the interface cohesive and fast with every new module, making sure producers at every level could operate without friction.",
      "keedpay.process.1":
        "Building and evolving a reusable component library to support the platform's growth with visual consistency.",
      "keedpay.process.2":
        "Developing the core flows — checkout, product registration, members area, and affiliate panel — in partnership with design and back-end.",
      "keedpay.process.3":
        "Implementation with React and TypeScript, focused on perceived performance and clarity across every screen's states.",
      "keedpay.gallery.1": "Insights panel for the producer's operation",
      "keedpay.gallery.2":
        "Customizable checkout for digital and physical products",
      "keedpay.gallery.3": "Affiliate and commission management panel",
      "keedpay.outcome":
        "Over four years, the front-end evolved from an initial base into a platform with many modules, keeping visual consistency and performance with every new feature added — members area, fulfillment, and AI insights, among others.",
      "keedpay.duration": "4 years",
      // keed sub-products
      "keed.platform.name": "Keed Platform",
      "keed.platform.description":
        "The KeedPay web platform is where producers manage the whole business: registering digital and physical products, a customizable checkout, a members area for courses, an affiliate system, post-sale management, and performance and payment insights backed by AI. An information-dense interface, designed to stay clear even with many modules. On the web platform, I worked on both front-end and back-end development.",
      "keed.platform.gallery.1":
        "Performance Insights screen — transacted values, product performance, and AI recommendations to improve results",
      "keed.platform.gallery.2":
        "Payment Insights screen — conversion analysis and AI recommendations on the payment flow",
      "keed.platform.gallery.3": "Checkout screen generated from a payment link",
      "keed.mobile.name": "Keed Mobile",
      "keed.mobile.description":
        "The KeedPay app is the mobile version of the platform, focused on tracking the operation: real-time sales and commissions, payment notifications, and a quick view of product performance. The screens follow the web platform's visual standard, adapted for phone use.",
      "keed.mobile.gallery.1": "App home screen",
      "keed.mobile.gallery.2": "Performance insights charts",
      "keed.mobile.gallery.3": "User wallet",
      // ferrus
      "ferrus.tag.1": "Fitness",
      "ferrus.tag.2": "B2B2C",
      "ferrus.tag.3": "Marketplace",
      "ferrus.tagline":
        "Complete infrastructure for personal trainers to turn coaching into a business.",
      "ferrus.overview":
        "Ferrus is a fitness platform under development that takes the personal trainer ↔ student relationship out of the informal world — loose spreadsheets, WhatsApp, workout PDFs — and into a dedicated environment. The trainer gets a digital studio to build programs and workouts, follow each student's progress, and run their client base as a real business. The student subscribes to a plan and lives the whole follow-up through a dedicated app: sees workouts, logs sets, tracks progress, and stays in contact with their trainer. The model is B2B2C — the platform serves the trainer, who serves the end client — and the financial engine is the recurring subscription, making Ferrus a fitness marketplace. There is strong product and identity care: each trainer has their own brand and color inside the app, so the student feels in their trainer's space, not a generic app. A recently launched feature, \"Legião\" (Legion), gives the trainer a team with its own crest, color, and name, turning the group of students into a community.",
      "ferrus.role": "Front-end development",
      "ferrus.challenge":
        "Building a platform with two distinct products — the trainer's web studio and the student's mobile app — while keeping a cohesive visual identity and experiences optimized for each user profile. Per-trainer brand customization requires the app to carry a variable identity without losing interface consistency.",
      "ferrus.process.1":
        "Defining the two-layer product architecture: a web panel for the trainer and a mobile app for the student, sharing a common data model.",
      "ferrus.process.2":
        "Prototyping the core flows — workout builder, set logging, and progress tracking — validating product clarity before implementation.",
      "ferrus.process.3":
        "Developing the web panel with React and the app with Flutter, both integrated to a Node.js API with asynchronous processing via Kafka and BullMQ.",
      "ferrus.gallery.1": "Trainer panel with an overview of active students",
      "ferrus.gallery.2": "Program and workout editor in the web studio",
      "ferrus.gallery.3": "Student progress tracking screen",
      "ferrus.outcome":
        "Project in progress. The registration, workout builder, and recurring subscription modules are in active development. The Legion feature was launched as the first version of the platform's community layer.",
      "ferrus.duration": "In progress",
      // ferrus sub-products
      "ferrus.mobile.name": "Ferrus App",
      "ferrus.mobile.description":
        "The Ferrus app is the student's product: where they access workouts prescribed by their trainer, log sets and loads, track their progress over time, and interact with their Legion community. The app reflects the visual identity of each student's trainer, creating the feel of a personalized space. Built with Flutter.",
      "ferrus.mobile.gallery.1":
        "App home screen, with the day's workout and follow-up information at hand.",
      "ferrus.mobile.gallery.2":
        "Weekly workouts screen, with history, starting a workout, and export.",
      "ferrus.mobile.gallery.3":
        "Finished workout details, with the option to attach photos and records.",
    },
  },
};
