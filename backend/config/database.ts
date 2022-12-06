const config = {
    development: {
        username: 'postgres',
        password: 'postgres123',
        database: 'book-shelf',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    test: {
        username: 'root',
        password: undefined,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    production: {
        username: 'root',
        password: undefined,
        database: 'database_production',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
};

export default config;
