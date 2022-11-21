import db from '.';
import Address from './address';
import User from './user';

async function dbConnect() {
    console.log('Checking database connection...');
    try {
        await db?.sequelize?.authenticate();
        await User.sync({ alter: { drop: false } });
        await Address.sync({ alter: { drop: false } });
        console.log('Database connection OK!');
        // serverLevelLogger.info("Database connection OK!");
    } catch (error) {
        console.log('Unable to connect to the database:', error);
        // serverLevelLogger.error(error.message);
        process.exit(1);
    }
}

export default dbConnect;
