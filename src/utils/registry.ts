// KimuRegistry: manages the catalog of modules/extensions from the official registry
// (Initial stub, to be expanded with real fetch, cache, etc.)

export class KimuRegistry {
  private static instance: KimuRegistry;

  static getInstance(): KimuRegistry {
    if (!KimuRegistry.instance) {
      KimuRegistry.instance = new KimuRegistry();
    }
    return KimuRegistry.instance;
  }

  async getModuleInfo(
    name: string,
    type?: 'module' | 'extension'
  ): Promise<any | null> {
    // TODO: real fetch from remote registry
    // Mock for now: "router" module and "app-root" extension
    const mockCatalog: {
      modules: Record<string, any>;
      extensions: Record<string, any>;
    } = {
      modules: {
        router: {
          name: 'router',
          type: 'module',
          version: '1.2.0',
          description: 'Routing module',
        },
        i18n: {
          name: 'i18n',
          type: 'module',
          version: '1.5.0',
          description: 'Internationalization module',
        },
        analytics: {
          name: 'analytics',
          type: 'module',
          version: '0.8.0',
          description: 'Analytics tracking module',
        },
      },
      extensions: {
        'app-root': {
          name: 'app-root',
          type: 'extension',
          version: '1.0.0',
          description: 'Application root component',
        },
        'kimu-dashboard': {
          name: 'kimu-dashboard',
          type: 'extension',
          version: '2.1.0',
          description: 'Dashboard extension',
        },
      },
    };

    if (type === 'module') {
      return mockCatalog.modules[name] || null;
    } else if (type === 'extension') {
      return mockCatalog.extensions[name] || null;
    }

    // Fallback: search in both
    return mockCatalog.modules[name] || mockCatalog.extensions[name] || null;
  }

  async listModules(): Promise<any[]> {
    // TODO: real fetch from remote registry
    const mockCatalog = {
      modules: {
        router: {
          name: 'router',
          type: 'module',
          version: '1.2.0',
          description: 'Routing module',
        },
        i18n: {
          name: 'i18n',
          type: 'module',
          version: '1.5.0',
          description: 'Internationalization module',
        },
        analytics: {
          name: 'analytics',
          type: 'module',
          version: '0.8.0',
          description: 'Analytics tracking module',
        },
      },
    };
    return Object.values(mockCatalog.modules);
  }

  async listExtensions(): Promise<any[]> {
    // TODO: real fetch from remote registry
    const mockCatalog = {
      extensions: {
        'app-root': {
          name: 'app-root',
          type: 'extension',
          version: '1.0.0',
          description: 'Application root component',
        },
        'kimu-dashboard': {
          name: 'kimu-dashboard',
          type: 'extension',
          version: '2.1.0',
          description: 'Dashboard extension',
        },
      },
    };
    return Object.values(mockCatalog.extensions);
  }
}
