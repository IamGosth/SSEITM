const sql = require("mssql");

const config = {
  user: "ficachi",
  password: "Barricade3.",
  server: "azureuser10.database.windows.net",
  database: "SSEITM",
  options: {
    encrypt: true, // Asegura una conexión segura a Azure
  },
};

async function connectAndQuery() {
  try {
    await sql.connect(config);
    const result = await sql.query("SELECT * FROM JEFES_CARRERA");
    console.log(result.recordset);
  } catch (err) {
    console.error(err);
  } finally {
    sql.close();
  }
}

connectAndQuery();
