export type N = 0 | NUMBERS;
export type NUMBERS = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type GRID = [ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW];
export type ROW = [N, N, N, N, N, N, N, N, N];

export type BOX_ROW = [N, N, N];
export type BOX = [BOX_ROW, BOX_ROW, BOX_ROW];

export type BLOCK_COORDS = [INDEX, INDEX];

export type INDEX = 0 | 1 | 3 | 4 | 5 | 6 | 7 | 8;
