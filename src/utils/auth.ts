// Gestion sécurisée de l'authentification

const SESSION_KEY = 'adminSession';
const SESSION_TIMEOUT = parseInt(import.meta.env.VITE_SESSION_TIMEOUT || '1800000'); // 30 minutes par défaut

interface Session {
  authenticated: boolean;
  timestamp: number;
  attempts?: number;
  lastAttempt?: number;
}

export const createSession = (): void => {
  const session: Session = {
    authenticated: true,
    timestamp: Date.now()
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

export const isSessionValid = (): boolean => {
  try {
    const sessionData = localStorage.getItem(SESSION_KEY);
    if (!sessionData) return false;

    const session: Session = JSON.parse(sessionData);
    const now = Date.now();
    const elapsed = now - session.timestamp;

    // Vérifier si la session a expiré
    if (elapsed > SESSION_TIMEOUT) {
      clearSession();
      return false;
    }

    // Renouveler le timestamp de la session
    session.timestamp = now;
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    
    return session.authenticated;
  } catch {
    return false;
  }
};

export const clearSession = (): void => {
  localStorage.removeItem(SESSION_KEY);
};

// Rate limiting pour les tentatives de connexion
const MAX_ATTEMPTS = 5;
const LOCKOUT_TIME = 900000; // 15 minutes

export const checkLoginAttempts = (): { allowed: boolean; remainingAttempts: number; lockoutTime?: number } => {
  try {
    const attemptsData = localStorage.getItem('loginAttempts');
    if (!attemptsData) {
      return { allowed: true, remainingAttempts: MAX_ATTEMPTS };
    }

    const data = JSON.parse(attemptsData);
    const now = Date.now();

    // Vérifier si le lockout est terminé
    if (data.lockedUntil && now < data.lockedUntil) {
      return { 
        allowed: false, 
        remainingAttempts: 0,
        lockoutTime: Math.ceil((data.lockedUntil - now) / 1000)
      };
    }

    // Reset si le lockout est terminé
    if (data.lockedUntil && now >= data.lockedUntil) {
      localStorage.removeItem('loginAttempts');
      return { allowed: true, remainingAttempts: MAX_ATTEMPTS };
    }

    const remaining = MAX_ATTEMPTS - (data.attempts || 0);
    return { allowed: remaining > 0, remainingAttempts: remaining };
  } catch {
    return { allowed: true, remainingAttempts: MAX_ATTEMPTS };
  }
};

export const recordLoginAttempt = (success: boolean): void => {
  if (success) {
    localStorage.removeItem('loginAttempts');
    return;
  }

  try {
    const attemptsData = localStorage.getItem('loginAttempts');
    const data = attemptsData ? JSON.parse(attemptsData) : { attempts: 0 };
    
    data.attempts = (data.attempts || 0) + 1;
    data.lastAttempt = Date.now();

    if (data.attempts >= MAX_ATTEMPTS) {
      data.lockedUntil = Date.now() + LOCKOUT_TIME;
    }

    localStorage.setItem('loginAttempts', JSON.stringify(data));
  } catch {
    // Silently fail
  }
};

export const getAdminCredentials = () => {
  return {
    email: import.meta.env.VITE_ADMIN_EMAIL || 'admin@digidesk.pro',
    password: import.meta.env.VITE_ADMIN_PASSWORD || 'Admin@2024'
  };
};
