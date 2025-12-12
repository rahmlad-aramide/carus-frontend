export interface GeneralResponse {
  status_code: number;
  message: string;
  errors: string[];
}

export interface PointToNairaConfig {
  id: number;
  type: string;
  value: string; // it comes as a string from backend
}

export interface PointToNairaResponse extends GeneralResponse {
  data: PointToNairaConfig;
}
