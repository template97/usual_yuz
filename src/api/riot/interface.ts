export interface SummonerDto {
  accountId: string; //	Encrypted account ID. Max length 56 characters.
  profileIconId: number; // ID of the summoner icon associated with the summoner.
  revisionDate: number; // Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: summoner name change, summoner level change, or profile icon change.
  name: string; // Summoner name.
  id: string; // Encrypted summoner ID. Max length 63 characters.
  puuid: string; //	Encrypted PUUID. Exact length of 78 characters.
  summonerLevel: number; // Summoner level associated with the summoner.
}

export interface MatchQuery {
  startTime?: number; //Epoch timestamp in seconds. The matchlist started storing timestamps on June 16th, 2021. Any matches played before June 16th, 2021 won't be included in the results if the startTime filter is set.
  endTime?: number; // Epoch timestamp in seconds.
  queue?: number; //Filter the list of match ids by a specific queue id. This filter is mutually inclusive of the type filter meaning any match ids returned must match both the queue and type filters.
  type?: string; // Filter the list of match ids by the type of match. This filter is mutually inclusive of the queue filter meaning any match ids returned must match both the queue and type filters.
  start?: number; // int	Defaults to 0. Start index.
  count?: number; //Defaults to 20. Valid values: 0 to 100. Number of match ids to return.
}
