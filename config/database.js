module.exports = ({ env }) => {
  const dburlRegex =
    /postgres:\/\/(?<username>\w+):(?<password>\w+)@(?<host>[a-zA-z0-9\-\._]+):(?<port>\d+)\/(?<database>\w+)/;
  const dburl = env(
    "DATABASE_URL",
    "postgres://postgres:ppooii12@localhost:5432/strapi_buet_me"
  );

  const {
    groups: { username, password, host, port, database },
  } = dburlRegex.exec(dburl);

  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", host),
        port: env.int("DATABASE_PORT", parseInt(port)),
        database: env("DATABASE_NAME", database),
        user: env("DATABASE_USERNAME", username),
        password: env("DATABASE_PASSWORD", password),
        ssl:
          env("NODE_ENV") === "production"
            ? {
                rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
              }
            : false,
      },
      debug: env("NODE_ENV") !== "production",
    },
  };
};
