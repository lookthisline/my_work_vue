export default {
  axiosEnv: {
    development: { baseURL: 'https://localhost.php', timeout: 3000, withCredentials: true },
    debug: { baseURL: 'https://localhost.php', timeout: 3000, withCredentials: true },
    production: { baseURL: 'https://localhost.php', timeout: 3000, withCredentials: true },
    default: { baseURL: 'https://localhost.php', timeout: 3000, withCredentials: true }
  }
}
