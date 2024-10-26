import { MAX_COLS, MAX_ROWS } from "./constants";
import { GridType, TileType } from "./types";

const retrieveHeuristicCost = (currentTile: TileType, endTile: TileType): number => {
    const manhattanDistance = 1;
    const r = Math.abs(currentTile.row - endTile.row);
    const c = Math.abs(currentTile.col - endTile.col);
    return manhattanDistance * (r + c);
}

export const initHeuristicCost = (grid: GridType, endTile: TileType): number[][] => {
    const heuristicCost: number[][] = [];
    for (let i = 0; i < MAX_ROWS; i++) {
        const row: number[] = [];
        for (let j = 0; j < MAX_COLS; j++) {
            row.push(retrieveHeuristicCost(grid[i][j], endTile));
        }
        heuristicCost.push(row);
    }
    return heuristicCost;
};

export const initFunctionCost = (): number[][] => {
    const functionCost: number[][] = [];
    for (let i = 0; i < MAX_ROWS; i++) {
        const row: number[] = [];
        for (let j = 0; j < MAX_COLS; j++) {
            row.push(Infinity);
        }
        functionCost.push(row);
    }
    return functionCost;
};
