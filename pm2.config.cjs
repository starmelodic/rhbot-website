module.exports = {
  apps: [{
    name: 'rhbot-web',
    script: '.output/server/index.mjs',
    args: '--port 8080 --host 0.0.0.0',
    env: {
      NODE_ENV: 'production',
      PORT: 8080,
      HOST: '0.0.0.0'
    },
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '1G',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}