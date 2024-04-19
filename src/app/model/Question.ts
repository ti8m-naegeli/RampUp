
export type Question = {
  readonly title: string;
  readonly topics: string[];
  readonly options: string[];
  readonly correctOptions: number[];
  readonly source: string | undefined;
}
