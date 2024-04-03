import RootLayout from '@/components/Layout/RootLayout/RootLayout';
import DetailReservation from '@/pages/Reservation/Detail/DetailReservation';
import ReservationIndexPage from '@/pages/Reservation/Index/Index';
import ChatRoom from '@/pages/Chat/ChatRoom/ChatRoom';
import ChatRoomList from '@/pages/Chat/ChatRoomList/ChatRoomList';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

export const RootRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="chat-list" element={<ChatRoomList />} />
        <Route path="reservation" element={<ReservationIndexPage />} />
        <Route path="chat-list/*" element={<ChatRoom />} />
        <Route path="reservation/*" element={<DetailReservation />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
