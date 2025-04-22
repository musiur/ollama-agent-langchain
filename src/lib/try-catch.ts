/**
 * type T is for Type of Data which gonna be dynamic and passed when the tryCatch gonna be invocked
 * type F is for type of Error whcih gonna be thrown by system when the tryCatch gonna be invocked
 */

type Success<T> = {
    data: T;
    error: null;
  };
  
  type Failer<F> = {
    data: null;
    error: F;
  };
  
  type Result<T, F = Error> = Success<T> | Failer<F>;
  
  /**
   * @param promise
   * @returns { data: T | null, error: F | null}
   */
  export const tryCatch = async <T, F = Error>(promise: Promise<T>): Promise<Result<T, F>> => {
    try {
      const data = await promise;
      return { data, error: null };
    } catch (error) {
      return {
        data: null,
        error: error as F,
      };
    }
  };
  