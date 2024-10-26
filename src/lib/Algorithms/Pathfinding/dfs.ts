import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { checkStack, isEqual } from "../../../utils/helpers";
import { GridType, TileType } from "../../../utils/types";

export const dfs = (grid: GridType, startTile: TileType, endTile: TileType) => {
  const traversedTiles: TileType[] = []; // Explicitly specify type for traversed tiles
  const base = grid[startTile.row][startTile.col]; // Get the start tile from the grid
  base.distance = 0; // Set the distance of the start tile to 0
  base.isTraversed = true; // Mark the start tile as traversed
  const untraversedTiles: TileType[] = [base]; // Explicitly specify type for untraversed tiles

  while (untraversedTiles.length > 0) {
    const currentTile = untraversedTiles.pop(); // Get the last tile from the stack
    if (currentTile) {
      if (currentTile.isWall) continue; // Skip if the tile is a wall
      if (currentTile.distance === Infinity) break; // Break if the tile's distance is infinity
      currentTile.isTraversed = true; // Mark the tile as traversed
      traversedTiles.push(currentTile); // Add the tile to the traversed tiles array
      if (isEqual(currentTile, endTile)) break; // Break if the tile is the end tile
      
      const neighbors: TileType[] = getUntraversedNeighbors(grid, currentTile); // Get untraversed neighbors of the tile
      for (let i = 0; i < neighbors.length; i++) {
        if (!checkStack(neighbors[i], untraversedTiles)) {
          neighbors[i].distance = currentTile.distance + 1; // Update the neighbor's distance
          neighbors[i].parent = currentTile; // Set the neighbor's parent to the current tile
          untraversedTiles.push(neighbors[i]); // Add the neighbor to the stack
        }
      }
    }
  }

  const path: TileType[] = []; // Explicitly specify type for path
  let current: TileType | null = grid[endTile.row][endTile.col]; // Start from the end tile

  while (current) {
    current.isPath = true; // Mark the tile as part of the path
    path.unshift(current); // Add the tile to the path
    current = current.parent ? current.parent : null; // Move to the parent tile, ensuring proper type handling
  }
  
  return { traversedTiles, path }; // Return the traversed tiles and the path
};
