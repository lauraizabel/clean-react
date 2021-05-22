import { HttpPostClientSpy } from "../../test/mock-http-client";
import { RemoteAuhentication } from "./remove-authentication";

describe("RemoteAuthentication", async () => {
  test("Should call HttpPostClient with correct URL", async () => {
    const url = "any";
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuhentication(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
