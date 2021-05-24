import {
  HttpPostClient,
  HttpPostClientParams,
} from "@/data/protocols/http/http-post-client";

import {
  HttpResponse,
  HttpStatusCode,
} from "@/data/protocols/http/http-response";

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string;
  body?: T;

  reponse: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  };

  async post(params: HttpPostClientParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.reponse);
  }
}
