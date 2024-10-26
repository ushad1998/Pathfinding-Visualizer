import { MAX_ROWS, MAX_COLS } from "./constants";
import { GridType, TileType } from "./types";

export const getUntraversedNeighbors = (grid: GridType, tile: TileType): TileType[] => {
    const { row, col } = tile;
    const neighbors: TileType[] = []; // Explicitly specify the type

    if (row > 0) {
        neighbors.push(grid[row - 1][col]);
    }
    if (row < MAX_ROWS - 1) {
        neighbors.push(grid[row + 1][col]); // Remove extra '-'
    }
    if (col > 0) {
        neighbors.push(grid[row][col - 1]);
    }
    if (col < MAX_COLS - 1) {
        neighbors.push(grid[row][col + 1]);
    }

    // Explicitly cast the neighbors to TileType
    return neighbors.filter((neighbor: TileType) => !neighbor.isTraversed);
};
