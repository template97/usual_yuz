import { AxiosResponse, CancelToken } from 'axios';
import envConfig from 'src/config';
import { addQueryParam, AxiosMethod, axiosRequest } from '..';
import { MatchQuery, SummonerDto } from './interface';

const RIOT_API_URL_KR = 'https://kr.api.riotgames.com';
const RIOT_API_URL_ASIA = 'https://asia.api.riotgames.com';

const GET_summoner_by_name = (name: string, cancelToken?: CancelToken): Promise<AxiosResponse<SummonerDto>> => {
  const url = `/lol/summoner/v4/summoners/by-name/${name}`;
  return riotApiRequest('GET', 'kr', url, cancelToken);
};

const GET_match_by_puuid = (
  puuid: string,
  queryParam: MatchQuery,
  cancelToken?: CancelToken
): Promise<AxiosResponse<string[]>> => {
  const url = addQueryParam(`/lol/match/v5/matches/by-puuid/${puuid}/ids`, queryParam);
  return riotApiRequest('GET', 'asia', url, null, cancelToken);
};

const riotApiRequest = (
  method: AxiosMethod,
  region: 'asia' | 'kr',
  url: string,
  data?: any,
  cancelToken?: CancelToken
) => {
  const fullUrl = addQueryParam(`${region === 'asia' ? RIOT_API_URL_ASIA : RIOT_API_URL_KR}${url}`, {
    api_key: envConfig.riotKey,
  });

  return axiosRequest(method, fullUrl, data, cancelToken);
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
