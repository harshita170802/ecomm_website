import Layout from '@/components/layout/Layout';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store,{useStore} from '../store/store';
import { DataProvider } from "../context/authContext";
import CartContext from '@/store/CartContext';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return(
    <>
    <DataProvider>
    <CartContext>
    <Provider store={store}>
    <Layout>  
      <Component {...pageProps} />
      <Toaster position='top-center' />
    </Layout>
    </Provider>
    </CartContext>
    </DataProvider>
    
    </>
  )
}
