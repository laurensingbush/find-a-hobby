import React, { useState, useRef, useEffect, useMemo, CSSProperties } from 'react';
import dynamic from 'next/dynamic';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Hobby } from '@prisma/client';
import Modal, { ModalHandle } from './Modal';

type Props = {
    hobbies: Hobby[];
};

type ItemProps = {
    itemHeight: number;
    itemWidth: number;
    columnCount: number;
    gapSize: number;
    itemCount: number;
};

const DynamicModalContent = dynamic(() => import('../components/ModalHobbyContent'));

const GAP_SIZE = 10;
const ITEM_HEIGHT = 90;
const ITEM_WIDTH = 130;
const INITIAL_CONTAINER_HEIGHT = 4 * (ITEM_HEIGHT + GAP_SIZE);

const HobbyList: React.FC<Props> = ({ hobbies }) => {
    const modalRef = useRef<ModalHandle>(null);
    const [currentHobby, setCurrentHobby] = useState<Hobby>();
    const [containerHeight, setContainerHeight] = useState(INITIAL_CONTAINER_HEIGHT);
    
    const Item = ({ 
        data, 
        index, 
        style
    }: {
        data: ItemProps,
        index: number,
        style: CSSProperties
    }) => {
        const { itemHeight, itemWidth, columnCount, gapSize, itemCount } = data;
       
        // range of hobby items per row
        const indexStart = index * columnCount;
        const indexEnd = Math.min(itemCount - 1, indexStart + columnCount - 1);
        
        const items = [];
        for (let i = indexStart; i <= indexEnd; i++) {
            items.push(
                <div 
                    key={hobbies[i].id}
                    className='hobby-item' 
                    style={{
                        flex: `0 0 ${itemWidth}px`,
                        height: itemHeight,
                        margin: `0 ${gapSize / 2}px`,
                    }}
                    onClick={() => {modalRef.current?.openModal(); setCurrentHobby(hobbies[i])}}
                >
                    <p>{hobbies[i].title}</p>
                </div>
            );
        };

        return (
            <div 
                className='row' 
                style={{
                    ...style, 
                    top: `${Number(style.top) + GAP_SIZE}px`
                }}
            >
                {items}
            </div>
        );
    };

    const ListWrapper = ({ 
        height, 
        itemCount, 
        width 
    }: {
        height: number;
        itemCount: number;
        width: number;
    }) => {
        // calculate number of columns & rows based on screen width
        const columnCount = Math.floor((width - GAP_SIZE) / (ITEM_WIDTH + GAP_SIZE));
        const rowCount = Math.ceil(itemCount / columnCount);

        // calculate height of list container
        useEffect(() => {
            rowCount && rowCount > 4 
                ? setContainerHeight(INITIAL_CONTAINER_HEIGHT) 
                : setContainerHeight(rowCount * (ITEM_HEIGHT + GAP_SIZE));
        }, [rowCount]);
 
        const itemData = useMemo(() => ({
            columnCount,
            itemCount,
            itemWidth: ITEM_WIDTH,
            itemHeight: ITEM_HEIGHT,
            gapSize: GAP_SIZE
        }), [columnCount, itemCount]);

        return (
            <List
                className='list'
                height={height}
                itemCount={rowCount}
                itemSize={ITEM_HEIGHT + GAP_SIZE}
                width={width}
                itemData={itemData}
            >
                {Item}
            </List>
        );
    };
   
    return (
        <>
            <div className='hobbylist-container' style={{height: `${containerHeight + (GAP_SIZE * 2)}px`}}>
                <AutoSizer>
                    {({ height, width }) => (
                        <ListWrapper height={height} itemCount={hobbies.length} width={width} />
                    )}
                </AutoSizer>
            </div>
            <Modal ref={modalRef} className='hobby-list'>
                <DynamicModalContent currentHobby={currentHobby} />
            </Modal>
        </>
    );
};

export default HobbyList;