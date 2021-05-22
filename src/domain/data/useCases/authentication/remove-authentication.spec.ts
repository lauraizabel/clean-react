import { HttpPostClient } from "../../protocols/http/http-post-client";
import { RemoteAuhentication } from "./remove-authentication";

describe("RemoteAuthentication", async () => {
  test("Should call HttpPostClient with correct URL", async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;

      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }

    const url = "any";
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuhentication(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
