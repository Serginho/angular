export declare interface AssetGroup {
    installMode?: 'prefetch' | 'lazy';
    name: string;
    resources: {
        files?: Glob[];
        urls?: Glob[];
    };
    updateMode?: 'prefetch' | 'lazy';
}

export declare interface Config {
    appData?: {};
    assetGroups?: AssetGroup[];
    dataGroups?: DataGroup[];
    debug?: DebugConfig;
    index: string;
    navigationUrls?: string[];
    push?: PushConfig;
}

export declare interface DataGroup {
    cacheConfig: {
        maxSize: number;
        maxAge: Duration;
        timeout?: Duration;
        strategy?: 'freshness' | 'performance';
    };
    name: string;
    urls: Glob[];
    version?: number;
}

export declare type Duration = string;

export declare interface Filesystem {
    hash(file: string): Promise<string>;
    list(dir: string): Promise<string[]>;
    read(file: string): Promise<string>;
    write(file: string, contents: string): Promise<void>;
}

export declare class Generator {
    readonly fs: Filesystem;
    constructor(fs: Filesystem, baseHref: string);
    process(config: Config): Promise<Object>;
}

export declare type Glob = string;
