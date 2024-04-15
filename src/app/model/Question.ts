
export type Question = {
  readonly title: string;
  readonly description: string;
  readonly topics: string[];
  readonly options: string[];
  readonly correctOptions: number[]
}
