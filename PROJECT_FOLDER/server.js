require("dotenv").config();
const app = require("./app");
const { sequelize, testConnection } = require("./app/config/database");

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await sequelize.authenticate();

        /**
         * Test the database connection before syncing models
         */
        // await testConnection();

        await sequelize.sync();

        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();