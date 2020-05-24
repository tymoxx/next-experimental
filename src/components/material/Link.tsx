/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
    // @ts-ignore
    const { as, href, ...other } = props;

    return (
        <NextLink href={href} as={as}>
            {/*
            // @ts-ignore */}
            <a ref={ref} {...other} />
        </NextLink>
    );
});

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props) {
    const {
        href,
        activeClassName = 'active',
        className: classNameProps,
        innerRef,
        naked,
        ...other
    } = props;

    const router = useRouter();
    const pathname = typeof href === 'string' ? href : href.pathname;
    const className = clsx(classNameProps, {
        [activeClassName]: router.pathname === pathname && activeClassName,
    });

    if (naked) {
        return (
            <NextComposed
                className={className}
                ref={innerRef}
                href={href}
                {...other}
            />
        );
    }

    return (
        <MuiLink
            component={NextComposed}
            className={className}
            ref={innerRef}
            href={href}
            {...other}
        />
    );
}

export default React.forwardRef((props, ref) => (
    <Link {...props} innerRef={ref} />
));