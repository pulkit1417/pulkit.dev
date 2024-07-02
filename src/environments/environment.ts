// environment.ts
export interface Environment {
  production: boolean;
  firebase: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  };
}

export const environment: Environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDD2Aw3z8QfNZEkNAnzSfpPLfY1X3ol5VY",
    authDomain: "my-portfolio-4a90a.firebaseapp.com",
    projectId: "my-portfolio-4a90a",
    storageBucket: "my-portfolio-4a90a.appspot.com",
    messagingSenderId: "880687646393",
    appId: "1:880687646393:web:318fc3715770e6b383bd68"
  }
};
