import "dotenv/config"

export const PORT = process.env.PORT || 3001;
export const DB_URI = process.env.DB_URI || console.log("please insert a DB URI");