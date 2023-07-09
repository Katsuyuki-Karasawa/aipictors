export class Config {
  static get firebaseConfig() {
    return {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    }
  }

  static get isClient() {
    return typeof window !== "undefined"
  }

  static get isNotClient() {
    return typeof window === "undefined"
  }

  static get sentryDSN() {
    return process.env.NEXT_PUBLIC_SENTRY_DSN + ""
  }

  static get appURL() {
    return process.env.NEXT_PUBLIC_APP_URL!
  }
}
