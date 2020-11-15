interface AxiosEnv {
  axiosEnv: {
    [k: string]: {
      baseURL: string;
      timeout: number;
      withCredentials: boolean;
    };
  };
}

export default {
  /**
   * 获取 axios 配置
   * @param {AxiosEnv} state
   * @return {Object} data
   */
  getAxiosEnv: <T extends AxiosEnv>(state: T): object => {
    return (type: string) => {
      const data = type in state.axiosEnv ? state.axiosEnv[type] : state.axiosEnv.default
      if (!data) {
        return {
          baseURL: 'https://localhost:80',
          timeout: 3000,
          withCredentials: true
        }
      }
      return data
    }
  }
}
