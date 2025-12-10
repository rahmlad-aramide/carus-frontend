import { GeneralResponse } from ".";

export interface Configuration {
  id: string;
  key: string;
  value: string;
  created_at: string;
  updated_at: string;
}

export interface ConfigurationsResponse extends GeneralResponse {
  data: Configuration[];
}

export interface PointToNairaConfig {
  point: number;
  naira: number;
}

export interface PointToNairaResponse extends GeneralResponse {
  data: PointToNairaConfig;
}

export interface LocationConfig {
  city: string;
  state: string;
  country: string;
}

export interface LocationConfigResponse extends GeneralResponse {
  data: LocationConfig;
}
