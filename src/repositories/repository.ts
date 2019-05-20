abstract class Repository {
  public data: Map<string, any> = new Map();

  public get(key: string): any {
    return this.data.get(key);
  }

  public set(key: string, value: any): void {
    this.data.set(key, value);
  }

  public getAll(): any[] {
    return Array.from(this.data.values());
  }
}

export default Repository;
