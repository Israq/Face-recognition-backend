const setupTables = (db) => (req, res) => {
    const createLogin = `
        CREATE TABLE IF NOT EXISTS login (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            hash VARCHAR(255) NOT NULL
        );
    `;
    const createUsers = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            joined TIMESTAMP DEFAULT NOW()
        );
    `;

    db.raw(createLogin)
        .then(() => db.raw(createUsers))
        .then(() => res.json("Tables created"))
        .catch(err => {
            console.log("Setup error:", err);
            res.status(400).json("Setup failed: " + err.message);
        });
};

module.exports = { setupTables };
