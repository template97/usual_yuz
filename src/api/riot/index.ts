import { AxiosResponse } from 'axios';
import envConfig from 'src/config';
import { axiosRequest } from '..';
import { SummonerDto } from './interface';

const RIOT_API_URL = 'https://kr.api.riotgames.com';

export const GET_summoner_by_name = (name: string): Promise<AxiosResponse<SummonerDto>> => {
  return axiosRequest('GET', `${RIOT_API_URL}/lol/summoner/v4/summoners/by-name/${name}?api_key=${envConfig.riotKey}`);
};
