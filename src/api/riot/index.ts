import { AxiosResponse } from 'axios';
import envConfig from 'src/config';
import { axiosRequest } from '..';
import { SummonerDto } from './interface';

const RIOT_API_URL_KR = 'https://kr.api.riotgames.com';
const RIOT_API_URL_ASIA = 'https://asia.api.riotgames.com';
const GET_summoner_by_name = (name: string): Promise<AxiosResponse<SummonerDto>> => {
  return axiosRequest(
    'GET',
    `${RIOT_API_URL_KR}/lol/summoner/v4/summoners/by-name/${name}?api_key=${envConfig.riotKey}`
  );
};

const GET_match_by_puuid = (puuid: string): Promise<AxiosResponse<SummonerDto>> => {
  return axiosRequest(
    'GET',
    `${RIOT_API_URL_ASIA}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${envConfig.riotKey}`
  );
};

export const RiotApi = {
  GET_summoner_by_name,
  GET_match_by_puuid,
};
// function Asia(target: any, key: string, desc: PropertyDescriptor): void {
//   console.log(target);
//   console.log(key);
//   console.log(desc);

//   const method = desc.value; // 기존의 method

//   // 기존의 method가 error를 던졋을 때 error handling 할 수 있도록 재정의
//   desc.value = function () {
//     try {
//       method(RIOT_API_URL_ASIA);
//     } catch (err) {
//       console.log('여기에 error handling logic 추가');
//     }
//   };
// }

// export class RiotApiModule {
//   @Asia
//   aaa(name: string) {
//     const url = `/lol/summoner/v4/summoners/by-name/${name}`;
//   }
// }
