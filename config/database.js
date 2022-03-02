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
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
    },
  };
};
/**
 * postgres://pviufhqkkwenhw:ac95399e65a7e88ed724d6d37b18931ce757fb5a0b0688f5210b4ce92321b250
 * @ec2-54-83-21-198.compute-1.amazonaws.com:5432/ddpgo0l3u7u1i2
 */
