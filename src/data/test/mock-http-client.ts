import {
  HttpPostClient,
  HttpPostClientParams,
} from "@/data/protocols/http/http-post-client";

import {
  HttpResponse,
  HttpStatusCode,
} from "@/data/protocols/http/http-response";

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: object;
  reponse: HttpResponse = {
    statusCode: HttpStatusCode.ok,
  };

  async post(params: HttpPostClientParams): Promise<HttpResponse> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.reponse);
  }
}
