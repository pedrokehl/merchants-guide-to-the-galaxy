import Repository from "../../src/repositories/repository";

class RepositoryTest extends Repository {
}

describe("Repositories base implementation", () => {
  test("Should return undefined if no value found for specified key", () => {
    const repositoryTest = new RepositoryTest();
    const result = repositoryTest.get("Invalid Key");
    expect(result).toBeUndefined();
  });

  test("Should return a value if the key is already defined", () => {
    const repositoryTest = new RepositoryTest();
    repositoryTest.set("Valid Key", 5);
    const result = repositoryTest.get("Valid Key");
    expect(result).toBe(5);
  });

  test("Should override value if setting key already defined", () => {
    const repositoryTest = new RepositoryTest();
    repositoryTest.set("Valid Key", 5);
    repositoryTest.set("Valid Key", 8);
    const result = repositoryTest.get("Valid Key");
    expect(result).toBe(8);
  });

  test("getAllValues should return all the values defined", () => {
    const repositoryTest = new RepositoryTest();
    repositoryTest.set("One", 1);
    repositoryTest.set("Two", 2);
    repositoryTest.set("Three", 3);
    const result = repositoryTest.getAllValues();
    expect(result).toStrictEqual([1, 2, 3]);
  });
});
