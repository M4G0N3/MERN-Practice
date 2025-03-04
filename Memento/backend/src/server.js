import { expressApp } from "./app.js";
import connectDB from "./database/data.js";



connectDB()
   .then(() => {
      expressApp.listen(process.env.PORT, () => {
         console.log(`Server running on port ${process.env.PORT}`);
      })
   })
   .catch((error) => console.log("MDB Failed", error));
