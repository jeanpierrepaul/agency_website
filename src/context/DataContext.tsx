import { createContext, useContext, useState, ReactNode } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  published: boolean;
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
  rating: number;
  published: boolean;
}

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'replied';
}

interface DataContextType {
  blogPosts: BlogPost[];
  setBlogPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  testimonials: Testimonial[];
  setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;
  messages: ContactMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ContactMessage[]>>;
  addMessage: (message: Omit<ContactMessage, 'id' | 'date' | 'status'>) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: 'Les tendances du digital en 2024',
      excerpt: 'Découvrez les principales tendances qui façonnent le paysage digital cette année.',
      content: 'Le monde du digital évolue rapidement. En 2024, nous observons plusieurs tendances majeures : l\'intelligence artificielle générative, l\'automatisation des processus, et la personnalisation à grande échelle. Ces technologies transforment la façon dont les entreprises interagissent avec leurs clients.',
      image: '/images/blog1.jpg',
      author: 'DigiDesk Team',
      date: '2024-01-15',
      category: 'Digital',
      published: true
    },
    {
      id: 2,
      title: 'Comment optimiser votre gestion administrative',
      excerpt: 'Des conseils pratiques pour améliorer l\'efficacité de votre gestion administrative.',
      content: 'La gestion administrative peut être chronophage. Découvrez nos meilleures pratiques pour optimiser vos processus, automatiser les tâches répétitives et gagner un temps précieux.',
      image: '/images/blog2.jpg',
      author: 'Sophie Martin',
      date: '2024-01-10',
      category: 'Business',
      published: true
    },
    {
      id: 3,
      title: 'L\'importance de la communication digitale',
      excerpt: 'Pourquoi votre présence en ligne est cruciale pour votre entreprise.',
      content: 'Dans un monde de plus en plus connecté, la communication digitale n\'est plus une option mais une nécessité. Apprenez comment développer une stratégie efficace.',
      image: '/images/blog3.jpg',
      author: 'Jean Kouassi',
      date: '2024-01-05',
      category: 'Marketing',
      published: true
    }
  ]);

  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: 'Sophie Mensah',
      position: 'CEO',
      company: 'TechStart Togo',
      content: 'DigiDesk a transformé notre gestion administrative. Service professionnel et réactif !',
      image: '/images/avatar1.jpg',
      rating: 5,
      published: true
    },
    {
      id: 2,
      name: 'Kofi Adama',
      position: 'Directeur Commercial',
      company: 'InnovCorp',
      content: 'Excellent accompagnement sur nos besoins en communication digitale. Résultats au-delà de nos attentes.',
      image: '/images/avatar2.jpg',
      rating: 5,
      published: true
    },
    {
      id: 3,
      name: 'Marie Dupont',
      position: 'Fondatrice',
      company: 'EcoSolutions',
      content: 'Un partenaire fiable qui comprend vraiment les besoins des PME. Je recommande vivement !',
      image: '/images/avatar3.jpg',
      rating: 5,
      published: true
    }
  ]);

  const [messages, setMessages] = useState<ContactMessage[]>([
    {
      id: 1,
      name: 'Jean Dupont',
      email: 'jean.dupont@example.com',
      phone: '+228 90 12 34 56',
      subject: 'gestion-administrative',
      message: 'Bonjour, je souhaiterais obtenir plus d\'informations sur vos services de gestion administrative.',
      date: '2024-01-15',
      status: 'new'
    },
    {
      id: 2,
      name: 'Marie Martin',
      email: 'marie.martin@example.com',
      phone: '+228 91 23 45 67',
      subject: 'communication',
      message: 'Intéressée par vos services de communication digitale.',
      date: '2024-01-14',
      status: 'read'
    }
  ]);

  const addMessage = (messageData: Omit<ContactMessage, 'id' | 'date' | 'status'>) => {
    const newMessage: ContactMessage = {
      ...messageData,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      status: 'new'
    };
    setMessages(prev => [newMessage, ...prev]);
  };

  return (
    <DataContext.Provider value={{
      blogPosts,
      setBlogPosts,
      testimonials,
      setTestimonials,
      messages,
      setMessages,
      addMessage
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
