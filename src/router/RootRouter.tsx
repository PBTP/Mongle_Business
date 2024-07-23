import RootLayout from '@/components/Layout/RootLayout/RootLayout';
import DetailReservation from '@/pages/Reservation/Detail/DetailReservation';
import ReservationIndexPage from '@/pages/Reservation/Index/Index';
import ChatRoomPage from '@/pages/Chat/ChatRoom/ChatRoom';
import CharRoomsPage from '@/pages/Chat/ChatRooms/ChatRooms';
import PaymentPage from '@/pages/Payment/Payment/Payment';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Location from '@/pages/Location/Location/Location';
import ReviewPage from '@/pages/Review/Review';
import LoginPage from '@/pages/Onboarding/Login/Login';
import SignUpPage from '@/pages/Onboarding/SignUp/SignUp';

export const RootRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route element={<ProtectedRoute />}>
          <Route path="chat-list" element={<CharRoomsPage />} />
          <Route path="reservation" element={<ReservationIndexPage />} />
          <Route path="chat-list/:chatId" element={<ChatRoomPage />} />
          <Route
            path="reservation/:reservationId"
            element={<DetailReservation />}
          />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="location" element={<Location />} />
          <Route path="review" element={<ReviewPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
