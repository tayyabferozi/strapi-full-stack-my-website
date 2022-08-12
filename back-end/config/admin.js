module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b3b1f7d7d67455f4d35feb272c2f0883'),
  },
});
