import { HttpPostClientSpy } from "../../test/mock-http-client";
import { RemoteAuhentication } from "./remove-authentication";

type SutTypes = {
  sut: RemoteAuhentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = "any"): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuhentication(url, httpPostClientSpy);
  return { sut, httpPostClientSpy };
};

describe("RemoteAuthentication", async () => {
  test("Should call HttpPostClient with correct URL", async () => {
    const url = "other";
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
