import React, { MutableRefObject, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_ROWS, MAX_COLS } from '../utils/constants';
import { Tile } from './Tile';
import { checkIfStartOrEnd, createNewGrid } from '../utils/helpers';

export function Grid ({
    isVisulizationRunningRef,
 }: { 
    isVisulizationRunningRef: MutableRefObject<boolean>;    
}) {
    const {grid, setGrid} = usePathfinding();
     const[isMouseDown, setIsMouseDown] = useState(false);

     const handleMouseDown = (row: number, col:number) => {
        if (isVisulizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }
        setIsMouseDown(true);
        const newGrid = createNewGrid(grid, row, col);
        setGrid(newGrid);
     };

     const handleMouseUp = (row: number, col: number) => {
        if (isVisulizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }

        setIsMouseDown(false);
    }

    const handleMouseEnter = (row: number, col: number) => {
        if (isVisulizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }

        if (isMouseDown) {
            const newGrid = createNewGrid(grid, row, col);
            setGrid(newGrid);
        }
    };


    return (
        <div
         className={twMerge(
            //Base Classes
            "flex items-center flex-col justify-center border-sky-300 bg-black mt-10",
            //Control Grid height
            `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${
                MAX_ROWS * 15
            }px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_COLS * 7}px]`,
            // Controlling grid width
            `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${
                MAX_COLS * 8}px] w-[${MAX_COLS * 7}px]`
        )}
        > 
        {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
                {row.map((tile, tileIndex) => {
                    const{row, col, isStart, isEnd, isPath, isTraversed, isWall} = tile;
                    return (
                        <Tile
                        key={tileIndex}
                        row={tile.row}
                        col={tile.col}
                        isEnd={isEnd}
                        isStart={isStart}
                        isPath={isPath}
                        isTraversed={isTraversed}
                        isWall={isWall}
                        handleMouseDown={() => handleMouseDown(row, col)}
                        handleMouseUp={() => handleMouseUp(row, col)}
                        handleMouseEnter={() => handleMouseEnter(row, col)}
                        />
                    );
                })}          
            </div>
        ))}
    
        </div>
    );
}
