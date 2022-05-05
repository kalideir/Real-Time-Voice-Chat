import { MdGroups } from 'react-icons/md';
import { IoMdPersonAdd } from 'react-icons/io';
import { ChangeEvent } from 'react';
import { BsPlusSquareFill } from 'react-icons/bs';
import { Dot } from '../../layout';
import { useAppDispatch } from '../../hooks';
import { setSpaceGuestQuery } from '../../store/spaceSlice';
import { showAddParticipantModal } from '../../store/uiSlice';

function SpaceActions() {
  const dispatch = useAppDispatch();

  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <div className="w-5/12 self-center">
          <div className="relative rounded-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setSpaceGuestQuery(e.target.value))}
              className="block w-full rounded-full border border-none bg-slate-200 dark:bg-slate-800 p-2.5 pl-10 text-sm text-slate-200 focus:outline-0 focus:ring-0"
              placeholder="Search for items"
            />
          </div>
        </div>
        <div className="flex items-center justify-start">
          <div className="mx-1 w-auto h-8 flex items-center justify-center text-slate-700 dark:text-slate-200 dark:border-slate-400 px-4 border-2 border-slate-400 rounded-xs cursor-pointer">
            <IoMdPersonAdd size={20} className="mr-1" />
            <span>130+</span>
          </div>
          <button
            onClick={() => dispatch(showAddParticipantModal())}
            className="mx-1 w-auto h-8 flex items-center justify-center text-slate-700 dark:text-slate-200 px-4 cursor-pointer"
          >
            <BsPlusSquareFill size={17} className="mr-1" />
            <span className="">Invite a participant</span>
          </button>
          <div className="mx-1 w-auto h-8 flex items-center justify-center text-slate-700 dark:text-slate-200 dark:border-slate-400 px-4 border-2 border-slate-400 rounded-xs cursor-pointer">
            <MdGroups size={20} className="mr-1" />
            <span>10</span>
          </div>
          <div className="ml-1 w-auto h-8 flex items-center justify-center text-red-500 px-4 border-2 border-slate-400 rounded-xs cursor-pointer">
            <Dot size={3} color="bg-red-600" />
            <span>10:12:34</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaceActions;
