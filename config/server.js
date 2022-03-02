
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

/**
 * postgres://pviufhqkkwenhw:ac95399e65a7e88ed724d6d37b18931ce757fb5a0b0688f5210b4ce92321b250@ec2-54-83-21-198.compute-1.amazonaws.com:5432/ddpgo0l3u7u1i2
 */
