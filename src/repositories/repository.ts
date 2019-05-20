abstract class Repository {
  public data: Map<string, number>;

  public get(key: string): number {
    return this.data.get(key);
  }

  public set(key: string, value: number): void {
    this.data.set(key, value);
  }
}

export default Repository;
