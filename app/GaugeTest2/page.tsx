import Image from "next/image";
import CircularProgress from "../../components/Gauges/circularProgress/page";

export default function Home() {
  return (
    <main className='w-full min-h-[100vh] bg-black text-white
    flex items-center justify-center'>
        <CircularProgress progress={75}/>
    </main>
  );
}
