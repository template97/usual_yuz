interface Config {
  riotKey: string;
}

const envConfig: Config = {
  riotKey: process.env.REACT_APP_RIOT_API_KEY || '',
};

export default envConfig;
