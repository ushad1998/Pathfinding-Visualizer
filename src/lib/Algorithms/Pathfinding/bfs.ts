import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { isEqual } from "../../../utils/helpers";
import { isInQueue } from "../../../utils/isInQueue";
import { GridType, TileType } from "../../../utils/types";

export const bfs = (grid: GridType, startTile: TileType, endTile: TileType) => {
  const traversedTiles: TileType[] = [];
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isTraversed = true;
  const unTraversed: TileType[] = [base];

  while (unTraversed.length) {
    const tile = unTraversed.shift() as TileType;
    if (tile.isWall) continue;
    if (tile.distance === Infinity) break;
    tile.isTraversed = true;
    traversedTiles.push(tile);
    if (isEqual(tile, endTile)) break;

    const neighbors: TileType[] = getUntraversedNeighbors(grid, tile);
    for (let neighbor of neighbors) {
      if (!isInQueue(neighbor, unTraversed) && !neighbor.isWall) {
        neighbor.distance = tile.distance + 1;
        neighbor.parent = tile; // Set the parent of neighbor
        unTraversed.push(neighbor);
      }
    }
  }

  const path: TileType[] = [];
  let tile = grid[endTile.row][endTile.col];
  
  // Use a while loop to trace back the path, only proceed if tile and its parent are valid
  while (tile && tile.parent) {
    tile.isPath = true;
    path.unshift(tile);
    tile = tile.parent; // Safe to assign because the loop condition ensures parent exists
  }

  return { traversedTiles, path };
};



