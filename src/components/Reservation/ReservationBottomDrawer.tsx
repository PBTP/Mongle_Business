import React from 'react';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '@/components/ui/drawer';

const ReservationBottomDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="btn">Open Drawer</button>
      </DrawerTrigger>
      <DrawerOverlay className="CustomDrawerOverlay" /> {/* Overlay 색상 변경 */}
      <DrawerContent className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white rounded-t-lg shadow-lg transform translate-y-full transition-transform duration-300 ease-out">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              몰라
              <div className="flex-1 text-center">
                <div className="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div>
              </div>
              몰라2
            </div>
            <div className="mt-3 h-[120px]">차트</div>
          </div>
          <DrawerFooter>
            버튼
            <DrawerClose asChild>
              <button className="btn">닫기</button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ReservationBottomDrawer;
