/* Core */
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';

/* Components */
import { Layout, Nav } from '@/components';
import { Clock, Counter } from '@/features/redux';

/* Instruments */
import { useInterval } from '@/hooks';

const ReduxPage: NextPage = () => {
    const dispatch = useDispatch();

    useInterval(() => {
        dispatch({
            type:       'TICK',
            light:      true,
            lastUpdate: Date.now(),
        });
    }, 1000);

    return (
        <Layout>
            <Nav title = 'Redux' />
            <Clock />
            <Counter />
        </Layout>
    );
};

export default ReduxPage;
