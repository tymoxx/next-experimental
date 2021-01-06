/* Core */
import { useDispatch } from 'react-redux';

/* Components */
import { Layout, Nav } from '@/components';
import { PostList, Submit } from '@/features/apollo';
import { Clock, Counter } from '@/features/redux';

/* Instruments */
import { useInterval } from '@/hooks';

const ApolloReduxPage = () => {
    // Tick the time every second
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
            <Nav />

            <Clock />
            <Counter />

            <Submit />
            <PostList />
        </Layout>
    );
};

export default ApolloReduxPage;
