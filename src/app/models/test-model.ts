export default class TestModel {
  number: number = 1;
  string: string = 'Test';
  array: any[] = [1, 2];
  nested: {
    id: number;
    name: string;
    data: any[]
  } = {
    id: 100,
    name: 'Nested test',
    data: [100]
  }
}
