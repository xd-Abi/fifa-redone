import axios from "axios";

type CallMethodInterface = {
  method: string;
  url?: string;
  headers?: any;
  params?: any;
  body?: any;
};

export class BaseAPI {
  protected baseURL: string = "";

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  protected callMethod = async ({
    method,
    url,
    headers,
    params,
    body,
  }: CallMethodInterface) =>
    axios({
      url: `${this.baseURL}${url ?? ""}`,
      method,
      headers: headers,
      params: params,
      data: body,
    });
}
