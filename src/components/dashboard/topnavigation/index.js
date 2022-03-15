import { useToggle } from '../provider/context';

export default function TopNavigation() {
  const { toggle } = useToggle();
  return (
    <header className="h-16 md:h-20 shadow bg-white items-center relative z-10">
      <div className="flex flex-center flex-col h-full justify-center mx-auto relative px-3 text-white z-10">
      
      </div>
    </header>
  );
}
