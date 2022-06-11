import { AxiosResponse, CancelToken } from 'axios';
import envConfig from 'src/config';
import { addQueryParam, AxiosMethod, axiosRequest } from '..';
import { MatchDto, MatchQuery, SummonerDto } from './interface';

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

const GET_match_by_matchId = (matchId: string, cancelToken?: CancelToken): Promise<AxiosResponse<MatchDto>> => {
  const url = `/lol/match/v5/matches/${matchId}`;
  return riotApiRequest('GET', 'asia', url, null, cancelToken);
};

const GET_champion_info = (cancelToken?: CancelToken): Promise<AxiosResponse<any>> => {
  return axiosRequest(
    'GET',
    'http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json',
    null,
    cancelToken
  );
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
  GET_match_by_matchId,
  GET_champio_info: GET_champion_info,
};
