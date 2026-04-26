/**
 * PM2 ecosystem file (CommonJS)
 * Usage:
 *  pm2 start ecosystem.config.cjs --env production
 *  pm2 restart ecosystem.config.cjs --env production
 */

module.exports = {
  apps: [
    {
      name: 'practice-app',
      script: './dist/index.js',
      // Use cluster mode to take advantage of multi-core systems
      exec_mode: 'cluster',
      instances: 'max',
      watch: false,
      autorestart: true,
      restart_delay: 5000,
      max_restarts: 10,
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000,
      },
      // Log files (PM2 will create the directory if it doesn't exist)
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      combine_logs: true,
    },
  ],
};
