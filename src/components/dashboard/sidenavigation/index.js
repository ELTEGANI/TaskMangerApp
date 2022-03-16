import SidenavItems from './items';
import SidenavUserItems from './userItem';
import css from './index.module.css';
import { useToggle } from '../provider/context';

const style = {
  mobilePosition: {
    left: 'left-0',
    right: 'right-0',
  },
  close: `hidden`,
  container: `pb-32 lg:pb-6`,
  open: `absolute w-8/12 z-40 sm:w-5/12`,
  default: `bg-white shadow h-screen overflow-y-auto top-0 lg:block lg:relative lg:w-64 lg:z-auto`,
};

export default function SideNavigation({ mobilePosition }) {
  const { open, ref } = useToggle();
  const userType = "Admin";
  return (
    <aside
      ref={ref}
      className={`${style.default} ${style.mobilePosition[mobilePosition]} 
       ${open ? style.open : style.close} ${css.scrollbar}`}
    >
      <div className={style.container}>
        {userType == "Admin"? <SidenavItems /> :<SidenavUserItems />}
      </div>
    </aside>
  );
}
