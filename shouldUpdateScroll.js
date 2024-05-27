export function shouldUpdateScroll({ prevRouterProps, routerProps }) {
    return prevRouterProps?.location?.pathname !== routerProps.location.pathname;
  }
  