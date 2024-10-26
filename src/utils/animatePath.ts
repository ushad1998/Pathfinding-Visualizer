import { EXTENDED_SLEEP_TIME, PATH_TILE_STYLE, SLEEP_TIME, SPEEDS, TRAVERSED_TILE_STYLE } from "./constants";
import { SpeedType, TileType } from "./types";
import { isEqual } from "./helpers";

export const animatePath = (
    traversedTiles: TileType[],
    path: TileType[],
    startTile: TileType,
    endTile: TileType,
    speed: SpeedType
) => {
    const speedMultiplier = SPEEDS.find((s) => s.value === speed)!.value;
    
    // Animate traversed tiles
    traversedTiles.forEach((tile, index) => {
        setTimeout(() => {
            if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
                const tileElement = document.getElementById(`${tile.row}-${tile.col}`);
                if (tileElement) {
                    tileElement.className = `${TRAVERSED_TILE_STYLE} animate-traversed`;
                }
            }
        }, SLEEP_TIME * index * speedMultiplier);
    });

    // Animate path tiles after all traversed tiles
    const totalTraversalTime = SLEEP_TIME * traversedTiles.length * speedMultiplier;
    
    setTimeout(() => {
        path.forEach((tile, index) => {
            setTimeout(() => {
                if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
                    const tileElement = document.getElementById(`${tile.row}-${tile.col}`);
                    if (tileElement) {
                        tileElement.className = `${PATH_TILE_STYLE} animate-path`;
                    }
                }
            }, EXTENDED_SLEEP_TIME * index * speedMultiplier);
        });
    }, totalTraversalTime);
};
