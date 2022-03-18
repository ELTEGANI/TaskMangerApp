import { useToggle } from '../provider/context';
import {Icon} from 'semantic-ui-react'
import {useRouter} from 'next/router';


export default function TopNavigation() {
  const { toggle } = useToggle();
  const router = useRouter()

  function signOut (){
    localStorage.clear();
    router.push('/')
}

  return (
    <header className="h-16 md:h-20 shadow bg-white items-center relative z-10">
       <div className="flex flex-center flex-col h-full justify-center mx-auto relative px-3 text-white z-10">
        <div className="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
          <div className="flex group h-full items-center relative w-12">
          </div>
          <div className="flex items-center justify-end ml-5 mr-0 p-1 relative text-gray-700 w-full sm:mr-0 sm:right-auto">
            <Icon size ='big' name='sign-out' onClick={signOut} className="block relative">
              
            </Icon>
          </div>
        </div>
      </div>
    </header>
  );
}
