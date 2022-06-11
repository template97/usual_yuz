import './ProjectPage.scss';
import React, { useEffect, useState } from 'react';
import { RiotApi } from 'src/api/riot';
import Button from 'src/components/Button';

const ProjectPage: React.FC = () => {
  const getSome = async () => {
    const res = await RiotApi.GET_summoner_by_name(nickname);
    const list = await RiotApi.GET_match_by_puuid(res.data.puuid, {
      start: 0,
      count: 1,
    });

    const match = await RiotApi.GET_match_by_matchId(list.data[0]);

    let result = '';
    match.data.info.participants.forEach((part) => {
      result += `${part.summonerName} : ${part.championName}\n`;
      console.log(part);
    });

    setDataResult(result);
  };

  const [nickname, setNickname] = useState<string>('');
  const [dataResult, setDataResult] = useState<string>('');

  useEffect(() => {
    (async () => {
      const res = RiotApi.GET_champio_info();
      console.log(res);
    })();
    return () => {};
  }, []);
  return (
    <div className="project-page">
      <input
        type={'text'}
        // placeholder={for}
        value={nickname}
        onChange={(e) => {
          setNickname(e.target.value);
        }}
        autoFocus
      />
      <Button size="medium" onClick={getSome}>
        찾기
      </Button>
      {dataResult}
    </div>
  );
};

export default ProjectPage;
