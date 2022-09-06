import Layout from '../components/layout/Layout';
import RoomItem from '../components/room/RoomItem';

export default function Home() {
  return (
    <Layout>
      <div className="container mt-5 d-flex justify-content-between">
        <RoomItem />
        <RoomItem />
        <RoomItem />
      </div>
    </Layout>
  );
}
