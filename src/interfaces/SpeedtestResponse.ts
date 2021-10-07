export interface Data {
    id: number;
    ping: string;
    download: string;
    upload: string;
    created_at: Date;
    updated_at: Date;
    server_id?: string;
    server_name?: string;
    server_host?: string;
    url?: string;
    scheduled: string;
    failed: string;
}

export interface Average {
    ping: string;
    download: string;
    upload: string;
}

export interface Maximum {
    ping: string;
    download: string;
    upload: string;
}

export interface Minimum {
    ping: string;
    download: string;
    upload: string;
}

export interface Latest {
    data: Data;
    average: Average;
    maximum: Maximum;
    minimum: Minimum;
}

export interface Time {
    id: number;
    ping: string;
    download: string;
    upload: string;
    created_at: Date;
    updated_at: Date;
    server_id: string;
    server_name: string;
    server_host: string;
    url: string;
    scheduled: string;
    failed: string;
}

export interface Fail {
    date: string;
    success: string;
    failure: string;
}

export interface Widgets {
    show_average: boolean;
    show_max: boolean;
    show_min: boolean;
}

export interface DownloadUploadGraphEnabled {
    id: number;
    name: string;
    description: string;
    value: string;
    created_at: Date;
    updated_at: Date;
}

export interface DownloadUploadGraphWidth {
    id: number;
    name: string;
    description: string;
    value: string;
    created_at: Date;
    updated_at: Date;
}

export interface PingGraphEnabled {
    id: number;
    name: string;
    description: string;
    value: string;
    created_at: Date;
    updated_at: Date;
}

export interface PingGraphWidth {
    id: number;
    name: string;
    description: string;
    value: string;
    created_at: Date;
    updated_at: Date;
}

export interface FailureGraphEnabled {
    id: number;
    name: string;
    description: string;
    value: string;
    created_at: Date;
    updated_at: Date;
}

export interface FailureGraphWidth {
    id: number;
    name: string;
    description: string;
    value: string;
    created_at: Date;
    updated_at: Date;
}

export interface Graphs {
    download_upload_graph_enabled: DownloadUploadGraphEnabled;
    download_upload_graph_width: DownloadUploadGraphWidth;
    ping_graph_enabled: PingGraphEnabled;
    ping_graph_width: PingGraphWidth;
    failure_graph_enabled: FailureGraphEnabled;
    failure_graph_width: FailureGraphWidth;
}

export interface Editable {
    slack_webhook: boolean;
    telegram_bot_token: boolean;
    telegram_chat_id: boolean;
}

export interface Tables {
    visible_columns: string[];
    hidden_columns: string[];
}

export interface Config {
    base: string;
    name: string;
    widgets: Widgets;
    graphs: Graphs;
    editable: Editable;
    tables: Tables;
    auth: boolean;
}

export interface SpeedtestResponse {
    latest: Latest;
    time: Time[];
    fail: Fail[];
    config: Config;
}
