"use client"
import { useRef, useState } from "react";

import React from "react";

const DragableSection = ({ rootClass = "", children }: any) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseLeave = () => {
        setIsDragging(true)
    };

    const handleMouseEnter = () => {
        setIsDragging(false);
    };

    return (
        <div
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className={rootClass + `w-full overflow-x-scroll ${isDragging ? "no-scroll" : ""}`}
        >
            {children}
        </div>
    );
};

// const DragableSection = () => {
//     const containerRef = React.useRef(null);

//     const handleMouseDown = React.useCallback((e: any) => {
//         const ele: any = containerRef.current;
//         if (!ele) {
//             return;
//         }
//         const startPos = {
//             left: ele.scrollLeft,
//             top: ele.scrollTop,
//             x: e.clientX,
//             y: e.clientY,
//         };

//         const handleMouseMove = (e: any) => {
//             const dx = e.clientX - startPos.x;
//             const dy = e.clientY - startPos.y;
//             ele.scrollTop = startPos.top - dy;
//             ele.scrollLeft = startPos.left - dx;
//             updateCursor(ele);
//         };

//         const handleMouseUp = () => {
//             document.removeEventListener('mousemove', handleMouseMove);
//             document.removeEventListener('mouseup', handleMouseUp);
//             resetCursor(ele);
//         };

//         document.addEventListener('mousemove', handleMouseMove);
//         document.addEventListener('mouseup', handleMouseUp);
//     }, []);

//     const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
//         const ele: any = containerRef.current;
//         if (!ele) {
//             return;
//         }
//         const touch = e.touches[0];
//         const startPos = {
//             left: ele.scrollLeft,
//             top: ele.scrollTop,
//             x: touch.clientX,
//             y: touch.clientY,
//         };

//         const handleTouchMove = (e: any) => {
//             const touch = e.touches[0];
//             const dx = touch.clientX - startPos.x;
//             const dy = touch.clientY - startPos.y;
//             ele.scrollTop = startPos.top - dy;
//             ele.scrollLeft = startPos.left - dx;
//             updateCursor(ele);
//         };

//         const handleTouchEnd = () => {
//             document.removeEventListener('touchmove', handleTouchMove);
//             document.removeEventListener('touchend', handleTouchEnd);
//             resetCursor(ele);
//         };

//         document.addEventListener('touchmove', handleTouchMove);
//         document.addEventListener('touchend', handleTouchEnd);
//     }, []);

//     const updateCursor = (ele: any) => {
//         ele.style.cursor = 'grabbing';
//         ele.style.userSelect = 'none';
//     };

//     const resetCursor = (ele: any) => {
//         ele.style.cursor = 'grab';
//         ele.style.removeProperty('user-select');
//     };

//     return (
//         <div
//             className="container"
//             ref={containerRef}
//             onMouseDown={handleMouseDown}
//             onTouchStart={handleTouchStart}
//         >
//             <div className="item">1</div>
//             <div className="item">2</div>
//             <div className="item">3</div>
//             <div className="item">4</div>
//             <div className="item">5</div>
//             <div className="item">6</div>
//             <div className="item">7</div>
//             <div className="item">8</div>
//             <div className="item">9</div>
//             <div className="item">10</div>
//         </div>
//     );
// };

export default DragableSection