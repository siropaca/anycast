import "dotenv/config";

export const hello = (name: string): void => {
  console.log("hello");
  console.log(process.env.API_KEY);
};

hello("aaa");
