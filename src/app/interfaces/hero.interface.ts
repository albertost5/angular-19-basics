export enum Color {
  RED,
  BLACK,
  BLUE,
  GREEN,
}

export enum Creator {
  DC,
  MARVEL,
}

export interface Hero {
  id: number;
  name: string;
  canFly: boolean;
  color: Color;
  creator: Creator;
}

export const ColorMap = {
  [Color.RED]: '#E57373',
  [Color.BLACK]: '#424242',
  [Color.BLUE]: '#64B5F6',
  [Color.GREEN]: '#81C784',
};
