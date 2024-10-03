type ConfigT = {
  NODE_ENV: string;
  APP_STAGE: string;
  DB_URL: string;
  SERVER_PORT: string;
  HUGGINGFACE_API_KEY: string;
};

const baseConfig = {
  NODE_ENV: process.env.NODE_ENV!,
  APP_STAGE: process.env.APP_STAGE!,

  DB_URL: process.env.DB_URL!,

  SERVER_PORT: process.env.SERVER_PORT!,

  HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY!,
};



const getConfig = (): ConfigT => {
  if (process.env.APP_STAGE === "local") {
    return { ...baseConfig };
  } else {
    throw new Error("Unknown APP_STAGE: ${process.env.APP_STAGE}");
  }
};

const config = getConfig();
export default config;
