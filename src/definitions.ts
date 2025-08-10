export interface focusPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
