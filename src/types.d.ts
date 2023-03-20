declare global {
  interface Window {
    Telegram: {
      WebApp: any;
    };
  }

  interface globalThis {
    Telegram: {
      WebApp: any;
    };
  }
}

export {};
