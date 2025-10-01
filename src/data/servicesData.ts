import img1 from '../images/1.jpg';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';

export interface ServiceData {
  id: string;
  icon: string;
  title: string;
  image: string;
  description: string;
  details: string[];
  benefits: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: 'gestion-administrative',
    icon: "ri-file-list-3-line",
    title: "Gestion Administrative",
    image: img1,
    description: "Chez DigiDesk, nous prenons en charge pour vous l'ensemble des opérations administratives et organisationnelles. Grâce à des formules flexibles, nous vous permettons d'externaliser efficacement ces tâches, tout en conservant un haut niveau de qualité, de confidentialité et de réactivité.",
    details: [
      "Planification de vos rendez-vous",
      "Rédaction de mails professionnels",
      "Organisation et coordination de réunions avec compte-rendu",
      "Tenue régulière des outils de pilotage et reporting"
    ],
    benefits: [
      "Vous libérer du poids administratif",
      "Vous concentrer sur le développement de votre activité",
      "Haut niveau de qualité et de confidentialité",
      "Réactivité garantie"
    ]
  },
  {
    id: 'communication-visibilite',
    icon: "ri-megaphone-line",
    title: "Communication & Visibilité",
    image: img2,
    description: "Chez DigiDesk, nous vous aidons à gagner en notoriété et à bâtir une identité visuelle attrayante et professionnelle, avec un accompagnement complet en communication digitale. Grâce à nos offres modulables, de la production de contenus simple jusqu'à la stratégie de marque complète, nous vous garantissons une visibilité optimisée.",
    details: [
      "Création de visuels et rédaction de contenus pour les réseaux sociaux",
      "Élaboration de calendriers éditoriaux adaptés à vos objectifs",
      "Conception de newsletters impactantes",
      "Lancement et gestion de campagnes de communication ciblées et structurées"
    ],
    benefits: [
      "Faire de votre communication un vrai levier de croissance",
      "Toucher les bonnes audiences, au bon moment",
      "Présence digitale à la hauteur de vos ambitions",
      "Visibilité optimisée et notoriété renforcée"
    ]
  },
  {
    id: 'support-comptable-fiscal',
    icon: "ri-calculator-line",
    title: "Support Comptable & Fiscal",
    image: img3,
    description: "Chez DigiDesk, nous vous proposons un accompagnement fiable, structuré et sur-mesure pour alléger votre charge administrative et garantir votre conformité. Avec nos formules évolutives, vous bénéficiez d'un appui régulier ou ponctuel, adapté à vos besoins réels et à la taille de votre structure.",
    details: [
      "Émission de factures et archivage des pièces comptables",
      "Déclarations fiscales (TVA, IRPP, etc.)",
      "Rapprochements bancaires et suivi de trésorerie",
      "Élaboration de budgets et reporting stratégique"
    ],
    benefits: [
      "Vous faire gagner du temps",
      "Sécuriser vos démarches",
      "Fiabiliser vos comptes",
      "Vous concentrer sur la gestion et le développement de votre activité"
    ]
  },
  {
    id: 'conseil-appui-juridique',
    icon: "ri-scales-3-line",
    title: "Conseil & Appui Juridique",
    image: img4,
    description: "DigiDesk vous propose un accompagnement juridique agile, pratique et accessible, pour vous permettre de prendre les bonnes décisions en toute sérénité. Nos offres s'adaptent à votre niveau de maturité juridique : mission ponctuelle, assistance mensuelle ou accompagnement stratégique.",
    details: [
      "Rédaction et relecture de contrats simples ou complexes",
      "Révision de CGV, consultations et notes juridiques",
      "Création d'entreprise, formalités OTR / ARCOP",
      "Veille juridique et appui stratégique en continu",
      "Assistance à la gestion des contentieux"
    ],
    benefits: [
      "Sécuriser vos démarches",
      "Prévenir les litiges",
      "Gagner du temps dans la gestion de vos obligations légales",
      "Accompagnement juridique accessible"
    ]
  },
  {
    id: 'conseil-assurance',
    icon: "ri-shield-check-line",
    title: "Conseil en Assurance",
    image: img5,
    description: "DigiDesk vous accompagne pour comprendre, comparer et gérer vos assurances en toute simplicité. Nos formules vont de l'intervention ponctuelle à un accompagnement pérenne.",
    details: [
      "Analyse de vos besoins réels et recommandations sur mesure",
      "Comparaison des offres disponibles sur le marché",
      "Accompagnement à la souscription et suivi des contrats",
      "Gestion proactive des sinistres et appui au traitement des dossiers",
      "Veille continue pour adapter vos garanties à l'évolution de votre activité"
    ],
    benefits: [
      "Protection optimisée",
      "Charge mentale allégée",
      "Meilleure maîtrise des risques assurantiels",
      "Accompagnement sur mesure"
    ]
  },
  {
    id: 'gouvernance-rse',
    icon: "ri-leaf-line",
    title: "Gouvernance & Développement Durable",
    image: img6,
    description: "DigiDesk vous accompagne pour intégrer des pratiques de gouvernance locale et de développement durable dans vos projets, tout en restant fidèle à vos valeurs et objectifs.",
    details: [
      "Analyse de vos besoins en matière de gouvernance locale et durable",
      "Conception de stratégies durables adaptées à vos besoins",
      "Accompagnement à l'intégration des pratiques RSE",
      "Veille continue en matière de développement durable",
      "Suivi des indicateurs de durabilité et des bonnes pratiques",
      "Mise en réseau avec des partenaires locaux"
    ],
    benefits: [
      "Contribuer au développement durable des territoires",
      "Respecter les normes locales de gouvernance",
      "Approche pratique et efficace",
      "Image d'entreprise responsable"
    ]
  },
  {
    id: 'offre-personnalite-publique',
    icon: "ri-vip-crown-line",
    title: "Gestion d'Image : Offre Personnalité Publique",
    image: img7,
    description: "DigiDesk met à votre disposition un accompagnement sur mesure pour préserver, optimiser et sécuriser votre image publique, avec discrétion, stratégie et professionnalisme. Nos formules s'adaptent à votre niveau d'exposition : intervention ponctuelle, accompagnement mensuel ou suivi confidentiel renforcé.",
    details: [
      "Élaboration de stratégie d'image et de communication (positionnement, valeurs, ligne éditoriale)",
      "Création et gestion de contenus pour les réseaux sociaux (Facebook, LinkedIn, WhatsApp pro…)",
      "Veille des apparitions publiques (médias, web) et gestion des situations sensibles",
      "Rédaction de discours, messages officiels, courriers ou éléments de langage personnalisés",
      "Assistance discrète au quotidien : gestion de rendez-vous, boîte mail, préparation d'événements officiels"
    ],
    benefits: [
      "Présence professionnelle, cohérente et adaptée",
      "Garder le contrôle, même dans les périodes sensibles",
      "Discrétion et confidentialité absolues",
      "Accompagnement premium sur mesure"
    ]
  }
];
