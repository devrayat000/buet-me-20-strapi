module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "dd1658625ad6388d66b11eb13dcd9824"),
  },
  port: env.int("PORT", 1337),
});
