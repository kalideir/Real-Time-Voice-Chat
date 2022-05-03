import React from 'react';
import { SpaceUser } from '../../@types';

interface IProps {
  participant: SpaceUser;
}

function Participant(props: IProps) {
  return (
    <div className="flex-col items-center justify-center mx-auto w-full bg-slate-200 dark:bg-slate-800 rounded-md py-4">
      <img src="https://robohash.org/utpariaturfugit.png?size=50x50&amp;set=set1" className="bg-slate-500 rounded-full h-12 w-12 mx-auto" />
      <div className="flex items-center justify-center my-1">
        <span className="bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-slate-700 mt-1 dark:text-slate-300">
          {props.participant.type}
        </span>
      </div>
      <span className="text-xs self-center block mt-2 text-slate-700 dark:text-slate-200 text-center">{props.participant.fullName}</span>
    </div>
  );
}

export default Participant;
