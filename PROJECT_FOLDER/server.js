require("dotenv").config();
const app = require("./app");
const { sequelize, testConnection } = require("./app/config/db_test");

const PORT = 3001;

(async () => {
    try {
        /**
         * Test the database connection before syncing models
         */
        await testConnection();

        // await sequelize.sync();

        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();