import { Billboard } from '@/types';
import axios, { AxiosResponse } from 'axios';

const URL = `${process.env.NEXT_PUBLIC_API}/billboard`;

const getBillboard = async (): Promise<Billboard[]> => {
  try {
    const res: AxiosResponse<{ allbillboards: Billboard[] }> = await axios.get(URL);
    if (res.data && res.data.allbillboards) {
      console.log(res.data);
      return res.data.allbillboards;
    }
    return [];
  } catch (error) {
    console.error('ERROR FETCHING BILLBOARD DATA', error);
    throw error;
  }
};

export default getBillboard;

export async function getServerSideProps() {
  const data = await getBillboard();

  return {
    props: {
      data,
    },
  };
}
