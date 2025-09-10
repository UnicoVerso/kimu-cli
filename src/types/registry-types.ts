/**
 * Registry and module types for KIMU ecosystem
 */

export interface ModuleCatalog {
  version: string;
  lastUpdated: string;
  modules: Record<string, ModuleInfo>;
  extensions: Record<string, ExtensionInfo>;
}

export interface ModuleInfo {
  name: string;
  version: string;
  description: string;
  author: string;
  repository: string;
  homepage?: string;
  license: string;
  keywords: string[];
  dependencies: string[];
  kimuCore: string;
  size: {
    minified: number;
    gzipped: number;
  };
  downloadUrl: string;
  checksums: {
    sha256: string;
    md5: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface ExtensionInfo {
  name: string;
  version: string;
  description: string;
  author: string;
  repository: string;
  homepage?: string;
  license: string;
  keywords: string[];
  dependencies: string[];
  kimuCore: string;
  category: string;
  icon?: string;
  screenshots?: string[];
  size: {
    minified: number;
    gzipped: number;
  };
  downloadUrl: string;
  checksums: {
    sha256: string;
    md5: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface RegistryConfig {
  url: string;
  timeout: number;
  retries: number;
  cacheDir: string;
  cacheTtl: number;
}

export interface DownloadProgress {
  total: number;
  downloaded: number;
  percentage: number;
  speed: number;
  eta: number;
}

export interface InstallResult {
  success: boolean;
  module: string;
  version: string;
  dependencies: string[];
  errors?: string[];
  warnings?: string[];
}

export interface RegistryResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}
